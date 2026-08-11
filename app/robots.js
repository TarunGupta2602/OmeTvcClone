import { SITE_URL } from '../lib/constants';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/chat'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
