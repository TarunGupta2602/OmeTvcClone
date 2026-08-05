'use client';

import { forwardRef } from 'react';

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
  },
  containerRef
) {
  const showWaiting = !peerId;

  return (
    <div ref={containerRef} className="chat-video-stage">
      {/* Remote / stranger feed */}
      <div
        className={`chat-video-pane chat-video-remote ${
          isLocalVideoFullscreen ? 'chat-video-remote-pip' : ''
        }`}
      >
        <video ref={remoteVideoRef} autoPlay playsInline className="chat-video-el" aria-label="Stranger video" />
        {peerId && (
          <div className="chat-video-label chat-video-label-remote">
            <span className="chat-live-dot" />
            Stranger · {peerId.substring(0, 6)}
          </div>
        )}
        {showWaiting && (
          <div className="chat-video-placeholder">
            <div className="chat-pulse-ring">
              <div className="chat-pulse-core" />
            </div>
            <p className="chat-placeholder-title">{isSearching ? 'Finding your match…' : 'Waiting to connect'}</p>
            <p className="chat-placeholder-sub">{status}</p>
          </div>
        )}
      </div>

      {/* Local PiP */}
      <div
        className={`chat-video-pane chat-video-local ${isLocalVideoFullscreen ? 'chat-video-local-expanded' : ''}`}
        style={!isLocalVideoFullscreen ? { transform: `translate(${pipPosition.x}px, ${pipPosition.y}px)` } : undefined}
        onMouseDown={onPipDragStart}
        onTouchStart={onPipDragStart}
      >
        <video ref={localVideoRef} autoPlay playsInline muted className="chat-video-el chat-video-mirror" aria-label="Your video" />
        <div className="chat-video-label chat-video-label-local">
          <span className="chat-live-dot chat-live-dot-you" />
          You{isAudioMuted ? ' · muted' : ''}
        </div>
        {isVideoMuted && <div className="chat-video-overlay">Camera off</div>}
        {!mediaReady && !isVideoMuted && (
          <div className="chat-video-overlay chat-video-overlay-subtle">Preview after Start</div>
        )}
      </div>
    </div>
  );
});

export default ChatVideoStage;
