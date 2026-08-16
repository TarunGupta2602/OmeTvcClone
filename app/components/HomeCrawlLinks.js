import Link from 'next/link';
import { blogPostsList } from '../../data/blogPosts';

const MONEY_PAGES = [
  { href: '/random-video-chat', label: 'Random video chat' },
  { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
  { href: '/talk-to-strangers', label: 'Talk to strangers' },
  { href: '/chat-with-girls', label: 'Chat with girls' },
  { href: '/video-chat-with-girls', label: 'Video chat with girls' },
  { href: '/girls-video-chat', label: 'Girls video chat' },
  { href: '/flirty-video-chat', label: 'Flirty video chat' },
  { href: '/hot-video-chat', label: 'Hot video chat' },
  { href: '/dirty-talk-video-chat', label: 'Dirty talk video chat' },
  { href: '/live-video-chat', label: 'Live video chat' },
  { href: '/free-webcam-chat', label: 'Free webcam chat' },
  { href: '/late-night-video-chat', label: 'Late night video chat' },
  { href: '/meet-people-online', label: 'Meet people online' },
  { href: '/adult-video-chat', label: 'Adult video chat' },
  { href: '/omegle-alternative', label: 'Omegle alternative' },
  { href: '/no-signup-video-chat', label: 'No signup video chat' },
  { href: '/anonymous-video-chat', label: 'Anonymous video chat' },
  { href: '/ometv-alternative', label: 'OmeTV alternative' },
  { href: '/chatroulette-alternative', label: 'Chatroulette alternative' },
  { href: '/emerald-chat-alternative', label: 'Emerald Chat alternative' },
  { href: '/faq', label: 'FAQ' },
  { href: '/safety', label: 'Safety' },
];

/** Server-rendered links so crawlers always find key URLs from the homepage. */
export default function HomeCrawlLinks() {
  return (
    <section className="bg-slate-50/90 border-t border-slate-200 py-8 px-4 sm:px-6" aria-labelledby="home-guides-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="home-pages-heading" className="text-sm font-bold text-slate-900 mb-1">
          Explore video chat
        </h2>
        <p className="text-xs text-slate-500 mb-4">Popular searches, alternatives, and safety pages.</p>
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
