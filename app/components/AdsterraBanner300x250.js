'use client';

import AdsterraNativeBanner from './AdsterraNativeBanner';
import AdsterraSmartlink from './AdsterraSmartlink';
import { useAdsAllowed } from './useAdsAllowed';

export default function AdsterraBanner300x250({ className = '' }) {
  const allowed = useAdsAllowed();

  return (
    <div className={`mx-auto flex w-full max-w-3xl flex-col items-center gap-5 ${className}`}>
      <AdsterraNativeBanner />
      <aside
        className="flex w-[300px] max-w-full flex-col items-center"
        aria-label="Advertisement"
      >
        <p className="mb-1 text-[10px] uppercase tracking-wider text-slate-500">Advertisement</p>
        <iframe
          title="Advertisement"
          src={allowed ? '/ads/300x250.html' : undefined}
          width={300}
          height={250}
          scrolling="no"
          frameBorder="0"
          loading="lazy"
          className="h-[250px] w-[300px] max-w-full border-0 bg-transparent"
        />
      </aside>
      <AdsterraSmartlink />
    </div>
  );
}
