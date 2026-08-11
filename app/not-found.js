import Link from 'next/link';
import { SITE_URL } from '../lib/constants';

export const metadata = {
  title: '404 — Page Not Found',
  description:
    'This page does not exist on Parvah. Return home to start free random video chat, read our safety guides, or contact support for help.',
  robots: { index: false, follow: true },
  openGraph: {
    title: '404 — Page Not Found | Parvah',
    description: 'Page not found on Parvah. Return to homepage or start random video chat now.',
    url: `${SITE_URL}/404`,
    siteName: 'Parvah',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Parvah 404 Page' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '404 — Page Not Found | Parvah',
    description: 'Page not found on Parvah. Return home to start video chatting.',
    images: ['/og-image.jpg'],
  },
};

export default function NotFound() {
  return (
    <main className="flex-1 bg-slate-950 text-slate-100 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        
        {/* Visual Badge / 404 Graphic */}
        <div className="relative inline-block">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-full blur-2xl opacity-30 animate-pulse" />
          <h1 className="relative text-8xl sm:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-rose-400">
            404
          </h1>
        </div>

        {/* Text Details */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Lost in Cyberspace?
          </h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            The page you are trying to access doesn't exist on Parvah, was moved, or had its address changed. Don't worry, your next conversation is just a click away!
          </p>
        </div>

        {/* Action Buttons Grid */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-500 hover:to-rose-500 shadow-lg shadow-indigo-500/25 transition-all hover:scale-105"
          >
            🚀 Launch Video Chat
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-xs text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white transition-all"
          >
            About Parvah
          </Link>
          <Link
            href="/safety"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-xs text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white transition-all"
          >
            Safety Guidelines
          </Link>
        </div>

        {/* Support Link */}
        <div className="pt-6 border-t border-slate-800/80 text-xs text-slate-500">
          Need assistance finding something?{' '}
          <Link href="/contact" className="text-indigo-400 hover:text-indigo-300 font-semibold underline">
            Contact Support
          </Link>
        </div>

      </div>
    </main>
  );
}
