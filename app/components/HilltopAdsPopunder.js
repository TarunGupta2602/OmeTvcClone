'use client';

import { useEffect } from 'react';

const PROVIDER_SRC = '/hilltopads-pop.js';
const LOAD_STORAGE_KEY = 'parvah:hilltopads-popunder-loaded-at';
const LOAD_INTERVAL_MS = 24 * 60 * 60 * 1000; // 24 hours

export default function HilltopAdsPopunder() {
  useEffect(() => {
    let lastLoadedAt = 0;

    try {
      lastLoadedAt = Number(window.localStorage.getItem(LOAD_STORAGE_KEY)) || 0;
    } catch {
      // Storage can be unavailable in private browsing; the provider still applies its own limits.
    }

    if (Date.now() - lastLoadedAt < LOAD_INTERVAL_MS) return;
    if (document.querySelector(`script[src="${PROVIDER_SRC}"]`)) return;

    try {
      window.localStorage.setItem(LOAD_STORAGE_KEY, String(Date.now()));
    } catch {
      // Continue without the local cap if storage is blocked.
    }

    const script = document.createElement('script');
    script.src = PROVIDER_SRC;
    script.async = true;
    script.setAttribute('data-cfasync', 'false');

    document.body.appendChild(script);
  }, []);

  return null;
}
