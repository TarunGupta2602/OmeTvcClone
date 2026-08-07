import Link from 'next/link';

export default function SeoLandingPage({ badge, title, description, highlights, faqs, relatedLinks }) {
  return (
    <main className="flex-1 min-h-screen bg-[var(--page-bg)]">
      <section className="relative overflow-hidden border-b border-teal-900/10">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 70% 0%, rgba(15, 118, 110, 0.14), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(180, 83, 9, 0.08), transparent 50%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-6">
          <p className="font-[family-name:var(--font-source-serif)] text-4xl sm:text-5xl text-teal-900 tracking-tight">
            Parvah
          </p>
          {badge && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800/80">{badge}</p>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
            {title}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">{description}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/"
              className="inline-block px-8 py-4 rounded-xl font-bold text-white bg-teal-800 hover:bg-teal-900 transition"
            >
              Start free video chat
            </Link>
            <Link
              href="/safety"
              className="inline-block px-8 py-4 rounded-xl font-semibold text-teal-900 bg-white/70 hover:bg-white border border-teal-900/10 transition"
            >
              Safety guidelines
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 max-w-3xl mx-auto space-y-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">Why people choose Parvah</h2>
          <p className="text-sm text-slate-600">One clear reason per point — no signup, peer-to-peer video, skip anytime.</p>
        </div>
        <ul className="space-y-8">
          {highlights.map((item, i) => (
            <li key={item.title} className="grid gap-2 sm:grid-cols-[3rem_1fr] sm:gap-6">
              <span className="font-[family-name:var(--font-source-serif)] text-2xl text-teal-800/70">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {faqs?.length > 0 && (
        <section className="py-14 px-4 sm:px-6 border-y border-teal-900/10 bg-white/50">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">{faq.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedLinks?.length > 0 && (
        <section className="py-12 px-4 sm:px-6 max-w-3xl mx-auto space-y-4">
          <p className="text-sm text-slate-500">Related pages</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-teal-800 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
