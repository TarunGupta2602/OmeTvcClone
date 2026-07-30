'use client';

import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const ICE_SERVERS = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun.cloudflare.com:3478' },
  ],
};

export default function OmeTVChatPage() {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [status, setStatus] = useState('Idle');
  const [peerId, setPeerId] = useState(null);
  const [roomId, setRoomId] = useState(null);

  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);

  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const localStreamRef = useRef(null);
  const peerConnectionRef = useRef(null);
  const currentPeerIdRef = useRef(null);
  const currentRoomIdRef = useRef(null);

  // Initialize camera & microphone
  useEffect(() => {
    async function setupMedia() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        localStreamRef.current = stream;
        console.log(
          '[Media] Local stream obtained successfully:',
          stream.id,
          stream.getTracks().map((t) => `${t.kind} (${t.readyState})`)
        );
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('[Media] Error accessing media devices:', err);
        setStatus('Camera / Microphone permission denied');
      }
    }

    setupMedia();

    return () => {
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // Socket connection & signaling handlers
  useEffect(() => {
    const socketIo = io();

    socketIo.on('connect', () => {
      console.log('Connected to signaling server:', socketIo.id);
      setIsConnected(true);
      setSocket(socketIo);
    });

    socketIo.on('disconnect', () => {
      console.log('Disconnected from signaling server');
      setIsConnected(false);
      setStatus('Disconnected from server');
      cleanupPeerConnection();
    });

    socketIo.on('waiting', ({ message }) => {
      setStatus(message || 'Searching for a random peer...');
      cleanupPeerConnection();
    });

    socketIo.on('match-found', async ({ roomId, peerId, isInitiator }) => {
      console.log(`Matched! Room: ${roomId}, Peer: ${peerId}, Initiator: ${isInitiator}`);
      setStatus(`Connected to Peer (${peerId.substring(0, 6)})`);
      setPeerId(peerId);
      setRoomId(roomId);
      currentPeerIdRef.current = peerId;
      currentRoomIdRef.current = roomId;
      setMessages([]);

      const pc = createPeerConnection(socketIo, peerId, roomId);
      peerConnectionRef.current = pc;

      if (isInitiator) {
        try {
          const offer = await pc.createOffer();
          await pc.setLocalDescription(offer);
          socketIo.emit('signal-offer', { offer, to: peerId, roomId });
        } catch (err) {
          console.error('Error creating offer:', err);
        }
      }
    });

    socketIo.on('signal-offer', async ({ offer, from, roomId }) => {
      console.log('Received offer from:', from);
      let pc = peerConnectionRef.current;
      if (!pc) {
        pc = createPeerConnection(socketIo, from, roomId);
        peerConnectionRef.current = pc;
      }

      try {
        await pc.setRemoteDescription(new RTCSessionDescription(offer));
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        socketIo.emit('signal-answer', { answer, to: from, roomId });
      } catch (err) {
        console.error('Error handling offer:', err);
      }
    });

    socketIo.on('signal-answer', async ({ answer }) => {
      console.log('Received answer');
      const pc = peerConnectionRef.current;
      if (pc) {
        try {
          await pc.setRemoteDescription(new RTCSessionDescription(answer));
        } catch (err) {
          console.error('Error handling answer:', err);
        }
      }
    });

    socketIo.on('signal-ice-candidate', async ({ candidate }) => {
      const pc = peerConnectionRef.current;
      if (pc) {
        try {
          await pc.addIceCandidate(new RTCIceCandidate(candidate));
        } catch (err) {
          console.error('Error adding ICE candidate:', err);
        }
      }
    });

    socketIo.on('receive-message', ({ message, timestamp }) => {
      setMessages((prev) => [...prev, { sender: 'Peer', text: message, timestamp }]);
    });

    socketIo.on('peer-left', () => {
      setStatus('Peer left or skipped. Click "Next" to search again.');
      cleanupPeerConnection();
    });

    socketIo.on('queue-left', () => {
      setStatus('Left search queue.');
      cleanupPeerConnection();
    });

    socketIo.on('session-stopped', () => {
      setStatus('Session stopped.');
      cleanupPeerConnection();
    });

    return () => {
      cleanupPeerConnection();
      socketIo.disconnect();
    };
  }, []);

  const createPeerConnection = (socketInstance, targetPeerId, targetRoomId) => {
    cleanupPeerConnection();

    console.log(`[WebRTC] Creating RTCPeerConnection for target peer ${targetPeerId} in room ${targetRoomId}`);
    const pc = new RTCPeerConnection(ICE_SERVERS);

    // Add local tracks to WebRTC connection
    if (localStreamRef.current) {
      console.log(
        '[WebRTC] Adding local tracks to peer connection:',
        localStreamRef.current.getTracks().map((t) => t.kind)
      );
      localStreamRef.current.getTracks().forEach((track) => {
        pc.addTrack(track, localStreamRef.current);
      });
    } else {
      console.warn('[WebRTC] Warning: localStreamRef.current is null when creating peer connection');
    }

    // Connection state logging
    pc.onconnectionstatechange = () => {
      console.log(`[WebRTC] RTCPeerConnection connectionState: ${pc.connectionState}`);
    };

    pc.oniceconnectionstatechange = () => {
      console.log(`[WebRTC] RTCPeerConnection iceConnectionState: ${pc.iceConnectionState}`);
    };

    // Attach remote stream
    pc.ontrack = (event) => {
      console.log(
        `[WebRTC] Remote ontrack event fired! Track kind: ${event.track.kind}, id: ${event.track.id}, Streams count: ${event.streams.length}`
      );
      if (remoteVideoRef.current && event.streams[0]) {
        console.log(`[WebRTC] Binding remote stream ${event.streams[0].id} to remoteVideoRef`);
        remoteVideoRef.current.srcObject = event.streams[0];
      } else {
        console.warn('[WebRTC] Warning: remoteVideoRef or event.streams[0] missing on track event');
      }
    };

    // Send ICE candidates to signaling server
    pc.onicecandidate = (event) => {
      if (event.candidate) {
        console.log('[WebRTC] Local ICE candidate generated:', event.candidate.candidate.substring(0, 50));
        socketInstance.emit('signal-ice-candidate', {
          candidate: event.candidate,
          to: targetPeerId,
          roomId: targetRoomId,
        });
      }
    };

    return pc;
  };

  const cleanupPeerConnection = () => {
    if (peerConnectionRef.current) {
      peerConnectionRef.current.ontrack = null;
      peerConnectionRef.current.onicecandidate = null;
      peerConnectionRef.current.close();
      peerConnectionRef.current = null;
    }
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = null;
    }
    setPeerId(null);
    setRoomId(null);
    currentPeerIdRef.current = null;
    currentRoomIdRef.current = null;
  };

  const handleStartMatch = () => {
    if (!socket || !isConnected) return;
    setStatus('Searching for a random peer...');
    socket.emit('find-match');
  };

  const handleSkipPeer = () => {
    if (!socket || !isConnected) return;
    cleanupPeerConnection();
    setStatus('Searching for next peer...');
    socket.emit('skip-peer');
  };

  const handleStopSession = () => {
    if (!socket || !isConnected) return;
    cleanupPeerConnection();
    socket.emit('stop-session');
  };

  const toggleAudio = () => {
    if (localStreamRef.current) {
      const audioTrack = localStreamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setIsAudioMuted(!audioTrack.enabled);
      }
    }
  };

  const toggleVideo = () => {
    if (localStreamRef.current) {
      const videoTrack = localStreamRef.current.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setIsVideoMuted(!videoTrack.enabled);
      }
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || !socket || !currentPeerIdRef.current) return;

    socket.emit('send-message', {
      message: inputMessage,
      to: currentPeerIdRef.current,
      roomId: currentRoomIdRef.current,
    });

    setMessages((prev) => [
      ...prev,
      { sender: 'You', text: inputMessage, timestamp: new Date().toISOString() },
    ]);
    setInputMessage('');
  };

  return (
    <main className="flex-1 bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Homepage Introduction & H1 Header Section */}
      <section className="border-b border-slate-800/80 bg-gradient-to-b from-indigo-950/30 via-slate-900/60 to-slate-950 px-4 sm:px-6 py-6">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">
                ⚡ Instant Live Matchmaking
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-300 to-rose-400 bg-clip-text text-transparent">
                Parvah — Free Random Video Chat Platform
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed">
                Parvah is a free random video chat platform connecting thousands of people worldwide in instant 1-on-1 live WebRTC video and text conversations. Meet strangers, practice languages, make new friends globally, and socialize safely with zero sign-up or registration required.
              </p>
            </div>

            {/* Server Connection Status Badge */}
            <div className="flex items-center gap-2 text-xs bg-slate-900/90 border border-slate-800 px-3.5 py-2 rounded-xl self-start md:self-auto">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  isConnected ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'
                }`}
              />
              <span className="text-slate-300 font-medium">
                {isConnected ? 'Signaling Server Connected' : 'Connecting to Server...'}
              </span>
            </div>
          </div>

          {/* Quick Feature Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-400">
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">🔒 P2P WebRTC Privacy</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">🛡️ 24/7 Moderated Safety</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">🌐 Global Matchmaking</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">✨ 100% Free Chat</span>
          </div>
        </div>
      </section>

      {/* Main Chat Workspace Grid Section */}
      <section className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Area (2 cols on large screen) */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {/* Status Badge */}
          <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800 px-4 py-3 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-300">Status:</span>
              <span className="text-sm font-medium text-indigo-400">{status}</span>
            </div>
            {peerId && (
              <span className="text-xs font-mono bg-indigo-950 text-indigo-300 border border-indigo-800/50 px-2.5 py-1 rounded-md">
                Peer ID: {peerId.substring(0, 8)}...
              </span>
            )}
          </div>

          {/* Video Windows Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-[360px]">
            {/* Local Video Window */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center shadow-xl group">
              <video
                ref={localVideoRef}
                autoPlay
                playsInline
                muted
                className={`w-full h-full object-cover transform -scale-x-100 ${
                  isVideoMuted ? 'hidden' : 'block'
                }`}
              />
              {isVideoMuted && (
                <div className="flex flex-col items-center gap-2 text-slate-500">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">Camera Off</span>
                </div>
              )}
              <div className="absolute bottom-3 left-3 bg-slate-950/70 backdrop-blur text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-800 text-slate-200">
                You {isAudioMuted ? '(Muted)' : ''}
              </div>
            </div>

            {/* Remote Video Window */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center shadow-xl">
              <video
                ref={remoteVideoRef}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
              {!peerId && (
                <div className="flex flex-col items-center gap-3 text-slate-500 p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-slate-800/80 flex items-center justify-center">
                    <svg className="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-slate-400">
                    {status.includes('Searching')
                      ? 'Looking for a random stranger...'
                      : 'Click "Start Match" to begin'}
                  </p>
                </div>
              )}
              {peerId && (
                <div className="absolute bottom-3 left-3 bg-slate-950/70 backdrop-blur text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-800 text-slate-200">
                  Stranger
                </div>
              )}
            </div>
          </div>

          {/* Action Control Panel */}
          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {!peerId && !status.includes('Searching') ? (
                <button
                  onClick={handleStartMatch}
                  disabled={!isConnected}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg transition active:scale-95 disabled:opacity-50"
                >
                  Start Match
                </button>
              ) : (
                <>
                  <button
                    onClick={handleSkipPeer}
                    className="px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold rounded-xl shadow-lg transition active:scale-95 flex items-center gap-2"
                  >
                    <span>Next Peer (Skip)</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleStopSession}
                    className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-xl transition active:scale-95"
                  >
                    Stop
                  </button>
                </>
              )}
            </div>

            {/* Media Toggles */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleAudio}
                className={`p-3 rounded-xl border transition ${
                  isAudioMuted
                    ? 'bg-rose-950/60 border-rose-800 text-rose-300'
                    : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                }`}
                title={isAudioMuted ? 'Unmute Audio' : 'Mute Audio'}
              >
                {isAudioMuted ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 01-3 3z" />
                  </svg>
                )}
              </button>

              <button
                onClick={toggleVideo}
                className={`p-3 rounded-xl border transition ${
                  isVideoMuted
                    ? 'bg-rose-950/60 border-rose-800 text-rose-300'
                    : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                }`}
                title={isVideoMuted ? 'Turn Camera On' : 'Turn Camera Off'}
              >
                {isVideoMuted ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Text Chat Panel */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl flex flex-col h-[520px] lg:h-auto overflow-hidden shadow-xl">
          <div className="p-4 border-b border-slate-800 bg-slate-900 flex items-center justify-between">
            <h2 className="font-semibold text-slate-200 text-sm">Text Chat</h2>
            <span className="text-xs text-slate-500">
              {peerId ? 'Connected to stranger' : 'Not in a chat'}
            </span>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center text-slate-600 text-xs italic">
                {peerId ? 'Say hi to your peer!' : 'Connect to a match to start chatting.'}
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    msg.sender === 'You' ? 'items-end' : 'items-start'
                  }`}
                >
                  <span className="text-[10px] text-slate-500 mb-1">{msg.sender}</span>
                  <div
                    className={`max-w-[80%] px-3.5 py-2 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'You'
                        ? 'bg-indigo-600 text-white rounded-br-none'
                        : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Chat Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-800 bg-slate-900 flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={peerId ? 'Type a message...' : 'Waiting for peer...'}
              disabled={!peerId}
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!peerId || !inputMessage.trim()}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-medium text-xs rounded-xl transition"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
