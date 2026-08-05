import { ImageResponse } from 'next/og';

export const alt = 'Parvah — Free Random Video Chat with Strangers';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #e11d48 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: 'rgba(255,255,255,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              fontWeight: 800,
              color: 'white',
            }}
          >
            P
          </div>
          <span style={{ fontSize: 28, fontWeight: 800, color: 'white' }}>Parvah</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 900 }}>
          <div style={{ fontSize: 56, fontWeight: 800, color: 'white', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Free Random Video Chat
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, color: 'rgba(255,255,255,0.9)', lineHeight: 1.3 }}>
            Talk to strangers online — no signup, WebRTC privacy, instant matching
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 22, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>parvah.online</span>
          <span style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)' }}>Omegle & OmeTV Alternative</span>
        </div>
      </div>
    ),
    size
  );
}
