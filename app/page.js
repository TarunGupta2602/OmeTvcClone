import HomePageClient from './components/HomePageClient';
import HomeCrawlLinks from './components/HomeCrawlLinks';
import { SITE_URL, SITE_DESCRIPTION, SITE_NAME } from '../lib/constants';
import { buildFaqSchema, stringifyJsonLd } from '../lib/seo';

const baseMetadata = {
  title: 'Free Random Video Chat — Talk to Strangers Instantly',
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `Free Random Video Chat — Talk to Strangers Instantly | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Parvah - Free Random Video Chat' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Free Random Video Chat — Talk to Strangers Instantly | ${SITE_NAME}`,
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
    q: 'Is Parvah free random video chat?',
    a: 'Yes. Parvah is completely free with no registration, credits, or subscription required.',
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
    q: 'How do I stay safe?',
    a: 'Never share personal information, use the Report button for violations, and click Next to skip uncomfortable chats. Parvah is 18+ only.',
  },
  {
    q: 'Is Parvah an Omegle alternative?',
    a: 'Yes. Parvah offers the same instant stranger matching Omegle users wanted, with modern WebRTC privacy, an age gate, and built-in reporting.',
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
