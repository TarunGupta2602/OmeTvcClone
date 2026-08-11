import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SUPPORT_EMAIL } from './constants';

/** Remove @context so nodes can safely sit under a parent @graph. */
export function stripJsonLdContext(node) {
  if (!node || typeof node !== 'object' || Array.isArray(node)) return node;
  const { '@context': _ignored, ...rest } = node;
  return rest;
}

/** Single JSON-LD document with one @context and an @graph of nodes. */
export function buildJsonLdGraph(nodes) {
  return {
    '@context': 'https://schema.org',
    '@graph': (nodes || []).filter(Boolean).map(stripJsonLdContext),
  };
}

/** Safe script payload (escape `<` for HTML parsing). */
export function stringifyJsonLd(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/android-chrome-512x512.png`,
      width: 512,
      height: 512,
    },
    description: SITE_DESCRIPTION,
    contactPoint: {
      '@type': 'ContactPoint',
      email: SUPPORT_EMAIL,
      contactType: 'customer support',
      availableLanguage: 'English',
    },
  };
}

export function buildFaqSchema(faqs) {
  if (!faqs?.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

export function buildCollectionPageSchema({ title, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url,
    isPartOf: { '@id': `${SITE_URL}/blog#blog` },
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

export function buildWebPageSchema({ title, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}
