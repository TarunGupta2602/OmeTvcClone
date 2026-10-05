import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Free OmeTV Alternative 2026 — Browser Video Chat (No App)';
const description =
  'Best free OmeTV alternative in 2026 — no app download, no signup. Instant 1-on-1 random video chat with strangers in your browser. Skip anytime. Adults 18+ only.';

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
    q: 'Is there a free OmeTV alternative with no signup?',
    a: 'Yes. This OmeTV alternative free option has no email wall and no credits for basic matching. Pass the 18+ age gate and tap Start Matching.',
  },
  {
    q: 'Can I use an Ome TV alternative in the browser?',
    a: 'Yes. Searches for “ome tv alternative”, “OmeTV browser”, and “OmeTV no download” all map here: open the URL in Chrome, Safari, Firefox, or Edge — desktop or mobile — without another app.',
  },
  {
    q: 'Does this OmeTV alternative work on mobile Chrome?',
    a: 'Yes. Use Chrome or another modern mobile browser. Allow camera and microphone, then tap Start Matching — useful if you do not want another chat app on a mid-range Android phone.',
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
        badge="OmeTV Alternative · 2026"
        title="Free OmeTV Alternative — Browser Random Video Chat (No App)"
        description={description}
        highlights={[
          { title: 'No App Download', desc: 'Chat from Chrome, Safari, Firefox, or Edge — desktop or mobile browser.' },
          { title: 'Instant Matching', desc: 'Signaling pairs you with an available stranger in seconds.' },
          { title: 'Text + Video', desc: 'Live webcam with in-session text messaging.' },
          { title: 'No Signup', desc: '18+ age gate only — no account for basic random matching.' },
          { title: 'Skip & Report', desc: 'Next skips instantly; report tools help keep the queue safer.' },
          { title: 'Adults Only', desc: 'Consent-first adult chat is allowed; minors are never allowed.' },
        ]}
        comparison={{
          title: 'OmeTV app vs this browser OmeTV alternative',
          intro:
            'People searching “ometv alternative” usually like stranger matching but do not want another install. Here is how an app-first product compares with this free browser option.',
          headers: ['Feature', 'OmeTV (typical app flow)', 'Parvah (this page)'],
          rows: [
            ['Install', 'App store / APK common', 'No app — open in browser'],
            ['Signup', 'Account prompts are common', 'No signup for basic matching'],
            ['Cost to match', 'Free tier; watch for boosts/credits', 'Free 1-on-1 matching'],
            ['Age rules', 'Varies by product policy', 'Adults 18+ only, age gate'],
            ['Skip / report', 'In-app controls', 'Next + Report in the lobby'],
            ['Video path', 'App-managed connection', 'WebRTC peer-to-peer when networks allow'],
          ],
        }}
        sections={[
          {
            title: 'When a browser OmeTV alternative makes sense',
            paragraphs: [
              'App stores are convenient until storage, permissions, or region limits get in the way. A browser OmeTV alternative keeps matching simple: open a URL, pass the age gate, and start.',
              'People searching “ometv alternative”, “ometv alternative free”, or “video chat like ometv” usually want the same outcome: free random strangers on webcam without installing another app.',
            ],
            links: [
              { href: '/', label: 'Start matching now' },
              { href: '/random-video-chat', label: 'Random video chat' },
              { href: '/omegle-alternative', label: 'Omegle alternative' },
            ],
          },
          {
            title: 'Free OmeTV alternative on phones (no APK)',
            paragraphs: [
              'A large share of OmeTV alternative searches come from mobile. Mid-range Android phones and shared laptops do better with a URL than with another chat APK. Allow camera and mic in Chrome, then tap Start Matching — the same queue as desktop.',
              'If matches feel slow, more people in the queue helps. Invite a friend to the homepage so the pool fills faster, then keep skipping until the conversation fits.',
            ],
            bullets: [
              'Works in mobile Chrome / Safari — no Play Store required',
              'Same 18+ age gate and report tools as desktop',
              'Skip instantly if the chat is not a fit',
            ],
            links: [
              { href: '/no-signup-video-chat', label: 'No signup video chat' },
              { href: '/blog/best-ometv-alternative-free-browser', label: 'OmeTV alternative comparison guide' },
            ],
          },
          {
            title: 'OmeTV alternative vs Omegle alternative',
            paragraphs: [
              'Both intents map to free random video chat with strangers. Omegle is permanently shut down; OmeTV still exists as an app-first product. If you want browser-only matching with no signup, start matching here, then read the Omegle landing only if you specifically want the shut-down-brand story.',
            ],
            links: [
              { href: '/omegle-alternative', label: 'Omegle alternative' },
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
          { href: '/', label: 'Start free chat' },
          { href: '/omegle-alternative', label: 'Omegle Alternative' },
          { href: '/random-video-chat', label: 'Random Video Chat' },
          { href: '/video-chat-with-strangers', label: 'Video Chat with Strangers' },
          { href: '/blog/best-ometv-alternative-free-browser', label: 'Best OmeTV alternative (guide)' },
          { href: '/blog/ometv-vs-omegle-vs-parvah-comparison', label: 'OmeTV vs Omegle vs Parvah' },
          { href: '/safety', label: 'Safety Guidelines' },
        ]}
      />
    </>
  );
}
