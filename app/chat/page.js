'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { io } from 'socket.io-client';
import { getIceServers } from '../../lib/constants';
import { useChatLayout } from '../context/ChatLayoutContext';
import AgeGate, { hasAgeConfirmation } from '../components/AgeGate';
import ReportModal from '../components/ReportModal';
import ChatLobby from '../components/chat/ChatLobby';
import ChatControlBar from '../components/chat/ChatControlBar';
import ChatVideoStage from '../components/chat/ChatVideoStage';
import ChatMessagesPanel from '../components/chat/ChatMessagesPanel';
import { IconMessage, IconVideo } from '../components/chat/ChatIcons';
import { useMedia } from '../hooks/useMedia';

export default function OmeTVChatPage() {
  const { setChatMode, setLobbyMode } = useChatLayout();
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
  const [unreadCount, setUnreadCount] = useState(0);
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
  const prevMessageCountRef = useRef(0);

  useEffect(() => {
    setAgeConfirmed(hasAgeConfirmation());
    setShowAgeGate(!hasAgeConfirmation());
  }, []);

  useEffect(() => {
    setChatMode(inRoom || status.includes('Searching') || !showHeader);
    return () => setChatMode(false);
  }, [inRoom, status, showHeader, setChatMode]);

  useEffect(() => {
    const lobby =
      showHeader && !inRoom && !status.includes('Searching') && !status.includes('Requesting');
    setLobbyMode(lobby);
    return () => setLobbyMode(false);
  }, [showHeader, inRoom, status, setLobbyMode]);

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

  useEffect(() => {
    if (mobileTab === 'chat') {
      setUnreadCount(0);
    }
  }, [mobileTab]);

  useEffect(() => {
    if (messages.length < prevMessageCountRef.current) {
      prevMessageCountRef.current = messages.length;
      return;
    }
    if (messages.length === prevMessageCountRef.current) return;

    const newMessages = messages.slice(prevMessageCountRef.current);
    prevMessageCountRef.current = messages.length;

    if (mobileTab === 'video') {
      const peerNew = newMessages.filter((m) => m.sender !== 'You').length;
      if (peerNew > 0) {
        setUnreadCount((count) => count + peerNew);
      }
    }
  }, [messages, mobileTab]);

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
  const isLobby = showHeader && !inRoom && !status.includes('Searching') && !status.includes('Requesting');
  const isSearching = status.includes('Searching') || status.includes('Finding');

  return (
    <main
      className={`chat-shell flex-1 flex flex-col font-sans relative ${
        isImmersive ? 'chat-shell-active chat-shell-immersive-mobile' : 'chat-shell-lobby'
      } ${isLobby ? 'chat-shell-lobby-hero' : ''}`}
    >
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

      {reportNotice && <div className="chat-toast">{reportNotice}</div>}

      {/* Desktop status — active session only */}
      {isImmersive && (
        <header className="chat-desktop-status shrink-0">
          <div className="chat-desktop-status-inner">
            <div className="flex items-center gap-3 min-w-0">
              <span className="chat-desktop-status-brand">Parvah</span>
              <span className={`chat-desktop-status-dot ${inRoom ? 'chat-desktop-status-dot-live' : ''}`} />
              <span className="chat-desktop-status-text">{status}</span>
            </div>
            <button type="button" onClick={handleStopSession} className="chat-desktop-stop">
              End session
            </button>
          </div>
        </header>
      )}

      {/* Mobile top bar — active chat */}
      {isImmersive && (
        <div className="chat-topbar-mobile">
          <span className="chat-topbar-brand">Parvah</span>
          <span className="chat-topbar-status">{status}</span>
        </div>
      )}

      {/* Mobile tabs */}
      {!isLobby && (
        <div className="chat-mobile-tabs">
          {[
            { id: 'video', label: 'Video', icon: IconVideo },
            { id: 'chat', label: 'Chat', icon: IconMessage },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setMobileTab(id)}
              className={`chat-mobile-tab ${mobileTab === id ? 'chat-mobile-tab-active' : ''}`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
              {id === 'chat' && unreadCount > 0 && mobileTab !== 'chat' && (
                <span className="chat-mobile-tab-badge">{unreadCount > 9 ? '9+' : unreadCount}</span>
              )}
            </button>
          ))}
        </div>
      )}

      {isLobby ? (
        <ChatLobby isConnected={isConnected} onStart={handleStartMatch} />
      ) : (
        <div className="chat-layout flex-1 min-h-0">
          <div className={`chat-main-col ${mobileTab === 'chat' ? 'chat-col-hidden-mobile' : ''}`}>
            <div className="chat-stage-wrap">
              <ChatVideoStage
                ref={videoContainerRef}
                remoteVideoRef={remoteVideoRef}
                localVideoRef={localVideoRef}
                peerId={peerId}
                status={status}
                mediaReady={mediaReady}
                isVideoMuted={isVideoMuted}
                isAudioMuted={isAudioMuted}
                isLocalVideoFullscreen={isLocalVideoFullscreen}
                pipPosition={pipPosition}
                onPipDragStart={handleDragStart}
                isSearching={isSearching}
              />
              <ChatControlBar
                isConnected={isConnected}
                inRoom={inRoom}
                peerId={peerId}
                isSearching={isSearching}
                isAudioMuted={isAudioMuted}
                isVideoMuted={isVideoMuted}
                onStart={handleStartMatch}
                onSkip={handleSkipPeer}
                onStop={handleStopSession}
                onReport={() => setShowReportModal(true)}
                onBlock={handleBlockAndSkip}
                onToggleAudio={toggleAudio}
                onToggleVideo={toggleVideo}
              />
            </div>
          </div>

          <div className={`chat-main-col chat-main-col-messages ${mobileTab === 'video' ? 'chat-col-hidden-mobile' : 'chat-col-mobile-full'}`}>
            <ChatMessagesPanel
              ref={chatBottomRef}
              messages={messages}
              inputMessage={inputMessage}
              onInputChange={(e) => setInputMessage(e.target.value)}
              onSubmit={handleSendMessage}
              inRoom={inRoom}
              peerId={peerId}
            />
          </div>
        </div>
      )}
    </main>
  );
}
