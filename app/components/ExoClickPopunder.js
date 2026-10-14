'use client';

import { useEffect } from 'react';

/** Set NEXT_PUBLIC_EXOCLICK_ADS=false to disable without redeploying code. */
const ADS_ENABLED = process.env.NEXT_PUBLIC_EXOCLICK_ADS !== 'false';

/**
 * ExoClick popunder (zone 6055122) — Inline + Remote AdBlock recovery tag.
 * Fires on link clicks, capped at 1 per hour.
 */
export default function ExoClickPopunder() {
  useEffect(() => {
    if (!ADS_ENABLED) return;
    if (typeof window === 'undefined' || window.__parvahExoPopunder) return;
    window.__parvahExoPopunder = true;

    const script = document.createElement('script');
    script.type = 'application/javascript';
    script.async = true;
    script.src = '/ads/exoclick-popunder.js';
    document.body.appendChild(script);
  }, []);

  return null;
}
