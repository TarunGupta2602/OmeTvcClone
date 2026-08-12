import Link from 'next/link';
import { blogPostsList } from '../../data/blogPosts';

const MONEY_PAGES = [
  { href: '/omegle-alternative', label: 'Omegle alternative' },
  { href: '/ometv-alternative', label: 'OmeTV alternative' },
  { href: '/chatroulette-alternative', label: 'Chatroulette alternative' },
  { href: '/emerald-chat-alternative', label: 'Emerald Chat alternative' },
  { href: '/random-video-chat', label: 'Random video chat' },
  { href: '/anonymous-video-chat', label: 'Anonymous video chat' },
  { href: '/no-signup-video-chat', label: 'No signup video chat' },
  { href: '/faq', label: 'FAQ' },
  { href: '/safety', label: 'Safety' },
];

/** Server-rendered links so crawlers always find key URLs from the homepage. */
export default function HomeCrawlLinks() {
  return (
    <section className="bg-slate-50/90 border-t border-slate-200 py-8 px-4 sm:px-6" aria-labelledby="home-guides-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="home-pages-heading" className="text-sm font-bold text-slate-900 mb-1">
          Explore Parvah
        </h2>
        <p className="text-xs text-slate-500 mb-4">Alternatives, chat modes, and safety pages.</p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm mb-8">
          {MONEY_PAGES.map((page) => (
            <li key={page.href}>
              <Link href={page.href} className="text-teal-700 hover:text-teal-900 hover:underline font-medium">
                {page.label}
              </Link>
            </li>
          ))}
        </ul>

        <h2 id="home-guides-heading" className="text-sm font-bold text-slate-900 mb-1">
          Video chat guides
        </h2>
        <p className="text-xs text-slate-500 mb-4">Safety tips, Omegle alternatives, and WebRTC help from Parvah.</p>
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
          {blogPostsList.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="text-teal-700 hover:text-teal-900 hover:underline leading-snug">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold">
          <Link href="/blog" className="text-slate-600 hover:text-teal-700">
            All blog articles →
          </Link>
          <a href="/sitemap.xml" className="text-slate-500 hover:text-teal-700">
            Sitemap
          </a>
        </div>
      </div>
    </section>
  );
}
