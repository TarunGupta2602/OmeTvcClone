import { SITE_URL } from './constants';
import { getBlogCoverPath, parseReadTimeToIsoDuration } from './blogImages';
import { getBlogFaqs } from '../data/blogFaqs';
import { buildFaqSchema } from './seo';

const CATEGORY_COLORS = {
  Safety: 'from-rose-500 to-red-600',
  Comparison: 'from-blue-500 to-cyan-600',
  Tips: 'from-emerald-500 to-teal-600',
  Technology: 'from-violet-500 to-purple-600',
  Technical: 'from-amber-500 to-orange-600',
  Privacy: 'from-indigo-500 to-blue-600',
};

const CATEGORY_TAGS = {
  Safety: ['video chat safety', 'online safety', 'Parvah'],
  Comparison: ['omegle alternative', 'ome tv', 'random video chat'],
  Tips: ['video chat tips', 'online connections', 'Parvah'],
  Technology: ['webrtc', 'video chat technology', 'p2p'],
  Technical: ['troubleshooting', 'webcam fix', 'webrtc errors'],
  Privacy: ['privacy', 'data protection', 'anonymous chat'],
};

export function formatBlogDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getCategoryGradient(category) {
  return CATEGORY_COLORS[category] || 'from-indigo-500 to-purple-600';
}

export function normalizeBlogContent(html) {
  const trimmed = html.trim();
  if (!trimmed.includes('<h2>Conclusion</h2>')) return trimmed;

  const [before, ...rest] = trimmed.split('<h2>Conclusion</h2>');
  if (!rest.length) return trimmed;

  const afterConclusion = rest.join('<h2>Conclusion</h2>');
  const sectionParts = afterConclusion.split(/(?=<h2>)/);
  const conclusionBody = sectionParts[0]?.trim() || '';
  const trailingSections = sectionParts.slice(1).join('').trim();

  if (!trailingSections) {
    return `${before.trim()}<h2>Conclusion</h2>${conclusionBody}`;
  }

  return `${before.trim()}${trailingSections}<h2>Conclusion</h2>${conclusionBody}`;
}

export function slugifyHeading(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function extractHeadings(html) {
  const headings = [];
  const regex = /<h([23])>(.*?)<\/h\1>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const level = Number(match[1]);
    const text = match[2].replace(/<[^>]+>/g, '').trim();
    if (text.toLowerCase() === 'introduction') continue;
    headings.push({
      level,
      text,
      id: slugifyHeading(text),
    });
  }
  return headings;
}

export function injectHeadingIds(html) {
  return html.replace(/<h([23])>(.*?)<\/h\1>/gi, (_, level, inner) => {
    const text = inner.replace(/<[^>]+>/g, '').trim();
    const id = slugifyHeading(text);
    return `<h${level} id="${id}">${inner}</h${level}>`;
  });
}

export function countWords(html) {
  const text = html.replace(/<[^>]+>/g, ' ');
  return text.split(/\s+/).filter(Boolean).length;
}

export function formatContentForDisplay(html) {
  let result = html;

  // Remove redundant "Introduction" heading — excerpt already serves as intro
  result = result.replace(/<h2[^>]*>\s*Introduction\s*<\/h2>\s*/gi, '');

  // Style opening paragraph as lead text
  result = result.replace(/<p>/, '<p class="lead">');

  // Mark conclusion section
  result = result.replace(
    /<h2 id="conclusion">/gi,
    '<h2 id="conclusion" class="blog-conclusion">'
  );

  return result;
}

export function enrichPost(slug, post) {
  const normalizedContent = formatContentForDisplay(
    injectHeadingIds(normalizeBlogContent(post.content))
  );
  const wordCount = countWords(normalizedContent);
  const headings = extractHeadings(normalizedContent);

  return {
    ...post,
    slug,
    content: normalizedContent,
    dateModified: post.dateModified || post.date,
    tags: post.tags || CATEGORY_TAGS[post.category] || [post.category],
    faqs: post.faqs || getBlogFaqs(slug),
    seoTitle: post.seoTitle || post.title,
    image: getBlogCoverPath(slug),
    imageAbsolute: `${SITE_URL}${getBlogCoverPath(slug)}`,
    imageAlt: post.imageAlt || `${post.title} | Parvah Blog`,
    wordCount,
    headings,
    formattedDate: formatBlogDate(post.date),
    formattedModifiedDate: formatBlogDate(post.dateModified || post.date),
    categoryGradient: getCategoryGradient(post.category),
    canonicalUrl: `${SITE_URL}/blog/${slug}`,
  };
}

export function getRelatedPosts(slug, category, blogPostsMap, limit = 3) {
  const sameCategory = Object.entries(blogPostsMap)
    .filter(([s, p]) => s !== slug && p.category === category)
    .slice(0, limit);

  if (sameCategory.length >= limit) return sameCategory;

  const others = Object.entries(blogPostsMap)
    .filter(([s]) => s !== slug && !sameCategory.some(([id]) => id === s))
    .slice(0, limit - sameCategory.length);

  return [...sameCategory, ...others];
}

export function getAdjacentPosts(slug, blogPostsList) {
  const index = blogPostsList.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };

  return {
    prev: index > 0 ? blogPostsList[index - 1] : null,
    next: index < blogPostsList.length - 1 ? blogPostsList[index + 1] : null,
  };
}

export function buildBlogJsonLd(post) {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: post.canonicalUrl },
    ],
  };

  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${post.canonicalUrl}#article`,
    headline: post.title,
    name: post.title,
    description: post.excerpt,
    abstract: post.excerpt,
    url: post.canonicalUrl,
    datePublished: post.date,
    dateModified: post.dateModified,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Parvah',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
      },
    },
    image: {
      '@type': 'ImageObject',
      url: post.imageAbsolute,
      width: 1200,
      height: 630,
      caption: post.imageAlt,
    },
    thumbnailUrl: post.imageAbsolute,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.canonicalUrl,
    },
    isPartOf: {
      '@type': 'Blog',
      '@id': `${SITE_URL}/blog#blog`,
      name: 'Parvah Blog',
      url: `${SITE_URL}/blog`,
      description: 'Video chat safety guides, Omegle alternatives, and WebRTC tips from Parvah.',
    },
    articleSection: post.category,
    keywords: post.keywords,
    wordCount: post.wordCount,
    timeRequired: parseReadTimeToIsoDuration(post.readTime),
    inLanguage: 'en-US',
    about: {
      '@type': 'Thing',
      name: post.category,
    },
  };

  const graph = [article, breadcrumb];

  if (post.faqs?.length) {
    graph.push(buildFaqSchema(post.faqs));
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
