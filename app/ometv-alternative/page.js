import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'OmeTV Alternative — Free Browser Video Chat (No App)';
const description =
  'Best free OmeTV alternative without downloading an app. Instant 1-on-1 random video chat in your browser — no signup, skip anytime, adults 18+.';

export const metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: { canonical: `${SITE_URL}/ometv-alternative` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/ometv-alternative`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'OmeTV alternative — free browser video chat' }],
    locale: 'en_US',
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
    q: 'What is the best free OmeTV alternative in 2026?',
    a: 'A strong OmeTV alternative offers free random video chat in the browser, no forced app download, no signup, skip/report tools, and an 18+ age gate. This site is built for that checklist.',
  },
  {
    q: 'How is this different from OmeTV?',
    a: 'Parvah runs entirely in your browser with WebRTC peer-to-peer video — no app install. Confirm you are 18+, allow camera, and start matching. Text chat works alongside video.',
  },
  {
    q: 'Can I use an OmeTV alternative on mobile browser?',
    a: 'Yes. Use Chrome or another modern mobile browser. Allow camera and microphone, then tap Start Matching — useful if you do not want another chat app.',
  },
  {
    q: 'Do I need to sign up?',
    a: 'No. No email, no credits for basic matching. Pass the age gate and start.',
  },
  {
    q: 'Is flirty or adult chat allowed?',
    a: 'Consenting adults 18+ can have flirty or intimate conversations. Non-consensual behavior, minors, and illegal content are banned — use Skip or Report anytime.',
  },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ title, description, url: `${SITE_URL}/ometv-alternative` }),
  buildFaqSchema(faqs),
]);

export default function OmetvAlternativePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="OmeTV Alternative"
        title="OmeTV Alternative — Free Random Webcam Chat in Your Browser"
        description={description}
        highlights={[
          { title: 'No App Download', desc: 'Chat from Chrome, Safari, Firefox, or Edge — desktop or mobile browser.' },
          { title: 'Instant Matching', desc: 'Signaling pairs you with an available stranger in seconds.' },
          { title: 'Text + Video', desc: 'Live webcam with in-session text messaging.' },
          { title: 'No Signup', desc: '18+ age gate only — no account for basic random matching.' },
          { title: 'Skip & Report', desc: 'Next skips instantly; report tools help keep the queue safer.' },
          { title: 'Adults Only', desc: 'Consent-first adult chat is allowed; minors are never allowed.' },
        ]}
        sections={[
          {
            title: 'When a browser OmeTV alternative makes sense',
            paragraphs: [
              'App stores are convenient until storage, permissions, or region limits get in the way. A browser OmeTV alternative keeps matching simple: open a URL, pass the age gate, and start.',
              'People searching “ometv alternative”, “ometv alternative free”, or “video chat like ometv” usually want the same outcome: free random strangers on webcam without installing another app.',
            ],
            links: [
              { href: '/random-video-chat', label: 'Random video chat' },
              { href: '/omegle-alternative', label: 'Omegle alternative' },
              { href: '/blog/ometv-vs-omegle-vs-parvah-comparison', label: 'OmeTV vs Omegle vs Parvah' },
            ],
          },
          {
            title: 'OmeTV alternative vs Omegle alternative',
            paragraphs: [
              'Both intents map to free random video chat with strangers. Omegle is permanently shut down; OmeTV still exists as an app-first product. If you want browser-only matching with no signup, use the lobby here.',
            ],
            links: [
              { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
              { href: '/talk-to-strangers', label: 'Talk to strangers' },
            ],
          },
        ]}
        faqs={faqs}
        howToSteps={[
          'Open this page on desktop or mobile browser',
          'Confirm you are 18+',
          'Allow camera and microphone',
          'Tap Start Matching for a free 1-on-1 video chat',
        ]}
        popularSearches={[
          { href: '/ometv-alternative', label: 'ometv alternative' },
          { href: '/omegle-alternative', label: 'omegle alternative' },
          { href: '/random-video-chat', label: 'random video chat' },
          { href: '/video-chat-with-strangers', label: 'video chat with strangers' },
          { href: '/live-video-chat', label: 'live video chat' },
          { href: '/chat-with-girls', label: 'chat with girls' },
        ]}
        relatedLinks={[
          { href: '/omegle-alternative', label: 'Omegle Alternative' },
          { href: '/random-video-chat', label: 'Random Video Chat' },
          { href: '/video-chat-with-strangers', label: 'Video Chat with Strangers' },
          { href: '/blog/ometv-vs-omegle-vs-parvah-comparison', label: 'OmeTV vs Omegle vs Parvah' },
          { href: '/blog/omegle-alternative-no-signup-2026', label: 'Omegle Alternative No Signup 2026' },
          { href: '/safety', label: 'Safety Guidelines' },
        ]}
      />
    </>
  );
}
