'use client';

import { useEffect } from 'react';

// All HilltopAds ad scripts - loaded once per page session
const AD_SCRIPTS = [
  {
    key: 'mobile-popunder',
    src: '//unfortunateheart.com/bcXxVKsRd.Gwl/0ZYnWTct/reEmb9Cu/ZAUKl/kJP/TIcL1cNiTbQf0AMQjZE/twNVzdUk1/NXD-QNyYNgQP',
  },
  {
    key: 'in-page-push',
    src: '//unfortunateheart.com/bOX/V.sTdVGzlH0tYzWAcD/PewmA9ouXZSUJl/kyPtT/cQ1-NaTMQOzHO/TicJt/NmzpUI1bNhDjQQwkMVQI',
  },
];

export default function HilltopAdsMultiTag() {
  useEffect(() => {
    AD_SCRIPTS.forEach(({ key, src }) => {
      if (document.querySelector(`script[data-htads="${key}"]`)) return;

      const s = document.createElement('script');
      s.settings = {};
      s.src = src;
      s.async = true;
      s.referrerPolicy = 'no-referrer-when-downgrade';
      s.setAttribute('data-htads', key);
      document.body.appendChild(s);
    });
  }, []);

  return null;
}
