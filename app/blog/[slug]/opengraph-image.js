import { ImageResponse } from 'next/og';
import { blogPostsMap } from '../../../data/blogPosts';
import { getBlogCoverTheme, wrapTitleLines } from '../../../lib/blogImages';

export const alt = 'Parvah Blog Article';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage({ params }) {
  const { slug } = await params;
  const post = blogPostsMap[slug];

  if (!post) {
    return new ImageResponse(
      (<div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#4f46e5', color: 'white', fontSize: 48 }}>Parvah Blog</div>),
      size
    );
  }

  const theme = getBlogCoverTheme(post.category);
  const titleLines = wrapTitleLines(post.title, 32);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 64px',
          background: `linear-gradient(135deg, ${theme.from} 0%, ${theme.to} 100%)`,
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -80, right: -80, width: 320, height: 320, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ position: 'absolute', bottom: -60, left: 200, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.2)', borderRadius: 999, padding: '8px 20px' }}>
            <span style={{ fontSize: 22 }}>{theme.icon}</span>
            <span style={{ fontSize: 20, fontWeight: 700, color: 'white', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              {post.category}
            </span>
          </div>
          <span style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)' }}>{post.readTime}</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 900 }}>
          {titleLines.map((line) => (
            <div key={line} style={{ fontSize: line.length > 30 ? 44 : 52, fontWeight: 800, color: 'white', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              {line}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 800, color: 'white' }}>
              P
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: 'white' }}>Parvah Blog</span>
              <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)' }}>parvah.online</span>
            </div>
          </div>
          <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
            Free Random Video Chat
          </div>
        </div>
      </div>
    ),
    size
  );
}
