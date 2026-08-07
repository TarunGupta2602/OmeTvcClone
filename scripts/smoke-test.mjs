/**
 * Lightweight smoke checks for SEO + product honesty invariants.
 * Run: npm test
 */
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import assert from 'node:assert/strict';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const { SITE_URL, SITE_NAME, getIceServers } = await import(
  pathToFileURL(join(root, 'lib/constants.js')).href
);
const { blogPostsList } = await import(pathToFileURL(join(root, 'data/blogPosts.js')).href);
const { BLOG_CATEGORIES } = await import(pathToFileURL(join(root, 'lib/blogCategories.js')).href);

let failed = 0;
function check(name, fn) {
  try {
    fn();
    console.log(`✓ ${name}`);
  } catch (err) {
    failed += 1;
    console.error(`✗ ${name}`);
    console.error(`  ${err.message}`);
  }
}

check('SITE_URL is production domain', () => {
  assert.equal(SITE_URL, 'https://parvah.online');
  assert.equal(SITE_NAME, 'Parvah');
});

check('ICE servers are STUN-only (no TURN)', () => {
  const { iceServers } = getIceServers();
  assert.ok(iceServers.length >= 1);
  assert.ok(iceServers.every((s) => String(s.urls).includes('stun:')));
  assert.ok(iceServers.every((s) => !String(s.urls).includes('turn:')));
  const constantsSrc = readFileSync(join(root, 'lib/constants.js'), 'utf8');
  assert.doesNotMatch(constantsSrc, /NEXT_PUBLIC_TURN/);
});

check('Blog posts and categories exist', () => {
  assert.ok(blogPostsList.length >= 10);
  assert.ok(BLOG_CATEGORIES.length >= 4);
});

check('app/sitemap.js exports default', () => {
  const src = readFileSync(join(root, 'app/sitemap.js'), 'utf8');
  assert.match(src, /export default function sitemap/);
  assert.match(src, /blogPostsList/);
});

check('GTM is not hardcoded in layout', () => {
  const layout = readFileSync(join(root, 'app/layout.js'), 'utf8');
  assert.doesNotMatch(layout, /GTM-MF9GKBNC/);
  assert.doesNotMatch(layout, /googletagmanager\.com\/gtm\.js/);
});

check('CookieConsent supports decline', () => {
  const src = readFileSync(join(root, 'app/components/CookieConsent.js'), 'utf8');
  assert.match(src, /Decline/);
  assert.match(src, /declined/);
});

check('server validates room membership for messages', () => {
  const src = readFileSync(join(root, 'server.js'), 'utf8');
  assert.match(src, /peersShareRoom/);
  assert.match(src, /send-message/);
});

check('FAQ does not claim report moderation queue', () => {
  const src = readFileSync(join(root, 'app/faq/page.js'), 'utf8');
  assert.doesNotMatch(src, /reviewed by our safety team/i);
  assert.doesNotMatch(src, /your account may be/i);
});

check('Blog does not claim Parvah TURN servers exist', () => {
  const src = readFileSync(join(root, 'data/blogPosts.js'), 'utf8');
  assert.doesNotMatch(src, /Parvah's TURN servers/i);
  assert.doesNotMatch(src, /moderation queue reviewed/i);
});

check('Chat CSS is split from globals', () => {
  const globals = readFileSync(join(root, 'app/globals.css'), 'utf8');
  const chat = readFileSync(join(root, 'app/chat.css'), 'utf8');
  assert.doesNotMatch(globals, /\.chat-shell\s*\{/);
  assert.match(chat, /\.chat-shell\s*\{/);
  assert.match(globals, /prefers-reduced-motion/);
});

check('Site OG uses static PNG only (no root opengraph-image.js)', () => {
  assert.equal(existsSync(join(root, 'app/opengraph-image.js')), false);
  assert.equal(existsSync(join(root, 'public/og-image.png')), true);
  const layout = readFileSync(join(root, 'app/layout.js'), 'utf8');
  assert.match(layout, /\/og-image\.png/);
  assert.equal(existsSync(join(root, 'app/blog/[slug]/opengraph-image.js')), true);
});

if (failed > 0) {
  console.error(`\n${failed} smoke check(s) failed`);
  process.exit(1);
}
console.log(`\nAll smoke checks passed (${blogPostsList.length} posts indexed in data)`);
