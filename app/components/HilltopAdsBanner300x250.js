'use client';

import { useEffect, useRef, useState } from 'react';

import { HILLTOP_MULTITAG_BANNER_SRC, injectHilltopAdScript } from '../../lib/hilltopAds';

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

    injectHilltopAdScript(
      'banner-300x250',
      HILLTOP_MULTITAG_BANNER_SRC,
      slotRef.current || document.body,
    );
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
