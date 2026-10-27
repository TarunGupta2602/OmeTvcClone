'use client';

import { useEffect } from 'react';
import { ADSTERRA_POPUNDER_SRC } from '../../lib/adsterra';

export default function AdsterraPopunder() {
  useEffect(() => {
    if (document.querySelector(`script[src="${ADSTERRA_POPUNDER_SRC}"]`)) return;

    const script = document.createElement('script');
    script.src = ADSTERRA_POPUNDER_SRC;
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    document.body.appendChild(script);
  }, []);

  return null;
}
