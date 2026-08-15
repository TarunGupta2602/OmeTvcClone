import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Random Video Chat Free — Adult Strangers 18+';
const description =
  'Free random video chat with adults — no signup. Instant 1-on-1 webcam chat for flirty talks, late-night company, and real connections on Parvah (18+).';

export const metadata = {
  title: 'Random Video Chat Free — Adult Strangers 18+',
  description,
  alternates: { canonical: `${SITE_URL}/random-video-chat` },
  openGraph: {
    title: `Random Video Chat Free — Adult Strangers 18+ | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/random-video-chat`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Parvah Random Video Chat' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Random Video Chat Free — Adult Strangers 18+ | ${SITE_NAME}`,
    description,
    images: ['/og-image.jpg'],
  },
};

const faqs = [
  {
    q: 'What is random video chat?',
    a: 'Random video chat connects you with a stranger for a live 1-on-1 webcam conversation. Parvah matches you automatically — no friend requests or profiles needed.',
  },
  {
    q: 'Is random video chat free on Parvah?',
    a: 'Yes. There are no credits, subscriptions, or time limits for basic matching. Open the site, confirm you are 18+, and click Start Match.',
  },
  {
    q: 'Do I need to sign up for random video chat?',
    a: 'No. Parvah is no-signup video chat. You chat as a temporary browser session without email or passwords.',
  },
  {
    q: 'Is random video chat safe?',
    a: 'Stay safe by never sharing personal details, using the Report button for violations, and clicking Next to skip uncomfortable chats. Parvah verifies users are 18+ before matching.',
  },
  {
    q: 'Can I use random video chat on mobile in India or elsewhere?',
    a: 'Yes. Parvah works in modern mobile browsers on Wi‑Fi or mobile data. Allow camera and microphone access when prompted — no app store download required.',
  },
  {
    q: 'Do I need a webcam?',
    a: 'A working camera and microphone improve the experience, but you can still use text chat if video is unavailable.',
  },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ title, description, url: `${SITE_URL}/random-video-chat` }),
  buildFaqSchema(faqs),
]);

export default function RandomVideoChatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Random Video Chat"
        title="Random Video Chat Free — Meet Adults Instantly"
        description={description}
        highlights={[
          { title: 'Talk to Strangers', desc: 'Meet new adults through live 1-on-1 video — flirty talks, late-night company, or real chemistry.' },
          { title: 'No Sign-Up', desc: 'Jump straight into random webcam chat without creating an account or verifying email.' },
          { title: 'Peer-to-Peer Video', desc: 'WebRTC routes video directly between browsers when possible for lower latency and better privacy.' },
          { title: 'Works Worldwide', desc: 'Popular with users across India, the US, and other regions who want browser-based stranger chat without an app.' },
          { title: 'Adults 18+ Only', desc: 'Age verification keeps Parvah focused on adult random chat with clear consent rules.' },
          { title: 'Free & Unlimited', desc: 'No time limits, no credits, no subscription — chat as long as you like.' },
        ]}
        sections={[
          {
            title: 'How free random video chat works on Parvah',
            paragraphs: [
              'Open parvah.online, confirm you are 18+, allow camera access, and click Start Matching. Our signaling server pairs you with another available adult for a live 1-on-1 session. Click Next anytime to meet someone new.',
              'Unlike app-only platforms, Parvah is built for the browser — useful if you are on a shared laptop, a mid-range Android phone, or simply do not want another download.',
            ],
            bullets: [
              'Primary keyword fit: free random video chat with strangers',
              'Adult angle: flirty and hot talk welcome with consent',
              'Differentiator: no signup + WebRTC peer-to-peer when networks allow',
            ],
            links: [
              { href: '/adult-video-chat', label: 'Adult video chat' },
              { href: '/hot-video-chat', label: 'Hot video chat' },
              { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
            ],
          },
          {
            title: 'Random video chat vs apps and dating sites',
            paragraphs: [
              'People searching for random video chat usually want spontaneity — not profiles, swipes, or paid boosts. Parvah stays in that lane: temporary sessions, skip anytime, and no public bio to maintain.',
              'If you need filters, interest tags, or social profiles, other products may fit better. If you want talk-to-strangers energy with modern adult safety basics, start here.',
            ],
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/adult-video-chat', label: 'Adult Video Chat' },
          { href: '/hot-video-chat', label: 'Hot Video Chat' },
          { href: '/meet-people-online', label: 'Meet People Online' },
          { href: '/omegle-alternative', label: 'Omegle Alternative' },
          { href: '/anonymous-video-chat', label: 'Anonymous Video Chat' },
          { href: '/no-signup-video-chat', label: 'No Signup Video Chat' },
          { href: '/faq', label: 'FAQ' },
        ]}
      />
    </>
  );
}
