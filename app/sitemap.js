import { SITE_URL } from '../lib/constants';
import { blogPostsList, blogPostsMap } from '../data/blogPosts';
import { BLOG_CATEGORIES } from '../lib/blogCategories';

const staticRoutes = [
  { path: '', changeFrequency: 'daily', priority: 1 },
  { path: '/omegle-alternative', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/ometv-alternative', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/chatroulette-alternative', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/emerald-chat-alternative', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/random-video-chat', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/anonymous-video-chat', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/no-signup-video-chat', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/safety', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/faq', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.85 },
];

export default function sitemap() {
  const now = new Date();

  const pages = staticRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
    ...(path === ''
      ? { images: [`${SITE_URL}/og-image.jpg`] }
      : {}),
  }));

  const categories = BLOG_CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/blog/category/${cat.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.65,
  }));

  const posts = blogPostsList.map((post) => {
    const full = blogPostsMap[post.slug];
    return {
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(full?.dateModified || post.date),
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [`${SITE_URL}/blog/${post.slug}/opengraph-image`],
    };
  });

  return [...pages, ...categories, ...posts];
}
