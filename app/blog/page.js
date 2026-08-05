import Link from 'next/link';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { blogPostsList } from '../../data/blogPosts';
import { BLOG_CATEGORIES } from '../../lib/blogCategories';
import { BlogCard } from '../components/BlogCard';

export const metadata = {
  title: 'Blog — Video Chat Tips & Safety Guides',
  description:
    'Parvah blog: guides on random video chat safety, Omegle & OmeTV alternatives, WebRTC privacy, webcam fixes, and tips for talking to strangers online.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
    types: { 'application/rss+xml': `${SITE_URL}/blog/rss.xml` },
  },
  openGraph: {
    title: 'Parvah Blog | Video Chat Tips & Safety Guides',
    description: 'Safety guides, Omegle alternatives, and WebRTC tips for random video chat.',
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Parvah Blog' }],
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': `${SITE_URL}/blog#blog`,
  name: 'Parvah Blog',
  description: 'Video chat safety guides, Omegle alternatives, and WebRTC tips from Parvah.',
  url: `${SITE_URL}/blog`,
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  blogPost: blogPostsList.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    image: `${SITE_URL}/blog/${post.slug}/opengraph-image`,
  })),
};

export default function BlogPage() {
  const featured = blogPostsList.filter((p) => p.featured);
  const rest = blogPostsList.filter((p) => !p.featured);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />

      <main className="flex-1 bg-slate-50 min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Parvah Blog
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              Safety guides, Omegle alternatives, WebRTC explainers, and tips for random video chat on Parvah.
            </p>
            <a href="/blog/rss.xml" className="inline-block text-sm font-semibold text-indigo-600 hover:underline">
              Subscribe via RSS →
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {BLOG_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-700 transition"
              >
                {cat.label}
              </Link>
            ))}
          </div>

          {featured.map((post) => (
            <BlogCard key={post.slug} post={post} featured />
          ))}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-indigo-600 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Start Chatting?</h2>
            <Link
              href="/"
              className="inline-block px-8 py-3 rounded-lg font-semibold bg-white text-indigo-700 hover:bg-indigo-50 transition"
            >
              Start Free Video Chat
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
