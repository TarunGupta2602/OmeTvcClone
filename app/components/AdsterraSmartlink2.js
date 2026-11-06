'use client';

import { ADSTERRA_SMARTLINK_2 } from '../../lib/adsterra';

export default function AdsterraSmartlink2({ className = '', variant = 'default' }) {
  const dark = variant === 'lobby';

  return (
    <a
      href={ADSTERRA_SMARTLINK_2}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`flex w-full max-w-md flex-col items-center gap-0.5 rounded-xl border px-5 py-3 text-center ${
        dark
          ? 'border-white/20 bg-white/5 text-white hover:bg-white/10'
          : 'border-teal-900/15 bg-white text-teal-950 hover:border-teal-800'
      } ${className}`}
    >
      <span className={`text-[10px] font-semibold uppercase tracking-wider ${dark ? 'text-white/55' : 'text-slate-500'}`}>
        Advertisement
      </span>
      <span className="text-sm font-bold">Exclusive offers & deals</span>
    </a>
  );
}
