import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-slate-50 border-t border-slate-200/60 text-slate-600 py-12 mt-auto shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pb-10 border-b border-slate-200/60">
          
          {/* Brand Column */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-rose-500 flex items-center justify-center font-black text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform ring-2 ring-indigo-500/20">
                P
              </div>
              <span className="text-lg font-extrabold text-slate-900 tracking-tight">Parvah</span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed">
              Instant 1-on-1 free random video chat connecting people worldwide safely and effortlessly.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 text-[11px] font-bold text-rose-600 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              18+ Adults Only
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/" className="hover:text-indigo-600 hover:pl-1 transition-all duration-200 inline-block">Live Video Chat</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-indigo-600 hover:pl-1 transition-all duration-200 inline-block">About Parvah</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-indigo-600 hover:pl-1 transition-all duration-200 inline-block">FAQ</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-indigo-600 hover:pl-1 transition-all duration-200 inline-block">Blog</Link>
              </li>
              <li>
                <Link href="/omegle-alternative" className="hover:text-indigo-600 hover:pl-1 transition-all duration-200 inline-block">Omegle Alternative</Link>
              </li>
              <li>
                <Link href="/ometv-alternative" className="hover:text-indigo-600 hover:pl-1 transition-all duration-200 inline-block">OmeTV Alternative</Link>
              </li>
              <li>
                <Link href="/random-video-chat" className="hover:text-indigo-600 hover:pl-1 transition-all duration-200 inline-block">Random Video Chat</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-600 hover:pl-1 transition-all duration-200 inline-block">Contact & Support</Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/privacy" className="hover:text-indigo-600 hover:pl-1 transition-all duration-200 inline-block">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-indigo-600 hover:pl-1 transition-all duration-200 inline-block">Terms of Service</Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-indigo-600 hover:pl-1 transition-all duration-200 inline-block">Community Guidelines</Link>
              </li>
            </ul>
          </div>

          {/* Safety & Support */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Trust & Safety</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We enforce strict community standards. Inappropriate content, nudity, or harassment is strictly prohibited and moderated.
            </p>
            <div>
              <Link
                href="/safety"
                className="inline-flex items-center text-xs font-bold text-indigo-600 hover:text-indigo-700 hover:underline decoration-2 underline-offset-2 transition-all"
              >
                Read Safety Guidelines &rarr;
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} Parvah Platform. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-indigo-600 hover:underline decoration-2 underline-offset-2 transition-all">Privacy</Link>
            <span className="text-slate-300">•</span>
            <Link href="/terms" className="hover:text-indigo-600 hover:underline decoration-2 underline-offset-2 transition-all">Terms</Link>
            <span className="text-slate-300">•</span>
            <Link href="/safety" className="hover:text-indigo-600 hover:underline decoration-2 underline-offset-2 transition-all">Safety</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
