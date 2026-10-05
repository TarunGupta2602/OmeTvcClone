/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/community-guidelines',
        destination: '/safety',
        permanent: true,
      },
      {
        source: '/chat',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/omegle-alternatives-why-strangerlive-is-better',
        destination: '/blog/omegle-alternatives-why-parvah-is-better',
        permanent: true,
      },
      {
        source: '/dirty-talk-video-chat',
        destination: '/casual-video-chat',
        permanent: true,
      },
      {
        source: '/blog/free-live-porn-chat',
        destination: '/blog/free-live-video-chat',
        permanent: true,
      },
      {
        source: '/blog/nsfw-video-chat-with-strangers-18-plus',
        destination: '/blog/video-chat-with-strangers-18-plus',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
          { key: 'Content-Type', value: 'application/xml; charset=utf-8' },
        ],
      },
      {
        source: '/blog/covers/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/blog/:slug/opengraph-image',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(self), microphone=(self), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
