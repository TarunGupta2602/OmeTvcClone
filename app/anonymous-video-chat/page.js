import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Anonymous Video Chat — Talk to Strangers Privately';
const description =
  'Anonymous video chat on Parvah: no account, WebRTC peer-to-peer video, 18+ age gate, and report tools. Meet strangers without building a public profile.';

export const metadata = {
  title: 'Anonymous Video Chat with Strangers',
  description,
  alternates: { canonical: `${SITE_URL}/anonymous-video-chat` },
  openGraph: {
    title: `Anonymous Video Chat | ${SITE_NAME}`,
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
    q: 'Does anonymous mean my video is private?',
    a: 'Parvah uses WebRTC so media is not archived on our servers when peer-to-peer connects. The other person could still screen-record, so treat every session carefully.',
  },
  {
    q: 'Do I need an email to start?',
    a: 'No. Confirm you are 18+, allow camera access, and click Start Match.',
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
        title="Anonymous Video Chat Without Building a Public Profile"
        description={description}
        highlights={[
          { title: 'No Account Trail', desc: 'Skip usernames and bios — match as a temporary session instead of a social profile.' },
          { title: 'WebRTC Media Path', desc: 'Peer-to-peer video reduces intermediary storage of your live stream.' },
          { title: 'You Control Disclosure', desc: 'Share only what you choose to say or show — leave instantly with Next.' },
          { title: 'Adult Community', desc: '18+ age gate before matching keeps the product focused on adults.' },
          { title: 'Report Abuse', desc: 'Anonymity is not a shield for harassment — report violations in one click.' },
          { title: 'Read the Privacy Policy', desc: 'Know what signaling and safety systems may log when you use the service.' },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/no-signup-video-chat', label: 'No Signup Video Chat' },
          { href: '/privacy', label: 'Privacy Policy' },
          { href: '/blog/anonymous-vs-private-video-chat', label: 'Anonymous vs Private Guide' },
          { href: '/blog/privacy-guide-random-video-chat', label: 'Privacy Guide' },
        ]}
      />
    </>
  );
}
