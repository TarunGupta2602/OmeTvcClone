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
    setChatMode(inRoom || status.includes('Searching'));
    return () => setChatMode(false);
  }, [inRoom, status, setChatMode]);

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

  return (
    <main className="flex-1 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-rose-50/30 text-slate-900 flex flex-col font-sans relative overflow-hidden sm:overflow-y-auto min-h-[calc(100vh-4rem)]">
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-indigo-300/20 via-purple-300/20 to-rose-300/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-teal-300/15 via-emerald-300/15 to-cyan-300/15 rounded-full blur-3xl pointer-events-none" />

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

      <section className={`border-b border-slate-200/60 bg-white/90 backdrop-blur-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-lg shadow-slate-200/50 ${!showHeader ? 'hidden sm:block' : ''}`}>
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

      {reportNotice && (
        <div className="mx-4 mt-2 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 text-center">
          {reportNotice}
        </div>
      )}

      <div className="sm:hidden flex border-b border-slate-200 bg-white/90">
        {['video', 'chat'].map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setMobileTab(tab)}
            className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider ${mobileTab === tab ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-500'}`}
          >
            {tab === 'video' ? 'Video' : 'Text Chat'}
          </button>
        ))}
      </div>

      <section className="flex-1 max-w-7xl w-full mx-auto p-0 sm:p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-0 sm:gap-6 relative z-10 overflow-hidden sm:overflow-visible">
        <div className={`lg:col-span-2 flex flex-col gap-0 sm:gap-4 h-full ${mobileTab === 'chat' ? 'hidden sm:flex' : 'flex'}`}>
          <div id="video-container" ref={videoContainerRef} className="relative flex-1 sm:grid sm:grid-cols-2 gap-0 sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] overflow-hidden">
            <div className={`relative bg-slate-900 flex items-center justify-center ${isLocalVideoFullscreen ? 'absolute bottom-20 right-4 z-10 w-32 h-48 rounded-xl' : 'absolute inset-0 z-0'} sm:relative sm:flex-1 sm:rounded-3xl sm:overflow-hidden sm:border sm:border-white sm:shadow-2xl`}>
              <video ref={remoteVideoRef} autoPlay playsInline className="w-full h-full object-cover" aria-label="Remote stranger video" />
              {peerId && (
                <div className="absolute top-4 left-4 bg-slate-900/90 px-3 py-1.5 rounded-xl text-xs font-bold text-indigo-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                  Stranger ({peerId.substring(0, 6)})
                </div>
              )}
              {!peerId && (
                <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center text-slate-400 p-6 text-center space-y-4">
                  <h3 className="text-sm font-bold text-white">{status.includes('Searching') ? 'Searching for a Match...' : 'Ready to Connect'}</h3>
                  <p className="text-xs text-slate-300 max-w-xs">{status}</p>
                  {!mediaReady && !status.includes('Searching') && (
                    <p className="text-[11px] text-indigo-300">Camera activates when you click Start Match</p>
                  )}
                </div>
              )}
            </div>

            <div
              className={`relative bg-slate-900 flex items-center justify-center ${isLocalVideoFullscreen ? 'absolute inset-0 z-20' : 'absolute bottom-20 right-4 z-20 w-32 h-48 rounded-xl sm:relative sm:flex-1 sm:rounded-3xl sm:overflow-hidden sm:border sm:border-white sm:shadow-2xl sm:inset-auto sm:bottom-auto sm:right-auto sm:w-auto sm:h-auto'}`}
              style={!isLocalVideoFullscreen ? { transform: `translate(${pipPosition.x}px, ${pipPosition.y}px)` } : {}}
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            >
              <video ref={localVideoRef} autoPlay playsInline muted className="w-full h-full object-cover -scale-x-100" aria-label="Your local video" />
              <div className="absolute top-4 left-4 bg-slate-900/90 px-3 py-1.5 rounded-xl text-xs font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                You {isAudioMuted && '(Muted)'}
              </div>
              {isVideoMuted && (
                <div className="absolute inset-0 bg-slate-900/95 flex items-center justify-center text-xs font-bold text-white">Camera Off</div>
              )}
              {!mediaReady && (
                <div className="absolute inset-0 bg-slate-900/80 flex items-center justify-center text-[10px] text-slate-400 p-2 text-center">Camera off until Start Match</div>
              )}
            </div>
          </div>

          <div className="fixed bottom-0 left-0 right-0 z-30 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-4 sm:relative sm:rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-xl flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <button type="button" onClick={handleStartMatch} disabled={!isConnected} className="px-4 sm:px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 disabled:opacity-40 text-white font-black text-[10px] sm:text-xs rounded-xl">
                START MATCH
              </button>
              <button type="button" onClick={handleSkipPeer} disabled={!isConnected || !inRoom} className="px-4 sm:px-6 py-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 disabled:opacity-40 text-white font-black text-[10px] sm:text-xs rounded-xl">
                NEXT
              </button>
              <button type="button" onClick={handleStopSession} disabled={!isConnected} className="px-3 sm:px-4 py-2.5 bg-slate-100 text-slate-700 border border-slate-300 disabled:opacity-40 font-bold text-[10px] sm:text-xs rounded-xl">
                STOP
              </button>
            </div>
            <div className="flex items-center gap-2">
              {inRoom && peerId && (
                <>
                  <button type="button" onClick={() => setShowReportModal(true)} className="p-2.5 rounded-xl border border-rose-200 bg-rose-50 text-rose-700" title="Report user" aria-label="Report user">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1 1H5a2 2 0 01-2 2zm9-13.5V9" /></svg>
                  </button>
                  <button type="button" onClick={handleBlockAndSkip} className="p-2.5 rounded-xl border border-slate-200 bg-slate-100 text-slate-700" title="Block and skip" aria-label="Block and skip">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                  </button>
                </>
              )}
              <button type="button" onClick={toggleAudio} className={`p-2.5 rounded-xl border ${isAudioMuted ? 'bg-rose-100 border-rose-300 text-rose-700' : 'bg-slate-100 border-slate-200'}`} aria-label={isAudioMuted ? 'Unmute' : 'Mute'}>
                {isAudioMuted ? '🔇' : '🎤'}
              </button>
              <button type="button" onClick={toggleVideo} className={`p-2.5 rounded-xl border ${isVideoMuted ? 'bg-rose-100 border-rose-300 text-rose-700' : 'bg-slate-100 border-slate-200'}`} aria-label={isVideoMuted ? 'Turn camera on' : 'Turn camera off'}>
                {isVideoMuted ? '📷' : '📹'}
              </button>
            </div>
          </div>
        </div>

        <div className={`bg-white/95 border border-slate-200/60 rounded-2xl sm:rounded-3xl flex flex-col h-[calc(100vh-12rem)] sm:h-[520px] lg:h-auto overflow-hidden shadow-xl ${mobileTab === 'video' ? 'hidden sm:flex' : 'flex'}`}>
          <div className="p-3 sm:p-4 border-b border-slate-200/60 bg-gradient-to-r from-slate-50 to-indigo-50/30">
            <h2 className="font-extrabold text-slate-900 text-xs">Live Text Chat</h2>
            <span className="text-[10px] text-slate-500">{inRoom && peerId ? 'Paired with stranger' : 'No active connection'}</span>
          </div>
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-2 bg-slate-50/50">
            {messages.length === 0 ? (
              <p className="text-xs text-slate-500 text-center py-8">{inRoom ? 'Say hi to your chat partner!' : 'Start a match to chat.'}</p>
            ) : (
              messages.map((msg, idx) => (
                <div key={idx} className={`flex flex-col ${msg.sender === 'You' ? 'items-end' : 'items-start'}`}>
                  <span className="text-[10px] text-slate-400 mb-1">{msg.sender}</span>
                  <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-xs ${msg.sender === 'You' ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-200 text-slate-800'}`}>{msg.text}</div>
                </div>
              ))
            )}
            <div ref={chatBottomRef} />
          </div>
          <form onSubmit={handleSendMessage} className="p-2.5 border-t border-slate-200 flex gap-2">
            <input type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} placeholder={inRoom ? 'Type a message...' : 'Waiting for match...'} disabled={!inRoom || !peerId} className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500 disabled:opacity-40" />
            <button type="submit" disabled={!inRoom || !peerId || !inputMessage.trim()} className="px-4 py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl disabled:opacity-40">Send</button>
          </form>
        </div>
      </section>
    </main>
  );
}
