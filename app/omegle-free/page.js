import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('omegle-free');

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ 
    title: 'Omegle Free Alternative — No Signup Video Chat', 
    description: 'Omegle free alternative with no signup video chat. Random 1-on-1 webcam matching, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    url: `${SITE_URL}/omegle-free` 
  }),
  buildFaqSchema([
    { q: 'Is this like Omegle free?', a: 'Yes. Free random video chat with no signup for adults 18+.' },
    { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
    { q: 'Is this 18+ only?', a: 'Yes. Strictly adults. Minors are banned.' },
    { q: 'Is it really free?', a: 'Yes. No credits or subscriptions for basic matching.' },
  ]),
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
            ],
            bullets: [
              'Free Omegle alternative',
              'No signup or registration',
              '18+ age verification',
              'WebRTC peer-to-peer video',
            ],
            links: [
              { href: '/', label: 'Start free video chat' },
              { href: '/omegle-alternative', label: 'Omegle alternative' },
              { href: '/random-video-chat', label: 'Random video chat' },
            ],
          },
        ]}
        faqs={[
          { q: 'Is this like Omegle free?', a: 'Yes. Free random video chat with no signup for adults 18+.' },
          { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
          { q: 'Is this 18+ only?', a: 'Yes. Strictly adults. Minors are banned.' },
          { q: 'Is it really free?', a: 'Yes. No credits or subscriptions for basic matching.' },
        ]}
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
