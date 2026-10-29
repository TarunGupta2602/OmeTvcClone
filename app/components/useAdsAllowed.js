'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { CONSENT_STORAGE_KEY } from './CookieConsent';
import { AGE_STORAGE_KEY } from './AgeGate';

function readAllowed(pathname) {
  const consent = localStorage.getItem(CONSENT_STORAGE_KEY);
  const choseCookies = consent === 'accepted' || consent === 'declined';
  const ageOk = pathname !== '/' || localStorage.getItem(AGE_STORAGE_KEY) === 'true';
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
