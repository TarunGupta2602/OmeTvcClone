import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'No Signup Video Chat — Free Random Webcam Chat';
const description =
  'No signup video chat on Parvah. Start free random webcam chat without email or passwords — WebRTC privacy, 18+ age gate, and instant matching.';

export const metadata = {
  title: 'No Signup Video Chat — Free Webcam Chat',
  description,
  alternates: { canonical: `${SITE_URL}/no-signup-video-chat` },
  openGraph: {
    title: `No Signup Video Chat | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/no-signup-video-chat`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Parvah No Signup Video Chat' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `No Signup Video Chat | ${SITE_NAME}`,
    description,
    images: ['/og-image.jpg'],
  },
};

const faqs = [
  {
    q: 'Can I video chat without creating an account?',
    a: 'Yes. Parvah is no-signup video chat: open the site, confirm you are 18+, allow camera access, and click Start Match.',
  },
  {
    q: 'Why avoid signup for stranger chat?',
    a: 'Fewer accounts mean fewer passwords to leak and less long-term profile data tied to your email. You still follow safety rules and protect what you show on camera.',
  },
  {
    q: 'Is no-signup chat free on Parvah?',
    a: 'Yes. There is no registration wall and no paid tier required for basic random matching.',
  },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ title, description, url: `${SITE_URL}/no-signup-video-chat` }),
  buildFaqSchema(faqs),
]);

export default function NoSignupVideoChatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="No Signup Video Chat"
        title="Free No Signup Video Chat — Start in Your Browser"
        description={description}
        highlights={[
          { title: 'Zero Forms', desc: 'No email verification loops before your first match.' },
          { title: 'Instant Lobby', desc: 'Age gate, permissions, Start Match — that is the whole onboarding.' },
          { title: 'Privacy Friendly', desc: 'Less account data collected compared with social chat apps.' },
          { title: 'Same Safety Tools', desc: 'Skip and report still work even without a username.' },
          { title: 'Works Everywhere', desc: 'Desktop and mobile browsers — no app store account required either.' },
          { title: 'Free Access', desc: 'Chat without buying credits to unlock strangers.' },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/anonymous-video-chat', label: 'Anonymous Video Chat' },
          { href: '/random-video-chat', label: 'Random Video Chat' },
          { href: '/blog/how-to-use-parvah', label: 'How to Use Parvah' },
          { href: '/omegle-alternative', label: 'Omegle Alternative' },
        ]}
      />
    </>
  );
}
