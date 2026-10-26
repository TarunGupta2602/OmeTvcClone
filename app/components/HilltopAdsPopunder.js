'use client';

import { useEffect } from 'react';

const PROVIDER_SRC = '/hilltopads-pop.js';

export default function HilltopAdsPopunder() {
  useEffect(() => {
    // Script already injected (SPA navigation ke baad dobara inject nahi hoga)
    if (document.querySelector(`script[src="${PROVIDER_SRC}"]`)) return;

    const script = document.createElement('script');
    script.src = PROVIDER_SRC;
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    document.body.appendChild(script);
  }, []);

  return null;
}
