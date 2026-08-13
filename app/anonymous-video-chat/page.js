import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Anonymous Video Chat with Strangers (No Profile)';
const description =
  'Anonymous video chat with strangers on Parvah — no account, no public profile, WebRTC peer-to-peer video, 18+ age gate, and report tools. Start free in your browser.';

export const metadata = {
  title: 'Anonymous Video Chat with Strangers (No Profile)',
  description,
  alternates: { canonical: `${SITE_URL}/anonymous-video-chat` },
  openGraph: {
    title: `Anonymous Video Chat with Strangers | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/anonymous-video-chat`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Parvah Anonymous Video Chat' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Anonymous Video Chat | ${SITE_NAME}`,
    description,
    images: ['/og-image.jpg'],
  },
};

const faqs = [
  {
    q: 'Is Parvah anonymous video chat?',
    a: 'Parvah requires no registration, so you chat without a named public profile. You should still avoid sharing personal details on camera — anonymity depends on your habits too.',
  },
  {
    q: 'Can I talk to strangers online without creating an account?',
    a: 'Yes. Confirm you are 18+, allow camera access, and click Start Match. There is no username, bio, or email wall.',
  },
  {
    q: 'Does anonymous mean my video is private?',
    a: 'Parvah uses WebRTC so media is not archived on our servers when peer-to-peer connects. The other person could still screen-record, so treat every session carefully.',
  },
  {
    q: 'Is this video chat with strangers?',
    a: 'Yes. Parvah matches you randomly with another available adult for a live 1-on-1 session. Skip anytime with Next.',
  },
  {
    q: 'Is anonymous video chat free?',
    a: 'Yes. Basic random matching on Parvah is free with no credits required.',
  },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ title, description, url: `${SITE_URL}/anonymous-video-chat` }),
  buildFaqSchema(faqs),
]);

export default function AnonymousVideoChatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Anonymous Video Chat"
        title="Anonymous Video Chat with Strangers — No Public Profile"
        description={description}
        highlights={[
          { title: 'No Account Trail', desc: 'Skip usernames and bios — match as a temporary session instead of a social profile.' },
          { title: 'WebRTC Media Path', desc: 'Peer-to-peer video reduces intermediary storage of your live stream.' },
          { title: 'You Control Disclosure', desc: 'Share only what you choose to say or show — leave instantly with Next.' },
          { title: 'Adult Community', desc: '18+ age gate before matching keeps the product focused on adults.' },
          { title: 'Report Abuse', desc: 'Anonymity is not a shield for harassment — report violations in one click.' },
          { title: 'Read the Privacy Policy', desc: 'Know what signaling and safety systems may log when you use the service.' },
        ]}
        sections={[
          {
            title: 'Anonymous video chat vs private video chat',
            paragraphs: [
              'Anonymous usually means no named profile. Private is about who can access or store your media. Parvah aims for both: no signup plus WebRTC peer-to-peer when networks allow — and you still decide what appears on camera.',
              'If you searched for video chat with strangers and want minimal identity friction, start here. If you need interest filters or dating profiles, a different product shape may fit better.',
            ],
            links: [
              { href: '/blog/anonymous-vs-private-video-chat', label: 'Anonymous vs private guide' },
              { href: '/privacy', label: 'Privacy policy' },
              { href: '/no-signup-video-chat', label: 'No signup video chat' },
            ],
          },
          {
            title: 'How to stay anonymous in practice',
            paragraphs: [
              'Hide identifiable backgrounds, avoid saying your full name or city, never show ID documents, and leave chats that pressure you for socials. Use Report for scams or prohibited content.',
            ],
            bullets: [
              'No public profile on Parvah',
              'Skip anytime with Next',
              'Assume recording is possible on the other device',
            ],
            links: [
              { href: '/safety', label: 'Safety guidelines' },
              { href: '/random-video-chat', label: 'Random video chat' },
            ],
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/no-signup-video-chat', label: 'No Signup Video Chat' },
          { href: '/random-video-chat', label: 'Random Video Chat' },
          { href: '/privacy', label: 'Privacy Policy' },
          { href: '/blog/anonymous-vs-private-video-chat', label: 'Anonymous vs Private Guide' },
          { href: '/blog/privacy-guide-random-video-chat', label: 'Privacy Guide' },
          { href: '/omegle-alternative', label: 'Omegle Alternative' },
        ]}
      />
    </>
  );
}
