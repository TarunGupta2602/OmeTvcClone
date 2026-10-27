'use client';

import { useEffect, useRef, useState } from 'react';

const BANNER_SRC =
  '//unfortunateheart.com/b/XXV.sKddG/l/0lYqWScE/QeamZ9/u/ZsUJlmk/P_Tqcx1pNLTRQ_0uMbzOMCtHNiz-Ua1eNfD/QfzGNhwP';

export default function HilltopAdsBanner300x250() {
  const [visible, setVisible] = useState(true);
  const loaded = useRef(false);
  const slotRef = useRef(null);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    // Remove old script if exists
    const old = document.querySelector('script[data-htads="banner-300x250"]');
    if (old) old.remove();

    const s = document.createElement('script');
    s.settings = {};
    s.src = BANNER_SRC;
    s.async = true;
    s.referrerPolicy = 'no-referrer-when-downgrade';
    s.setAttribute('data-htads', 'banner-300x250');

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
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '12px 0',
      }}
      aria-label="Advertisement"
    >
      <div
        ref={slotRef}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '300px',
          height: '250px',
        }}
      />
    </div>
  );
}
