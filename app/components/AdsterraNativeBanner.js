'use client';

import { useEffect, useRef } from 'react';
import {
  ADSTERRA_NATIVE_CONTAINER_ID,
  ADSTERRA_NATIVE_SRC,
} from '../../lib/adsterra';

export default function AdsterraNativeBanner({ className = '' }) {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    if (document.querySelector(`script[src="${ADSTERRA_NATIVE_SRC}"]`)) return;
    if (!document.getElementById(ADSTERRA_NATIVE_CONTAINER_ID)) return;

    mounted.current = true;
    const script = document.createElement('script');
    script.src = ADSTERRA_NATIVE_SRC;
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    document.body.appendChild(script);
  }, []);

  return (
    <aside
      className={`mx-auto w-full max-w-3xl overflow-hidden ${className}`}
      aria-label="Advertisement"
    >
      <p className="mb-1 text-center text-[10px] uppercase tracking-wider text-slate-500">
        Advertisement
      </p>
      <div id={ADSTERRA_NATIVE_CONTAINER_ID} />
    </aside>
  );
}
