'use client';

import { useEffect, useRef, useState } from 'react';

const MOBILE_BANNER_SRC =
  '//unfortunateheart.com/brXxV.sRdTGXli0AYeWFco/_e/mv9runZeUClrkIPCT/cb1QN/T/Q_0UMAjxEGtpNfzhUo1ZNDDHQdygN/Qt';

export default function HilltopAdsMobileBanner() {
  const [visible, setVisible] = useState(true);
  const loaded = useRef(false);
  const slotRef = useRef(null);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    // Remove old script if exists
    const old = document.querySelector('script[data-htads="mobile-banner"]');
    if (old) old.remove();

    const s = document.createElement('script');
    s.settings = {};
    s.src = MOBILE_BANNER_SRC;
    s.async = true;
    s.referrerPolicy = 'no-referrer-when-downgrade';
    s.setAttribute('data-htads', 'mobile-banner');

    // Inject script inside the slot div
    if (slotRef.current) {
      slotRef.current.appendChild(s);
    } else {
      document.body.appendChild(s);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className="md:hidden"
      style={{
        width: '100%',
        background: '#0a0a0a',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '6px 40px 6px 6px',
        minHeight: '70px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid #222',
      }}
      aria-label="Advertisement"
    >
      {/* Close button */}
      <button
        onClick={() => setVisible(false)}
        style={{
          position: 'absolute',
          top: 6,
          right: 8,
          background: 'rgba(255,255,255,0.1)',
          border: 'none',
          color: '#aaa',
          fontSize: '12px',
          cursor: 'pointer',
          borderRadius: '3px',
          padding: '2px 6px',
          zIndex: 2,
        }}
        aria-label="Close ad"
      >
        ✕
      </button>

      {/* Small "Ad" label */}
      <span
        style={{
          position: 'absolute',
          top: 6,
          left: 8,
          fontSize: '10px',
          color: '#555',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        Ad
      </span>

      {/* Banner slot - centered */}
      <div
        ref={slotRef}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '300px',
          minHeight: '50px',
        }}
      />
    </div>
  );
}
