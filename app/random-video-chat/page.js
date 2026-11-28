import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, buildBreadcrumbSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Random Video Chat with Strangers — Free, No Signup | Parvah';
const description =
  'Free random video chat with strangers. No signup, no app: confirm you are 18+, match 1-on-1 and skip anytime. Safety tips and rules included.';

export const metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: { canonical: `${SITE_URL}/random-video-chat` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/random-video-chat`,
    siteName: SITE_NAME,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Free random video chat online — instant matching',
      },
    ],
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
    q: 'What is free random video chat?',
    a: 'Free random video chat pairs you with another adult for a live 1-on-1 webcam conversation. Matching is automatic — no friend requests, profiles, credits, or signup.',
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
];

const url = `${SITE_URL}/random-video-chat`;
const breadcrumbs = [
  { name: 'Home', url: SITE_URL },
  { name: title, url },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ title, description, url }),
  buildBreadcrumbSchema({ items: breadcrumbs }),
  buildFaqSchema(faqs),
]);

export default function RandomVideoChatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Random Video Chat"
        title="Random Video Chat with Strangers — Free, No Signup | Parvah"
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
            title: 'How free random video chat works',
            paragraphs: [
              'Open the site, confirm you are 18+, allow camera access, and click Start Matching. You are paired with another available adult for a live 1-on-1 session. Click Next anytime to meet someone new.',
              'Unlike app-only platforms, this random video chat runs in the browser — useful on a laptop or phone without another download.',
            ],
            links: [
              { href: '/omegle-alternative', label: 'Omegle alternative' },
              { href: '/no-signup-video-chat', label: 'No signup video chat' },
            ],
          },
          {
            title: 'Talk to strangers online',
            paragraphs: [
              'Talking to strangers online through random video chat offers a unique way to meet people you would never encounter in your daily life. The randomness means every conversation is unpredictable — you might connect with someone across the world or someone in your own city. This serendipity is what keeps people coming back. Whether you are looking for casual conversation, language practice, or just a way to pass time, random matching removes the pressure of curated social profiles.',
              'The key to successful stranger conversations is approaching each match with an open mind. Most people skip within the first few seconds, so a simple friendly greeting can make the difference between an immediate disconnect and a meaningful exchange. Remember that the other person is also deciding whether to stay — mutual respect and genuine interest go a long way.',
            ],
          },
          {
            title: 'Live webcam chat features',
            paragraphs: [
              'Live webcam chat provides real-time face-to-face interaction that text-based communication cannot match. Seeing the other person adds layers of communication — facial expressions, tone of voice, and body language all contribute to understanding. This makes conversations feel more natural and helps build rapport faster than typing alone. The video connection also adds authenticity — you know you are talking to a real person in the moment.',
              'The technology behind live webcam chat uses WebRTC to establish direct peer-to-peer connections when possible. This means video travels directly between browsers rather than through a central server, which can reduce latency and improve privacy. When network conditions prevent direct connections, the system falls back to relay servers to maintain the connection. Either way, the experience remains seamless for users.',
            ],
          },
          {
            title: 'Meeting people online safely',
            paragraphs: [
              'Meeting people online requires basic safety awareness. Random video chat platforms have built-in tools like skip and report buttons, but your own behavior matters most. Never share personal information such as your full name, address, phone number, workplace, or financial details. Be cautious about anyone who asks you to move to another app or send money — these are common scam patterns.',
              'Your physical environment also matters. Use a neutral background and keep personal documents, valuables, or identifying information out of the camera view. If a conversation makes you uncomfortable, use Next immediately without explanation. The platform is designed for adults 18+, and respecting these boundaries helps create a safer environment for everyone.',
            ],
          },
          {
            title: 'Conversation tips for random video chat',
            paragraphs: [
              'Most people skip within the first 10 seconds. A simple greeting makes a huge difference. Try asking where they are from, commenting on their background, or asking what brought them to random video chat today.',
              'Keep it light at first. Heavy topics or demands for personal information usually lead to an immediate skip. Mutual interest builds naturally — do not force it.',
            ],
            bullets: [
              'Say hello in the first second',
              'Avoid demanding socials or photos',
              'Use Next freely if the vibe is off',
              'Report harassment immediately',
            ],
            links: [
              { href: '/safety', label: 'Safety guidelines' },
            ],
          },
          {
            title: 'Last reviewed',
            paragraphs: ['28 November 2026'],
          },
        ]}
        faqs={faqs}
      />
    </>
  );
}
