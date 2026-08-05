import { IconBlock, IconCamera, IconFlag, IconMic } from './ChatIcons';

function ControlIconButton({ onClick, disabled, active, danger, label, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={`chat-icon-btn ${active ? 'chat-icon-btn-active' : ''} ${danger ? 'chat-icon-btn-danger' : ''}`}
    >
      {children}
    </button>
  );
}

export default function ChatControlBar({
  isConnected,
  inRoom,
  peerId,
  isAudioMuted,
  isVideoMuted,
  isSearching,
  onStart,
  onSkip,
  onStop,
  onReport,
  onBlock,
  onToggleAudio,
  onToggleVideo,
}) {
  const sessionActive = inRoom || isSearching;

  return (
    <div className="chat-control-bar">
      <div className="chat-control-primary">
        {!sessionActive && (
          <button type="button" onClick={onStart} disabled={!isConnected} className="chat-btn chat-btn-start">
            Start
          </button>
        )}
        <button
          type="button"
          onClick={onSkip}
          disabled={!isConnected || !inRoom}
          className={`chat-btn chat-btn-next ${inRoom ? 'chat-btn-next-emphasis' : ''}`}
        >
          Next
        </button>
        <button type="button" onClick={onStop} disabled={!isConnected || !sessionActive} className="chat-btn chat-btn-stop">
          Stop
        </button>
      </div>
      <div className="chat-control-secondary">
        {inRoom && peerId && (
          <>
            <ControlIconButton onClick={onReport} label="Report user" danger>
              <IconFlag className="w-[18px] h-[18px]" />
            </ControlIconButton>
            <ControlIconButton onClick={onBlock} label="Block and skip">
              <IconBlock className="w-[18px] h-[18px]" />
            </ControlIconButton>
          </>
        )}
        <ControlIconButton onClick={onToggleAudio} label={isAudioMuted ? 'Unmute' : 'Mute'} active={isAudioMuted}>
          <IconMic muted={isAudioMuted} className="w-[18px] h-[18px]" />
        </ControlIconButton>
        <ControlIconButton onClick={onToggleVideo} label={isVideoMuted ? 'Camera on' : 'Camera off'} active={isVideoMuted}>
          <IconCamera off={isVideoMuted} className="w-[18px] h-[18px]" />
        </ControlIconButton>
      </div>
    </div>
  );
}
