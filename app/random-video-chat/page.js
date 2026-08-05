import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildWebPageSchema } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Free Random Video Chat with Strangers Online';
const description =
  'Start free random video chat with strangers on Parvah. Live 1-on-1 webcam chat, no signup, WebRTC peer-to-peer privacy, and safety tools for adults 18+.';

export const metadata = {
  title: 'Random Video Chat with Strangers',
  description,
  alternates: { canonical: `${SITE_URL}/random-video-chat` },
  openGraph: {
    title: `Random Video Chat | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/random-video-chat`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Parvah Random Video Chat' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Random Video Chat | ${SITE_NAME}`,
    description,
    images: ['/og-image.png'],
  },
};

const faqs = [
  {
    q: 'What is random video chat?',
    a: 'Random video chat connects you with a stranger for a live 1-on-1 webcam conversation. Parvah matches you automatically — no friend requests or profiles needed.',
  },
  {
    q: 'Is random video chat safe?',
    a: 'Stay safe by never sharing personal details, using the Report button for violations, and clicking Next to skip uncomfortable chats. Parvah verifies users are 18+ before matching.',
  },
  {
    q: 'Do I need a webcam?',
    a: 'A working camera and microphone improve the experience, but you can still use text chat if video is unavailable.',
  },
];

const jsonLd = [
  buildWebPageSchema({ title, description, url: `${SITE_URL}/random-video-chat` }),
  buildFaqSchema(faqs),
];

export default function RandomVideoChatPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <SeoLandingPage
        badge="Random Video Chat"
        title="Free Random Video Chat with Strangers — Start Instantly"
        description={description}
        highlights={[
          { title: 'Talk to Strangers', desc: 'Meet new people through live video — perfect for casual conversations and cultural exchange.' },
          { title: 'No Sign-Up', desc: 'Jump straight into random webcam chat without creating an account.' },
          { title: 'Peer-to-Peer Video', desc: 'WebRTC routes video directly between browsers when possible for lower latency and better privacy.' },
          { title: 'Mobile Friendly', desc: 'Use Parvah on your phone or tablet with a modern mobile browser.' },
          { title: 'Adults 18+ Only', desc: 'Age verification helps maintain a community standard for adult random chat.' },
          { title: 'Free & Unlimited', desc: 'No time limits, no credits, no subscription — chat as long as you like.' },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/omegle-alternative', label: 'Omegle Alternative' },
          { href: '/faq', label: 'FAQ' },
          { href: '/blog', label: 'Video Chat Blog' },
        ]}
      />
    </>
  );
}
