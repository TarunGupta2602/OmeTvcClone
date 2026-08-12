import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'OmeTV Alternative — Free Browser Webcam Chat';
const description =
  'Need an OmeTV alternative that works in the browser? Parvah offers free random video chat — no app, no signup, WebRTC privacy, and instant matching worldwide.';

export const metadata = {
  title: 'OmeTV Alternative — Free Browser Webcam Chat',
  description,
  alternates: { canonical: `${SITE_URL}/ometv-alternative` },
  openGraph: {
    title: `OmeTV Alternative — Free Browser Webcam Chat | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/ometv-alternative`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Parvah OmeTV Alternative' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `OmeTV Alternative | ${SITE_NAME}`,
    description,
    images: ['/og-image.jpg'],
  },
};

const faqs = [
  {
    q: 'How is Parvah different from OmeTV?',
    a: 'Parvah runs entirely in your browser with no app download. It uses WebRTC for peer-to-peer video, requires no account, and includes an 18+ age gate plus a one-click report button.',
  },
  {
    q: 'Can I use an OmeTV alternative on mobile browser?',
    a: 'Yes. Parvah works on modern mobile browsers. Allow camera and microphone access when prompted, then tap Start Match — useful if you prefer not to install another chat app.',
  },
  {
    q: 'Is OmeTV still available?',
    a: 'OmeTV remains popular, but many users switch to Parvah for a lightweight browser experience with strong privacy and safety features.',
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
          { title: 'Browser-Based', desc: 'No OmeTV app needed — chat from Chrome, Safari, Firefox, or Edge on any device.' },
          { title: 'Instant Matching', desc: 'Our signaling server pairs you with available users in seconds.' },
          { title: 'Text + Video Chat', desc: 'Switch between live webcam and text messaging during your session.' },
          { title: 'Global Connections', desc: 'Meet people worldwide — including users in India and other high-demand regions — through random 1-on-1 matching.' },
          { title: 'Block & Skip', desc: 'Next skips instantly; repeat offenders can be blocked from re-matching.' },
          { title: 'Community Safety', desc: 'Read our safety guidelines and report violations directly from the chat UI.' },
        ]}
        sections={[
          {
            title: 'When a browser OmeTV alternative makes sense',
            paragraphs: [
              'App stores are convenient until storage, permissions, or region limits get in the way. A browser OmeTV alternative like Parvah keeps matching simple: open a URL, pass the age gate, and start.',
            ],
            links: [
              { href: '/random-video-chat', label: 'Random video chat' },
              { href: '/blog/ometv-vs-omegle-vs-parvah-comparison', label: 'OmeTV vs Omegle vs Parvah' },
            ],
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/omegle-alternative', label: 'Omegle Alternative' },
          { href: '/emerald-chat-alternative', label: 'Emerald Chat Alternative' },
          { href: '/random-video-chat', label: 'Random Video Chat' },
          { href: '/blog/ometv-vs-omegle-vs-parvah-comparison', label: 'OmeTV vs Omegle vs Parvah' },
          { href: '/safety', label: 'Safety Guidelines' },
        ]}
      />
    </>
  );
}
