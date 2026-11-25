'use client';

import { useEffect } from 'react';

/**
 * Adsterra Popunder for parvah.online
 */
export default function AdsterraPopunder() {
  useEffect(() => {
    if (typeof window === 'undefined' || window.__parvahAdsterraPopunder) return;
    window.__parvahAdsterraPopunder = true;

    const script = document.createElement('script');
    script.dataset.cfasync = 'false';
    script.src = 'https://ahuramazda.org/1/e170b998166b796e22c620b5d3392de4';
    document.body.appendChild(script);
  }, []);

  return null;
}
