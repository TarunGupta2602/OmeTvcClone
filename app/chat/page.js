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
  const [inRoom, setInRoom] = useState(false);
  const [status, setStatus] = useState('Idle');
  const [peerId, setPeerId] = useState(null);
  const [roomId, setRoomId] = useState(null);

  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);

  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const [isLocalVideoFullscreen, setIsLocalVideoFullscreen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [pipPosition, setPipPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const localStreamRef = useRef(null);
  const peerConnectionRef = useRef(null);
  const socketRef = useRef(null);
  const currentPeerIdRef = useRef(null);
  const currentRoomIdRef = useRef(null);
  const chatBottomRef = useRef(null);
  const videoContainerRef = useRef(null);
  const dragRef = useRef(null);

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
    socketRef.current = socketIo;

    socketIo.on('connect', () => {
      console.log('🟢 [Socket: connect] Connected to signaling server:', socketIo.id);
      setIsConnected(true);
      setSocket(socketIo);
    });

    socketIo.on('disconnect', () => {
      console.log('🔴 [Socket: disconnect] Disconnected from signaling server');
      setIsConnected(false);
      setStatus('Disconnected from server');
      cleanupPeerConnection();
    });

    socketIo.on('waiting', ({ message }) => {
      console.log('⏳ [Socket: waiting]', message);
      setStatus(message || 'Searching for a random peer...');
      cleanupPeerConnection();
    });

    socketIo.on('match-found', async ({ roomId, peerId, isInitiator }) => {
      console.log(`🟢 [Socket: match-found] Matched! Room: ${roomId}, Peer: ${peerId}, Initiator: ${isInitiator}`);
      
      cleanupWebRTC();

      setInRoom(true);
      setPeerId(peerId);
      setRoomId(roomId);
      currentPeerIdRef.current = peerId;
      currentRoomIdRef.current = roomId;
      setMessages([]);
      setStatus(`Connected to Peer (${peerId.substring(0, 6)})`);

      const pc = createPeerConnection(socketIo, peerId, roomId);
      peerConnectionRef.current = pc;

      if (isInitiator) {
        try {
          console.log('🚀 [WebRTC] Creating SDP offer as initiator...');
          const offer = await pc.createOffer();
          await pc.setLocalDescription(offer);
          socketIo.emit('signal-offer', { offer, to: peerId, roomId });
        } catch (err) {
          console.error('❌ [WebRTC] Error creating offer:', err);
        }
      }
    });

    socketIo.on('signal-offer', async ({ offer, from, roomId }) => {
      console.log('📡 [WebRTC: signal-offer] Received offer from peer:', from);
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
        console.error('❌ [WebRTC] Error handling offer:', err);
      }
    });

    socketIo.on('signal-answer', async ({ answer }) => {
      console.log('📡 [WebRTC: signal-answer] Received answer from peer');
      const pc = peerConnectionRef.current;
      if (pc) {
        try {
          await pc.setRemoteDescription(new RTCSessionDescription(answer));
        } catch (err) {
          console.error('❌ [WebRTC] Error handling answer:', err);
        }
      }
    });

    socketIo.on('signal-ice-candidate', async ({ candidate }) => {
      const pc = peerConnectionRef.current;
      if (pc) {
        try {
          await pc.addIceCandidate(new RTCIceCandidate(candidate));
        } catch (err) {
          console.error('❌ [WebRTC] Error adding ICE candidate:', err);
        }
      }
    });

    socketIo.on('receive-message', ({ message, timestamp, from }) => {
      console.log('📥 [Socket: receive-message] Incoming message from peer:', { message, timestamp, from });
      setMessages((prev) => [
        ...prev,
        { sender: 'Peer', text: message, timestamp: timestamp || new Date().toISOString() },
      ]);
    });

    socketIo.on('peer-left', () => {
      console.log('🔴 [Socket: peer-left] Peer disconnected or skipped');
      setStatus('Peer left or skipped. Click "Next" to search again.');
      cleanupPeerConnection();
    });

    socketIo.on('queue-left', () => {
      console.log('🔴 [Socket: queue-left] Left search queue');
      setStatus('Left search queue.');
      cleanupPeerConnection();
    });

    socketIo.on('session-stopped', () => {
      console.log('🔴 [Socket: session-stopped] Session stopped');
      setStatus('Session stopped.');
      cleanupPeerConnection();
    });

    return () => {
      cleanupPeerConnection();
      socketIo.disconnect();
    };
  }, []);

  const createPeerConnection = (socketInstance, targetPeerId, targetRoomId) => {
    const pc = new RTCPeerConnection(ICE_SERVERS);

    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((track) => {
        pc.addTrack(track, localStreamRef.current);
      });
    }

    pc.ontrack = (event) => {
      if (remoteVideoRef.current && event.streams[0]) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        socketInstance.emit('signal-ice-candidate', {
          candidate: event.candidate,
          to: targetPeerId,
          roomId: targetRoomId,
        });
      }
    };

    return pc;
  };

  const cleanupWebRTC = () => {
    if (peerConnectionRef.current) {
      peerConnectionRef.current.ontrack = null;
      peerConnectionRef.current.onicecandidate = null;
      peerConnectionRef.current.close();
      peerConnectionRef.current = null;
    }
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = null;
    }
  };

  const cleanupPeerConnection = () => {
    cleanupWebRTC();
    setInRoom(false);
    setPeerId(null);
    setRoomId(null);
    currentPeerIdRef.current = null;
    currentRoomIdRef.current = null;
  };

  const handleStartMatch = () => {
    const activeSocket = socketRef.current || socket;
    if (!activeSocket || !isConnected) return;
    setStatus('Searching for a random peer...');
    setShowHeader(false);
    if (videoContainerRef.current) {
      videoContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    activeSocket.emit('find-match');
  };

  const handleSkipPeer = () => {
    const activeSocket = socketRef.current || socket;
    if (!activeSocket || !isConnected) return;
    cleanupPeerConnection();
    setStatus('Searching for next peer...');
    activeSocket.emit('skip-peer');
  };

  const handleStopSession = () => {
    const activeSocket = socketRef.current || socket;
    if (!activeSocket || !isConnected) return;
    cleanupPeerConnection();
    setShowHeader(true);
    activeSocket.emit('stop-session');
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
    const activeSocket = socketRef.current || socket;
    const targetPeerId = currentPeerIdRef.current || peerId;
    const targetRoomId = currentRoomIdRef.current || roomId;

    if (!inputMessage.trim() || !activeSocket || !targetPeerId) return;

    activeSocket.emit('send-message', {
      message: inputMessage,
      to: targetPeerId,
      roomId: targetRoomId,
    });

    setMessages((prev) => [
      ...prev,
      { sender: 'You', text: inputMessage, timestamp: new Date().toISOString() },
    ]);
    setInputMessage('');
  };

  const handleDragStart = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setDragStart({ x: clientX, y: clientY });
    setIsDragging(true);
    dragRef.current = { startX: clientX - pipPosition.x, startY: clientY - pipPosition.y };
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const newX = clientX - dragRef.current.startX;
    const newY = clientY - dragRef.current.startY;
    
    // Constrain to screen bounds
    const maxX = window.innerWidth - 128;
    const maxY = window.innerHeight - 192;
    
    setPipPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY)),
    });
  };

  const handleDragEnd = (e) => {
    setIsDragging(false);
    const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
    
    // Check if it was a click (minimal movement)
    const movement = Math.sqrt(Math.pow(clientX - dragStart.x, 2) + Math.pow(clientY - dragStart.y, 2));
    if (movement < 5) {
      setIsLocalVideoFullscreen(!isLocalVideoFullscreen);
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDragMove);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchmove', handleDragMove);
      window.addEventListener('touchend', handleDragEnd);
    } else {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('touchend', handleDragEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging]);

  return (
    <main className="flex-1 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-rose-50/30 text-slate-900 flex flex-col font-sans relative overflow-hidden sm:overflow-y-auto h-screen">
      {/* Soft Ambient Background Mesh */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-indigo-300/20 via-purple-300/20 to-rose-300/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-teal-300/15 via-emerald-300/15 to-cyan-300/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner & Header */}
      <section className={`border-b border-slate-200/60 bg-white/90 backdrop-blur-xl px-3 sm:px-4 md:px-6 py-3 sm:py-4 shadow-lg shadow-slate-200/50 ${!showHeader ? 'hidden sm:block' : ''}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-sm shadow-indigo-500/10 ring-1 ring-indigo-500/20">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping"></span>
                WebRTC Video Chat
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium">• Free & Anonymous</span>
            </div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-slate-900 flex items-center gap-2">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
                Parvah
              </span>
              <span className="text-slate-400 hidden sm:inline">—</span>
              <span className="text-slate-800 text-sm sm:text-base">Free Random Video Chat Platform</span>
            </h1>
            <p className="text-[10px] sm:text-xs text-slate-600 max-w-3xl leading-relaxed hidden sm:block">
              Connect instantly with random strangers worldwide in 1-on-1 video and text chat with zero sign-up required.
            </p>
          </div>

          {/* Controls & Server Status */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl font-semibold shadow-sm">
              <span
                className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full ${
                  isConnected ? 'bg-emerald-500 shadow-sm shadow-emerald-500/30 animate-pulse' : 'bg-rose-500 shadow-sm shadow-rose-500/30'
                }`}
              />
              <span className="text-slate-700">
                {isConnected ? 'Connected' : 'Connecting...'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Workspace Area */}
      <section className="flex-1 max-w-7xl w-full mx-auto p-0 sm:p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-0 sm:gap-6 relative z-10 h-[calc(100vh-80px)] sm:h-auto">
        
        {/* Video Column (2 Cols on Large Screen) */}
        <div className="lg:col-span-2 flex flex-col gap-0 sm:gap-4 h-full">
          
          {/* Main Dual Video Viewports */}
          <div id="video-container" ref={videoContainerRef} className="relative flex-1 h-full sm:grid sm:grid-cols-2 gap-0 sm:gap-3 sm:gap-4 sm:min-h-[350px] md:min-h-[420px] lg:min-h-[480px]">
            
            {/* Remote Video Window - Full screen on mobile when local is not fullscreen */}
            <div className={`relative rounded-none sm:rounded-3xl overflow-hidden bg-slate-900 border-none sm:border border-white shadow-2xl shadow-slate-300/50 flex items-center justify-center group transition-all duration-300 ring-1 ring-slate-200/50 ${isLocalVideoFullscreen ? 'absolute bottom-20 right-4 z-10 w-32 h-48 rounded-xl' : 'absolute inset-0 z-0'} sm:relative sm:z-auto sm:order-2 sm:flex-1 sm:h-auto sm:w-auto sm:h-auto sm:rounded-none`}>
              <video
                ref={remoteVideoRef}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Remote Stranger Overlay Tag */}
              {peerId && (
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-indigo-500/50 px-3 py-1.5 rounded-xl text-xs font-bold text-indigo-300 flex items-center gap-2 shadow-lg ring-1 ring-indigo-500/20">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse shadow-sm shadow-indigo-400/50" />
                  <span>Stranger</span>
                  <span className="text-[10px] font-mono text-slate-400">({peerId.substring(0, 6)})</span>
                </div>
              )}

              {/* Idle / Searching State Overlay */}
              {!peerId && (
                <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center text-slate-400 p-6 text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600/30 via-purple-600/30 to-rose-600/30 border border-indigo-400/50 flex items-center justify-center animate-pulse shadow-lg shadow-indigo-500/20">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-rose-500 flex items-center justify-center text-white font-black shadow-xl text-lg">
                        P
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white">
                      {status.includes('Searching') ? 'Searching for a Match...' : 'Ready to Connect'}
                    </h3>
                    <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
                      {status.includes('Searching')
                        ? 'Matching with available online users worldwide...'
                        : 'Click "START MATCH" below to begin video chatting.'}
                    </p>
                  </div>

                  {status.includes('Searching') && (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-950 to-purple-950 border border-indigo-800 text-[11px] font-bold text-indigo-300 animate-pulse shadow-lg shadow-indigo-500/20">
                      <span>Live Radar Active...</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Local Video Window - Floating PIP on mobile */}
            <div 
              className={`relative sm:rounded-3xl overflow-hidden bg-slate-900 border border-white shadow-2xl shadow-slate-300/50 flex items-center justify-center group transition-all duration-300 ring-1 ring-slate-200/50 ${isLocalVideoFullscreen ? 'absolute inset-0 z-20' : `absolute bottom-20 right-4 z-20 w-32 h-48 rounded-xl sm:relative sm:z-10 sm:order-1 sm:flex-1 sm:h-auto sm:w-auto sm:h-auto sm:rounded-none sm:border-none`}`}
              style={!isLocalVideoFullscreen ? { transform: `translate(${pipPosition.x}px, ${pipPosition.y}px)` } : {}}
              onMouseDown={!isLocalVideoFullscreen ? handleDragStart : (e) => handleDragEnd(e)}
              onTouchStart={!isLocalVideoFullscreen ? handleDragStart : (e) => handleDragEnd(e)}
            >
              <video
                ref={localVideoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover transform -scale-x-100"
              />

              {/* Local Overlay Badge */}
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/50 px-3 py-1.5 rounded-xl text-xs font-bold text-white flex items-center gap-2 shadow-lg ring-1 ring-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
                <span>You</span>
                {isAudioMuted && <span className="text-[10px] text-rose-300 font-normal">(Muted)</span>}
              </div>

              {/* Camera Off Overlay */}
              {isVideoMuted && (
                <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center text-slate-300 p-6 text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-900/50 to-rose-800/50 border border-rose-700/50 flex items-center justify-center text-rose-300 text-lg shadow-lg shadow-rose-900/30">
                    📷
                  </div>
                  <p className="text-xs font-bold text-white">Camera Off</p>
                </div>
              )}

              {/* Tap to expand/minimize hint */}
              <div className="absolute bottom-2 right-2 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] text-white font-semibold">
                {isLocalVideoFullscreen ? 'Tap to minimize' : 'Tap to expand'}
              </div>
            </div>

          </div>

          {/* Action Control Dock */}
          <div className="fixed bottom-0 left-0 right-0 z-30 p-3 sm:p-4 sm:relative sm:rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-xl shadow-slate-300/50 flex flex-wrap items-center justify-between gap-3 sm:gap-4 ring-1 ring-slate-200/50 sm:mt-4">
            
            {/* Primary Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <button
                onClick={handleStartMatch}
                disabled={!isConnected}
                className="px-4 sm:px-6 py-2.5 sm:py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 disabled:opacity-40 text-white font-black text-[10px] sm:text-xs rounded-xl sm:rounded-2xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 transition-all active:scale-95 flex items-center gap-1.5 sm:gap-2 ring-2 ring-emerald-500/20 hover:ring-emerald-500/40"
              >
                <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span className="hidden sm:inline">START MATCH</span>
                <span className="sm:hidden">START</span>
              </button>

              <button
                onClick={handleSkipPeer}
                disabled={!isConnected || !inRoom}
                className="px-4 sm:px-6 py-2.5 sm:py-3.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 hover:from-indigo-700 hover:via-purple-700 hover:to-rose-600 disabled:opacity-40 text-white font-black text-[10px] sm:text-xs rounded-xl sm:rounded-2xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 hover:shadow-purple-500/30 transition-all active:scale-95 flex items-center gap-1.5 sm:gap-2 ring-2 ring-indigo-500/20 hover:ring-indigo-500/40"
              >
                <span className="hidden sm:inline">NEXT STRANGER</span>
                <span className="sm:hidden">NEXT</span>
                <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>

              <button
                onClick={handleStopSession}
                disabled={!isConnected}
                className="px-3 sm:px-4 py-2.5 sm:py-3.5 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 text-slate-700 border border-slate-300/80 disabled:opacity-40 font-bold text-[10px] sm:text-xs rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition active:scale-95"
              >
                STOP
              </button>
            </div>

            {/* Hardware Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleAudio}
                className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border transition-all active:scale-95 ${
                  isAudioMuted
                    ? 'bg-gradient-to-r from-rose-100 to-rose-200 border-rose-300 text-rose-700 font-bold shadow-md shadow-rose-500/20 ring-2 ring-rose-500/20'
                    : 'bg-gradient-to-r from-slate-100 to-slate-200 border-slate-200 text-slate-700 hover:bg-slate-200 hover:shadow-sm'
                }`}
                title={isAudioMuted ? 'Unmute Microphone' : 'Mute Microphone'}
              >
                {isAudioMuted ? (
                  <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 01-3 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 01-3 3z" />
                  </svg>
                )}
              </button>

              <button
                onClick={toggleVideo}
                className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border transition-all active:scale-95 ${
                  isVideoMuted
                    ? 'bg-gradient-to-r from-rose-100 to-rose-200 border-rose-300 text-rose-700 font-bold shadow-md shadow-rose-500/20 ring-2 ring-rose-500/20'
                    : 'bg-gradient-to-r from-slate-100 to-slate-200 border-slate-200 text-slate-700 hover:bg-slate-200 hover:shadow-sm'
                }`}
                title={isVideoMuted ? 'Turn Camera On' : 'Turn Camera Off'}
              >
                {isVideoMuted ? (
                  <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Text Chat Panel Column */}
        <div className="bg-white/95 backdrop-blur-sm border border-slate-200/60 rounded-2xl sm:rounded-3xl flex flex-col h-[400px] sm:h-[520px] lg:h-auto overflow-hidden shadow-xl shadow-slate-300/50 ring-1 ring-slate-200/50">
          
          {/* Chat Header */}
          <div className="p-3 sm:p-4 border-b border-slate-200/60 bg-gradient-to-r from-slate-50 to-indigo-50/30 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-700 flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm shadow-indigo-500/10 ring-1 ring-indigo-500/20">
                💬
              </div>
              <div>
                <h2 className="font-extrabold text-slate-900 text-[10px] sm:text-xs">Live Text Chat</h2>
                <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium">
                  {inRoom && peerId ? 'Paired with stranger' : 'No active peer connection'}
                </span>
              </div>
            </div>

            {inRoom && (
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 text-[9px] sm:text-[10px] font-bold animate-pulse shadow-sm shadow-emerald-500/10 ring-1 ring-emerald-500/20">
                Active Chat
              </span>
            )}
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-2 sm:space-y-3 bg-gradient-to-b from-slate-50/50 to-indigo-50/20">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 text-xs text-center p-6 space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 text-base shadow-sm ring-1 ring-slate-200/50">
                  👋
                </div>
                <p className="font-medium text-slate-500">
                  {inRoom && peerId
                    ? 'Say hi! Send a friendly message to your chat partner.'
                    : 'Connect to a match to start text chatting.'}
                </p>
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    msg.sender === 'You' ? 'items-end' : 'items-start'
                  }`}
                >
                  <span className="text-[10px] text-slate-400 mb-1 font-semibold px-1">
                    {msg.sender}
                  </span>
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-xs leading-relaxed font-medium shadow-sm ${
                      msg.sender === 'You'
                        ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 text-white rounded-br-md shadow-md shadow-indigo-500/20'
                        : 'bg-white border border-slate-200 text-slate-800 rounded-bl-md shadow-sm ring-1 ring-slate-200/50'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* Chat Input Form */}
          <form onSubmit={handleSendMessage} className="p-2.5 sm:p-3 border-t border-slate-200/60 bg-gradient-to-r from-white to-slate-50 flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={inRoom && peerId ? 'Type your message...' : 'Waiting for match...'}
              disabled={!inRoom || !peerId}
              className="flex-1 bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none disabled:opacity-40 transition-all shadow-sm"
            />
            <button
              type="submit"
              disabled={!inRoom || !peerId || !inputMessage.trim()}
              className="px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 hover:from-indigo-700 hover:via-purple-700 hover:to-rose-600 disabled:opacity-40 text-white font-black text-[10px] sm:text-xs rounded-xl sm:rounded-2xl shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition active:scale-95 flex items-center justify-center ring-2 ring-indigo-500/20 hover:ring-indigo-500/40"
            >
              Send
            </button>
          </form>

        </div>

      </section>
    </main>
  );
}
