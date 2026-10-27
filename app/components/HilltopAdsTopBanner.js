'use client';

import { useEffect, useRef, useState } from 'react';

const BANNER_SRC =
  '//unfortunateheart.com/b/XXV.sKddG/l/0lYqWScE/QeamZ9/u/ZsUJlmk/P_Tqcx1pNLTRQ_0uMbzOMCtHNiz-Ua1eNfD/QfzGNhwP';

export default function HilltopAdsTopBanner() {
  const [visible, setVisible] = useState(true);
  const loaded = useRef(false);
  const slotRef = useRef(null);

  // Hide on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

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
        margin: '8px 0',
        position: 'relative',
      }}
      aria-label="Advertisement"
    >
      {/* Banner slot - centered, script injects here */}
      <div
        ref={slotRef}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '728px',
        }}
      />
    </div>
  );
}
