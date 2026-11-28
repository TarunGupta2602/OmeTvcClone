import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, buildBreadcrumbSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Adult Video Chat 18+ — Free, No Signup | Parvah';
const description =
  'Free 18+ video chat with random adults. No signup, no app: confirm your age, match 1-on-1, skip anytime. Consent-first rules and report tools built in.';

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${SITE_URL}/adult-video-chat` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/adult-video-chat`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Free adult video chat with strangers' }],
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
    q: 'Do I need an account?',
    a: 'No. Confirm you are 18+, allow camera access, and click Start Matching. No email or account needed.',
  },
  {
    q: 'Is it free?',
    a: 'Yes. No credits, subscriptions, or signup. Confirm you are 18+, allow your camera, and start matching.',
  },
  {
    q: 'Can I choose to talk only to women or men?',
    a: 'No. Matching is random. Press Next until you find a conversation you like.',
  },
  {
    q: 'Does it work on my phone?',
    a: 'Yes, in any modern mobile browser. Allow camera and microphone permissions when prompted.',
  },
  {
    q: 'What should I do if someone is rude or makes me uncomfortable?',
    a: 'Press Next, then use Report. You do not owe anyone an explanation.',
  },
  {
    q: 'Are my chats recorded?',
    a: 'No. Parvah does not record or store your video chats. Video uses peer-to-peer WebRTC when networks allow it.',
  },
];

const url = `${SITE_URL}/adult-video-chat`;
const breadcrumbs = [
  { name: 'Home', url: SITE_URL },
  { name: title, url },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ title, description, url }),
  buildBreadcrumbSchema({ items: breadcrumbs }),
  buildFaqSchema(faqs),
]);

export default function AdultVideoChatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Adult Video Chat · 18+"
        title="Free Adult Video Chat (18+), No Signup"
        description={description}
        highlights={[
          {
            title: 'Meet new adults instantly',
            desc: 'Live 1-on-1 webcam matching with people looking for conversation, flirt, late-night company, or chemistry.',
          },
          {
            title: 'No signup wall',
            desc: 'Jump into adult random video chat without email, credits, or an account.',
          },
          {
            title: 'Privacy-minded WebRTC',
            desc: 'Video routes peer-to-peer when possible and is not archived on Parvah servers.',
          },
          {
            title: 'You must confirm you are 18 or older',
            desc: 'Age confirmation before chat. Under-18 users are prohibited. Report tools are built in.',
          },
          {
            title: 'Free & unlimited matching',
            desc: 'No time limits for basic matching — keep finding new people until the vibe clicks.',
          },
        ]}
        sections={[
          {
            title: 'How adult video chat works on Parvah',
            paragraphs: [
              'Parvah\'s adult video chat connects you 1-on-1 with another adult who is online right now. There is no account to create and nothing to download. You confirm you are 18 or older, allow your camera, and the matcher pairs you with someone. If the conversation is not for you, press Next and you are matched with a new person.',
              'This page explains how adult video chat on Parvah works, what is and is not allowed, and how to stay safe.',
            ],
            links: [
              { href: '/', label: 'Start free video chat' },
              { href: '/safety', label: 'Safety guidelines' },
            ],
          },
          {
            title: 'What kind of conversations happen here',
            paragraphs: [
              'Matching is random, so every chat is different. Many people just want to talk, make friends, or pass a late night with someone new. Some conversations are flirty. Anything more intimate than that must be mutual: both adults have to be comfortable, and either person can leave at any time.',
            ],
          },
          {
            title: 'Rules that apply to everyone',
            paragraphs: [
              'You must be 18 or older. Anyone under 18 is not allowed to use Parvah.',
              'Consent comes first. If someone is uncomfortable, stop and press Next.',
              'No harassment, threats, hate speech, or pressure.',
              'No recording or sharing another person\'s video or screenshots without their permission.',
              'No illegal content of any kind.',
              'Anyone who breaks these rules can be reported and blocked.',
            ],
          },
          {
            title: 'Safety and privacy tips',
            paragraphs: [
              'Do not share your phone number, address, workplace, or bank or payment details.',
              'Be careful with anyone who asks you to move to another app or send money.',
              'Use a neutral background and keep personal documents out of the camera view.',
              'If a chat makes you uncomfortable, leave immediately and use Report.',
              'Parvah does not record or store your video chats.',
            ],
            links: [
              { href: '/safety', label: 'Safety guidelines' },
            ],
          },
          {
            title: 'What Parvah is not',
            paragraphs: [
              'Parvah is a random matching service between real users. It is not a directory of paid performers or a guaranteed adult show. You cannot choose who you are matched with, and nobody can promise you a particular gender or type of conversation.',
            ],
          },
          {
            title: 'Parvah vs other random video chat sites',
            paragraphs: [
              'See how Parvah compares to other random chat platforms:',
            ],
            comparison: {
              headers: ['Feature', 'Parvah', 'Other random chat sites'],
              rows: [
                ['Signup', 'None', 'Often required'],
                ['Price', 'Free', 'Free or paid filters'],
                ['Age check', 'Required before chat', 'Varies'],
                ['Report tool', 'Yes', 'Varies'],
                ['App download', 'No', 'Sometimes'],
              ],
            },
          },
          {
            title: 'Who this is for, and who it is not for',
            paragraphs: [
              'For: adults who want a quick, free way to meet new people by video.',
              'Not for: anyone under 18, or anyone who wants a paid cam show or guaranteed content.',
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
