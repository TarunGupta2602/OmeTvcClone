'use client';

import { useEffect } from 'react';

/**
 * Adsterra Popunder for parvah.online
 * Triggers on first click, then once per hour per user
 */
export default function AdsterraPopunder() {
  useEffect(() => {
    if (typeof window === 'undefined' || window.__parvahAdsterraPopunder) return;
    window.__parvahAdsterraPopunder = true;

    // Load Adsterra Popunder script
    const script = document.createElement('script');
    script.dataset.cfasync = 'false';
    script.src = 'https://ahuramazda.org/1/e170b998166b796e22c620b5d3392de4';
    document.body.appendChild(script);

    // Global click listener with rate limiting (once per hour)
    const handleClick = () => {
      const STORAGE_KEY = 'parvah_popunder_last_trigger';
      const ONE_HOUR = 60 * 60 * 1000; // 1 hour in milliseconds

      const lastTrigger = localStorage.getItem(STORAGE_KEY);
      const now = Date.now();

      // Check if 1 hour has passed since last trigger
      if (!lastTrigger || now - parseInt(lastTrigger) > ONE_HOUR) {
        // Trigger popunder (Adsterra script handles this)
        localStorage.setItem(STORAGE_KEY, now.toString());
        console.log('Popunder triggered');
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
