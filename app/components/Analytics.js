'use client';

import { useEffect, useState } from 'react';
import { CONSENT_STORAGE_KEY, hasAnalyticsConsent } from './CookieConsent';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

function injectGtm(id) {
  if (!id || typeof window === 'undefined') return;
  if (window.__parvahGtmLoaded) return;
  window.__parvahGtmLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
  document.head.appendChild(script);
}

export default function Analytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(hasAnalyticsConsent());
    sync();
    window.addEventListener('parvah-consent-change', sync);
    window.addEventListener('storage', (e) => {
      if (e.key === CONSENT_STORAGE_KEY) sync();
    });
    return () => window.removeEventListener('parvah-consent-change', sync);
  }, []);

  useEffect(() => {
    if (allowed && GTM_ID) injectGtm(GTM_ID);
  }, [allowed]);

  if (!allowed || !GTM_ID) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
