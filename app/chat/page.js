'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { io } from 'socket.io-client';
import { getIceServers } from '../../lib/constants';
import { useChatLayout } from '../context/ChatLayoutContext';
import AgeGate, { hasAgeConfirmation } from '../components/AgeGate';
import ReportModal from '../components/ReportModal';
import { useMedia } from '../hooks/useMedia';

export default function OmeTVChatPage() {
  const { setChatMode } = useChatLayout();
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [showAgeGate, setShowAgeGate] = useState(false);
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [inRoom, setInRoom] = useState(false);
  const [status, setStatus] = useState('Click Start Match to begin');
  const [peerId, setPeerId] = useState(null);
  const [roomId, setRoomId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLocalVideoFullscreen, setIsLocalVideoFullscreen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [mobileTab, setMobileTab] = useState('video');
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportNotice, setReportNotice] = useState('');
  const [pipPosition, setPipPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const {
    localStreamRef,
    localVideoRef,
    isAudioMuted,
    isVideoMuted,
    mediaReady,
    mediaError,
    setupMedia,
    stopMedia,
    toggleAudio,
    toggleVideo,
  } = useMedia();

  const remoteVideoRef = useRef(null);
  const peerConnectionRef = useRef(null);
  const socketRef = useRef(null);
  const currentPeerIdRef = useRef(null);
  const currentRoomIdRef = useRef(null);
  const chatBottomRef = useRef(null);
  const videoContainerRef = useRef(null);
  const dragRef = useRef(null);

  useEffect(() => {
    setAgeConfirmed(hasAgeConfirmation());
    setShowAgeGate(!hasAgeConfirmation());
  }, []);

  useEffect(() => {
    setChatMode(inRoom || status.includes('Searching') || !showHeader);
    return () => setChatMode(false);
  }, [inRoom, status, showHeader, setChatMode]);

  useEffect(() => {
    if (typeof document === 'undefined') return undefined;
    const lock = inRoom || status.includes('Searching') || !showHeader;
    document.body.style.overflow = lock ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [inRoom, status, showHeader]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const cleanupWebRTC = useCallback(() => {
    if (peerConnectionRef.current) {
      peerConnectionRef.current.ontrack = null;
      peerConnectionRef.current.onicecandidate = null;
      peerConnectionRef.current.close();
      peerConnectionRef.current = null;
    }
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = null;
    }
  }, []);

  const cleanupPeerConnection = useCallback(() => {
    cleanupWebRTC();
    setInRoom(false);
    setPeerId(null);
    setRoomId(null);
    currentPeerIdRef.current = null;
    currentRoomIdRef.current = null;
  }, [cleanupWebRTC]);

  const createPeerConnection = useCallback((socketInstance, targetPeerId, targetRoomId) => {
    const pc = new RTCPeerConnection(getIceServers());

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

    pc.onconnectionstatechange = () => {
      if (pc.connectionState === 'failed') {
        setStatus('Connection failed. Click Next to try again.');
      }
    };

    return pc;
  }, [localStreamRef]);

  useEffect(() => {
    if (!ageConfirmed) return undefined;

    const socketIo = io();
    socketRef.current = socketIo;

    socketIo.on('connect', () => {
      setIsConnected(true);
      setSocket(socketIo);
    });

    socketIo.on('disconnect', () => {
      setIsConnected(false);
      setStatus('Disconnected from server');
      cleanupPeerConnection();
    });

    socketIo.on('waiting', ({ message }) => {
      setStatus(message || 'Searching for a random peer...');
      cleanupWebRTC();
    });

    socketIo.on('match-found', async ({ roomId: matchedRoomId, peerId: matchedPeerId, isInitiator }) => {
      cleanupWebRTC();
      setInRoom(true);
      setPeerId(matchedPeerId);
      setRoomId(matchedRoomId);
      currentPeerIdRef.current = matchedPeerId;
      currentRoomIdRef.current = matchedRoomId;
      setMessages([]);
      setStatus(`Connected to peer (${matchedPeerId.substring(0, 6)})`);

      const pc = createPeerConnection(socketIo, matchedPeerId, matchedRoomId);
      peerConnectionRef.current = pc;

      if (isInitiator) {
        try {
          const offer = await pc.createOffer();
          await pc.setLocalDescription(offer);
          socketIo.emit('signal-offer', { offer, to: matchedPeerId, roomId: matchedRoomId });
        } catch {
          setStatus('Failed to establish connection');
        }
      }
    });

    socketIo.on('signal-offer', async ({ offer, from, roomId: signalRoomId }) => {
      let pc = peerConnectionRef.current;
      if (!pc) {
        pc = createPeerConnection(socketIo, from, signalRoomId);
        peerConnectionRef.current = pc;
      }
      try {
        await pc.setRemoteDescription(new RTCSessionDescription(offer));
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        socketIo.emit('signal-answer', { answer, to: from, roomId: signalRoomId });
      } catch {
        setStatus('Failed to handle connection offer');
      }
    });

    socketIo.on('signal-answer', async ({ answer }) => {
      const pc = peerConnectionRef.current;
      if (pc) {
        try {
          await pc.setRemoteDescription(new RTCSessionDescription(answer));
        } catch {
          setStatus('Failed to complete connection');
        }
      }
    });

    socketIo.on('signal-ice-candidate', async ({ candidate }) => {
      const pc = peerConnectionRef.current;
      if (pc && candidate) {
        try {
          await pc.addIceCandidate(new RTCIceCandidate(candidate));
        } catch {
          /* ignore stale candidates */
        }
      }
    });

    socketIo.on('receive-message', ({ message, timestamp }) => {
      setMessages((prev) => [
        ...prev,
        { sender: 'Peer', text: message, timestamp: timestamp || new Date().toISOString() },
      ]);
    });

    socketIo.on('peer-left', () => {
      setStatus('Peer left. Click Next to search again.');
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

    socketIo.on('blocked-by-peer', () => {
      setStatus('You were skipped by your peer.');
      cleanupPeerConnection();
    });

    return () => {
      cleanupPeerConnection();
      socketIo.disconnect();
    };
  }, [ageConfirmed, cleanupPeerConnection, cleanupWebRTC, createPeerConnection]);

  const handleStartMatch = async () => {
    const activeSocket = socketRef.current || socket;
    if (!activeSocket || !isConnected) return;

    try {
      setStatus('Requesting camera access...');
      await setupMedia();
      setStatus('Searching for a random peer...');
      setShowHeader(false);
      setChatMode(true);
      videoContainerRef.current?.scrollIntoView({ behavior: 'smooth' });
      activeSocket.emit('find-match');
    } catch {
      setStatus(mediaError || 'Camera permission required to start');
    }
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
    setChatMode(false);
    activeSocket.emit('stop-session');
    setStatus('Click Start Match to begin');
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

  const handleBlockAndSkip = () => {
    const activeSocket = socketRef.current || socket;
    const targetPeerId = currentPeerIdRef.current || peerId;
    if (activeSocket && targetPeerId) {
      activeSocket.emit('block-peer', { peerId: targetPeerId });
    }
    handleSkipPeer();
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
    const movement = Math.sqrt((clientX - dragStart.x) ** 2 + (clientY - dragStart.y) ** 2);
    if (movement < 5) setIsLocalVideoFullscreen(!isLocalVideoFullscreen);
  };

  useEffect(() => {
    if (!isDragging) return undefined;
    window.addEventListener('mousemove', handleDragMove);
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchmove', handleDragMove, { passive: false });
    window.addEventListener('touchend', handleDragEnd);
    return () => {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging, dragStart, pipPosition, isLocalVideoFullscreen]);

  useEffect(() => () => stopMedia(), [stopMedia]);

  if (showAgeGate && !ageConfirmed) {
    return (
      <AgeGate
        onConfirm={() => {
          setAgeConfirmed(true);
          setShowAgeGate(false);
        }}
      />
    );
  }

  const isImmersive = !showHeader || inRoom || status.includes('Searching');

  return (
    <main
      className={`flex-1 flex flex-col font-sans relative text-slate-900
        ${isImmersive
          ? 'fixed inset-0 z-40 h-[100dvh] max-h-[100dvh] w-full bg-slate-950 overflow-hidden sm:relative sm:inset-auto sm:z-auto sm:h-auto sm:max-h-none sm:min-h-[calc(100vh-4rem)] sm:bg-gradient-to-br sm:from-slate-50 sm:via-indigo-50/30 sm:to-rose-50/30 sm:overflow-hidden'
          : 'bg-gradient-to-br from-slate-50 via-indigo-50/30 to-rose-50/30 overflow-x-hidden'
        }`}
    >
      {!isImmersive && (
        <>
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-indigo-300/20 via-purple-300/20 to-rose-300/20 rounded-full blur-3xl pointer-events-none animate-pulse hidden sm:block" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-teal-300/15 via-emerald-300/15 to-cyan-300/15 rounded-full blur-3xl pointer-events-none hidden sm:block" />
        </>
      )}

      {showReportModal && (
        <ReportModal
          onClose={() => setShowReportModal(false)}
          onReported={() => {
            handleBlockAndSkip();
            setReportNotice('User blocked and skipped.');
            setTimeout(() => setReportNotice(''), 4000);
          }}
        />
      )}

      {/* Desktop / pre-chat header */}
      <section
        className={`border-b border-slate-200/60 bg-white/90 backdrop-blur-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-lg shadow-slate-200/50 shrink-0 ${isImmersive ? 'hidden sm:block' : ''}`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2 sm:gap-4">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping" />
                WebRTC Video Chat
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Free & Anonymous</span>
            </div>
            <h1 className="text-base sm:text-lg md:text-xl font-black tracking-tight text-slate-900">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">Parvah</span>
              <span className="text-slate-400 hidden sm:inline"> — </span>
              <span className="text-slate-800 text-xs sm:text-sm">Free Random Video Chat</span>
            </h1>
          </div>
          <div className="flex items-center gap-2 text-[10px] sm:text-xs bg-slate-50 border border-slate-200 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl font-semibold">
            <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
            {isConnected ? 'Connected' : 'Connecting...'}
          </div>
        </div>
      </section>

      {/* Mobile immersive top bar */}
      {isImmersive && (
        <div className="sm:hidden shrink-0 flex items-center justify-between px-3 py-2 bg-slate-900/95 border-b border-slate-800 pt-[max(0.5rem,env(safe-area-inset-top))]">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-sm font-black bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">Parvah</span>
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isConnected ? 'bg-emerald-400' : 'bg-rose-400'}`} />
            <span className="text-[10px] text-slate-400 truncate">{status}</span>
          </div>
        </div>
      )}

      {reportNotice && (
        <div className="mx-3 sm:mx-4 mt-2 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 text-center shrink-0 sm:block">
          {reportNotice}
        </div>
      )}

      {/* Mobile tabs */}
      <div className={`sm:hidden shrink-0 flex border-b ${isImmersive ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
        {['video', 'chat'].map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setMobileTab(tab)}
            className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
              mobileTab === tab
                ? isImmersive
                  ? 'text-indigo-400 border-b-2 border-indigo-400'
                  : 'text-indigo-600 border-b-2 border-indigo-600'
                : isImmersive
                  ? 'text-slate-500'
                  : 'text-slate-500'
            }`}
          >
            {tab === 'video' ? 'Video' : 'Text Chat'}
          </button>
        ))}
      </div>

      <section className="flex-1 min-h-0 max-w-7xl w-full mx-auto p-0 sm:p-4 md:p-6 relative z-10 overflow-hidden flex flex-col lg:grid lg:grid-cols-3 gap-0 sm:gap-6 sm:overflow-visible">
        {/* Video column */}
        <div
          className={`lg:col-span-2 flex flex-col min-h-0 flex-1 sm:flex-none sm:gap-4 ${
            mobileTab === 'chat' ? 'hidden sm:flex' : 'flex'
          }`}
        >
          <div
            id="video-container"
            ref={videoContainerRef}
            className={`relative overflow-hidden bg-black sm:grid sm:grid-cols-2 sm:gap-0 sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] ${
              isImmersive ? 'flex-1 min-h-0' : 'h-[42vh] min-h-[220px] max-h-[360px] sm:h-auto sm:max-h-none'
            }`}
          >
            {/* Remote video */}
            <div
              className={`relative bg-slate-900 flex items-center justify-center ${
                isLocalVideoFullscreen
                  ? 'absolute bottom-24 right-3 z-10 w-[30vw] max-w-[120px] aspect-[3/4] rounded-xl overflow-hidden shadow-lg sm:relative sm:bottom-auto sm:right-auto sm:w-auto sm:max-w-none sm:aspect-auto sm:flex-1 sm:rounded-3xl'
                  : 'absolute inset-0 z-0 sm:relative sm:flex-1 sm:rounded-3xl sm:overflow-hidden sm:border sm:border-white sm:shadow-2xl'
              }`}
            >
              <video ref={remoteVideoRef} autoPlay playsInline className="w-full h-full object-cover" aria-label="Remote stranger video" />
              {peerId && (
                <div className="absolute top-3 left-3 bg-black/60 px-2.5 py-1 rounded-lg text-[10px] font-bold text-indigo-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  Stranger ({peerId.substring(0, 6)})
                </div>
              )}
              {!peerId && (
                <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center text-slate-400 p-4 text-center space-y-3">
                  <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                  <h3 className="text-sm font-bold text-white">
                    {status.includes('Searching') ? 'Finding someone...' : 'Ready to connect'}
                  </h3>
                  <p className="text-xs text-slate-400 max-w-[240px]">{status}</p>
                </div>
              )}
            </div>

            {/* Local PiP */}
            <div
              className={`relative bg-slate-800 flex items-center justify-center touch-none ${
                isLocalVideoFullscreen
                  ? 'absolute inset-0 z-20 sm:relative sm:flex-1 sm:rounded-3xl'
                  : 'absolute bottom-3 right-3 z-20 w-[30vw] max-w-[120px] aspect-[3/4] rounded-xl overflow-hidden shadow-xl ring-2 ring-white/20 sm:relative sm:flex-1 sm:w-auto sm:max-w-none sm:aspect-auto sm:rounded-3xl sm:overflow-hidden sm:border sm:border-white sm:shadow-2xl sm:inset-auto sm:bottom-auto sm:right-auto'
              }`}
              style={
                !isLocalVideoFullscreen
                  ? { transform: `translate(${pipPosition.x}px, ${pipPosition.y}px)` }
                  : undefined
              }
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            >
              <video ref={localVideoRef} autoPlay playsInline muted className="w-full h-full object-cover -scale-x-100" aria-label="Your local video" />
              <div className="absolute top-2 left-2 bg-black/60 px-2 py-0.5 rounded-md text-[9px] font-bold text-white">
                You {isAudioMuted && '🔇'}
              </div>
              {isVideoMuted && (
                <div className="absolute inset-0 bg-slate-900/95 flex items-center justify-center text-[10px] font-bold text-white">Camera Off</div>
              )}
              {!mediaReady && (
                <div className="absolute inset-0 bg-slate-900/80 flex items-center justify-center text-[9px] text-slate-400 p-1 text-center">Tap Start Match</div>
              )}
            </div>
          </div>

          {/* Controls — flex footer on mobile (no fixed gap) */}
          <div
            className={`shrink-0 z-30 p-2.5 sm:p-4 sm:rounded-3xl backdrop-blur-sm border-t sm:border border-slate-200/60 shadow-xl flex flex-col gap-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:pb-4 ${
              isImmersive ? 'bg-slate-900/95 border-slate-800 sm:bg-white/95' : 'bg-white/95'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={handleStartMatch}
                disabled={!isConnected}
                className="flex-1 max-w-[140px] py-3 bg-gradient-to-r from-emerald-500 to-teal-600 disabled:opacity-40 text-white font-black text-[11px] rounded-xl active:scale-95 transition-transform"
              >
                START
              </button>
              <button
                type="button"
                onClick={handleSkipPeer}
                disabled={!isConnected || !inRoom}
                className="flex-1 max-w-[140px] py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 disabled:opacity-40 text-white font-black text-[11px] rounded-xl active:scale-95 transition-transform"
              >
                NEXT
              </button>
              <button
                type="button"
                onClick={handleStopSession}
                disabled={!isConnected}
                className={`flex-1 max-w-[100px] py-3 disabled:opacity-40 font-bold text-[11px] rounded-xl active:scale-95 transition-transform ${
                  isImmersive ? 'bg-slate-800 text-slate-200 border border-slate-700' : 'bg-slate-100 text-slate-700 border border-slate-300'
                }`}
              >
                STOP
              </button>
            </div>
            <div className="flex items-center justify-center gap-2">
              {inRoom && peerId && (
                <>
                  <button type="button" onClick={() => setShowReportModal(true)} className="p-2.5 rounded-xl border border-rose-500/40 bg-rose-500/10 text-rose-400 sm:text-rose-700 sm:bg-rose-50 sm:border-rose-200" aria-label="Report user">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1 1H5a2 2 0 01-2 2zm9-13.5V9" /></svg>
                  </button>
                  <button type="button" onClick={handleBlockAndSkip} className={`p-2.5 rounded-xl border ${isImmersive ? 'border-slate-600 bg-slate-800 text-slate-300' : 'border-slate-200 bg-slate-100 text-slate-700'}`} aria-label="Block and skip">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                  </button>
                </>
              )}
              <button type="button" onClick={toggleAudio} className={`p-2.5 rounded-xl border text-base ${isAudioMuted ? 'bg-rose-500/10 border-rose-500/40' : isImmersive ? 'bg-slate-800 border-slate-600' : 'bg-slate-100 border-slate-200'}`} aria-label={isAudioMuted ? 'Unmute' : 'Mute'}>
                {isAudioMuted ? '🔇' : '🎤'}
              </button>
              <button type="button" onClick={toggleVideo} className={`p-2.5 rounded-xl border text-base ${isVideoMuted ? 'bg-rose-500/10 border-rose-500/40' : isImmersive ? 'bg-slate-800 border-slate-600' : 'bg-slate-100 border-slate-200'}`} aria-label={isVideoMuted ? 'Turn camera on' : 'Turn camera off'}>
                {isVideoMuted ? '📷' : '📹'}
              </button>
            </div>
          </div>
        </div>

        {/* Text chat column */}
        <div
          className={`flex flex-col min-h-0 overflow-hidden shadow-xl sm:rounded-3xl sm:border sm:h-[520px] lg:h-auto ${
            isImmersive
              ? 'flex-1 bg-slate-900 border-slate-800 sm:bg-white/95 sm:border-slate-200/60'
              : 'h-[calc(100dvh-14rem)] bg-white/95 border border-slate-200/60 sm:h-[520px]'
          } ${mobileTab === 'video' ? 'hidden sm:flex' : 'flex'}`}
        >
          <div className={`p-3 sm:p-4 border-b shrink-0 ${isImmersive ? 'border-slate-800 bg-slate-900 sm:bg-gradient-to-r sm:from-slate-50 sm:to-indigo-50/30 sm:border-slate-200/60' : 'border-slate-200/60 bg-gradient-to-r from-slate-50 to-indigo-50/30'}`}>
            <h2 className={`font-extrabold text-xs ${isImmersive ? 'text-white sm:text-slate-900' : 'text-slate-900'}`}>Live Text Chat</h2>
            <span className={`text-[10px] ${isImmersive ? 'text-slate-400 sm:text-slate-500' : 'text-slate-500'}`}>
              {inRoom && peerId ? 'Paired with stranger' : 'No active connection'}
            </span>
          </div>
          <div className={`flex-1 min-h-0 p-3 sm:p-4 overflow-y-auto space-y-2 ${isImmersive ? 'bg-slate-950 sm:bg-slate-50/50' : 'bg-slate-50/50'}`}>
            {messages.length === 0 ? (
              <p className={`text-xs text-center py-8 ${isImmersive ? 'text-slate-500' : 'text-slate-500'}`}>
                {inRoom ? 'Say hi to your chat partner!' : 'Start a match to chat.'}
              </p>
            ) : (
              messages.map((msg, idx) => (
                <div key={idx} className={`flex flex-col ${msg.sender === 'You' ? 'items-end' : 'items-start'}`}>
                  <span className="text-[10px] text-slate-500 mb-1">{msg.sender}</span>
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-2xl text-xs ${
                      msg.sender === 'You'
                        ? 'bg-indigo-600 text-white'
                        : isImmersive
                          ? 'bg-slate-800 text-slate-100 border border-slate-700 sm:bg-white sm:text-slate-800 sm:border-slate-200'
                          : 'bg-white border border-slate-200 text-slate-800'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))
            )}
            <div ref={chatBottomRef} />
          </div>
          <form
            onSubmit={handleSendMessage}
            className={`p-2.5 border-t flex gap-2 shrink-0 pb-[max(0.5rem,env(safe-area-inset-bottom))] ${isImmersive ? 'border-slate-800 bg-slate-900 sm:bg-white sm:border-slate-200' : 'border-slate-200 bg-white'}`}
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={inRoom ? 'Type a message...' : 'Waiting for match...'}
              disabled={!inRoom || !peerId}
              className={`flex-1 border rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-indigo-500 disabled:opacity-40 ${
                isImmersive
                  ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 sm:bg-slate-50 sm:border-slate-200 sm:text-slate-900'
                  : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            />
            <button type="submit" disabled={!inRoom || !peerId || !inputMessage.trim()} className="px-4 py-2.5 bg-indigo-600 text-white font-bold text-xs rounded-xl disabled:opacity-40 shrink-0">
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
