import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Omegle Alternative 2026 — Free Adult Video Chat';
const description =
  'Looking for an Omegle alternative after the shutdown? Parvah is free adult 1-on-1 random video chat — no signup, flirty talks welcome (consenting 18+), WebRTC privacy, and built-in reporting.';

export const metadata = {
  title: 'Omegle Alternative 2026 — Free Adult Video Chat',
  description,
  alternates: { canonical: `${SITE_URL}/omegle-alternative` },
  openGraph: {
    title: `Omegle Alternative 2026 — Free Adult Video Chat | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/omegle-alternative`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Parvah Omegle Alternative' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Omegle Alternative 2026 | ${SITE_NAME}`,
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
    q: 'What replaced Omegle in 2026?',
    a: 'Omegle shut down in 2023. Many people now search for random video chat or free video chat with strangers. Parvah is a browser-based Omegle alternative focused on no signup and WebRTC privacy.',
  },
  {
    q: 'Do I need to sign up?',
    a: 'No. Parvah is completely free and requires no account. Click Start Match after confirming you are 18+.',
  },
  {
    q: 'Is Omegle coming back?',
    a: 'Omegle shut down permanently. Parvah and similar platforms continue the random video chat experience with updated privacy and moderation features.',
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
        title="Omegle Alternative 2026 — Free Adult Random Video Chat"
        description={description}
        highlights={[
          { title: 'No Registration', desc: 'Start chatting instantly — no email, username, or password required.' },
          { title: 'Adult flirty energy', desc: 'Consenting adults 18+ can keep chats playful, hot, or deep — skip anytime.' },
          { title: 'WebRTC Privacy', desc: 'Video streams use peer-to-peer connections and are not stored on our servers.' },
          { title: 'Safety Built In', desc: '18+ age verification, report button, and community guidelines keep chats respectful.' },
          { title: 'Works in Browser', desc: 'No app download. Open parvah.online on desktop or mobile and allow camera access.' },
          { title: 'Free Forever', desc: 'Parvah is free adult random video chat with no hidden paywalls or premium tiers.' },
        ]}
        sections={[
          {
            title: 'Why people still search for an Omegle alternative',
            paragraphs: [
              'After Omegle shut down, search demand shifted from “find Omegle” to “find random video chat.” Users still want surprise matching — but they also want fewer accounts, clearer adult rules, and browser access that works on everyday phones.',
              'Parvah is built for that shift: no signup, 1-on-1 video, and safety controls you can use mid-chat.',
            ],
            links: [
              { href: '/blog/best-omegle-alternatives-2026', label: 'Best Omegle alternatives in 2026' },
              { href: '/adult-video-chat', label: 'Adult video chat' },
              { href: '/hot-video-chat', label: 'Hot video chat' },
            ],
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/adult-video-chat', label: 'Adult Video Chat' },
          { href: '/hot-video-chat', label: 'Hot Video Chat' },
          { href: '/video-chat-with-strangers', label: 'Video Chat with Strangers' },
          { href: '/ometv-alternative', label: 'OmeTV Alternative' },
          { href: '/chatroulette-alternative', label: 'Chatroulette Alternative' },
          { href: '/no-signup-video-chat', label: 'No Signup Video Chat' },
          { href: '/blog/best-omegle-alternatives-2026', label: 'Best Omegle Alternatives 2026' },
        ]}
      />
    </>
  );
}
