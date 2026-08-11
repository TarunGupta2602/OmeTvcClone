import Link from 'next/link';

const NAV_LINKS = [
  { href: '/', label: 'Live Video Chat' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const EXPLORE_LINKS = [
  { href: '/omegle-alternative', label: 'Omegle alternative' },
  { href: '/ometv-alternative', label: 'OmeTV alternative' },
  { href: '/random-video-chat', label: 'Random video chat' },
  { href: '/anonymous-video-chat', label: 'Anonymous chat' },
];

const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/safety', label: 'Community Guidelines' },
];

export default function Footer() {
  return (
    <footer className="border-t border-teal-900/10 bg-[var(--page-bg)] text-slate-600 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-teal-900/10">
          <div className="space-y-4 col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-baseline gap-2 group">
              <span className="font-[family-name:var(--font-source-serif)] text-2xl tracking-tight text-teal-900">
                Parvah
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Free 1-on-1 random video chat — no signup, WebRTC privacy, adults 18+.
            </p>
            <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-rose-700">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" aria-hidden="true" />
              18+ Adults Only
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Navigate</h3>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-teal-800 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Explore</h3>
            <ul className="space-y-2 text-sm">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-teal-800 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Trust & Legal</h3>
            <ul className="space-y-2 text-sm">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-teal-800 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/safety"
              className="inline-flex pt-1 text-sm font-semibold text-teal-800 hover:underline underline-offset-2"
            >
              Safety guidelines →
            </Link>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Parvah. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-teal-800 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-teal-800 transition-colors">
              Terms
            </Link>
            <Link href="/safety" className="hover:text-teal-800 transition-colors">
              Safety
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
