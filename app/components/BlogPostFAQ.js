export default function BlogPostFAQ({ faqs, title = 'Frequently Asked Questions' }) {
  if (!faqs?.length) return null;

  return (
    <section aria-labelledby="blog-faq-heading" className="mt-12 pt-10 border-t border-slate-200">
      <h2 id="blog-faq-heading" className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
        {title}
      </h2>
      <p className="text-sm text-slate-500 mb-6">
        Common questions about this topic — answered for quick reference.
      </p>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <details
            key={faq.q}
            className="group rounded-xl border border-slate-200 bg-slate-50/50 open:bg-white open:shadow-sm transition"
            defaultOpen={index === 0}
          >
            <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-slate-900 flex items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
              <span>{faq.q}</span>
              <span className="text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 mt-0.5" aria-hidden="true">
                ▾
              </span>
            </summary>
            <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
