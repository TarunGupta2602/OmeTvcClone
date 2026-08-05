'use client';

import Link from 'next/link';
import { SUPPORT_EMAIL, SAFETY_EMAIL } from '../../lib/constants';
import { CONTACT_FAQS } from '../../data/contactFaqs';

export default function ContactPageContent() {
  return (
    <main className="flex-1 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-rose-50/30 text-slate-900 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest">
            Email Support
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Contact Support & Safety
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Parvah does not use contact forms or databases. Reach our team directly by email — we respond as quickly as we can.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center text-lg">
              ✉️
            </div>
            <h2 className="text-lg font-bold text-slate-900">General Support</h2>
            <p className="text-sm text-slate-600">Technical questions, bugs, and general platform inquiries.</p>
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Parvah%20Support`}
              className="inline-block text-sm font-bold text-indigo-600 hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center text-lg">
              🛡️
            </div>
            <h2 className="text-lg font-bold text-slate-900">Safety & Appeals</h2>
            <p className="text-sm text-slate-600">Serious safety reports, ban appeals, and moderation concerns.</p>
            <a
              href={`mailto:${SAFETY_EMAIL}?subject=Parvah%20Safety%20Report`}
              className="inline-block text-sm font-bold text-rose-600 hover:underline"
            >
              {SAFETY_EMAIL}
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {CONTACT_FAQS.map((faq) => (
              <div key={faq.q} className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <h3 className="text-sm font-bold text-slate-900">{faq.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <span className="text-slate-600">Need community safety guidelines?</span>
          <Link href="/safety" className="font-bold text-indigo-600 hover:underline">
            View Safety Guidelines →
          </Link>
        </div>
      </div>
    </main>
  );
}
