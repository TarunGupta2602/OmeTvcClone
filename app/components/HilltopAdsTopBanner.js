'use client';

import { useEffect, useRef } from 'react';
import { HILLTOP_MULTITAG_BANNER_SRC, injectHilltopAdScript } from '../../lib/hilltopAds';

export default function HilltopAdsTopBanner({ placement = 'default' }) {
  const loaded = useRef(false);
  const slotRef = useRef(null);
  const scriptKey = `multitag-banner-desktop-${placement}`;

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    injectHilltopAdScript(
      scriptKey,
      HILLTOP_MULTITAG_BANNER_SRC,
      slotRef.current || document.body,
    );
  }, [scriptKey]);

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
