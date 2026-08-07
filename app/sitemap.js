import { SITE_URL } from '../lib/constants';
import { blogPostsList } from '../data/blogPosts';
import { BLOG_CATEGORIES } from '../lib/blogCategories';

const staticRoutes = [
  { path: '', changeFrequency: 'daily', priority: 1 },
  { path: '/omegle-alternative', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/ometv-alternative', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/random-video-chat', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/about', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/safety', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/faq', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/terms', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.85 },
];

export default function sitemap() {
  const now = new Date();

  const pages = staticRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const categories = BLOG_CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/blog/category/${cat.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.65,
  }));

  const posts = blogPostsList.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...pages, ...categories, ...posts];
}
