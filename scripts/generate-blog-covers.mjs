import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'public/blog/covers');

mkdirSync(outDir, { recursive: true });

const { blogPostsMap } = await import(pathToFileURL(join(root, 'data/blogPosts.js')).href);
const { buildCoverSvg } = await import(pathToFileURL(join(root, 'lib/blogImages.js')).href);

let count = 0;
for (const [slug, post] of Object.entries(blogPostsMap)) {
  const svg = buildCoverSvg({
    title: post.title,
    category: post.category,
    readTime: post.readTime,
  });
  writeFileSync(join(outDir, `${slug}.svg`), svg, 'utf8');
  count += 1;
}

console.log(`Generated ${count} blog cover SVGs → public/blog/covers/`);
