'use client';

import Link from 'next/link';

const STORAGE_KEY = 'parvah_age_confirmed';

export function hasAgeConfirmation() {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(STORAGE_KEY) === 'true';
}

export default function AgeGate({ onConfirm }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4">
      <div className="max-w-md w-full p-8 rounded-3xl bg-white shadow-2xl space-y-6 text-center border border-slate-200/80">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-rose-600 to-red-600 text-white font-black text-2xl flex items-center justify-center shadow-lg shadow-rose-500/30">
          18+
        </div>
        <div className="space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-600">Parvah</p>
          <h2 className="text-xl font-black text-slate-900">Adults Only</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Parvah is strictly for users aged 18 and older. By continuing, you confirm that you are at least 18 years of age and agree to our{' '}
            <Link href="/terms" className="text-indigo-600 font-semibold hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/safety" className="text-indigo-600 font-semibold hover:underline">
              Community Guidelines
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={() => {
              localStorage.setItem(STORAGE_KEY, 'true');
              onConfirm();
            }}
            className="chat-cta-primary w-full py-3.5 rounded-xl font-black text-sm text-white"
          >
            I am 18 or older — Continue
          </button>
          <a
            href="https://www.google.com"
            className="w-full py-3 rounded-xl font-semibold text-sm text-slate-600 hover:text-slate-900 transition"
          >
            I am under 18 — Leave
          </a>
        </div>
      </div>
    </div>
  );
}
