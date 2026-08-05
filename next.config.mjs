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
    ];
  },
  async headers() {
    return [
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
