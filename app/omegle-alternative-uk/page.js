import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Omegle Alternative UK — Free Random Video Chat (No Signup)';
const description =
  'Omegle alternative in the UK for free random video chat with strangers — no signup, no app. Instant 1-on-1 webcam chat in Chrome or Safari. Adults 18+ only.';

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${SITE_URL}/omegle-alternative-uk` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/omegle-alternative-uk`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Omegle alternative UK — free random video chat' }],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.jpg'],
  },
};

const faqs = [
  {
    q: 'Is there a free Omegle alternative in the UK?',
    a: 'Yes. Parvah offers free random video chat with strangers in the browser — no signup and no app. Adults 18+ only.',
  },
  {
    q: 'Does it work on UK mobile networks?',
    a: 'Yes on Chrome or Safari with camera permission. Home Wi‑Fi is usually more stable than busy mobile data.',
  },
  {
    q: 'Do I need an account in the UK?',
    a: 'No. Confirm you are 18+, allow camera and mic, and start matching.',
  },
  {
    q: 'Will I only meet people in Britain?',
    a: 'No. The queue is random and worldwide. UK evenings often feel active because they overlap with other regions.',
  },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ title, description, url: `${SITE_URL}/omegle-alternative-uk` }),
  buildFaqSchema(faqs),
]);

export default function OmegleAlternativeUkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Omegle Alternative UK · 18+"
        title="Omegle Alternative UK — Free Random Video Chat, No App"
        description={description}
        highlights={[
          { title: 'UK-friendly browser chat', desc: 'Open on phone or laptop — no download from an app store.' },
          { title: 'Free to start', desc: 'No credits, no email wall, no premium unlock for basic matching.' },
          { title: 'Chrome and Safari', desc: 'Works on Android and iPhone with site camera permission.' },
          { title: 'Clear adult rules', desc: '18+ age gate, Next, and Report in every session.' },
          { title: 'Evening UK traffic', desc: 'UK nights often line up with busy global chat hours.' },
          { title: 'No fake filters', desc: 'Random adults only — we do not sell a gender guarantee.' },
        ]}
        comparison={{
          title: 'Omegle vs a UK Omegle alternative',
          intro:
            'UK searchers still type Omegle years after the shutdown. The replacement that sticks is free stranger video chat in a normal browser tab.',
          headers: ['Feature', 'Classic Omegle', 'Parvah (UK)'],
          rows: [
            ['Availability', 'Closed', 'Live worldwide matching'],
            ['Signup', 'None for basic chat', 'None for basic matching'],
            ['Access', 'Old web clients', 'Modern mobile and desktop browsers'],
            ['Moderation tools', 'Limited / uneven', 'Age gate + report + skip'],
            ['Cost to start', 'Free', 'Free'],
          ],
        }}
        sections={[
          {
            title: 'What UK users want from an Omegle alternative',
            paragraphs: [
              '“Omegle alternative UK” usually means: free, fast, no account, and usable on a phone after work. People are not looking for another dating profile or a paid cam grid.',
              'Parvah matches that checklist. You confirm 18+, join the random queue, and leave with Next whenever a chat is wrong. Matches are not limited to the UK, and gender is not guaranteed.',
            ],
            bullets: [
              'Free random video chat with strangers',
              'No signup and no app install',
              'Works well on UK home Wi‑Fi and mobile browsers',
              'Adults only — consent required for flirty chat',
            ],
            links: [
              { href: '/', label: 'Start matching now' },
              { href: '/omegle-alternative', label: 'Global Omegle alternative' },
              { href: '/talk-to-strangers', label: 'Talk to strangers' },
            ],
          },
          {
            title: 'Practical tips for the UK',
            paragraphs: [
              'If the connection fails on mobile data, switch to Wi‑Fi and reload once. Corporate or campus networks sometimes block WebRTC — home internet is the easier path.',
              'Keep personal details private. Do not send money. Use Report for harassment or anyone who may be underage.',
            ],
            links: [
              { href: '/blog/webrtc-connection-failed-troubleshooting', label: 'Connection troubleshooting' },
              { href: '/safety', label: 'Safety guidelines' },
              { href: '/anonymous-video-chat', label: 'Anonymous video chat' },
            ],
          },
        ]}
        popularSearches={[
          { href: '/omegle-alternative', label: 'omegle alternative' },
          { href: '/omegle-alternative-usa', label: 'omegle alternative usa' },
          { href: '/omegle-alternative-india', label: 'omegle alternative india' },
          { href: '/random-video-chat', label: 'random video chat' },
          { href: '/video-chat-with-strangers', label: 'video chat with strangers' },
          { href: '/live-video-chat', label: 'live video chat' },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/', label: 'Start free chat' },
          { href: '/omegle-alternative', label: 'Omegle Alternative' },
          { href: '/omegle-alternative-usa', label: 'Omegle Alternative USA' },
          { href: '/omegle-alternative-india', label: 'Omegle Alternative India' },
          { href: '/emerald-chat-alternative', label: 'Emerald Chat Alternative' },
          { href: '/blog/best-omegle-alternatives-2026', label: 'Best Omegle Alternatives 2026' },
        ]}
      />
    </>
  );
}
