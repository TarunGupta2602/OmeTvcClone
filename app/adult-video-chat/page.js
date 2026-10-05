import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Random Video Chat for Adults 18+ — Free, No Signup';
const description =
  'Free random video chat for people 18 and older — no signup. Instant 1-on-1 webcam matching for conversation. Sexual content is not allowed.';

export const metadata = {
  title: 'Random Video Chat for Adults 18+ — Free, No Signup',
  description,
  alternates: { canonical: `${SITE_URL}/adult-video-chat` },
  openGraph: {
    title: `Random Video Chat for Adults 18+ | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/adult-video-chat`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Free 18+ video chat with strangers' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Random Video Chat for Adults 18+ | ${SITE_NAME}`,
    description,
    images: ['/og-image.jpg'],
  },
};

const faqs = [
  {
    q: 'What is this page?',
    a: 'Free random 1-on-1 video chat for people 18 and older. You match with another person for a live conversation. There is no signup.',
  },
  {
    q: 'Is this a performer or adult site?',
    a: 'No. Matching is random between real people. Parvah does not sell performances, and sexual content and nudity are not allowed.',
  },
  {
    q: 'What kind of chat is allowed?',
    a: 'Normal conversation. Harassment, sexual content, nudity, illegal content, and anyone under 18 are not allowed.',
  },
  {
    q: 'Is it free?',
    a: 'Yes. No credits, subscriptions, or signup. Confirm you are 18+, allow your camera, and start matching.',
  },
  {
    q: 'Who will I meet?',
    a: 'Another available person in the live queue. Matches are random. Skip until the conversation feels right, and do not share personal contact details.',
  },
  {
    q: 'How do I stay safe?',
    a: 'Never share financial or address details, use Report for abuse, and leave any chat that feels wrong. Video is not recorded on our servers.',
  },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ title, description, url: `${SITE_URL}/adult-video-chat` }),
  buildFaqSchema(faqs),
]);

export default function AdultVideoChatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Video Chat 18+"
        title="Random Video Chat for Adults 18+"
        description={description}
        highlights={[
          {
            title: 'Meet someone new',
            desc: 'Live 1-on-1 webcam matching for a normal conversation.',
          },
          {
            title: 'Conversation only',
            desc: 'Sexual content and nudity are not allowed. Skip or report if a chat goes wrong.',
          },
          {
            title: 'No signup wall',
            desc: 'Jump into random video chat for people 18+ without email, credits, or an account.',
          },
          {
            title: 'Privacy-minded WebRTC',
            desc: 'Video routes peer-to-peer when possible and is not archived on Parvah servers.',
          },
          {
            title: 'Strict 18+ gate',
            desc: 'Age confirmation before chat. Under-18 users are prohibited. Report tools are built in.',
          },
          {
            title: 'Free & unlimited matching',
            desc: 'No time limits for basic matching — keep finding new people until the vibe clicks.',
          },
        ]}
        sections={[
          {
            title: 'Random video chat for people 18+',
            paragraphs: [
              'Open the site, confirm you are 18 or older, and match with someone new. The point is a live conversation, not a performance.',
              'Every match is different. Use Next when you want someone else, and do not share personal details.',
            ],
            bullets: [
              'Free video chat in the browser',
              '18+ age check before you start',
              'Skip and report controls',
              'Works on desktop and mobile — no app download',
            ],
            links: [
              { href: '/', label: 'Start 18+ video chat' },
              { href: '/random-video-chat', label: 'Random video chat guide' },
              { href: '/omegle-alternative', label: 'Omegle for adults 18+ alternative' },
            ],
          },
          {
            title: 'What Parvah is (and is not)',
            paragraphs: [
              'Parvah is a free random video chat platform for people 18 and older. It is not a paid performer directory. We do not filter matches by gender or appearance.',
              'You get a live conversation, a skip button, and a report button. Sexual content and nudity are not allowed.',
            ],
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/', label: 'Live chat' },
          { href: '/chat-with-girls', label: 'Chat with new people' },
          { href: '/video-chat-with-girls', label: 'Video chat with new people' },
          { href: '/hot-video-chat', label: 'Free video chat' },
          { href: '/flirty-video-chat', label: 'Friendly video chat' },
          { href: '/casual-video-chat', label: 'Casual video chat' },
          { href: '/late-night-video-chat', label: 'Late night video chat' },
          { href: '/random-video-chat', label: 'Random video chat' },
          { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
          { href: '/safety', label: 'Safety guidelines' },
        ]}
      />
    </>
  );
}
