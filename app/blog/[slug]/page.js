import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../components/Breadcrumbs';
import SocialShare from '../../components/SocialShare';
import BlogPostContent from '../../components/BlogPostContent';
import BlogPostFAQ from '../../components/BlogPostFAQ';
import BlogAuthorCard from '../../components/BlogAuthorCard';
import BlogPostCover from '../../components/BlogPostCover';
import { BlogCardThumbnail } from '../../components/BlogCard';
import { SITE_NAME, SITE_URL } from '../../../lib/constants';
import { blogPostsMap, blogPostsList } from '../../../data/blogPosts';
import {
  enrichPost,
  getRelatedPosts,
  getAdjacentPosts,
  buildBlogJsonLd,
} from '../../../lib/blog';
import { stringifyJsonLd } from '../../../lib/seo';

const CATEGORY_STYLES = {
  Safety: 'bg-rose-50 text-rose-700 ring-rose-200',
  Comparison: 'bg-blue-50 text-blue-700 ring-blue-200',
  Tips: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  Technology: 'bg-violet-50 text-violet-700 ring-violet-200',
  Technical: 'bg-amber-50 text-amber-700 ring-amber-200',
  Privacy: 'bg-teal-50 text-teal-900 ring-teal-200',
};

export async function generateStaticParams() {
  return Object.keys(blogPostsMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  const raw = blogPostsMap[slug];
  if (!raw) return { title: 'Blog Post Not Found' };

  const post = enrichPost(slug, raw);
  const seoTitle = post.seoTitle;

  return {
    title: seoTitle,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author, url: SITE_URL }],
    creator: post.author,
    publisher: SITE_NAME,
    category: post.category,
    alternates: {
      canonical: post.canonicalUrl,
      types: {
        'application/rss+xml': `${SITE_URL}/blog/rss.xml`,
      },
    },
    openGraph: {
      title: seoTitle,
      description: post.excerpt,
      url: post.canonicalUrl,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.dateModified,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
      // Canonical social card: generated PNG at opengraph-image (not the on-page SVG cover)
      images: [
        {
          url: `${SITE_URL}/blog/${slug}/opengraph-image`,
          secureUrl: `${SITE_URL}/blog/${slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: post.excerpt,
      images: [`${SITE_URL}/blog/${slug}/twitter-image`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}

export default async function BlogPostPage({ params }) {
  const slug = (await params).slug;
  const raw = blogPostsMap[slug];
  if (!raw) notFound();

  const post = enrichPost(slug, raw);
  const related = getRelatedPosts(slug, post.category, blogPostsMap, 3).map(([s, p]) =>
    enrichPost(s, p)
  );
  const { prev, next } = getAdjacentPosts(slug, blogPostsList);
  const jsonLd = buildBlogJsonLd(post);
  const categoryStyle = CATEGORY_STYLES[post.category] || 'bg-slate-100 text-slate-700 ring-slate-200';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />

      <main className="flex-1 bg-white min-h-screen">
        <header className="border-b border-slate-200 bg-slate-50/60">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: post.category, href: post.categoryHref },
              ]}
            />

            <div className="mt-6 space-y-5">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                <Link
                  href={post.categoryHref}
                  className={`inline-flex px-2.5 py-1 rounded-md text-xs font-semibold ring-1 ${categoryStyle} hover:opacity-90`}
                >
                  {post.category}
                </Link>
                <time dateTime={post.date}>{post.formattedDate}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
                {post.dateModified !== post.date && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>Updated {post.formattedModifiedDate}</span>
                  </>
                )}
              </div>

              <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] font-bold text-slate-900 leading-[1.2] tracking-tight">
                {post.title}
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">{post.excerpt}</p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-teal-800 flex items-center justify-center text-white text-sm font-bold">
                    P
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-slate-900">{post.author}</p>
                    <p className="text-slate-500">{post.wordCount.toLocaleString()} words</p>
                  </div>
                </div>
                <SocialShare url={post.canonicalUrl} title={post.title} />
              </div>
            </div>
          </div>
        </header>

        {/* Featured cover image — unique per post, SEO-optimized alt */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-2 pb-8">
          <BlogPostCover
            title={post.title}
            category={post.category}
            readTime={post.readTime}
            alt={post.imageAlt}
          />
        </div>

        <div className="max-w-3xl lg:max-w-5xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14">
          <BlogPostContent content={post.content} headings={post.headings} tagLinks={post.tagLinks} />
          <BlogPostFAQ faqs={post.faqs} />
        </div>

        <div className="border-t border-slate-200 bg-slate-50/50">
          <div className="max-w-3xl lg:max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-10">
            <BlogAuthorCard
              author={post.author}
              date={post.formattedDate}
              modifiedDate={post.formattedModifiedDate}
            />

            {(prev || next) && (
              <nav aria-label="Article navigation" className="grid sm:grid-cols-2 gap-4">
                {prev ? (
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="group flex gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition"
                  >
                    <div className="relative w-24 h-14 flex-shrink-0 rounded-lg overflow-hidden hidden sm:block">
                      <BlogCardThumbnail
                        title={prev.title}
                        category={prev.category}
                        readTime={prev.readTime}
                        compact
                      />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-slate-400">← Previous</span>
                      <p className="mt-1 text-sm font-semibold text-slate-900 group-hover:text-teal-800 line-clamp-2">
                        {prev.title}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
                {next && (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="group flex gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition sm:flex-row-reverse sm:text-right"
                  >
                    <div className="relative w-24 h-14 flex-shrink-0 rounded-lg overflow-hidden hidden sm:block">
                      <BlogCardThumbnail
                        title={next.title}
                        category={next.category}
                        readTime={next.readTime}
                        compact
                      />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-slate-400">Next →</span>
                      <p className="mt-1 text-sm font-semibold text-slate-900 group-hover:text-teal-800 line-clamp-2">
                        {next.title}
                      </p>
                    </div>
                  </Link>
                )}
              </nav>
            )}

            <div className="p-8 rounded-2xl bg-teal-800 text-white text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Try Parvah Free</h2>
              <p className="text-teal-100 text-sm mb-6 max-w-md mx-auto">
                Random video chat with no signup — WebRTC privacy and built-in safety tools.
              </p>
              <Link
                href="/"
                className="inline-block px-6 py-3 rounded-lg font-semibold bg-white text-teal-900 hover:bg-teal-50 transition"
              >
                Start Video Chat
              </Link>
            </div>

            {related.length > 0 && (
              <section aria-labelledby="related-heading">
                <h2 id="related-heading" className="text-lg font-bold text-slate-900 mb-5">
                  Related reading
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="group flex flex-col overflow-hidden rounded-xl bg-white border border-slate-200 hover:border-teal-200 transition"
                    >
                      <BlogCardThumbnail
                        title={r.title}
                        category={r.category}
                        readTime={r.readTime}
                        className="rounded-none rounded-t-xl"
                      />
                      <div className="p-4">
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-teal-800">
                          {r.category}
                        </span>
                        <p className="mt-1.5 text-sm font-semibold text-slate-900 group-hover:text-teal-800 line-clamp-2 leading-snug">
                          {r.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <div className="text-center">
              <Link href="/blog" className="text-sm font-semibold text-teal-800 hover:text-teal-900">
                ← All blog articles
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
