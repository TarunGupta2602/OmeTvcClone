import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('videochat');

const faqs = [
  {
    q: 'Is videochat free?',
    a: 'Yes. Free matching with no signup for adults 18+. Confirm you are 18+ and start matching without credits or subscriptions.',
  },
  {
    q: 'Do I need to sign up?',
    a: 'No. Confirm age and start matching without an account. No email, no password, no profile — just instant matching.',
  },
  {
    q: 'Is this on mobile?',
    a: 'Yes. Works in modern mobile browsers on Wi-Fi or mobile data. Allow camera and microphone access — no app download required.',
  },
  {
    q: 'Is this 18+ only?',
    a: 'Yes. Strictly adults. Minors are banned. You must confirm you are 18+ before matching.',
  },
  {
    q: 'Can I skip if I do not like the match?',
    a: 'Yes. Next is always available. Skip until you find someone you want to talk to.',
  },
  {
    q: 'Is video private?',
    a: 'WebRTC peer-to-peer video when possible means streams are not archived on our servers. Still avoid sharing sensitive personal information.',
  },
  {
    q: 'Do I need a webcam?',
    a: 'Yes. Allow camera access when your browser asks. A working camera and microphone improve the experience.',
  },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ 
    title: 'Videochat Free — Random Video Chat No Signup', 
    description: 'Free videochat with strangers — no signup. Random 1-on-1 webcam matching, WebRTC privacy, skip anytime. Adults 18+ only.',
    url: `${SITE_URL}/videochat` 
  }),
  buildFaqSchema(faqs),
]);

export default function VideochatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Videochat · 18+"
        title="Videochat Free — Random 1-on-1 Video Chat"
        description="Free videochat with strangers — no signup. Random 1-on-1 webcam matching, WebRTC privacy, skip anytime. Adults 18+ only."
        highlights={[
          { title: 'Random videochat', desc: 'Get paired with another adult for live 1-on-1 video chat.' },
          { title: 'No signup', desc: 'Confirm 18+ and start without an account.' },
          { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible.' },
          { title: 'Skip freely', desc: 'Next button lets you find a better match.' },
          { title: 'Desktop + mobile', desc: 'Works in modern browsers.' },
          { title: 'Free forever', desc: 'No credits for basic videochat.' },
        ]}
        sections={[
          {
            title: 'Free videochat in the browser',
            paragraphs: [
              'Videochat means live webcam conversation with strangers. Parvah offers free random matching with no signup.',
              'People search videochat, video chat, and free videochat. All lead to the same experience: 1-on-1 video with strangers.',
              'The difference from other platforms is the simplicity. No profiles, no friend requests, no waiting — just instant videochat with another adult.',
            ],
            bullets: [
              'Free videochat',
              'No signup required',
              'WebRTC peer-to-peer video',
              'Works on mobile and desktop',
              'Instant matching',
            ],
            links: [
              { href: '/', label: 'Start videochat' },
              { href: '/random-video-chat', label: 'Random video chat' },
              { href: '/live-video-chat', label: 'Live video chat' },
            ],
          },
          {
            title: 'How videochat works',
            paragraphs: [
              'Open the site, confirm you are 18+, allow camera access, and click Start Matching. You are paired with another available adult for a live 1-on-1 videochat.',
              'Use Next to skip if the match is not what you want. Keep matching until you find someone you want to talk to.',
              'Report any harassment or non-consensual behavior immediately. This keeps the space safe for everyone.',
            ],
            bullets: [
              'Confirm 18+ before matching',
              'Allow camera and microphone',
              'Skip anytime with Next',
              'Report abuse for safety',
              'No signup or registration',
            ],
            links: [
              { href: '/', label: 'Start matching now' },
              { href: '/safety', label: 'Safety guidelines' },
            ],
          },
          {
            title: 'Popular searches for videochat',
            paragraphs: [
              'Users also search videochat, free videochat, video chat, and random videochat. All these searches lead to the same experience.',
              'Other related searches include random video chat, video chat with strangers, live video chat, and webcam chat. Parvah covers all these intents with instant matching.',
            ],
            bullets: [
              'Videochat',
              'Free videochat',
              'Video chat',
              'Random videochat',
              'Webcam chat',
            ],
            links: [
              { href: '/random-video-chat', label: 'Random video chat' },
              { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
              { href: '/live-video-chat', label: 'Live video chat' },
            ],
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/random-video-chat', label: 'Random video chat' },
          { href: '/live-video-chat', label: 'Live video chat' },
          { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
          { href: '/adult-video-chat', label: 'Adult video chat' },
        ]}
      />
    </>
  );
}
