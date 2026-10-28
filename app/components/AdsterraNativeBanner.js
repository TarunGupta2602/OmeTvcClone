'use client';

import { useEffect, useRef } from 'react';
import {
  ADSTERRA_NATIVE_CONTAINER_ID,
  ADSTERRA_NATIVE_SRC,
} from '../../lib/adsterra';

export default function AdsterraNativeBanner({ className = '' }) {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    if (document.querySelector(`script[data-adsterra="native"]`)) return;

    const script = document.createElement('script');
    script.src = ADSTERRA_NATIVE_SRC;
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.setAttribute('data-adsterra', 'native');
    box.appendChild(script);
  }, []);

  return (
    <aside
      className={`mx-auto w-full max-w-3xl overflow-hidden ${className}`}
      aria-label="Advertisement"
    >
      <p className="mb-1 text-center text-[10px] uppercase tracking-wider text-slate-500">
        Advertisement
      </p>
      <div ref={boxRef} id={ADSTERRA_NATIVE_CONTAINER_ID} />
    </aside>
  );
}
