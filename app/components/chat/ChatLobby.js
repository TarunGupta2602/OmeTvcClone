import { IconCamera } from './ChatIcons';

export default function ChatLobby({ isConnected, onStart }) {
  return (
    <section className="chat-lobby">
      <div className="chat-lobby-scene" aria-hidden="true">
        <div className="chat-lobby-aurora chat-lobby-aurora-a" />
        <div className="chat-lobby-aurora chat-lobby-aurora-b" />
        <div className="chat-lobby-noise" />
      </div>

      <div className="chat-lobby-center">
        <div className="chat-lobby-status">
          <span className={`chat-lobby-status-dot ${isConnected ? 'is-live' : ''}`} />
          {isConnected ? 'Adults online now' : 'Connecting…'}
        </div>

        <h1 className="chat-lobby-title">
          Adult video chat.
          <span className="chat-lobby-title-glow"> Meet someone new.</span>
        </h1>

        <p className="chat-lobby-sub chat-lobby-sub-desktop">
          Free 1-on-1 random webcam chat for flirty talks, late-night chemistry, and real
          connections. No signup — adults 18+ only.
        </p>
        <p className="chat-lobby-sub chat-lobby-sub-mobile">
          Free flirty random video chat. Tap start and meet someone new — 18+ only.
        </p>

        <div className="chat-lobby-cta-wrap">
          <div className="chat-lobby-cta-ring" aria-hidden="true" />
          <button type="button" onClick={onStart} disabled={!isConnected} className="chat-lobby-cta">
            <IconCamera className="w-6 h-6" />
            <span>Start Matching</span>
          </button>
        </div>

        <p className="chat-lobby-fine">18+ adults only · Consent required · Skip anytime</p>

        <div className="chat-lobby-pills">
          <span>100% Free</span>
          <span>No Signup</span>
          <span>Flirty &amp; Real</span>
          <span>WebRTC Private</span>
        </div>
      </div>
    </section>
  );
}
