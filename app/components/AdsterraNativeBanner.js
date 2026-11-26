'use client';

import { useEffect } from 'react';

/**
 * Adsterra Native Banner for parvah.online
 */
export default function AdsterraNativeBanner() {
  useEffect(() => {
    if (typeof window === 'undefined' || window.__parvahAdsterraNativeBanner) return;
    window.__parvahAdsterraNativeBanner = true;

    const script = document.createElement('script');
    script.async = true;
    script.fetchPriority = 'high';
    script.dataset.cfasync = 'false';
    script.src = 'https://brijmohan.org/21/8e9118693176419a5825d08eeb5ea088';
    document.body.appendChild(script);
  }, []);

  return (
    <div 
      id="container-8e9118693176419a5825d08eeb5ea088"
      className="w-full min-h-[250px] sm:min-h-[100px]"
      style={{ contain: 'layout' }}
    />
  );
}
