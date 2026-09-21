import { KEY_FACTS, WHAT_IS_PARVAH } from '../../lib/geo';

export default function DirectAnswer({
  heading = 'What is Parvah?',
  children = WHAT_IS_PARVAH,
  showFacts = true,
  compact = false,
}) {
  const headingId = `direct-answer-${heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;

  return (
    <section className="space-y-5" aria-labelledby={headingId}>
      <div className="space-y-3">
        <h2 id={headingId} className="text-xl sm:text-2xl font-bold text-slate-900">
          {heading}
        </h2>
        {compact ? null : (
          <p className="direct-answer text-base text-slate-700 leading-relaxed">{children}</p>
        )}
      </div>
      {showFacts ? (
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {KEY_FACTS.map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-teal-900/10 bg-white/80 px-4 py-3"
            >
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-teal-800/80">
                {fact.label}
              </dt>
              <dd className="text-sm font-medium text-slate-800 mt-0.5">{fact.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </section>
  );
}
