'use client';

import { useEffect, useRef } from 'react';

const ADS_ENABLED = process.env.NEXT_PUBLIC_EXOCLICK_ADS !== 'false';
const PROVIDER_SRC = 'https://a.magsrv.com/ad-provider.js';

/** Each overlay format may use a different ExoClick ins class from Get Code */
const OVERLAY_ADS = [
  {
    zoneId: process.env.NEXT_PUBLIC_EXOCLICK_STICKY_ZONE || '6056618',
    insClass: process.env.NEXT_PUBLIC_EXOCLICK_STICKY_CLASS || 'eas6a97888e17',
  },
  {
    zoneId: process.env.NEXT_PUBLIC_EXOCLICK_IM_ZONE || '',
    insClass: process.env.NEXT_PUBLIC_EXOCLICK_IM_CLASS || 'eas6a97888e2',
  },
  {
    zoneId: process.env.NEXT_PUBLIC_EXOCLICK_PUSH_ZONE || '',
    insClass: process.env.NEXT_PUBLIC_EXOCLICK_PUSH_CLASS || 'eas6a97888e2',
  },
].filter((ad) => ad.zoneId && String(ad.zoneId).trim());

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
 * ExoClick sticky / instant message / in-page push overlays.
 */
export default function ExoClickOverlayAds() {
  const served = useRef(false);

  useEffect(() => {
    if (!ADS_ENABLED || OVERLAY_ADS.length === 0 || served.current) return;
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

  if (!ADS_ENABLED || OVERLAY_ADS.length === 0) return null;

  return (
    <div className="contents" aria-hidden="true">
      {OVERLAY_ADS.map((ad) => (
        <ins key={ad.zoneId} className={ad.insClass} data-zoneid={ad.zoneId} />
      ))}
    </div>
  );
}
