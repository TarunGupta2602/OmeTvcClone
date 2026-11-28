import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('omegle-alternatives');

const faqs = [
  {
    q: 'Is this a free Omegle alternative?',
    a: 'Yes. Parvah is free random video chat with no signup for adults 18+. Unlike Omegle, Parvah has a strict age gate and built-in report tools.',
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
    q: 'How does it compare to Omegle?',
    a: 'Parvah has age gate, report tools, and WebRTC privacy. No signup required. Omegle shut down in 2023.',
  },
  {
    q: 'Can I use this on mobile?',
    a: 'Yes. Works in modern mobile browsers on Wi-Fi or mobile data. Allow camera and microphone access — no app download required.',
  },
  {
    q: 'Is video private?',
    a: 'WebRTC peer-to-peer video when possible means streams are not archived on our servers. Still avoid sharing sensitive personal information.',
  },
  {
    q: 'What makes Parvah better than other alternatives?',
    a: 'Strict 18+ age gate, report tools, WebRTC privacy, no signup, and honest consent-first design. Many alternatives lack these safety features.',
  },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ 
    title: 'Omegle Alternatives Free — No Signup Video Chat', 
    description: 'Free Omegle alternatives with no signup video chat. Random 1-on-1 webcam matching, WebRTC privacy, skip anytime. Adults 18+ only.',
    url: `${SITE_URL}/omegle-alternatives` 
  }),
  buildFaqSchema(faqs),
]);

export default function OmegleAlternativesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Omegle Alternatives"
        title="Omegle Alternatives — Free Random Video Chat"
        description="Free Omegle alternatives with no signup video chat. Random 1-on-1 webcam matching, WebRTC privacy, skip anytime. Adults 18+ only."
        highlights={[
          { title: 'Top Omegle alternative', desc: 'Parvah is a leading free alternative to Omegle.' },
          { title: 'No signup', desc: 'Confirm 18+ and start without an account.' },
          { title: 'Random matching', desc: 'Instant 1-on-1 webcam chat with strangers.' },
          { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible.' },
          { title: 'Skip anytime', desc: 'Next button always available.' },
          { title: '18+ age gate', desc: 'Adults only. Minors prohibited.' },
        ]}
        sections={[
          {
            title: 'Best free Omegle alternatives',
            paragraphs: [
              'Since Omegle shut down, people search for Omegle alternatives that offer free random video chat without signup. Parvah is one of the best options.',
              'Unlike many alternatives, Parvah has a strict age gate, report tools, and WebRTC privacy. No registration required.',
              'The key difference from other alternatives is the combination of safety and simplicity. Age gate, report tools, and no signup — all in one platform.',
            ],
            bullets: [
              'Free Omegle alternative',
              'No signup or registration',
              '18+ age verification',
              'WebRTC peer-to-peer video',
              'Report tools for safety',
            ],
            links: [
              { href: '/', label: 'Start video chat' },
              { href: '/omegle-alternative', label: 'Omegle alternative' },
              { href: '/ometv-alternative', label: 'OmeTV alternative' },
            ],
          },
          {
            title: 'Why Parvah is a top Omegle alternative',
            paragraphs: [
              'Omegle shut down in 2023. Parvah carries forward the random stranger chat spirit with modern safety: age gate, report button, and WebRTC privacy.',
              'Many Omegle alternatives lack proper age verification or safety tools. Parvah enforces a strict 18+ age gate and provides report tools for abuse.',
              'Free matching with no signup means you can start chatting immediately without creating an account or providing personal information.',
            ],
            bullets: [
              'Omegle shut down in 2023',
              'Strict 18+ age gate',
              'WebRTC privacy (no archived content)',
              'Report tools for safety',
              'No signup required',
            ],
            links: [
              { href: '/omegle-alternative', label: 'Omegle alternative' },
              { href: '/chatroulette-alternative', label: 'Chatroulette alternative' },
              { href: '/emerald-chat-alternative', label: 'Emerald Chat alternative' },
            ],
          },
          {
            title: 'Popular searches for Omegle alternatives',
            paragraphs: [
              'Users also search Omegle alternatives, sites like Omegle, Omegle replacement, and Omegle substitute. All these searches lead to the same experience.',
              'Other related searches include random video chat, video chat with strangers, and stranger video chat. Parvah covers all these intents with free matching.',
            ],
            bullets: [
              'Omegle alternatives',
              'Sites like Omegle',
              'Omegle replacement',
              'Omegle substitute',
              'Random video chat',
            ],
            links: [
              { href: '/random-video-chat', label: 'Random video chat' },
              { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
              { href: '/omegle-free', label: 'Omegle free alternative' },
            ],
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/omegle-alternative', label: 'Omegle alternative' },
          { href: '/ometv-alternative', label: 'OmeTV alternative' },
          { href: '/chatroulette-alternative', label: 'Chatroulette alternative' },
          { href: '/emerald-chat-alternative', label: 'Emerald Chat alternative' },
        ]}
      />
    </>
  );
}
