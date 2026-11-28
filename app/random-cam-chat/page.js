import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('random-cam-chat');

const faqs = [
  {
    q: 'Is random cam chat free?',
    a: 'Yes. Free matching with no signup for adults 18+. Confirm you are 18+ and start matching without credits or subscriptions.',
  },
  {
    q: 'Do I need a webcam?',
    a: 'Yes. Allow camera access when your browser asks. A working camera and microphone improve the experience.',
  },
  {
    q: 'Is this on mobile?',
    a: 'Yes. Works in modern mobile browsers on Wi-Fi or mobile data. Allow camera and microphone access — no app download required.',
  },
  {
    q: 'Do I need to sign up?',
    a: 'No. Confirm age and start matching without an account. No email, no password, no profile — just instant matching.',
  },
  {
    q: 'Is this 18+ only?',
    a: 'Yes. Strictly adults. Minors are banned. You must confirm you are 18+ before matching.',
  },
  {
    q: 'Is video private?',
    a: 'WebRTC peer-to-peer video when possible means streams are not archived on our servers. Still avoid sharing sensitive personal information.',
  },
  {
    q: 'Can I skip if I do not like the match?',
    a: 'Yes. Next is always available. Skip until you find someone you want to talk to.',
  },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ 
    title: 'Random Cam Chat Free — No Signup Webcam', 
    description: 'Free random cam chat with strangers — no signup. Instant 1-on-1 webcam matching, WebRTC privacy, skip anytime. Adults 18+ only.',
    url: `${SITE_URL}/random-cam-chat` 
  }),
  buildFaqSchema(faqs),
]);

export default function RandomCamChatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Random Cam Chat · 18+"
        title="Random Cam Chat Free — Live Webcam Matching"
        description="Free random cam chat with strangers — no signup. Instant 1-on-1 webcam matching, WebRTC privacy, skip anytime. Adults 18+ only."
        highlights={[
          { title: 'Random webcam matching', desc: 'Get paired with another adult for live 1-on-1 cam chat.' },
          { title: 'No signup', desc: 'Confirm 18+ and start without an account.' },
          { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible — not archived on servers.' },
          { title: 'Skip freely', desc: 'Next button lets you find a better match.' },
          { title: 'Desktop + mobile', desc: 'Works in modern browsers.' },
          { title: 'Free forever', desc: 'No credits for basic matching.' },
        ]}
        sections={[
          {
            title: 'Free random cam chat in the browser',
            paragraphs: [
              'Random cam chat pairs you with another adult for live webcam conversation. No signup, no app — just confirm you are 18+ and start matching.',
              'People also search random cam chat free, random webcam chat, and free random cam chat. All lead to the same experience: live 1-on-1 video with strangers.',
              'The difference from other platforms is the simplicity. No profiles, no friend requests, no waiting — just instant webcam matching with another adult.',
            ],
            bullets: [
              'Free random cam chat',
              'No signup required',
              'WebRTC peer-to-peer video',
              'Works on mobile and desktop',
              'Instant matching',
            ],
            links: [
              { href: '/', label: 'Start random cam chat' },
              { href: '/free-webcam-chat', label: 'Free webcam chat' },
              { href: '/random-video-chat', label: 'Random video chat' },
            ],
          },
          {
            title: 'How random cam chat works',
            paragraphs: [
              'Open the site, confirm you are 18+, allow camera access, and click Start Matching. You are paired with another available adult for a live 1-on-1 webcam session.',
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
            title: 'Popular searches for random cam chat',
            paragraphs: [
              'Users also search random cam chat, random webcam chat, free random cam chat, cam chat with strangers, and webcam chat random. All these searches lead to the same experience.',
              'Other related searches include random video chat, free webcam chat, live video chat, and video chat with strangers. Parvah covers all these intents with instant matching.',
            ],
            bullets: [
              'Random cam chat',
              'Random webcam chat',
              'Free random cam chat',
              'Cam chat with strangers',
              'Webcam chat random',
            ],
            links: [
              { href: '/random-video-chat', label: 'Random video chat' },
              { href: '/free-webcam-chat', label: 'Free webcam chat' },
              { href: '/live-video-chat', label: 'Live video chat' },
            ],
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/free-webcam-chat', label: 'Free webcam chat' },
          { href: '/random-video-chat', label: 'Random video chat' },
          { href: '/live-video-chat', label: 'Live video chat' },
          { href: '/adult-video-chat', label: 'Adult video chat' },
        ]}
      />
    </>
  );
}
