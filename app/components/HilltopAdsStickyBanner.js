'use client';

import { useEffect, useRef, useState } from 'react';

const BANNER_SRC =
  '//unfortunateheart.com/b/XXV.sKddG/l/0lYqWScE/QeamZ9/u/ZsUJlmk/P_Tqcx1pNLTRQ_0uMbzOMCtHNiz-Ua1eNfD/QfzGNhwP';

export default function HilltopAdsStickyBanner() {
  const [visible, setVisible] = useState(true);
  const [closed, setClosed] = useState(false);
  const loaded = useRef(false);
  const slotRef = useRef(null);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    // Remove old script if exists
    const old = document.querySelector('script[data-htads="sticky-banner"]');
    if (old) old.remove();

    const s = document.createElement('script');
    s.settings = {};
    s.src = BANNER_SRC;
    s.async = true;
    s.referrerPolicy = 'no-referrer-when-downgrade';
    s.setAttribute('data-htads', 'sticky-banner');

    // Inject script inside the slot div
    if (slotRef.current) {
      slotRef.current.appendChild(s);
    } else {
      document.body.appendChild(s);
    }
  }, []);

  if (closed) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: '#0a0a0a',
        borderTop: '1px solid #222',
        padding: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.3)',
      }}
    >
      <button
        onClick={() => setClosed(true)}
        style={{
          position: 'absolute',
          top: 4,
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
