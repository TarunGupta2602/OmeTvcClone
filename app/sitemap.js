import { SITE_URL } from '../lib/constants';
import { blogPostsList } from '../data/blogPosts';
import { BLOG_CATEGORIES } from '../lib/blogCategories';
import { getBlogCoverPath } from '../lib/blogImages';

export default function sitemap() {
  const staticPages = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/omegle-alternative', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/ometv-alternative', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/random-video-chat', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/safety', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/terms', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
  ];

  return [
    ...staticPages.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date().toISOString(),
      changeFrequency,
      priority,
      ...(path === '' ? { images: [`${SITE_URL}/og-image.png`] } : {}),
    })),
    ...BLOG_CATEGORIES.map((cat) => ({
      url: `${SITE_URL}/blog/category/${cat.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.65,
    })),
    ...blogPostsList.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: 'monthly',
      priority: 0.6,
      images: [`${SITE_URL}${getBlogCoverPath(post.slug)}`],
    })),
  ];
}
