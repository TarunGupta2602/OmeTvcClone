import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Chatroulette Alternative Free — Random Video Chat';
const description =
  'Free Chatroulette alternative on Parvah: instant 1-on-1 random video chat in your browser. No signup, WebRTC privacy, 18+ age gate, and report tools.';

export const metadata = {
  title: 'Chatroulette Alternative Free — Random Video Chat',
  description,
  alternates: { canonical: `${SITE_URL}/chatroulette-alternative` },
  openGraph: {
    title: `Chatroulette Alternative Free — Random Video Chat | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/chatroulette-alternative`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Parvah Chatroulette Alternative' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Chatroulette Alternative Free | ${SITE_NAME}`,
    description,
    images: ['/og-image.jpg'],
  },
};

const faqs = [
  {
    q: 'Is Parvah a good Chatroulette alternative?',
    a: 'Yes. Parvah offers roulette-style random video matching in the browser with no registration, WebRTC peer-to-peer video, an 18+ age gate, and a report button.',
  },
  {
    q: 'Is there a free Chatroulette alternative with no app?',
    a: 'Parvah is free and browser-based. Open parvah.online on desktop or mobile, allow camera access, and click Start Match — no APK or app store account required.',
  },
  {
    q: 'Do I need to download an app?',
    a: 'No. Use a modern browser on desktop or mobile. Allow camera access, confirm you are 18+, and start matching.',
  },
  {
    q: 'How is Parvah different from classic Chatroulette?',
    a: 'Parvah keeps the surprise matching feel but adds an explicit adult age gate, one-click reporting, skip controls, and WebRTC peer-to-peer video when networks allow.',
  },
  {
    q: 'Is Chatroulette-style chat free on Parvah?',
    a: 'Yes. Parvah is free random video chat with no credits, subscriptions, or hidden paywalls for basic matching.',
  },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ title, description, url: `${SITE_URL}/chatroulette-alternative` }),
  buildFaqSchema(faqs),
]);

export default function ChatrouletteAlternativePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Chatroulette Alternative"
        title="Chatroulette Alternative Free — Instant Random Video Chat"
        description={description}
        highlights={[
          { title: 'Roulette-Style Matching', desc: 'Meet someone new in seconds — skip anytime with Next when a chat is not a fit.' },
          { title: 'No Registration', desc: 'Start without email, usernames, or passwords. Chat as a temporary browser session.' },
          { title: 'WebRTC Privacy', desc: 'Peer-to-peer video when possible means streams are not archived on Parvah servers.' },
          { title: 'Adults 18+ Only', desc: 'An age gate sets a clear community boundary before matching begins.' },
          { title: 'Report Built In', desc: 'Flag harassment or prohibited content instantly and move on.' },
          { title: 'Works in Browser', desc: 'No APK sideloads — use HTTPS on desktop or mobile browsers you already trust.' },
        ]}
        sections={[
          {
            title: 'Why people look for a Chatroulette alternative in 2026',
            paragraphs: [
              'Classic roulette chat was about surprise conversations. Many users still want that energy — but they also want fewer shady downloads, clearer adult rules, and a report button they can find mid-chat.',
              'Parvah is built as a free Chatroulette alternative for adults: open the site, pass the age gate, allow camera access, and Start Match. Use Next to keep the roulette loop going.',
            ],
            bullets: [
              'Primary intent: Chatroulette alternative free / random video chat',
              'Differentiator: no signup + browser WebRTC + 18+ safety tools',
              'Best for: casual stranger chat, not dating profiles or paid filters',
            ],
            links: [
              { href: '/blog/chatroulette-vs-parvah', label: 'Chatroulette vs Parvah' },
              { href: '/random-video-chat', label: 'Random video chat hub' },
              { href: '/no-signup-video-chat', label: 'No signup video chat' },
            ],
          },
          {
            title: 'How to start roulette-style chat on Parvah',
            paragraphs: [
              'Go to parvah.online, confirm you are 18+, allow camera and microphone, then click Start Match. When a conversation ends or feels wrong, click Next for a new partner or Report for violations.',
            ],
            links: [
              { href: '/safety', label: 'Safety guidelines' },
              { href: '/faq', label: 'FAQ' },
              { href: '/omegle-alternative', label: 'Omegle alternative' },
            ],
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/omegle-alternative', label: 'Omegle Alternative' },
          { href: '/anonymous-video-chat', label: 'Anonymous Video Chat' },
          { href: '/no-signup-video-chat', label: 'No Signup Video Chat' },
          { href: '/blog/chatroulette-vs-parvah', label: 'Chatroulette vs Parvah' },
          { href: '/random-video-chat', label: 'Random Video Chat' },
          { href: '/blog/best-omegle-alternatives-2026', label: 'Best Omegle Alternatives 2026' },
        ]}
      />
    </>
  );
}
