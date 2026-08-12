import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Emerald Chat Alternative — Free Random Video Chat';
const description =
  'Looking for an Emerald Chat alternative? Parvah offers free 1-on-1 random video chat with no signup, WebRTC privacy, and built-in safety tools for adults 18+.';

export const metadata = {
  title: 'Emerald Chat Alternative — Free No-Signup Video Chat',
  description,
  alternates: { canonical: `${SITE_URL}/emerald-chat-alternative` },
  openGraph: {
    title: `Emerald Chat Alternative — Free No-Signup Video Chat | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/emerald-chat-alternative`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Parvah Emerald Chat Alternative' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Emerald Chat Alternative | ${SITE_NAME}`,
    description,
    images: ['/og-image.jpg'],
  },
};

const faqs = [
  {
    q: 'What is a good Emerald Chat alternative?',
    a: 'Parvah is a strong option if you want instant stranger video chat without creating an account, plus WebRTC peer-to-peer video and clear 18+ safety controls.',
  },
  {
    q: 'Does Parvah require interests or filters to start?',
    a: 'No. Confirm you are 18+, allow camera access, and click Start Match — Parvah keeps the flow simple.',
  },
  {
    q: 'Is Parvah free compared with other chat apps?',
    a: 'Yes. Parvah is free with no subscription tiers for basic random video matching.',
  },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ title, description, url: `${SITE_URL}/emerald-chat-alternative` }),
  buildFaqSchema(faqs),
]);

export default function EmeraldChatAlternativePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Emerald Chat Alternative"
        title="Emerald Chat Alternative — Free Instant Video Matching"
        description={description}
        highlights={[
          { title: 'Zero Account Friction', desc: 'Skip profile setup — jump into 1-on-1 video as soon as you pass the age gate.' },
          { title: 'Peer-to-Peer Video', desc: 'WebRTC connects browsers directly when networks allow for lower latency and less intermediary media handling.' },
          { title: 'Safety First', desc: 'Report and Next keep you in control when a conversation turns inappropriate.' },
          { title: 'Browser Based', desc: 'Use Parvah on desktop or mobile browsers without installing another chat app.' },
          { title: 'Clear Adult Rules', desc: 'Parvah is 18+ with published safety guidelines you can read anytime.' },
          { title: 'Free Forever', desc: 'No credits to burn through before your first real conversation.' },
        ]}
        sections={[
          {
            title: 'If you want Emerald Chat energy without the account wall',
            paragraphs: [
              'Some chat apps lean on interests, filters, or profiles. Parvah stays closer to classic random matching: confirm you are 18+, allow camera access, and Start Match. Use it as a free Emerald Chat alternative when you want speed over setup.',
            ],
            links: [
              { href: '/no-signup-video-chat', label: 'No signup video chat' },
              { href: '/blog/best-omegle-alternatives-2026', label: 'Best Omegle alternatives 2026' },
            ],
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/chatroulette-alternative', label: 'Chatroulette Alternative' },
          { href: '/omegle-alternative', label: 'Omegle Alternative' },
          { href: '/no-signup-video-chat', label: 'No Signup Video Chat' },
          { href: '/blog/best-omegle-alternatives-2026', label: 'Best Omegle Alternatives 2026' },
        ]}
      />
    </>
  );
}
