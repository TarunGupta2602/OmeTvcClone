import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL, SITE_NAME } from '../../../../lib/constants';
import { blogPostsList } from '../../../../data/blogPosts';
import { BLOG_CATEGORIES, getCategoryBySlug, filterPostsByCategory } from '../../../../lib/blogCategories';
import { BlogCard } from '../../../components/BlogCard';
import { buildCollectionPageSchema, stringifyJsonLd } from '../../../../lib/seo';

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};

  const title = `${category.label} — Parvah Blog`;
  const description = category.description;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/blog/category/${category.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/blog/category/${category.slug}`,
      siteName: SITE_NAME,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `Parvah Blog — ${category.label}` }],
      locale: 'en_US',
      type: 'website',
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogCategoryPage({ params }) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const posts = filterPostsByCategory(blogPostsList, categorySlug);
  const pageUrl = `${SITE_URL}/blog/category/${category.slug}`;
  const jsonLd = buildCollectionPageSchema({
    title: `${category.label} — Parvah Blog`,
    description: category.description,
    url: pageUrl,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <main className="flex-1 bg-slate-50 min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="space-y-4">
          <Link href="/blog" className="text-sm font-semibold text-indigo-600 hover:underline">
            ← All blog posts
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {category.label}
          </h1>
          <p className="text-base text-slate-600 max-w-2xl">{category.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {BLOG_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/blog/category/${cat.slug}`}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                cat.slug === categorySlug
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300'
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {posts.length === 0 ? (
          <p className="text-slate-500 text-sm">No posts in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </main>
    </>
  );
}
