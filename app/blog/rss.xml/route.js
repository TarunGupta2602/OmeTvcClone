import { SITE_URL, SITE_NAME } from '../../../lib/constants';
import { blogPostsList, blogPostsMap } from '../../../data/blogPosts';

export async function GET() {
  const items = blogPostsList
    .map((post) => {
      const full = blogPostsMap[post.slug];
      const imageUrl = `${SITE_URL}/blog/covers/${post.slug}.svg`;
      return `
    <item>
      <title><![CDATA[${full.title}]]></title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(full.date).toUTCString()}</pubDate>
      <description><![CDATA[${full.excerpt}]]></description>
      <category>${full.category}</category>
      <enclosure url="${imageUrl}" type="image/svg+xml" length="0"/>
      <media:content xmlns:media="http://search.yahoo.com/mrss/" url="${imageUrl}" medium="image" type="image/svg+xml"/>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>${SITE_NAME} Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Tips, safety guides, and updates about random video chat on Parvah.</description>
    <language>en-us</language>
    <image>
      <url>${SITE_URL}/og-image.png</url>
      <title>${SITE_NAME} Blog</title>
      <link>${SITE_URL}/blog</link>
    </image>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
