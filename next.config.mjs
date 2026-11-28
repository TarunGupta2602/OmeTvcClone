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
      // Girls pages -> /chat-with-girls
      {
        source: '/video-chat-with-girls',
        destination: '/chat-with-girls',
        permanent: true,
      },
      {
        source: '/girls-video-chat',
        destination: '/chat-with-girls',
        permanent: true,
      },
      // Omegle alternative pages -> /omegle-alternative
      {
        source: '/omegle-alternative-usa',
        destination: '/omegle-alternative',
        permanent: true,
      },
      {
        source: '/omegle-alternative-uk',
        destination: '/omegle-alternative',
        permanent: true,
      },
      {
        source: '/omegle-alternative-canada',
        destination: '/omegle-alternative',
        permanent: true,
      },
      {
        source: '/ometv-alternative',
        destination: '/omegle-alternative',
        permanent: true,
      },
      {
        source: '/chatroulette-alternative',
        destination: '/omegle-alternative',
        permanent: true,
      },
      {
        source: '/emerald-chat-alternative',
        destination: '/omegle-alternative',
        permanent: true,
      },
      // 18+ chat pages -> /adult-video-chat
      {
        source: '/hot-video-chat',
        destination: '/adult-video-chat',
        permanent: true,
      },
      {
        source: '/dirty-talk-video-chat',
        destination: '/adult-video-chat',
        permanent: true,
      },
      // No signup pages -> /no-signup-video-chat
      {
        source: '/anonymous-video-chat',
        destination: '/no-signup-video-chat',
        permanent: true,
      },
      // General random chat pages -> /random-video-chat
      {
        source: '/video-chat-with-strangers',
        destination: '/random-video-chat',
        permanent: true,
      },
      {
        source: '/talk-to-strangers',
        destination: '/random-video-chat',
        permanent: true,
      },
      {
        source: '/live-video-chat',
        destination: '/random-video-chat',
        permanent: true,
      },
      {
        source: '/free-webcam-chat',
        destination: '/random-video-chat',
        permanent: true,
      },
      {
        source: '/late-night-video-chat',
        destination: '/random-video-chat',
        permanent: true,
      },
      {
        source: '/meet-people-online',
        destination: '/random-video-chat',
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
