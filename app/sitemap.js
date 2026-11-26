import { SITE_URL } from '../lib/constants';
import { blogPostsList, blogPostsMap } from '../data/blogPosts';
import { BLOG_CATEGORIES } from '../lib/blogCategories';
import { SEO_LANDING_SLUGS } from '../lib/seoLandings';

const HARDCODED_LANDING_SLUGS = new Set([
  'video-chat-with-strangers',
  'chat-with-girls',
  'talk-to-strangers',
  'flirty-video-chat',
  'hot-video-chat',
  'nsfw-omegle',
  'nsfw-video-chat',
  'omegle-18',
  'video-chat-18',
  'random-cam-chat',
  'omegle-adult',
  'free-adult-video-chat',
  'random-video-call',
  'omegle-free',
  'omegle-alternatives',
  'videochat',
  'girls-video-chat',
]);

const staticRoutes = [
  { path: '', lastModified: '2026-11-26' },
  { path: '/random-video-chat', lastModified: '2026-11-26' },
  { path: '/video-chat-with-strangers', lastModified: '2026-11-26' },
  { path: '/chat-with-girls', lastModified: '2026-11-26' },
  { path: '/omegle-alternative', lastModified: '2026-11-26' },
  { path: '/omegle-alternative-india', lastModified: '2026-11-26' },
  { path: '/omegle-alternative-usa', lastModified: '2026-11-26' },
  { path: '/omegle-alternative-uk', lastModified: '2026-11-26' },
  { path: '/omegle-alternative-canada', lastModified: '2026-11-26' },
  { path: '/ometv-alternative', lastModified: '2026-11-26' },
  { path: '/talk-to-strangers', lastModified: '2026-11-26' },
  { path: '/flirty-video-chat', lastModified: '2026-11-26' },
  { path: '/hot-video-chat', lastModified: '2026-11-26' },
  { path: '/no-signup-video-chat', lastModified: '2026-11-26' },
  { path: '/anonymous-video-chat', lastModified: '2026-11-26' },
  { path: '/adult-video-chat', lastModified: '2026-11-26' },
  { path: '/nsfw-omegle', lastModified: '2026-11-26' },
  { path: '/nsfw-video-chat', lastModified: '2026-11-26' },
  { path: '/omegle-18', lastModified: '2026-11-26' },
  { path: '/video-chat-18', lastModified: '2026-11-26' },
  { path: '/random-cam-chat', lastModified: '2026-11-26' },
  { path: '/omegle-adult', lastModified: '2026-11-26' },
  { path: '/free-adult-video-chat', lastModified: '2026-11-26' },
  { path: '/random-video-call', lastModified: '2026-11-26' },
  { path: '/omegle-free', lastModified: '2026-11-26' },
  { path: '/omegle-alternatives', lastModified: '2026-11-26' },
  { path: '/videochat', lastModified: '2026-11-26' },
  ...SEO_LANDING_SLUGS.filter((slug) => !HARDCODED_LANDING_SLUGS.has(slug)).map((slug) => ({
    path: `/${slug}`,
    lastModified: '2026-11-26',
  })),
  { path: '/chatroulette-alternative', lastModified: '2026-11-26' },
  { path: '/emerald-chat-alternative', lastModified: '2026-11-26' },
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

  const posts = blogPostsList.map((post) => {
    const full = blogPostsMap[post.slug];
    const published = new Date(full?.dateModified || post.date);
    return {
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: published,
    };
  });

  return [...pages, ...categories, ...posts];
}
