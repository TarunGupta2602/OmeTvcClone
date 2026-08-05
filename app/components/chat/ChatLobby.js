import { IconCamera } from './ChatIcons';

const FLOATING_TILES = [
  { className: 'chat-lobby-tile-a', label: '🇧🇷', hue: 'violet' },
  { className: 'chat-lobby-tile-b', label: '🇯🇵', hue: 'fuchsia' },
  { className: 'chat-lobby-tile-c', label: '🇺🇸', hue: 'indigo' },
  { className: 'chat-lobby-tile-d', label: '🇩🇪', hue: 'purple' },
  { className: 'chat-lobby-tile-e', label: '🇮🇳', hue: 'rose' },
  { className: 'chat-lobby-tile-f', label: '🇫🇷', hue: 'blue' },
];

export default function ChatLobby({ isConnected, onStart }) {
  return (
    <section className="chat-lobby">
      <div className="chat-lobby-scene" aria-hidden="true">
        <div className="chat-lobby-aurora chat-lobby-aurora-a" />
        <div className="chat-lobby-aurora chat-lobby-aurora-b" />
        <div className="chat-lobby-noise" />
        {FLOATING_TILES.map(({ className, label }) => (
          <div key={className} className={`chat-lobby-tile ${className}`}>
            <div className="chat-lobby-tile-inner">
              <span className="chat-lobby-tile-flag">{label}</span>
              <span className="chat-lobby-tile-live">
                <span className="chat-lobby-tile-dot" />
                Live
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-lobby-center">
        <div className="chat-lobby-status">
          <span className={`chat-lobby-status-dot ${isConnected ? 'is-live' : ''}`} />
          {isConnected ? 'Thousands chatting now' : 'Connecting…'}
        </div>

        <h1 className="chat-lobby-title">
          Random video chat.
          <span className="chat-lobby-title-glow"> Right now.</span>
        </h1>

        <p className="chat-lobby-sub">
          Tap start, allow your camera, and get matched with someone new in seconds. Free, anonymous, worldwide.
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
