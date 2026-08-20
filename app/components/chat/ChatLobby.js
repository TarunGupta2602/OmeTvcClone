import { IconCamera } from './ChatIcons';

function formatOnlineCount(count) {
  if (typeof count !== 'number' || count < 1) return null;
  return count.toLocaleString();
}

export default function ChatLobby({ isConnected, onlineCount, onStart }) {
  const formattedCount = formatOnlineCount(onlineCount);
  const statusLabel = !isConnected
    ? 'Connecting…'
    : formattedCount
      ? `${formattedCount} online`
      : 'People online now';

  return (
    <section className="chat-lobby">
      <div className="chat-lobby-scene" aria-hidden="true">
        <div className="chat-lobby-aurora chat-lobby-aurora-a" />
        <div className="chat-lobby-aurora chat-lobby-aurora-b" />
        <div className="chat-lobby-noise" />
      </div>

      <div className="chat-lobby-center">
        <div className="chat-lobby-status" aria-live="polite">
          <span className={`chat-lobby-status-dot ${isConnected ? 'is-live' : ''}`} />
          {statusLabel}
        </div>

        <h1 className="chat-lobby-title">
          Random video chat
          <span className="chat-lobby-title-glow"> with strangers.</span>
        </h1>

        <p className="chat-lobby-sub chat-lobby-sub-desktop">
          Free 1-on-1 webcam chat — no signup. Meet someone new in seconds for talk, flirt, or real
          connection. Adults 18+ only.
        </p>
        <p className="chat-lobby-sub chat-lobby-sub-mobile">
          Free random video chat with strangers. Tap start — no signup, 18+ only.
        </p>

        <div className="chat-lobby-cta-wrap">
          <div className="chat-lobby-cta-ring" aria-hidden="true" />
          <button type="button" onClick={onStart} disabled={!isConnected} className="chat-lobby-cta">
            <IconCamera className="w-6 h-6" />
            <span>Start Matching</span>
          </button>
        </div>

        <p className="chat-lobby-fine">18+ only · No signup · Skip anytime</p>

        <div className="chat-lobby-pills">
          <span>100% Free</span>
          <span>No Signup</span>
          <span>1-on-1 Video</span>
          <span>Worldwide</span>
        </div>
      </div>
    </section>
  );
}
