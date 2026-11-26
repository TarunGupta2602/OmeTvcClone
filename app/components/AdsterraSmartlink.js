'use client';

import { useEffect } from 'react';

/**
 * Adsterra Smartlink for parvah.online
 * Triggers on first click, then once per hour per user
 */
export default function AdsterraSmartlink() {
  useEffect(() => {
    if (typeof window === 'undefined' || window.__parvahAdsterraSmartlink) return;
    window.__parvahAdsterraSmartlink = true;

    // Load Adsterra Smartlink script
    const script = document.createElement('script');
    script.src = 'https://asiaso.org/4/21cdaddde629d944fa248872c3071fda';
    document.body.appendChild(script);

    // Global click listener with rate limiting (once per hour)
    const handleClick = (e) => {
      const STORAGE_KEY = 'parvah_smartlink_last_trigger';
      const ONE_HOUR = 60 * 60 * 1000; // 1 hour in milliseconds

      const lastTrigger = localStorage.getItem(STORAGE_KEY);
      const now = Date.now();

      // Check if 1 hour has passed since last trigger
      if (!lastTrigger || now - parseInt(lastTrigger) > ONE_HOUR) {
        // Open smartlink in new window
        const smartlinkUrl = 'https://asiaso.org/4/21cdaddde629d944fa248872c3071fda';
        window.open(smartlinkUrl, '_blank');
        
        localStorage.setItem(STORAGE_KEY, now.toString());
        console.log('Smartlink triggered');
      }
    };

    // Add global click listener
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
