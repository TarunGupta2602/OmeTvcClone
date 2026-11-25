'use client';

import { useEffect } from 'react';

/**
 * Adsterra Smartlink for parvah.online
 */
export default function AdsterraSmartlink() {
  useEffect(() => {
    if (typeof window === 'undefined' || window.__parvahAdsterraSmartlink) return;
    window.__parvahAdsterraSmartlink = true;

    const script = document.createElement('script');
    script.src = 'https://asiaso.org/4/21cdaddde629d944fa248872c3071fda';
    document.body.appendChild(script);
  }, []);

  return null;
}
