'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

function TableOfContents({ headings, activeId, className = '' }) {
  if (!headings?.length) return null;

  return (
    <nav aria-label="Table of contents" className={className}>
      <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-4">
        Contents
      </p>
      <ul className="space-y-1 border-l-2 border-slate-200">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block py-1.5 text-[13px] leading-snug border-l-2 -ml-[2px] transition-colors ${
                level === 3 ? 'pl-6' : 'pl-4'
              } ${
                activeId === id
                  ? 'border-teal-800 text-teal-900 font-semibold'
                  : 'border-transparent text-slate-600 hover:text-teal-800 hover:border-teal-300'
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function BlogPostContent({ content, headings, tagLinks, tags }) {
  const [activeId, setActiveId] = useState(headings?.[0]?.id || '');

  useEffect(() => {
    if (!headings?.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const showToc = headings?.length > 1;
  const topicLinks =
    tagLinks?.length > 0
      ? tagLinks
      : (tags || []).map((label) => ({ label, href: '/blog' }));

  return (
    <div className={showToc ? 'lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-16 xl:gap-20' : ''}>
      {/* Main article column */}
      <div className="min-w-0">
        {showToc && (
          <details className="lg:hidden mb-8 rounded-xl border border-slate-200 bg-slate-50/80 overflow-hidden">
            <summary className="px-4 py-3 text-sm font-semibold text-slate-800 cursor-pointer select-none">
              Table of contents
            </summary>
            <div className="px-4 pb-4">
              <TableOfContents headings={headings} activeId={activeId} />
            </div>
          </details>
        )}

        <div className="blog-prose" dangerouslySetInnerHTML={{ __html: content }} />

        {topicLinks.length > 0 && (
          <footer className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-3">
              Topics
            </p>
            <div className="flex flex-wrap gap-2">
              {topicLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-sm hover:bg-teal-50 hover:text-teal-900 transition"
                >
                  {label}
                </Link>
              ))}
            </div>
          </footer>
        )}
      </div>

      {/* Sticky TOC sidebar — desktop only */}
      {showToc && (
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <TableOfContents headings={headings} activeId={activeId} />
          </div>
        </aside>
      )}
    </div>
  );
}
