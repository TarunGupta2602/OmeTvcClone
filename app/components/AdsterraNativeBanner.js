'use client';

import { useEffect } from 'react';

/**
 * Adsterra Native Banner for parvah.online
 * Script loads once globally, multiple instances share the same container
 */
export default function AdsterraNativeBanner({ className = '' }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Load script only once globally
    if (!window.__parvahAdsterraNativeBannerLoaded) {
      window.__parvahAdsterraNativeBannerLoaded = true;
      
      const script = document.createElement('script');
      script.async = true;
      script.fetchPriority = 'high';
      script.dataset.cfasync = 'false';
      script.src = 'https://brijmohan.org/21/8e9118693176419a5825d08eeb5ea088';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div id="container-8e9118693176419a5825d08eeb5ea088" className={className} />
  );
}
