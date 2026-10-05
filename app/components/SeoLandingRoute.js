import SeoLandingPage from './SeoLandingPage';
import { SITE_URL } from '../../lib/constants';
import { getSeoLanding } from '../../lib/seoLandings';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';

const DEFAULT_POPULAR = [
  { href: '/random-video-chat', label: 'random video chat' },
  { href: '/video-chat-with-strangers', label: 'video chat with strangers' },
  { href: '/chat-with-girls', label: 'chat with girls' },
  { href: '/flirty-video-chat', label: 'flirty video chat' },
  { href: '/hot-video-chat', label: 'hot video chat' },
  { href: '/omegle-alternative', label: 'omegle alternative' },
  { href: '/talk-to-strangers', label: 'talk to strangers' },
  { href: '/live-video-chat', label: 'live video chat' },
];

export default function SeoLandingRoute({ slug }) {
  const landing = getSeoLanding(slug);
  if (!landing) return null;

  const url = `${SITE_URL}/${slug}`;
  const jsonLd = buildJsonLdGraph([
    buildWebPageSchema({ title: landing.h1, description: landing.description, url }),
    buildFaqSchema(landing.faqs),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge={landing.badge}
        title={landing.h1}
        description={landing.description}
        highlights={landing.highlights}
        sections={landing.sections}
        faqs={landing.faqs}
        relatedLinks={landing.related}
        howToSteps={landing.howToSteps}
        popularSearches={landing.popularSearches || DEFAULT_POPULAR}
      />
    </>
  );
}
