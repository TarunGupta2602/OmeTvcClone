import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/60">
          
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-rose-500 flex items-center justify-center font-bold text-white shadow-md">
                P
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Parvah</span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Instant 1-on-1 free random video chat connecting millions of users worldwide safely and effortlessly.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-950/60 border border-rose-800/50 text-[11px] font-semibold text-rose-300">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              18+ Adults Only
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-indigo-400 transition">Live Video Chat</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-indigo-400 transition">About Parvah</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-400 transition">Contact & Support</Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy" className="hover:text-indigo-400 transition">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-indigo-400 transition">Terms of Service</Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-indigo-400 transition">Community Guidelines</Link>
              </li>
            </ul>
          </div>

          {/* Safety & Support */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Trust & Safety</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We enforce strict community standards. Inappropriate content, nudity, or harassment is strictly prohibited and moderated.
            </p>
            <div>
              <Link
                href="/safety"
                className="inline-flex items-center text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition"
              >
                Read Safety Guidelines &rarr;
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Parvah Platform. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-400 transition">Privacy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-400 transition">Terms</Link>
            <span>•</span>
            <Link href="/safety" className="hover:text-slate-400 transition">Safety</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
