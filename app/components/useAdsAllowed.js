'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { CONSENT_STORAGE_KEY } from './CookieConsent';
import { AGE_STORAGE_KEY } from './AgeGate';

function readAllowed(pathname) {
  const consent = localStorage.getItem(CONSENT_STORAGE_KEY);
  const choseCookies = consent === 'accepted' || consent === 'declined';
  
  // Allow ads on blog and SEO pages without age confirmation
  // Only require age gate on homepage (/)
  const isBlogOrSeoPage = pathname.startsWith('/blog') || 
                          pathname !== '/' && pathname.startsWith('/omegle') ||
                          pathname !== '/' && pathname.startsWith('/adult') ||
                          pathname !== '/' && pathname.startsWith('/random') ||
                          pathname !== '/' && pathname.startsWith('/video-chat') ||
                          pathname !== '/' && pathname.startsWith('/chat') ||
                          pathname !== '/' && pathname.startsWith('/anonymous') ||
                          pathname !== '/' && pathname.startsWith('/free') ||
                          pathname !== '/' && pathname.startsWith('/meet') ||
                          pathname !== '/' && pathname.startsWith('/talk') ||
                          pathname !== '/' && pathname.startsWith('/live') ||
                          pathname !== '/' && pathname.startsWith('/hot') ||
                          pathname !== '/' && pathname.startsWith('/flirty') ||
                          pathname !== '/' && pathname.startsWith('/dirty') ||
                          pathname !== '/' && pathname.startsWith('/late') ||
                          pathname !== '/' && pathname.startsWith('/girls') ||
                          pathname !== '/' && pathname.startsWith('/emerald') ||
                          pathname !== '/' && pathname.startsWith('/chatroulette') ||
                          pathname !== '/' && pathname.startsWith('/ometv');
  
  const ageOk = isBlogOrSeoPage || localStorage.getItem(AGE_STORAGE_KEY) === 'true';
  return choseCookies && ageOk;
}

export function useAdsAllowed() {
  const pathname = usePathname();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(readAllowed(pathname));
    sync();
    window.addEventListener('parvah-consent-change', sync);
    window.addEventListener('parvah-age-confirmed', sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener('parvah-consent-change', sync);
      window.removeEventListener('parvah-age-confirmed', sync);
      window.removeEventListener('storage', sync);
    };
  }, [pathname]);

  return allowed;
}
