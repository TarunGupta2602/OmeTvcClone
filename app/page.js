import HomePageClient from './components/HomePageClient';
import HomeCrawlLinks from './components/HomeCrawlLinks';
import { SITE_URL, SITE_DESCRIPTION, SITE_NAME } from '../lib/constants';
import { buildFaqSchema, stringifyJsonLd } from '../lib/seo';

const baseMetadata = {
  title: 'Free Adult Video Chat — Flirty Random Webcam Chat 18+',
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `Free Adult Video Chat — Flirty Random Webcam Chat 18+ | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Parvah - Free Adult Random Video Chat' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Free Adult Video Chat — Flirty Random Webcam Chat 18+ | ${SITE_NAME}`,
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
    q: 'Is Parvah free adult video chat?',
    a: 'Yes. Parvah is completely free adult random video chat with no registration, credits, or subscription required.',
  },
  {
    q: 'Who will I match with?',
    a: 'You are matched with another available adult (18+) in the live queue. Matches are random — chemistry, gender, and vibe vary. Skip anytime if it is not a fit.',
  },
  {
    q: 'Is flirty or intimate chat allowed?',
    a: 'Yes, between consenting adults 18+. Flirty talks, hot conversations, and mutual chemistry are welcome. Non-consent, underage users, and illegal content are banned.',
  },
  {
    q: 'Do I need to download an app?',
    a: 'No. Open parvah.online in Chrome, Safari, Firefox, or Edge on desktop or mobile, allow camera access, and start matching.',
  },
  {
    q: 'Is video chat private?',
    a: 'Video streams use peer-to-peer WebRTC and are not recorded or stored on our servers.',
  },
  {
    q: 'Is Parvah an adult Omegle alternative?',
    a: 'Yes. Parvah offers instant stranger matching for adults who want flirty, late-night, or relationship-minded video chat — with an age gate, report tools, and skip controls.',
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
