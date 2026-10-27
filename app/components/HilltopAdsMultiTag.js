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
  {
    key: 'banner-300x250',
    src: '//unfortunateheart.com/b/XXV.sKddG/l/0lYqWScE/QeamZ9/u/ZsUJlmk/P_Tqcx1pNLTRQ_0uMbzOMCtHNiz-Ua1eNfD/QfzGNhwP',
  },
  {
    key: 'video-slider',
    src: '//unfortunateheart.com/btXqV/sjd.Gjlr0aY/WCcX/geymP9ku_ZeUjlokIPjTIcE1ENzTkQ_0TNjD/kpt/NtzhUB1/NqD/Qu1oMdwz',
  },
  {
    key: 'banner-300x100-mobile',
    src: '//unfortunateheart.com/brXxV.sRdTGXli0AYeWFco/_e/mv9runZeUClrkIPCT/cb1QN/T/Q_0UMAjxEGtpNfzhUo1ZNDDHQdygN/Qt',
  },
];

export default function HilltopAdsMultiTag() {
  useEffect(() => {
    AD_SCRIPTS.forEach(({ key, src }) => {
      // On mobile: only load popunder and in-page push
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        // Skip all banner ads on mobile
        if (key === 'video-slider') return;
        if (key === 'banner-300x250') return;
        if (key === 'banner-300x100-mobile') return;
      } else {
        // On desktop: skip mobile banner
        if (key === 'banner-300x100-mobile') return;
      }

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
