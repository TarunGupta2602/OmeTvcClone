import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SUPPORT_EMAIL } from './constants';
import { BRAND_SLOGAN, FEATURE_LIST, KNOWS_ABOUT } from './geo';

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
    slogan: BRAND_SLOGAN,
    knowsAbout: KNOWS_ABOUT,
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    contactPoint: {
      '@type': 'ContactPoint',
      email: SUPPORT_EMAIL,
      contactType: 'customer support',
      availableLanguage: 'English',
    },
  };
}

export function buildHowToSchema({
  name = `How to start ${SITE_NAME} random video chat`,
  description = SITE_DESCRIPTION,
  steps = [],
  url,
} = {}) {
  if (!steps?.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    url,
    totalTime: 'PT1M',
    tool: [
      { '@type': 'HowToTool', name: 'Webcam' },
      { '@type': 'HowToTool', name: 'Web browser with WebRTC' },
    ],
    step: steps.map((step, index) => {
      const isString = typeof step === 'string';
      return {
        '@type': 'HowToStep',
        position: index + 1,
        name: isString ? `Step ${index + 1}` : step.name,
        text: isString ? step : step.text,
      };
    }),
  };
}

export function buildAdultAudienceSchema() {
  return {
    '@type': 'PeopleAudience',
    requiredMinAge: 18,
    suggestedMinAge: 18,
  };
}

export function buildWebApplicationExtras() {
  return {
    isAccessibleForFree: true,
    featureList: FEATURE_LIST,
    browserRequirements: 'Requires a modern browser with WebRTC (Chrome, Safari, Firefox, or Edge).',
    audience: buildAdultAudienceSchema(),
    inLanguage: 'en',
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

export function buildWebPageSchema({ title, description, url, speakableSelector = '.direct-answer' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    inLanguage: 'en',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: [speakableSelector],
    },
    audience: buildAdultAudienceSchema(),
  };
}
