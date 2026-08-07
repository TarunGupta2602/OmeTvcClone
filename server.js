const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { Server } = require('socket.io');

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map((o) => o.trim())
  : dev
    ? ['http://localhost:3000', 'http://127.0.0.1:3000']
    : ['https://parvah.online'];

const app = next({ dev });
const handle = app.getRequestHandler();

const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_MATCH_REQUESTS = 30;
const MAX_MESSAGES = 60;
const MAX_SIGNALS = 120;
const MAX_MESSAGE_LENGTH = 2000;

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error handling request:', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  });

  const io = new Server(server, {
    cors: {
      origin: allowedOrigins,
      methods: ['GET', 'POST'],
    },
  });

  let waitingQueue = [];
  const socketToRoom = new Map();
  const roomPeers = new Map();
  const rateLimits = new Map();
  const blockedPairs = new Map();

  const checkRateLimit = (socketId, action, max) => {
    const now = Date.now();
    const key = `${socketId}:${action}`;
    const entry = rateLimits.get(key) || { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };
    if (now > entry.resetAt) {
      entry.count = 0;
      entry.resetAt = now + RATE_LIMIT_WINDOW_MS;
    }
    entry.count += 1;
    rateLimits.set(key, entry);
    return entry.count <= max;
  };

  const clearRateLimits = (socketId) => {
    for (const action of ['match', 'message', 'signal']) {
      rateLimits.delete(`${socketId}:${action}`);
    }
  };

  const peersShareRoom = (socketId, peerId, roomId) => {
    if (!socketId || !peerId || !roomId) return false;
    const myRoom = socketToRoom.get(socketId);
    if (!myRoom || myRoom !== roomId) return false;
    if (socketToRoom.get(peerId) !== roomId) return false;
    const peers = roomPeers.get(roomId) || [];
    return peers.includes(socketId) && peers.includes(peerId);
  };

  const removeFromQueue = (socketId) => {
    waitingQueue = waitingQueue.filter((id) => id !== socketId);
  };

  const leaveActiveRoom = (socket) => {
    const roomId = socketToRoom.get(socket.id);
    if (!roomId) return null;

    const peers = roomPeers.get(roomId) || [];
    const otherPeerId = peers.find((id) => id !== socket.id);

    socketToRoom.delete(socket.id);
    socket.leave(roomId);

    if (otherPeerId) {
      socketToRoom.delete(otherPeerId);
      const otherSocket = io.sockets.sockets.get(otherPeerId);
      if (otherSocket) {
        otherSocket.leave(roomId);
        otherSocket.emit('peer-left', { message: 'Your peer has disconnected or skipped.' });
      }
    }

    roomPeers.delete(roomId);
    return otherPeerId;
  };

  const matchUser = (socket) => {
    if (!checkRateLimit(socket.id, 'match', MAX_MATCH_REQUESTS)) {
      socket.emit('waiting', { message: 'Too many requests. Please wait a moment.' });
      return;
    }

    removeFromQueue(socket.id);
    leaveActiveRoom(socket);

    const blocked = blockedPairs.get(socket.id) || new Set();

    while (waitingQueue.length > 0) {
      const peerId = waitingQueue.shift();
      const peerSocket = io.sockets.sockets.get(peerId);

      if (peerSocket && peerSocket.connected && peerId !== socket.id && !blocked.has(peerId)) {
        const peerBlocked = blockedPairs.get(peerId) || new Set();
        if (peerBlocked.has(socket.id)) continue;

        const roomId = `room_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;

        socketToRoom.set(socket.id, roomId);
        socketToRoom.set(peerId, roomId);
        roomPeers.set(roomId, [socket.id, peerId]);

        socket.join(roomId);
        peerSocket.join(roomId);

        socket.emit('match-found', { roomId, peerId, isInitiator: true });
        peerSocket.emit('match-found', { roomId, peerId: socket.id, isInitiator: false });
        return;
      }
    }

    waitingQueue.push(socket.id);
    socket.emit('waiting', { message: 'Searching for a random peer...' });
  };

  io.on('connection', (socket) => {
    socket.on('find-match', () => matchUser(socket));

    socket.on('leave-queue', () => {
      removeFromQueue(socket.id);
      socket.emit('queue-left');
    });

    socket.on('signal-offer', ({ offer, to, roomId }) => {
      if (!checkRateLimit(socket.id, 'signal', MAX_SIGNALS)) return;
      if (!offer || !peersShareRoom(socket.id, to, roomId)) return;
      io.to(to).emit('signal-offer', { offer, from: socket.id, roomId });
    });

    socket.on('signal-answer', ({ answer, to, roomId }) => {
      if (!checkRateLimit(socket.id, 'signal', MAX_SIGNALS)) return;
      if (!answer || !peersShareRoom(socket.id, to, roomId)) return;
      io.to(to).emit('signal-answer', { answer, from: socket.id, roomId });
    });

    socket.on('signal-ice-candidate', ({ candidate, to, roomId }) => {
      if (!checkRateLimit(socket.id, 'signal', MAX_SIGNALS)) return;
      if (!candidate || !peersShareRoom(socket.id, to, roomId)) return;
      io.to(to).emit('signal-ice-candidate', { candidate, from: socket.id, roomId });
    });

    socket.on('send-message', ({ message, to, roomId }) => {
      if (!checkRateLimit(socket.id, 'message', MAX_MESSAGES)) return;
      if (typeof message !== 'string') return;
      const trimmed = message.trim().slice(0, MAX_MESSAGE_LENGTH);
      if (!trimmed || !peersShareRoom(socket.id, to, roomId)) return;
      io.to(to).emit('receive-message', {
        message: trimmed,
        from: socket.id,
        timestamp: new Date().toISOString(),
      });
    });

    socket.on('block-peer', ({ peerId }) => {
      if (!peerId || typeof peerId !== 'string') return;
      const myRoom = socketToRoom.get(socket.id);
      const peers = myRoom ? roomPeers.get(myRoom) || [] : [];
      if (!peers.includes(peerId)) return;
      const set = blockedPairs.get(socket.id) || new Set();
      set.add(peerId);
      blockedPairs.set(socket.id, set);
      io.to(peerId).emit('blocked-by-peer');
      leaveActiveRoom(socket);
    });

    socket.on('skip-peer', () => matchUser(socket));

    socket.on('stop-session', () => {
      removeFromQueue(socket.id);
      leaveActiveRoom(socket);
      socket.emit('session-stopped');
    });

    socket.on('disconnect', () => {
      removeFromQueue(socket.id);
      leaveActiveRoom(socket);
      clearRateLimits(socket.id);
      blockedPairs.delete(socket.id);
    });
  });

  server.listen(port, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log(`> Parvah server ready on http://0.0.0.0:${port}`);
  });
});
