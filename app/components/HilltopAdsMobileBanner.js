'use client';

import { useEffect, useRef, useState } from 'react';
import { HILLTOP_MULTITAG_MOBILE_BANNER_SRC, injectHilltopAdScript } from '../../lib/hilltopAds';

export default function HilltopAdsMobileBanner({ placement = 'default' }) {
  const [visible, setVisible] = useState(true);
  const loaded = useRef(false);
  const slotRef = useRef(null);
  const scriptKey = `multitag-banner-mobile-${placement}`;

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    injectHilltopAdScript(
      scriptKey,
      HILLTOP_MULTITAG_MOBILE_BANNER_SRC,
      slotRef.current || document.body,
    );
  }, [scriptKey]);

  if (!visible) return null;

  return (
    <div
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
      <button
        type="button"
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
