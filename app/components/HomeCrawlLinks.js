import Link from 'next/link';
import { blogPostsList } from '../../data/blogPosts';

/** Server-rendered links so crawlers always find blog URLs from the homepage. */
export default function HomeCrawlLinks() {
  return (
    <section className="bg-slate-50/90 border-t border-slate-200 py-8 px-4 sm:px-6" aria-labelledby="home-guides-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="home-guides-heading" className="text-sm font-bold text-slate-900 mb-1">
          Video chat guides
        </h2>
        <p className="text-xs text-slate-500 mb-4">Safety tips, Omegle alternatives, and WebRTC help from Parvah.</p>
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
          {blogPostsList.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="text-indigo-600 hover:text-indigo-800 hover:underline leading-snug">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold">
          <Link href="/blog" className="text-slate-600 hover:text-indigo-600">
            All blog articles →
          </Link>
          <a href="/sitemap.xml" className="text-slate-500 hover:text-indigo-600">
            Sitemap
          </a>
        </div>
      </div>
    </section>
  );
}
