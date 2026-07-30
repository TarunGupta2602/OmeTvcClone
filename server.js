const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { Server } = require('socket.io');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || '0.0.0.0';
const port = parseInt(process.env.PORT, 10) || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  // State management for matchmaking
  let waitingQueue = [];
  const socketToRoom = new Map(); // socket.id -> roomId
  const roomPeers = new Map();    // roomId -> [socketId1, socketId2]

  const removeFromQueue = (socketId) => {
    waitingQueue = waitingQueue.filter((id) => id !== socketId);
  };

  const leaveActiveRoom = (socket) => {
    const roomId = socketToRoom.get(socket.id);
    if (!roomId) return null;

    const peers = roomPeers.get(roomId) || [];
    const otherPeerId = peers.find((id) => id !== socket.id);

    // Remove socket mapping
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
    // Ensure user is clean from queue and existing room
    removeFromQueue(socket.id);
    leaveActiveRoom(socket);

    // Find valid waiting peer
    while (waitingQueue.length > 0) {
      const peerId = waitingQueue.shift();
      const peerSocket = io.sockets.sockets.get(peerId);

      // Check if peer is still connected and not the current socket
      if (peerSocket && peerSocket.connected && peerId !== socket.id) {
        const roomId = `room_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;

        // Store mappings
        socketToRoom.set(socket.id, roomId);
        socketToRoom.set(peerId, roomId);
        roomPeers.set(roomId, [socket.id, peerId]);

        // Join socket.io room channel
        socket.join(roomId);
        peerSocket.join(roomId);

        console.log(`[Matchmaker] Matched ${socket.id} with ${peerId} in room ${roomId}`);

        // Notify initiator (the user who just triggered the match)
        socket.emit('match-found', {
          roomId,
          peerId,
          isInitiator: true,
        });

        // Notify receiver (the peer who was waiting)
        peerSocket.emit('match-found', {
          roomId,
          peerId: socket.id,
          isInitiator: false,
        });

        return;
      }
    }

    // No waiting peer found, add socket to queue
    waitingQueue.push(socket.id);
    socket.emit('waiting', { message: 'Searching for a random peer...' });
    console.log(`[Matchmaker] Socket ${socket.id} added to waiting queue (Queue length: ${waitingQueue.length})`);
  };

  io.on('connection', (socket) => {
    console.log(`[Socket] Connected: ${socket.id}`);

    // Request to start random matching
    socket.on('find-match', () => {
      matchUser(socket);
    });

    // Leave queue manually
    socket.on('leave-queue', () => {
      removeFromQueue(socket.id);
      socket.emit('queue-left');
      console.log(`[Matchmaker] Socket ${socket.id} left queue`);
    });

    // WebRTC Signaling: Offer
    socket.on('signal-offer', ({ offer, to, roomId }) => {
      console.log(`[Signaling] Offer from ${socket.id} to ${to}`);
      io.to(to).emit('signal-offer', {
        offer,
        from: socket.id,
        roomId,
      });
    });

    // WebRTC Signaling: Answer
    socket.on('signal-answer', ({ answer, to, roomId }) => {
      console.log(`[Signaling] Answer from ${socket.id} to ${to}`);
      io.to(to).emit('signal-answer', {
        answer,
        from: socket.id,
        roomId,
      });
    });

    // WebRTC Signaling: ICE Candidate
    socket.on('signal-ice-candidate', ({ candidate, to, roomId }) => {
      console.log(`[Signaling] ICE Candidate from ${socket.id} to ${to}`);
      io.to(to).emit('signal-ice-candidate', {
        candidate,
        from: socket.id,
        roomId,
      });
    });

    // Text messaging in room
    socket.on('send-message', ({ message, to, roomId }) => {
      if (to) {
        io.to(to).emit('receive-message', {
          message,
          from: socket.id,
          timestamp: new Date().toISOString(),
        });
      }
    });

    // Skip current peer and match next
    socket.on('skip-peer', () => {
      console.log(`[Matchmaker] Socket ${socket.id} requested skip`);
      matchUser(socket);
    });

    // Stop searching / leave room completely
    socket.on('stop-session', () => {
      removeFromQueue(socket.id);
      leaveActiveRoom(socket);
      socket.emit('session-stopped');
      console.log(`[Matchmaker] Socket ${socket.id} stopped session`);
    });

    // Disconnect handler
    socket.on('disconnect', () => {
      console.log(`[Socket] Disconnected: ${socket.id}`);
      removeFromQueue(socket.id);
      leaveActiveRoom(socket);
    });
  });

  server.listen(port, hostname, (err) => {
    if (err) throw err;
    console.log(`> Custom Next.js + Socket.io server ready on http://${hostname}:${port}`);
  });
});
