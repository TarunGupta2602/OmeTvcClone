'use client';

import { useEffect, useRef, useState } from 'react';
import AdsterraNativeBanner from './AdsterraNativeBanner';
import AdsterraSmartlink from './AdsterraSmartlink';
import { useAdsAllowed } from './useAdsAllowed';

function bannerHasCreative(iframe) {
  const body = iframe.contentDocument?.body;
  if (!body) return false;
  return Boolean(body.querySelector('iframe, img, a, canvas, ins, div'));
}

export default function AdsterraBanner300x250({ className = '' }) {
  const allowed = useAdsAllowed();
  const iframeRef = useRef(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    if (!allowed) return undefined;
    const iframe = iframeRef.current;
    if (!iframe) return undefined;

    let observer;
    const watch = () => {
      observer?.disconnect();
      try {
        if (bannerHasCreative(iframe)) setFilled(true);
        const body = iframe.contentDocument?.body;
        if (!body) return;
        observer = new MutationObserver(() => {
          if (bannerHasCreative(iframe)) setFilled(true);
        });
        observer.observe(body, { childList: true, subtree: true });
      } catch {
        // The network replaced this document with its own ad frame.
        setFilled(true);
      }
    };

    iframe.addEventListener('load', watch);
    return () => {
      iframe.removeEventListener('load', watch);
      observer?.disconnect();
      setFilled(false);
    };
  }, [allowed]);

  return (
    <div className={`mx-auto flex w-full max-w-3xl flex-col items-center gap-5 ${className}`}>
      <AdsterraNativeBanner />
      {allowed && (
        <aside
          className={filled ? 'flex w-[300px] max-w-full flex-col items-center' : 'h-0 overflow-hidden'}
          aria-label={filled ? 'Advertisement' : undefined}
          aria-hidden={filled ? undefined : true}
        >
          {filled && (
            <p className="mb-1 text-[10px] uppercase tracking-wider text-slate-500">Advertisement</p>
          )}
          <iframe
            ref={iframeRef}
            title="Advertisement"
            src="/ads/300x250.html"
            width={300}
            height={250}
            scrolling="no"
            frameBorder="0"
            className={
              filled
                ? 'h-[250px] w-[300px] max-w-full border-0 bg-transparent'
                : 'pointer-events-none fixed top-0 -left-[4000px] h-[250px] w-[300px] border-0 opacity-0'
            }
          />
        </aside>
      )}
      <AdsterraSmartlink />
    </div>
  );
}
