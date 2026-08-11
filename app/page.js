import HomePageClient from './components/HomePageClient';
import HomeCrawlLinks from './components/HomeCrawlLinks';
import { SITE_URL, SITE_DESCRIPTION, SITE_NAME } from '../lib/constants';
import { buildFaqSchema, stringifyJsonLd } from '../lib/seo';

export const metadata = {
  title: 'Free Random Video Chat with Strangers',
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `Free Random Video Chat with Strangers | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Parvah - Free Random Video Chat' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Free Random Video Chat with Strangers | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
  },
};

const HOME_FAQS = [
  {
    q: 'Is Parvah free to use?',
    a: 'Yes. Parvah is completely free with no registration or subscription required.',
  },
  {
    q: 'Is video chat private?',
    a: 'Video streams use peer-to-peer WebRTC and are not recorded or stored on our servers.',
  },
  {
    q: 'How do I stay safe?',
    a: 'Never share personal information, use the Report button for violations, and click Next to skip uncomfortable chats.',
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
