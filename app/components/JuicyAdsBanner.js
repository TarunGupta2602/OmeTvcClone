'use client';

import { useEffect } from 'react';

const PROVIDER_SRC = 'https://poweredby.jads.co/js/jads.js';
const ZONE_ID = '1129929';

export default function JuicyAdsBanner({ className = '' }) {
  useEffect(() => {
    const slot = document.getElementById(ZONE_ID);
    if (!slot || slot.dataset.juicyInitialized === 'true') return;

    slot.dataset.juicyInitialized = 'true';
    window.adsbyjuicy = window.adsbyjuicy || [];
    window.adsbyjuicy.push({ adzone: Number(ZONE_ID) });

    if (!document.querySelector(`script[src="${PROVIDER_SRC}"]`)) {
      const script = document.createElement('script');
      script.src = PROVIDER_SRC;
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      document.head.appendChild(script);
    }
  }, []);

  return (
    <aside
      className={`mx-auto flex w-[300px] max-w-full flex-col items-center ${className}`}
      aria-label="Advertisement"
    >
      <span className="mb-1 text-[10px] uppercase tracking-wider text-slate-500">Advertisement</span>
      <ins id={ZONE_ID} data-width="300" data-height="250" className="block h-[250px] w-[300px] max-w-full" />
    </aside>
  );
}
