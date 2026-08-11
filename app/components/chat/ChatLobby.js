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
          {isConnected ? 'Ready to match' : 'Connecting…'}
        </div>

        <h1 className="chat-lobby-title">
          Random video chat.
          <span className="chat-lobby-title-glow"> Right now.</span>
        </h1>

        <p className="chat-lobby-sub chat-lobby-sub-desktop">
          Tap start, allow your camera, and get matched with someone new in seconds. Free, anonymous,
          worldwide.
        </p>
        <p className="chat-lobby-sub chat-lobby-sub-mobile">
          Tap start, allow camera access, and meet someone new in seconds.
        </p>

        <div className="chat-lobby-cta-wrap">
          <div className="chat-lobby-cta-ring" aria-hidden="true" />
          <button type="button" onClick={onStart} disabled={!isConnected} className="chat-lobby-cta">
            <IconCamera className="w-6 h-6" />
            <span>Start Matching</span>
          </button>
        </div>

        <p className="chat-lobby-fine">18+ only · Camera required · Skip anytime</p>

        <div className="chat-lobby-pills">
          <span>100% Free</span>
          <span>No Signup</span>
          <span>WebRTC Encrypted</span>
        </div>
      </div>
    </section>
  );
}
