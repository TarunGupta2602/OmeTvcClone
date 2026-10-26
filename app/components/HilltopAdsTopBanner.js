'use client';

import { useEffect, useRef, useState } from 'react';

const BANNER_SRC =
  '//unfortunateheart.com/b/XXV.sKddG/l/0lYqWScE/QeamZ9/u/ZsUJlmk/P_Tqcx1pNLTRQ_0uMbzOMCtHNiz-Ua1eNfD/QfzGNhwP';

export default function HilltopAdsTopBanner() {
  const [visible, setVisible] = useState(true);
  const loaded = useRef(false);
  const slotRef = useRef(null);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    // Remove old script if exists
    const old = document.querySelector('script[data-htads="top-banner"]');
    if (old) old.remove();

    const s = document.createElement('script');
    s.settings = {};
    s.src = BANNER_SRC;
    s.async = true;
    s.referrerPolicy = 'no-referrer-when-downgrade';
    s.setAttribute('data-htads', 'top-banner');

    // Inject script inside the slot div so MultiTag places ad here
    if (slotRef.current) {
      slotRef.current.appendChild(s);
    } else {
      document.body.appendChild(s);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '6px 40px 6px 6px',
        minHeight: '70px',
        position: 'relative',
        overflow: 'hidden',
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

      {/* Banner slot - centered, script injects here */}
      <div
        ref={slotRef}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '728px',
          minHeight: '50px',
        }}
      />
    </div>
  );
}
