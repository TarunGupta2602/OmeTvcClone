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

    // Load immediately for better ad fill rate
    inject();
  }, [allowed]);

  return null;
}
