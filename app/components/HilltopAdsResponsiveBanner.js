'use client';

import { useEffect, useState } from 'react';
import HilltopAdsMobileBanner from './HilltopAdsMobileBanner';
import HilltopAdsTopBanner from './HilltopAdsTopBanner';

const DESKTOP_MQ = '(min-width: 768px)';

/** Desktop: Parvah Multitag. Mobile: Parvah mmultitag. Only one mounts — no wasted scripts. */
export default function HilltopAdsResponsiveBanner({ placement = 'default' }) {
  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MQ);
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  if (isDesktop === null) {
    return <div className="w-full min-h-[50px]" aria-hidden="true" />;
  }

  if (isDesktop) {
    return <HilltopAdsTopBanner placement={placement} />;
  }

  return <HilltopAdsMobileBanner placement={placement} />;
}
