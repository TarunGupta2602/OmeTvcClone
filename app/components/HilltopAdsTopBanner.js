'use client';

import { useEffect, useRef, useState } from 'react';

const BANNER_SRC =
  '//unfortunateheart.com/b/XXV.sKddG/l/0lYqWScE/QeamZ9/u/ZsUJlmk/P_Tqcx1pNLTRQ_0uMbzOMCtHNiz-Ua1eNfD/QfzGNhwP';

export default function HilltopAdsTopBanner() {
  const [visible, setVisible] = useState(true);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    if (document.querySelector('script[data-htads="top-banner"]')) return;

    const s = document.createElement('script');
    s.settings = {};
    s.src = BANNER_SRC;
    s.async = true;
    s.referrerPolicy = 'no-referrer-when-downgrade';
    s.setAttribute('data-htads', 'top-banner');
    document.body.appendChild(s);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#111',
        minHeight: '60px',
        position: 'relative',
        zIndex: 40,
        overflow: 'hidden',
      }}
      aria-label="Advertisement"
    >
      <button
        onClick={() => setVisible(false)}
        style={{
          position: 'absolute',
          top: 4,
          right: 8,
          background: 'transparent',
          border: 'none',
          color: '#888',
          fontSize: '16px',
          cursor: 'pointer',
          lineHeight: 1,
          zIndex: 1,
        }}
        aria-label="Close ad"
      >
        ✕
      </button>
      <div id="ht-top-banner-slot" style={{ minWidth: 300, minHeight: 50 }} />
    </div>
  );
}
