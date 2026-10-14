'use client';

import { useEffect, useRef } from 'react';

const ZONE_ID = process.env.NEXT_PUBLIC_EXOCLICK_BANNER_ZONE || '6055136';
const ADS_ENABLED = process.env.NEXT_PUBLIC_EXOCLICK_ADS !== 'false';
const PROVIDER_SRC = 'https://a.magsrv.com/ad-provider.js';
/** Account-specific class from ExoClick banner tag */
const INS_CLASS = 'eas6a97888e2';

function ensureAdProvider() {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.__parvahExoProviderReady) return window.__parvahExoProviderReady;

  window.__parvahExoProviderReady = new Promise((resolve) => {
    const existing = document.querySelector(`script[src="${PROVIDER_SRC}"]`);
    if (existing) {
      if (existing.dataset.loaded === '1') resolve();
      else existing.addEventListener('load', () => resolve(), { once: true });
      return;
    }
    const script = document.createElement('script');
    script.async = true;
    script.type = 'application/javascript';
    script.src = PROVIDER_SRC;
    script.onload = () => {
      script.dataset.loaded = '1';
      resolve();
    };
    script.onerror = () => resolve();
    document.head.appendChild(script);
  });

  return window.__parvahExoProviderReady;
}

/**
 * ExoClick 300×250 banner (zone 6055136).
 */
export default function ExoClickBanner({ className = '' }) {
  const served = useRef(false);

  useEffect(() => {
    if (!ADS_ENABLED || !ZONE_ID || served.current) return;
    let cancelled = false;

    ensureAdProvider().then(() => {
      if (cancelled) return;
      served.current = true;
      window.AdProvider = window.AdProvider || [];
      window.AdProvider.push({ serve: {} });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!ADS_ENABLED || !ZONE_ID) return null;

  return (
    <aside
      className={`flex justify-center items-center w-full min-h-[250px] ${className}`}
      aria-label="Advertisement"
    >
      <ins className={INS_CLASS} data-zoneid={ZONE_ID} />
    </aside>
  );
}
