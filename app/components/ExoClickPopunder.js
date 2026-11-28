'use client';

import { useEffect } from 'react';

const ADS_ENABLED = process.env.NEXT_PUBLIC_EXOCLICK_ADS !== 'false';

export default function ExoClickPopunder() {
  useEffect(() => {
    if (!ADS_ENABLED || typeof window === 'undefined' || window.__parvahExoPopunder) return;
    window.__parvahExoPopunder = true;

    const script = document.createElement('script');
    script.type = 'application/javascript';
    script.async = true;
    script.src = '/ads/exoclick-popunder.js';
    document.body.appendChild(script);
  }, []);

  return null;
}
