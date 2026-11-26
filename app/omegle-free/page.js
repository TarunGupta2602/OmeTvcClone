import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('omegle-free');

const faqs = [
  {
    q: 'Is this like Omegle free?',
    a: 'Yes. Free random video chat with no signup for adults 18+. Unlike Omegle, Parvah has a strict age gate and built-in report tools.',
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
    q: 'Is it really free?',
    a: 'Yes. No credits or subscriptions for basic matching. Confirm you are 18+ and start matching without payment.',
  },
  {
    q: 'Can I use this on mobile?',
    a: 'Yes. Works in modern mobile browsers on Wi-Fi or mobile data. Allow camera and microphone access — no app download required.',
  },
  {
    q: 'Is this like the old Omegle?',
    a: 'Similar random matching spirit, but with modern safety: age gate, report button, WebRTC privacy, and no archived content. Omegle shut down in 2023.',
  },
  {
    q: 'Is video private?',
    a: 'WebRTC peer-to-peer video when possible means streams are not archived on our servers. Still avoid sharing sensitive personal information.',
  },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ 
    title: 'Omegle Free Alternative — No Signup Video Chat', 
    description: 'Omegle free alternative with no signup video chat. Random 1-on-1 webcam matching, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    url: `${SITE_URL}/omegle-free` 
  }),
  buildFaqSchema(faqs),
]);

export default function OmegleFreePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Omegle Free Alternative"
        title="Omegle Free Alternative — No Signup Required"
        description="Omegle free alternative with no signup video chat. Random 1-on-1 webcam matching, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only."
        highlights={[
          { title: 'Free like Omegle', desc: 'No credits, subscriptions, or signup for basic matching.' },
          { title: 'Random matching', desc: 'Instant 1-on-1 webcam chat with strangers.' },
          { title: 'No signup', desc: 'Confirm 18+ and start without an account.' },
          { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible.' },
          { title: 'Skip anytime', desc: 'Next button always available.' },
          { title: '18+ age gate', desc: 'Adults only. Minors prohibited.' },
        ]}
        sections={[
          {
            title: 'Omegle free alternative without signup',
            paragraphs: [
              'People searching Omegle free or free Omegle want random video chat without payment or registration. Parvah is that alternative.',
              'Unlike Omegle, Parvah has a strict age gate and report tools. Matching is free with no signup.',
              'The key difference is honesty. No credits, no subscriptions, no hidden fees — just free random matching with other adults.',
            ],
            bullets: [
              'Free Omegle alternative',
              'No signup or registration',
              '18+ age verification',
              'WebRTC peer-to-peer video',
              'No credits or subscriptions',
            ],
            links: [
              { href: '/', label: 'Start free video chat' },
              { href: '/omegle-alternative', label: 'Omegle alternative' },
              { href: '/random-video-chat', label: 'Random video chat' },
            ],
          },
          {
            title: 'Omegle free vs Parvah',
            paragraphs: [
              'Omegle shut down in 2023. Parvah carries forward the random stranger chat spirit with modern safety: age gate, report button, and WebRTC privacy.',
              'While Omegle was free with minimal moderation, Parvah enforces a strict 18+ age gate and provides report tools for abuse.',
              'Free matching on Parvah means no credits, no subscriptions, and no time limits — just instant random video chat with other adults.',
            ],
            bullets: [
              'Omegle shut down in 2023',
              'Parvah has age gate and report tools',
              'WebRTC privacy (no archived content)',
              'Free matching with no credits',
              'No signup required',
            ],
            links: [
              { href: '/omegle-alternative', label: 'Omegle alternative' },
              { href: '/omegle-18', label: 'Omegle 18+ alternative' },
              { href: '/no-signup-video-chat', label: 'No signup video chat' },
            ],
          },
          {
            title: 'Popular searches for Omegle free alternatives',
            paragraphs: [
              'Users also search Omegle free, free Omegle, Omegle alternative free, and free Omegle alternative. All these searches lead to the same experience.',
              'Other related searches include random video chat free, free video chat, and no signup video chat. Parvah covers all these intents with free matching.',
            ],
            bullets: [
              'Omegle free',
              'Free Omegle',
              'Omegle alternative free',
              'Free Omegle alternative',
              'Random video chat free',
            ],
            links: [
              { href: '/random-video-chat', label: 'Random video chat' },
              { href: '/no-signup-video-chat', label: 'No signup video chat' },
              { href: '/omegle-alternatives', label: 'Omegle alternatives' },
            ],
          },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/omegle-alternative', label: 'Omegle alternative' },
          { href: '/random-video-chat', label: 'Random video chat' },
          { href: '/no-signup-video-chat', label: 'No signup video chat' },
          { href: '/adult-video-chat', label: 'Adult video chat' },
        ]}
      />
    </>
  );
}
