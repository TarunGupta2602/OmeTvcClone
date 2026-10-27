'use client';

import { useEffect } from 'react';
import { HILLTOP_POPUNDER_SRC } from '../../lib/hilltopAds';

const LOAD_STORAGE_KEY = 'parvah:hilltopads-popunder-loaded-at';
const LOAD_INTERVAL_MS = 60 * 60 * 1000; // 1 hour between popunder script loads

export default function HilltopAdsPopunder() {
  useEffect(() => {
    const load = () => {
      let lastLoadedAt = 0;

      try {
        lastLoadedAt = Number(window.localStorage.getItem(LOAD_STORAGE_KEY)) || 0;
      } catch {
        // private mode
      }

      if (Date.now() - lastLoadedAt < LOAD_INTERVAL_MS) return;
      if (document.querySelector(`script[src="${HILLTOP_POPUNDER_SRC}"]`)) return;

      try {
        window.localStorage.setItem(LOAD_STORAGE_KEY, String(Date.now()));
      } catch {
        // continue
      }

      const script = document.createElement('script');
      script.src = HILLTOP_POPUNDER_SRC;
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      document.body.appendChild(script);
    };

    if (document.readyState === 'complete') {
      load();
      return undefined;
    }

    window.addEventListener('load', load, { once: true });
    return () => window.removeEventListener('load', load);
  }, []);

  return null;
}
