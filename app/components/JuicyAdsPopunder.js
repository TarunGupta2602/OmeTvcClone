'use client';

import { useEffect } from 'react';

const PROVIDER_SRC =
  'https://js.juicyads.com/jp.php?c=4474y2z2x294u4r2p2d443a424&u=https%3A%2F%2Fwww.juicyads.rocks';
const LOAD_STORAGE_KEY = 'parvah:juicyads-popunder-loaded-at';
const LOAD_INTERVAL_MS = 24 * 60 * 60 * 1000;

export default function JuicyAdsPopunder() {
  useEffect(() => {
    let lastLoadedAt = 0;

    try {
      lastLoadedAt = Number(window.localStorage.getItem(LOAD_STORAGE_KEY)) || 0;
    } catch {
      // Storage can be unavailable in private browsing; the provider still applies its own limits.
    }

    if (Date.now() - lastLoadedAt < LOAD_INTERVAL_MS) return;
    if (document.querySelector(`script[src="${PROVIDER_SRC}"]`)) return;

    window.juicy_tags = ['a', 'img'];

    const script = document.createElement('script');
    script.src = PROVIDER_SRC;
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.dataset.juicyPopunder = 'friendly';

    try {
      window.localStorage.setItem(LOAD_STORAGE_KEY, String(Date.now()));
    } catch {
      // Continue without the local cap if storage is blocked.
    }

    document.body.appendChild(script);
  }, []);

  return null;
}
