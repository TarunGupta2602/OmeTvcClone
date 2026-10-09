'use client';

import { forwardRef, useEffect, useState } from 'react';

const ChatVideoStage = forwardRef(function ChatVideoStage(
  {
    remoteVideoRef,
    localVideoRef,
    peerId,
    status,
    mediaReady,
    isVideoMuted,
    isAudioMuted,
    isLocalVideoFullscreen,
    pipPosition,
    onPipDragStart,
    isSearching,
    onlineCount,
  },
  containerRef
) {
  const showWaiting = !peerId;
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!isSearching) {
      setElapsed(0);
      return undefined;
    }
    const started = Date.now();
    const timer = setInterval(() => {
      setElapsed(Math.floor((Date.now() - started) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [isSearching]);

  const othersOnline = typeof onlineCount === 'number' ? Math.max(onlineCount - 1, 0) : 0;
  const waitTitle = isSearching ? 'You’re in line' : 'Waiting to connect';
  const waitSub = !isSearching
    ? status
    : othersOnline > 0
      ? 'Stay on this screen. When someone else taps Start, you match instantly.'
      : 'You’re first. Stay here — the next person who taps Start matches you.';

  return (
    <div ref={containerRef} className="chat-video-stage">
      <div
        className={`chat-video-pane chat-video-remote ${
          isLocalVideoFullscreen ? 'chat-video-remote-pip' : ''
        }`}
      >
        <video ref={remoteVideoRef} autoPlay playsInline className="chat-video-el" aria-label="Stranger video" />
        {peerId && (
          <div className="chat-video-label chat-video-label-remote">
            <span className="chat-live-dot" />
            Stranger
          </div>
        )}
        {showWaiting && (
          <div className="chat-video-placeholder">
            <div className="chat-pulse-ring">
              <div className="chat-pulse-core" />
            </div>
            <p className="chat-placeholder-title">{waitTitle}</p>
            <p className="chat-placeholder-sub">{waitSub}</p>
            {isSearching && (
              <p className="chat-placeholder-meta">
                {othersOnline > 0 ? `${othersOnline} other${othersOnline === 1 ? '' : 's'} online` : 'Waiting for the next person'}
                {' · '}
                {elapsed}s
              </p>
            )}
          </div>
        )}
      </div>

      <div
        className={`chat-video-pane chat-video-local ${isLocalVideoFullscreen ? 'chat-video-local-expanded' : ''}`}
        style={!isLocalVideoFullscreen ? { transform: `translate(${pipPosition.x}px, ${pipPosition.y}px)` } : undefined}
        onMouseDown={onPipDragStart}
        onTouchStart={onPipDragStart}
      >
        <video
          ref={localVideoRef}
          autoPlay
          playsInline
          muted
          className="chat-video-el chat-video-mirror"
          aria-label="Your video"
        />
        <div className="chat-video-label chat-video-label-local">
          <span className="chat-live-dot chat-live-dot-you" />
          You{isAudioMuted ? ' · muted' : ''}
          {isVideoMuted ? ' · cam off' : ''}
        </div>
        {isVideoMuted && <div className="chat-video-overlay">Camera off</div>}
        {!mediaReady && !isVideoMuted && (
          <div className="chat-video-overlay chat-video-overlay-subtle">Camera preview</div>
        )}
      </div>
    </div>
  );
});

export default ChatVideoStage;
