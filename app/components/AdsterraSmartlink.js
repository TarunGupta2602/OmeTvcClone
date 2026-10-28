'use client';

import { ADSTERRA_SMARTLINK } from '../../lib/adsterra';

export default function AdsterraSmartlink({ className = '' }) {
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
