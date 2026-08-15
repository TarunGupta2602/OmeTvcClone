'use client';

import Link from 'next/link';
import { useDialogA11y } from '../hooks/useDialogA11y';

const STORAGE_KEY = 'parvah_age_confirmed';

export function hasAgeConfirmation() {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(STORAGE_KEY) === 'true';
}

export default function AgeGate({ onConfirm }) {
  const panelRef = useDialogA11y({
    open: true,
    onClose: undefined,
  });

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-slate-950/90 backdrop-blur-md p-0 sm:p-4"
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="age-gate-title"
        aria-describedby="age-gate-desc"
        tabIndex={-1}
        className="max-w-md w-full p-6 sm:p-8 rounded-t-3xl sm:rounded-3xl bg-white space-y-6 text-center border border-slate-200/80 pb-[max(1.5rem,env(safe-area-inset-bottom))] outline-none"
      >
        <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-800 text-white font-black text-2xl flex items-center justify-center">
          18+
        </div>
        <div className="space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-teal-700">Parvah</p>
          <h2 id="age-gate-title" className="text-xl font-black text-slate-900">
            Adults Only — 18+
          </h2>
          <p id="age-gate-desc" className="text-sm text-slate-600 leading-relaxed">
            Parvah is free adult random video chat. Matches may include flirty or intimate conversation
            between consenting adults. By continuing, you confirm you are at least 18 and agree to our{' '}
            <Link href="/terms" className="text-teal-700 font-semibold hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/safety" className="text-teal-700 font-semibold hover:underline">
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
