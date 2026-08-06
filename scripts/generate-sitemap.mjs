import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const SITE_URL = 'https://parvah.online';

const { blogPostsList } = await import(pathToFileURL(join(root, 'data/blogPosts.js')).href);
const { BLOG_CATEGORIES } = await import(pathToFileURL(join(root, 'lib/blogCategories.js')).href);

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function toLastMod(dateStr) {
  const d = new Date(dateStr);
  return Number.isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}

const staticPages = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: '/omegle-alternative', priority: '0.9', changefreq: 'weekly' },
  { path: '/ometv-alternative', priority: '0.9', changefreq: 'weekly' },
  { path: '/random-video-chat', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'weekly' },
  { path: '/safety', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.5', changefreq: 'monthly' },
  { path: '/terms', priority: '0.5', changefreq: 'monthly' },
  { path: '/faq', priority: '0.8', changefreq: 'weekly' },
  { path: '/blog', priority: '0.85', changefreq: 'weekly' },
];

const buildDate = new Date().toISOString();

function urlEntry({ loc, lastmod, changefreq, priority, image }) {
  const imageBlock = image
    ? `\n    <image:image>\n      <image:loc>${escapeXml(image)}</image:loc>\n    </image:image>`
    : '';
  return `  <url>
    <loc>${escapeXml(loc)}</loc>${imageBlock}
    <lastmod>${escapeXml(lastmod)}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const entries = [
  ...staticPages.map(({ path, priority, changefreq }) =>
    urlEntry({
      loc: `${SITE_URL}${path}`,
      lastmod: buildDate,
      changefreq,
      priority,
      image: path === '' ? `${SITE_URL}/og-image.png` : null,
    })
  ),
  ...BLOG_CATEGORIES.map((cat) =>
    urlEntry({
      loc: `${SITE_URL}/blog/category/${cat.slug}`,
      lastmod: buildDate,
      changefreq: 'weekly',
      priority: '0.65',
    })
  ),
  ...blogPostsList.map((post) =>
    urlEntry({
      loc: `${SITE_URL}/blog/${post.slug}`,
      lastmod: toLastMod(post.date),
      changefreq: 'monthly',
      priority: '0.7',
      image: `${SITE_URL}/blog/covers/${post.slug}.svg`,
    })
  ),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join('\n')}
</urlset>
`;

writeFileSync(join(root, 'public/sitemap.xml'), xml, 'utf8');
console.log(`Generated sitemap.xml with ${entries.length} URLs → public/sitemap.xml`);
