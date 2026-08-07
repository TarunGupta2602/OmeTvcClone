'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDialogA11y } from '../hooks/useDialogA11y';

export const CONSENT_STORAGE_KEY = 'parvah_cookie_consent';

export function hasAnalyticsConsent() {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(CONSENT_STORAGE_KEY) === 'accepted';
}

function setConsent(value) {
  localStorage.setItem(CONSENT_STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent('parvah-consent-change', { detail: value }));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  // Require an explicit Accept/Decline choice — Escape does not dismiss.
  const panelRef = useDialogA11y({ open: visible, onClose: undefined });

  useEffect(() => {
    const current = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (current !== 'accepted' && current !== 'declined') {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] p-4 sm:p-6" role="presentation">
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-consent-title"
        tabIndex={-1}
        className="max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-4 outline-none"
      >
        <div className="flex-1 space-y-1">
          <p id="cookie-consent-title" className="text-sm font-bold text-slate-900">
            Cookies & analytics
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We use essential cookies for age confirmation and chat preferences. Optional analytics
            (Google Tag Manager) only loads if you accept. See our{' '}
            <Link href="/privacy" className="text-teal-700 font-semibold hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => {
              setConsent('declined');
              setVisible(false);
            }}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => {
              setConsent('accepted');
              setVisible(false);
            }}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-teal-700 hover:bg-teal-800 transition"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
