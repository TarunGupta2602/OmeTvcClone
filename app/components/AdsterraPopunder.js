'use client';

import { useEffect } from 'react';
import { ADSTERRA_POPUNDER_SRC } from '../../lib/adsterra';
import { useAdsAllowed } from './useAdsAllowed';

export default function AdsterraPopunder() {
  const allowed = useAdsAllowed();

  useEffect(() => {
    if (!allowed) return;
    if (document.querySelector(`script[src="${ADSTERRA_POPUNDER_SRC}"]`)) return;

    const inject = () => {
      if (document.querySelector(`script[src="${ADSTERRA_POPUNDER_SRC}"]`)) return;
      const script = document.createElement('script');
      script.src = ADSTERRA_POPUNDER_SRC;
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      document.body.appendChild(script);
    };

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(inject, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = window.setTimeout(inject, 1500);
    return () => window.clearTimeout(timer);
  }, [allowed]);

  return null;
}
