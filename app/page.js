import HomePageClient from './components/HomePageClient';
import HomeCrawlLinks from './components/HomeCrawlLinks';
import { SITE_URL, SITE_DESCRIPTION, SITE_NAME } from '../lib/constants';
import { HOME_FAQS, HOW_TO_START, WHAT_IS_PARVAH } from '../lib/geo';
import {
  buildFaqSchema,
  buildHowToSchema,
  buildJsonLdGraph,
  stringifyJsonLd,
} from '../lib/seo';

const HOME_TITLE = 'Random Video Chat with Strangers — Free, No Signup';

const baseMetadata = {
  title: {
    absolute: HOME_TITLE,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const hasJunkQuery = Boolean(params?.q || params?.search_term_string);

  if (hasJunkQuery) {
    return {
      ...baseMetadata,
      robots: {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
      },
    };
  }

  return baseMetadata;
}

const homeJsonLd = buildJsonLdGraph([
  buildFaqSchema(HOME_FAQS),
  buildHowToSchema({
    name: 'How to start free random video chat on Parvah',
    description: WHAT_IS_PARVAH,
    steps: HOW_TO_START,
    url: SITE_URL,
  }),
]);

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(homeJsonLd) }} />
      <HomePageClient />
      <HomeCrawlLinks />
    </>
  );
}
