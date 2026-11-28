import { SITE_URL } from '../lib/constants';
import { BLOG_CATEGORIES } from '../lib/blogCategories';
import { BLOG_NOINDEX_SLUGS, blogPostsList, blogPostsMap } from '../data/blogPosts';

const staticRoutes = [
  { path: '', lastModified: '2026-11-28' },
  { path: '/random-video-chat', lastModified: '2026-11-28' },
  { path: '/adult-video-chat', lastModified: '2026-11-28' },
  { path: '/omegle-alternative', lastModified: '2026-11-28' },
  { path: '/no-signup-video-chat', lastModified: '2026-11-28' },
  { path: '/flirty-video-chat', lastModified: '2026-11-28' },
  { path: '/chat-with-girls', lastModified: '2026-11-28' },
  { path: '/nsfw-omegle', lastModified: '2026-11-28' },
  { path: '/about', lastModified: '2026-09-01' },
  { path: '/safety', lastModified: '2026-11-26' },
  { path: '/faq', lastModified: '2026-11-26' },
  { path: '/contact', lastModified: '2026-09-01' },
  { path: '/privacy', lastModified: '2026-09-01' },
  { path: '/terms', lastModified: '2026-09-01' },
  { path: '/blog', lastModified: '2026-11-26' },
];

export default function sitemap() {
  // No image: entries — OG/social preview URLs were producing GSC sitemap
  // warnings (~28). Google still discovers OG images from page metadata.
  const pages = staticRoutes.map(({ path, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(lastModified),
  }));

  const categories = BLOG_CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/blog/category/${cat.slug}`,
    lastModified: new Date('2026-11-26'),
  }));

  const posts = blogPostsList.filter((post) => !BLOG_NOINDEX_SLUGS.has(post.slug)).map((post) => {
    const full = blogPostsMap[post.slug];
    const published = new Date(full?.dateModified || post.date);
    return {
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: published,
    };
  });

  return [...pages, ...categories, ...posts];
}
