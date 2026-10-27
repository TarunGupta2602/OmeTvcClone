'use client';

import { useEffect } from 'react';
import {
  HILLTOP_INPAGE_PUSH_SRC,
  HILLTOP_VAST_VIDEO_SRC,
  injectHilltopAdScript,
} from '../../lib/hilltopAds';

/** Site-wide: in-page push (all devices) + VAST video (desktop). Loaded after page load for speed. */
export default function HilltopAdsMultiTag() {
  useEffect(() => {
    const load = () => {
      injectHilltopAdScript('in-page-push', HILLTOP_INPAGE_PUSH_SRC);

      if (window.innerWidth >= 768) {
        injectHilltopAdScript('vast-video', HILLTOP_VAST_VIDEO_SRC);
      }
    };

    if (document.readyState === 'complete') {
      load();
      return undefined;
    }

    window.addEventListener('load', load, { once: true });
    return () => window.removeEventListener('load', load);
  }, []);

  return null;
}
