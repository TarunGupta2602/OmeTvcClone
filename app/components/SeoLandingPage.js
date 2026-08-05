import Link from 'next/link';

export default function SeoLandingPage({ badge, title, description, highlights, faqs, relatedLinks }) {
  return (
    <main className="flex-1 bg-white min-h-screen">
      <section className="border-b border-slate-200 bg-slate-50/80 py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {badge && (
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold ring-1 ring-indigo-200">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">{description}</p>
          <Link
            href="/"
            className="inline-block px-8 py-4 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg transition"
          >
            Start Free Video Chat Now
          </Link>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div key={item.title} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
              <h2 className="text-base font-bold text-slate-900 mb-2">{item.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {faqs?.length > 0 && (
        <section className="py-14 px-4 sm:px-6 bg-slate-50 border-y border-slate-200">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="p-5 rounded-xl bg-white border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900">{faq.q}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedLinks?.length > 0 && (
        <section className="py-12 px-4 sm:px-6 max-w-3xl mx-auto text-center space-y-4">
          <p className="text-sm text-slate-500">Related pages</p>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition"
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
