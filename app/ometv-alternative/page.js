import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildWebPageSchema } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Best OmeTV Alternative — Free Live Webcam Chat';
const description =
  'Looking for an OmeTV alternative? Parvah offers free random video chat in your browser — no app, no signup, WebRTC privacy, and instant matching worldwide.';

export const metadata = {
  title: 'OmeTV Alternative — Free Webcam Chat',
  description,
  alternates: { canonical: `${SITE_URL}/ometv-alternative` },
  openGraph: {
    title: `OmeTV Alternative | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/ometv-alternative`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Parvah OmeTV Alternative' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `OmeTV Alternative | ${SITE_NAME}`,
    description,
    images: ['/og-image.png'],
  },
};

const faqs = [
  {
    q: 'How is Parvah different from OmeTV?',
    a: 'Parvah runs entirely in your browser with no app download. It uses WebRTC for peer-to-peer video, requires no account, and includes an 18+ age gate plus a one-click report button.',
  },
  {
    q: 'Can I use Parvah on mobile?',
    a: 'Yes. Parvah works on modern mobile browsers. Allow camera and microphone access when prompted, then tap Start Match.',
  },
  {
    q: 'Is OmeTV still available?',
    a: 'OmeTV remains popular, but many users switch to Parvah for a lightweight browser experience with strong privacy and safety features.',
  },
];

const jsonLd = [
  buildWebPageSchema({ title, description, url: `${SITE_URL}/ometv-alternative` }),
  buildFaqSchema(faqs),
];

export default function OmetvAlternativePage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <SeoLandingPage
        badge="OmeTV Alternative"
        title="Free OmeTV Alternative for Random Webcam Chat"
        description={description}
        highlights={[
          { title: 'Browser-Based', desc: 'No OmeTV app needed — chat from Chrome, Safari, Firefox, or Edge on any device.' },
          { title: 'Instant Matching', desc: 'Our signaling server pairs you with available users in seconds.' },
          { title: 'Text + Video Chat', desc: 'Switch between live webcam and text messaging during your session.' },
          { title: 'Global Connections', desc: 'Meet people from around the world through random 1-on-1 matching.' },
          { title: 'Block & Skip', desc: 'Next skips instantly; repeat offenders can be blocked from re-matching.' },
          { title: 'Community Safety', desc: 'Read our safety guidelines and report violations directly from the chat UI.' },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/omegle-alternative', label: 'Omegle Alternative' },
          { href: '/random-video-chat', label: 'Random Video Chat' },
          { href: '/blog/ometv-vs-omegle-vs-parvah-comparison', label: 'OmeTV vs Omegle vs Parvah' },
          { href: '/safety', label: 'Safety Guidelines' },
        ]}
      />
    </>
  );
}
