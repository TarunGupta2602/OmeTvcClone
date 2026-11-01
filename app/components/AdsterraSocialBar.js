'use client';

import { useEffect } from 'react';
import { ADSTERRA_SOCIAL_BAR_SRC } from '../../lib/adsterra';
import { useAdsAllowed } from './useAdsAllowed';

export default function AdsterraSocialBar() {
  const allowed = useAdsAllowed();

  useEffect(() => {
    if (!allowed) return;
    if (document.querySelector(`script[src="${ADSTERRA_SOCIAL_BAR_SRC}"]`)) return;

    const script = document.createElement('script');
    script.src = ADSTERRA_SOCIAL_BAR_SRC;
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    document.body.appendChild(script);
  }, [allowed]);

  return null;
}
