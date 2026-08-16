import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Random Video Chat with Strangers — Free, No Signup';
const description =
  'Free random video chat with strangers — no signup. Instant 1-on-1 webcam chat in your browser. Talk to new people worldwide, skip anytime, adults 18+.';

export const metadata = {
  title: 'Random Video Chat with Strangers — Free, No Signup',
  description,
  alternates: { canonical: `${SITE_URL}/random-video-chat` },
  openGraph: {
    title: `Random Video Chat with Strangers — Free, No Signup | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/random-video-chat`,
    siteName: SITE_NAME,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free random video chat with strangers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Random Video Chat with Strangers — Free, No Signup | ${SITE_NAME}`,
    description,
    images: ['/og-image.jpg'],
  },
};

const faqs = [
  {
    q: 'What is random video chat with strangers?',
    a: 'Random video chat connects you with another person for a live 1-on-1 webcam conversation. Matching is automatic — no friend requests or profiles needed.',
  },
  {
    q: 'Is random video chat free?',
    a: 'Yes. There are no credits, subscriptions, or time limits for basic matching. Confirm you are 18+ and click Start Matching.',
  },
  {
    q: 'Do I need to sign up?',
    a: 'No. This is no-signup video chat. You chat as a temporary browser session without email or passwords.',
  },
  {
    q: 'Is random video chat safe?',
    a: 'Stay safe by never sharing personal details, using Report for violations, and clicking Next to skip uncomfortable chats. Users must be 18+.',
  },
  {
    q: 'Can I use random video chat on mobile?',
    a: 'Yes. It works in modern mobile browsers on Wi‑Fi or mobile data. Allow camera and microphone access — no app download required.',
  },
  {
    q: 'Do I need a webcam?',
    a: 'A working camera and microphone improve the experience. Allow permissions when your browser asks.',
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
        title="Random Video Chat with Strangers — Free & Instant"
        description={description}
        highlights={[
          {
            title: 'Talk to strangers live',
            desc: 'Meet new people through 1-on-1 video — casual talk, language practice, flirt, or real chemistry.',
          },
          {
            title: 'No sign-up',
            desc: 'Jump straight into random webcam chat without creating an account or verifying email.',
          },
          {
            title: 'Peer-to-peer video',
            desc: 'WebRTC routes video directly between browsers when possible for lower latency and better privacy.',
          },
          {
            title: 'Works worldwide',
            desc: 'Popular with users across India, the US, and other regions who want browser-based stranger chat.',
          },
          {
            title: 'Adults 18+ only',
            desc: 'Age confirmation before matching keeps the community focused on adults.',
          },
          {
            title: 'Free & unlimited',
            desc: 'No time limits, no credits, no subscription — chat as long as you like.',
          },
        ]}
        sections={[
          {
            title: 'How free random video chat with strangers works',
            paragraphs: [
              'Open the site, confirm you are 18+, allow camera access, and click Start Matching. You are paired with another available adult for a live 1-on-1 session. Click Next anytime to meet someone new.',
              'Unlike app-only platforms, this random video chat runs in the browser — useful on a laptop or phone without another download.',
            ],
            bullets: [
              'Primary search intent: random video chat with strangers',
              'No signup + WebRTC peer-to-peer when networks allow',
              'Safety: report, skip, and published guidelines',
            ],
            links: [
              { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
              { href: '/omegle-alternative', label: 'Omegle alternative' },
              { href: '/no-signup-video-chat', label: 'No signup video chat' },
            ],
          },
          {
            title: 'Random video chat vs dating apps',
            paragraphs: [
              'People searching for random video chat usually want spontaneity — not profiles, swipes, or paid boosts. Temporary sessions, skip anytime, and no public bio to maintain.',
              'If you need filters or social profiles, other products may fit better. If you want talk-to-strangers energy with modern safety basics, start on the homepage.',
            ],
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/video-chat-with-strangers', label: 'Video Chat with Strangers' },
          { href: '/omegle-alternative', label: 'Omegle Alternative' },
          { href: '/anonymous-video-chat', label: 'Anonymous Video Chat' },
          { href: '/no-signup-video-chat', label: 'No Signup Video Chat' },
          { href: '/adult-video-chat', label: 'Adult Video Chat' },
          { href: '/faq', label: 'FAQ' },
        ]}
      />
    </>
  );
}
