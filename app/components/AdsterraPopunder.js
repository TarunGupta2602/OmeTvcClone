'use client';

import { useEffect } from 'react';
import { ADSTERRA_POPUNDER_SRC } from '../../lib/adsterra';
import { useAdsAllowed } from './useAdsAllowed';

export default function AdsterraPopunder() {
  const allowed = useAdsAllowed();

  useEffect(() => {
    if (!allowed) return;

    // Check if popunder was triggered in the last 30 minutes (from AppShell)
    const POPUNDER_KEY = 'parvah_popunder_last_trigger';
    const THIRTY_MINUTES_MS = 30 * 60 * 1000;
    const lastTrigger = localStorage.getItem(POPUNDER_KEY);
    const now = Date.now();

    // Skip script injection if popunder was triggered recently
    if (lastTrigger && now - parseInt(lastTrigger) < THIRTY_MINUTES_MS) {
      return;
    }

    if (document.querySelector(`script[src="${ADSTERRA_POPUNDER_SRC}"]`)) return;

    const inject = () => {
      if (document.querySelector(`script[src="${ADSTERRA_POPUNDER_SRC}"]`)) return;
      const script = document.createElement('script');
      script.src = ADSTERRA_POPUNDER_SRC;
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      document.body.appendChild(script);
    };

    // Load immediately for better ad fill rate
    inject();
  }, [allowed]);

  return null;
}
