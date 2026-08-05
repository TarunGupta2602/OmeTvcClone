import { getBlogCoverTheme, wrapTitleLines } from '../../lib/blogImages';

/** Instant CSS cover — no network request (replaces slow opengraph-image in UI) */
export default function BlogCoverArt({
  title,
  category,
  readTime,
  compact = false,
  className = '',
  showFooter = true,
}) {
  const theme = getBlogCoverTheme(category);
  const lines = wrapTitleLines(title, compact ? 28 : 32);
  const titleSize = compact ? 'text-sm sm:text-base' : 'text-lg sm:text-2xl lg:text-3xl';
  const pad = compact ? 'p-3 sm:p-4' : 'p-6 sm:p-8 lg:p-10';

  return (
    <div
      className={`relative overflow-hidden ${pad} ${className}`}
      style={{
        background: `linear-gradient(135deg, ${theme.from} 0%, ${theme.to} 100%)`,
      }}
      aria-hidden={compact ? true : undefined}
    >
      <div
        className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-20"
        style={{ background: 'rgba(255,255,255,0.35)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-12 left-1/3 h-36 w-36 rounded-full opacity-15"
        style={{ background: 'rgba(255,255,255,0.35)' }}
      />

      <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white sm:text-xs">
            <span>{theme.icon}</span>
            {category}
          </span>
          {readTime && !compact && (
            <span className="text-[10px] font-semibold text-white/75 sm:text-xs">{readTime}</span>
          )}
        </div>

        <div className={`space-y-0.5 font-extrabold leading-tight tracking-tight text-white ${titleSize}`}>
          {lines.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>

        {showFooter && !compact && (
          <div className="flex items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/25 text-sm font-extrabold text-white">
                P
              </div>
              <div className="text-xs font-bold text-white sm:text-sm">
                <div>Parvah Blog</div>
                <div className="font-medium text-white/75">parvah.online</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
