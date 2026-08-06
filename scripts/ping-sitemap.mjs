/**
 * Notify search engines after deploy. Safe to run manually or in CI.
 * Usage: node scripts/ping-sitemap.mjs
 */
const SITEMAP = 'https://parvah.online/sitemap.xml';

const endpoints = [
  `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`,
  `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`,
];

for (const url of endpoints) {
  try {
    const res = await fetch(url, { method: 'GET' });
    console.log(`${res.status} ${url}`);
  } catch (err) {
    console.warn(`Ping failed: ${url}`, err.message);
  }
}
