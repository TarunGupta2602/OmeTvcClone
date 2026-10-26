'use client';

import { useEffect } from 'react';

const PROVIDER_SRC =
  '//unfortunateheart.com/bOX/V.sTdVGzlH0tYzWAcD/PewmA9ouXZSUJl/kyPtT/cQ1-NaTMQOzHO/TicJt/NmzpUI1bNhDjQQwkMVQI';

export default function HilltopAdsInPagePush() {
  useEffect(() => {
    if (document.querySelector(`script[src="${PROVIDER_SRC}"]`)) return;

    const s = document.createElement('script');
    s.settings = {};
    s.src = PROVIDER_SRC;
    s.async = true;
    s.referrerPolicy = 'no-referrer-when-downgrade';
    document.body.appendChild(s);
  }, []);

  return null;
}
