'use client';

import { useEffect } from 'react';
import { HILLTOP_INPAGE_PUSH_SRC, injectHilltopAdScript } from '../../lib/hilltopAds';

export default function HilltopAdsInPagePush() {
  useEffect(() => {
    injectHilltopAdScript('in-page-push', HILLTOP_INPAGE_PUSH_SRC);
  }, []);

  return null;
}
