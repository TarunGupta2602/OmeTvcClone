import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('random-video-call');

const faqs = [
  {
    q: 'Is random video call free?',
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
    title: 'Random Video Call Free — No Signup 18+', 
    description: 'Free random video call with strangers — no signup. Instant 1-on-1 webcam calls, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    url: `${SITE_URL}/random-video-call` 
  }),
  buildFaqSchema(faqs),
]);

export default function RandomVideoCallPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Random Video Call · 18+"
        title="Random Video Call Free — Live 1-on-1 Calls"
        description="Free random video call with strangers — no signup. Instant 1-on-1 webcam calls, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only."
        highlights={[
          { title: 'Random video calling', desc: 'Get paired with another adult for live 1-on-1 video calls.' },
          { title: 'No signup', desc: 'Confirm 18+ and start without an account.' },
          { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible.' },
          { title: 'Skip freely', desc: 'Next button lets you find a better match.' },
          { title: 'Desktop + mobile', desc: 'Works in modern browsers.' },
          { title: 'Free forever', desc: 'No credits for basic calls.' },
        ]}
        sections={[
          {
            title: 'Free random video call in the browser',
            paragraphs: [
              'Random video call pairs you with another adult for live 1-on-1 video conversation. No signup, no app — just confirm you are 18+ and start.',
              'People also search random video call free, random video call with strangers, and free random video call. All lead to the same experience.',
              'The difference from other platforms is the simplicity. No profiles, no friend requests, no waiting — just instant video calling with another adult.',
            ],
            bullets: [
              'Free random video call',
              'No signup required',
              'WebRTC peer-to-peer video',
              'Works on mobile and desktop',
              'Instant matching',
            ],
            links: [
              { href: '/', label: 'Start random video call' },
              { href: '/random-video-chat', label: 'Random video chat' },
              { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
            ],
          },
          {
            title: 'How random video call works',
            paragraphs: [
              'Open the site, confirm you are 18+, allow camera access, and click Start Matching. You are paired with another available adult for a live 1-on-1 video call.',
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
            title: 'Popular searches for random video call',
            paragraphs: [
              'Users also search random video call, random video call free, random video call with strangers, and free random video call. All these searches lead to the same experience.',
              'Other related searches include random video chat, video call with strangers, free video call, and video chat with strangers. Parvah covers all these intents with instant matching.',
            ],
            bullets: [
              'Random video call',
              'Random video call free',
              'Random video call with strangers',
              'Free random video call',
              'Video call with strangers',
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
          { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
          { href: '/live-video-chat', label: 'Live video chat' },
          { href: '/adult-video-chat', label: 'Adult video chat' },
        ]}
      />
    </>
  );
}
