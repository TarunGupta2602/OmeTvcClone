import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Free Adult Video Chat — Flirty Random Webcam Chat 18+';
const description =
  'Free adult video chat with no signup. Meet new people for flirty talks, hot conversations, late-night chemistry, and real connections. Instant 1-on-1 webcam matching for adults 18+ on Parvah.';

export const metadata = {
  title: 'Free Adult Video Chat (No Signup) 18+',
  description,
  alternates: { canonical: `${SITE_URL}/adult-video-chat` },
  openGraph: {
    title: `Free Adult Video Chat (No Signup) 18+ | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/adult-video-chat`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Parvah Free Adult Video Chat' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Free Adult Video Chat (No Signup) 18+ | ${SITE_NAME}`,
    description,
    images: ['/og-image.jpg'],
  },
};

const faqs = [
  {
    q: 'What is adult video chat on Parvah?',
    a: 'Parvah is free random 1-on-1 webcam chat for adults 18+. You match with another person in the live queue for live video and text — flirty talks, hot chemistry, friendship, or dating energy depending on mutual consent.',
  },
  {
    q: 'Is this nude cam girls or paid performers?',
    a: 'No. Parvah is random stranger matching between real users — not a cam-model catalog, not paid nude shows, and not a guarantee of any gender or explicit content. Skip until you find a mutual vibe.',
  },
  {
    q: 'Are dirty talks and intimate chats allowed?',
    a: 'Yes, when both adults consent. Flirty language and mutual adult chemistry are welcome. Non-consent, underage users, illegal content, and harassment are banned.',
  },
  {
    q: 'Is adult video chat free?',
    a: 'Yes. No credits, subscriptions, or signup. Confirm you are 18+, allow your camera, and start matching.',
  },
  {
    q: 'Can I meet women or find relationships?',
    a: 'You can meet new adults worldwide, including people open to flirting or connection. Matches are random — keep skipping until the conversation feels right. Never share personal contact details too quickly.',
  },
  {
    q: 'How do I stay safe during adult chat?',
    a: 'Only chat with people who feel respectful, never share financial or address details, use Report for abuse, and leave any chat that is not consensual. Parvah does not record peer video streams.',
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
        badge="Adult Video Chat · 18+"
        title="Free Adult Video Chat — Flirty, Hot, Real"
        description={description}
        highlights={[
          {
            title: 'Meet new adults instantly',
            desc: 'Live 1-on-1 webcam matching with people looking for conversation, flirt, late-night company, or chemistry.',
          },
          {
            title: 'Flirty & hot talks welcome',
            desc: 'Consenting adults can keep it playful, steamy, or deep. You set the tone together — skip if it is not mutual.',
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
            title: 'Adult random video chat built for chemistry',
            paragraphs: [
              'Parvah is for adults who want more than small talk — flirty video chat, dirty talk when mutual, late-night honesty, and the chance of a real connection. Open the site, confirm you are 18+, and match with someone new in seconds.',
              'Because matching is random, every session is different. Some chats stay playful. Some turn hot. Some become genuine conversations that feel like the start of something. Keep Next handy and protect your privacy.',
            ],
            bullets: [
              'Free adult webcam chat in the browser',
              'Consent-first flirty and intimate conversation',
              'Skip and report controls always available',
              'Works on desktop and mobile — no app download',
            ],
            links: [
              { href: '/', label: 'Start adult video chat' },
              { href: '/random-video-chat', label: 'Random video chat guide' },
              { href: '/omegle-alternative', label: 'Adult Omegle alternative' },
            ],
          },
          {
            title: 'What Parvah is (and is not)',
            paragraphs: [
              'Parvah is a free random video chat platform for adults. It is not a paid cam-girl directory, escort service, or guaranteed nude show. Marketing that promises “sexy girls waiting nude” on a random matcher is misleading — we do not sell performers or guarantee gender, looks, or explicit content.',
              'What you get is honest: live adults, instant matching, and the freedom to flirt, talk dirty, or connect when both people agree. That is how sustainable traffic and trust are built.',
            ],
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/', label: 'Live chat' },
          { href: '/hot-video-chat', label: 'Hot video chat' },
          { href: '/flirty-video-chat', label: 'Flirty video chat' },
          { href: '/late-night-video-chat', label: 'Late night video chat' },
          { href: '/meet-people-online', label: 'Meet people online' },
          { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
          { href: '/free-webcam-chat', label: 'Free webcam chat' },
          { href: '/random-video-chat', label: 'Random video chat' },
          { href: '/omegle-alternative', label: 'Omegle alternative' },
          { href: '/safety', label: 'Safety guidelines' },
        ]}
      />
    </>
  );
}
