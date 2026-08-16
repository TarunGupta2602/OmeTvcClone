import HomePageClient from './components/HomePageClient';
import HomeCrawlLinks from './components/HomeCrawlLinks';
import { SITE_URL, SITE_DESCRIPTION, SITE_NAME } from '../lib/constants';
import { buildFaqSchema, stringifyJsonLd } from '../lib/seo';

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
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free random video chat with strangers — no signup',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
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

const HOME_FAQS = [
  {
    q: 'Is random video chat with strangers free?',
    a: 'Yes. Random video chat here is completely free — no registration, credits, or subscription required.',
  },
  {
    q: 'Do I need to sign up to video chat with strangers?',
    a: 'No. Confirm you are 18+, allow camera access, and click Start Matching. No email or account needed.',
  },
  {
    q: 'Who will I match with?',
    a: 'You are paired with another available adult (18+) in the live queue. Matches are random — skip anytime if it is not a fit.',
  },
  {
    q: 'Is flirty or intimate chat allowed?',
    a: 'Yes, between consenting adults 18+. Non-consent, underage users, and illegal content are banned.',
  },
  {
    q: 'Do I need to download an app?',
    a: 'No. Use Chrome, Safari, Firefox, or Edge on desktop or mobile — allow camera access and start matching in the browser.',
  },
  {
    q: 'Is this a good Omegle alternative?',
    a: 'Yes. You get instant stranger matching with an 18+ age gate, report tools, skip controls, and peer-to-peer WebRTC video.',
  },
];

const faqJsonLd = buildFaqSchema(HOME_FAQS);

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(faqJsonLd) }} />
      <HomePageClient />
      <HomeCrawlLinks />
    </>
  );
}
