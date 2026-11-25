'use client';

import { useEffect } from 'react';

/**
 * Adsterra Social Bar for parvah.online
 */
export default function AdsterraSocialBar() {
  useEffect(() => {
    if (typeof window === 'undefined' || window.__parvahAdsterraSocialBar) return;
    window.__parvahAdsterraSocialBar = true;

    const script = document.createElement('script');
    script.dataset.cfasync = 'false';
    script.src = 'https://brijmohan.org/14/6a0eaf48169031e093bf3376bf7b0c33';
    document.body.appendChild(script);
  }, []);

  return null;
}
