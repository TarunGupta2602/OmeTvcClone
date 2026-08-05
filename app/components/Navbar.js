'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar({ minimal = false }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Chat Now', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Safety & Rules', href: '/safety' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  const mainNavItems = [
    { name: 'About', href: '/about' },
    { name: 'Safety', href: '/safety' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
  ];

  if (minimal) {
    return (
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-[#030712]/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-lg font-black tracking-tight text-white">
            Parvah
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white/60 hover:text-white hover:bg-white/[0.06] transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/[0.06]"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/[0.06] bg-[#030712]/95 px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/[0.06]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-lg shadow-slate-200/50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
                Parvah
              </span>
              <span className="text-[10px] text-slate-500 tracking-wider uppercase font-bold -mt-1">
                Free Random Video Chat
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {[
              { name: 'Chat', href: '/' },
              ...mainNavItems,
              { name: 'Contact', href: '/contact' },
            ].map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 shadow-md shadow-indigo-500/10 border border-indigo-200/80 ring-1 ring-indigo-500/20'
                      : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-100/70 hover:shadow-sm'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {pathname !== '/' && (
              <Link
                href="/"
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 hover:from-indigo-700 hover:via-purple-700 hover:to-rose-600 rounded-xl shadow-lg shadow-indigo-500/25 transition-all active:scale-95"
              >
                Start Chatting
              </Link>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/60 px-4 pt-2 pb-4 space-y-1 shadow-2xl">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2.5 rounded-xl text-base font-semibold transition ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 shadow-md ring-1 ring-indigo-500/20'
                    : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
