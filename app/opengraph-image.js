import { ImageResponse } from 'next/og';

export const alt = 'Free random video chat with strangers — no signup, 18+';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 64px',
          background: '#042f2e',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            background: '#0f766e',
            borderRadius: 999,
            padding: '10px 22px',
            width: 'auto',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.04em',
          }}
        >
          Free · No signup · 18+
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 980 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
          >
            Random video chat with strangers
          </div>
          <div style={{ fontSize: 28, color: 'rgba(255,255,255,0.78)', lineHeight: 1.35, maxWidth: 820 }}>
            Instant 1-on-1 webcam matching in your browser. Talk, flirt, or skip anytime.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: '#0f766e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 26,
                fontWeight: 800,
              }}
            >
              P
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 24, fontWeight: 700 }}>Parvah</span>
              <span style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)' }}>parvah.online</span>
            </div>
          </div>
          <div style={{ fontSize: 20, fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
            Invite a friend — matches fill faster
          </div>
        </div>
      </div>
    ),
    size
  );
}
