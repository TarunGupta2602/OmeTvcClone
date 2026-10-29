'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  ADSTERRA_NATIVE_CONTAINER_ID,
  ADSTERRA_NATIVE_SRC,
} from '../../lib/adsterra';
import { useAdsAllowed } from './useAdsAllowed';

export default function AdsterraNativeBanner({ className = '' }) {
  const boxRef = useRef(null);
  const pathname = usePathname();
  const allowed = useAdsAllowed();
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const box = boxRef.current;
    if (!box || !allowed) return;

    const mark = () => setFilled(box.offsetHeight > 24);
    mark();
    const observer = new MutationObserver(mark);
    observer.observe(box, { childList: true, subtree: true });

    document.querySelectorAll('script[data-adsterra="native"]').forEach((node) => {
      node.remove();
    });
    box.replaceChildren();

    const script = document.createElement('script');
    script.src = ADSTERRA_NATIVE_SRC;
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.setAttribute('data-adsterra', 'native');
    document.body.appendChild(script);

    return () => {
      observer.disconnect();
      script.remove();
      setFilled(false);
    };
  }, [pathname, allowed]);

  if (!allowed) return null;

  return (
    <aside
      className={`mx-auto w-full max-w-3xl overflow-hidden ${filled ? '' : 'h-0'} ${className}`}
      aria-label={filled ? 'Advertisement' : undefined}
      aria-hidden={filled ? undefined : true}
    >
      {filled && (
        <p className="mb-1 text-center text-[10px] uppercase tracking-wider text-slate-500">
          Advertisement
        </p>
      )}
      <div ref={boxRef} id={ADSTERRA_NATIVE_CONTAINER_ID} />
    </aside>
  );
}
