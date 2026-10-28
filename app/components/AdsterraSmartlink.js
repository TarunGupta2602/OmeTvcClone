'use client';

import { ADSTERRA_SMARTLINK } from '../../lib/adsterra';

export default function AdsterraSmartlink({ className = '', variant = 'default' }) {
  if (variant === 'prominent') {
    return (
      <a
        href={ADSTERRA_SMARTLINK}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className={`inline-flex min-h-14 w-full max-w-md items-center justify-center rounded-2xl bg-gradient-to-r from-teal-600 to-teal-800 px-6 text-base font-bold text-white shadow-lg shadow-teal-900/20 hover:from-teal-700 hover:to-teal-900 hover:shadow-xl hover:shadow-teal-900/30 transition-all duration-200 animate-pulse ${className}`}
      >
        🔥 Hot Deals & Exclusive Offers
      </a>
    );
  }

  return (
    <a
      href={ADSTERRA_SMARTLINK}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-xl bg-teal-800 px-5 text-sm font-bold text-white hover:bg-teal-900 ${className}`}
    >
      Featured offers
    </a>
  );
}
