import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Best Omegle Alternative — Free Random Video Chat';
const description =
  'Parvah is a free Omegle alternative for instant random video chat. No signup, WebRTC privacy, 18+ age gate, and built-in reporting — start in seconds.';

export const metadata = {
  title: 'Omegle Alternative — Free Video Chat',
  description,
  alternates: { canonical: `${SITE_URL}/omegle-alternative` },
  openGraph: {
    title: `Omegle Alternative | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/omegle-alternative`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Parvah Omegle Alternative' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Omegle Alternative | ${SITE_NAME}`,
    description,
    images: ['/og-image.jpg'],
  },
};

const faqs = [
  {
    q: 'Is Parvah a good Omegle alternative?',
    a: 'Yes. Parvah offers instant random video chat without registration, peer-to-peer WebRTC video, an 18+ age gate, and a report button — the core experience Omegle users expect, with modern safety tools.',
  },
  {
    q: 'Do I need to sign up?',
    a: 'No. Parvah is completely free and requires no account. Click Start Match after confirming you are 18+.',
  },
  {
    q: 'Is Omegle coming back?',
    a: 'Omegle shut down in 2023. Parvah and similar platforms continue the random video chat experience with updated privacy and moderation features.',
  },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ title, description, url: `${SITE_URL}/omegle-alternative` }),
  buildFaqSchema(faqs),
]);

export default function OmegleAlternativePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Omegle Alternative"
        title="The Best Free Omegle Alternative for Random Video Chat"
        description={description}
        highlights={[
          { title: 'No Registration', desc: 'Start chatting instantly — no email, username, or password required.' },
          { title: 'WebRTC Privacy', desc: 'Video streams use peer-to-peer connections and are not stored on our servers.' },
          { title: 'Safety Built In', desc: '18+ age verification, report button, and community guidelines keep chats respectful.' },
          { title: 'Works in Browser', desc: 'No app download. Open parvah.online on desktop or mobile and allow camera access.' },
          { title: 'Skip Anytime', desc: 'Click Next to instantly match with someone new if a conversation is not a fit.' },
          { title: 'Free Forever', desc: 'Parvah is free random video chat with no hidden paywalls or premium tiers.' },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/ometv-alternative', label: 'OmeTV Alternative' },
          { href: '/chatroulette-alternative', label: 'Chatroulette Alternative' },
          { href: '/no-signup-video-chat', label: 'No Signup Video Chat' },
          { href: '/blog/omegle-alternatives-why-parvah-is-better', label: 'Omegle Alternatives Guide' },
        ]}
      />
    </>
  );
}
