import SeoLandingPage from './SeoLandingPage';
import { SITE_URL } from '../../lib/constants';
import { getSeoLanding } from '../../lib/seoLandings';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';

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
      />
    </>
  );
}
