import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Best Chatroulette Alternative — Free Random Video Chat';
const description =
  'Parvah is a free Chatroulette alternative for instant 1-on-1 random video chat. No signup, WebRTC privacy, 18+ age gate, and built-in reporting.';

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
    q: 'Do I need to download an app?',
    a: 'No. Open parvah.online in a modern browser on desktop or mobile, allow camera access, and click Start Match.',
  },
  {
    q: 'Is Chatroulette-style chat free on Parvah?',
    a: 'Yes. Parvah is free random video chat with no credits, subscriptions, or hidden paywalls.',
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
            title: 'A modern Chatroulette alternative for 2026',
            paragraphs: [
              'Classic roulette chat was about surprise. Parvah keeps that energy while adding an age gate, report tools, and browser-native WebRTC — so you are not hunting for shady APKs or creating yet another account.',
            ],
            links: [
              { href: '/blog/chatroulette-vs-parvah', label: 'Chatroulette vs Parvah' },
              { href: '/random-video-chat', label: 'Random video chat' },
            ],
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/omegle-alternative', label: 'Omegle Alternative' },
          { href: '/anonymous-video-chat', label: 'Anonymous Video Chat' },
          { href: '/blog/chatroulette-vs-parvah', label: 'Chatroulette vs Parvah' },
          { href: '/random-video-chat', label: 'Random Video Chat' },
        ]}
      />
    </>
  );
}
