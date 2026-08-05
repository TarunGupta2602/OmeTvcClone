'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'parvah_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) !== 'accepted') {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] p-4 sm:p-6">
      <div className="max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4 ring-1 ring-slate-200/80">
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
          We use essential cookies and analytics (Google Tag Manager) to improve Parvah. See our{' '}
          <Link href="/privacy" className="text-indigo-600 font-semibold hover:underline">
            Privacy Policy
          </Link>{' '}
          for details.
        </p>
        <div className="flex gap-2 flex-shrink-0 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => {
              localStorage.setItem(STORAGE_KEY, 'accepted');
              setVisible(false);
            }}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-700 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
