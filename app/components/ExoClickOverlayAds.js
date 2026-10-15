'use client';

import { useEffect, useRef } from 'react';

const ADS_ENABLED = process.env.NEXT_PUBLIC_EXOCLICK_ADS !== 'false';
const PROVIDER_SRC = 'https://a.magsrv.com/ad-provider.js';
const INS_CLASS = 'eas6a97888e2';

/** Sticky / Instant Message / In-page Push — set via env after creating ExoClick zones */
const OVERLAY_ZONES = [
  process.env.NEXT_PUBLIC_EXOCLICK_STICKY_ZONE,
  process.env.NEXT_PUBLIC_EXOCLICK_IM_ZONE,
  process.env.NEXT_PUBLIC_EXOCLICK_PUSH_ZONE,
].filter((id) => id && String(id).trim());

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
 * Loads high-yield ExoClick overlay formats (sticky, instant message, in-page push).
 * No-ops until zone IDs are set in env.
 */
export default function ExoClickOverlayAds() {
  const served = useRef(false);

  useEffect(() => {
    if (!ADS_ENABLED || OVERLAY_ZONES.length === 0 || served.current) return;
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

  if (!ADS_ENABLED || OVERLAY_ZONES.length === 0) return null;

  return (
    <div className="contents" aria-hidden="true">
      {OVERLAY_ZONES.map((zoneId) => (
        <ins key={zoneId} className={INS_CLASS} data-zoneid={zoneId} />
      ))}
    </div>
  );
}
