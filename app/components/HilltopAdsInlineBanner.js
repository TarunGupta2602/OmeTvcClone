'use client';

import { useEffect, useRef } from 'react';

const BANNER_SRC =
  '//unfortunateheart.com/b/XXV.sKddG/l/0lYqWScE/QeamZ9/u/ZsUJlmk/P_Tqcx1pNLTRQ_0uMbzOMCtHNiz-Ua1eNfD/QfzGNhwP';

let scriptLoaded = false;

export default function HilltopAdsInlineBanner({ className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    if (scriptLoaded) return;
    scriptLoaded = true;

    const s = document.createElement('script');
    s.settings = {};
    s.src = BANNER_SRC;
    s.async = true;
    s.referrerPolicy = 'no-referrer-when-downgrade';
    s.setAttribute('data-htads', 'inline-banner');
    if (ref.current) {
      ref.current.appendChild(s);
    } else {
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '60px',
        overflow: 'hidden',
      }}
      aria-label="Advertisement"
    />
  );
}
