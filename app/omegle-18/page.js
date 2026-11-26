import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('omegle-18');

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ 
    title: 'Omegle 18+ Alternative — Free Adult Video Chat', 
    description: 'Omegle 18+ alternative with free adult video chat — no signup. Random 1-on-1 webcam matching for adults 18+, WebRTC privacy, skip anytime. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    url: `${SITE_URL}/omegle-18` 
  }),
  buildFaqSchema([
    { q: 'Is this an Omegle 18+ alternative?', a: 'Yes. Parvah is free 18+ random video chat with no signup.' },
    { q: 'Is this 18+ only?', a: 'Yes. Strictly adults. Minors are banned.' },
    { q: 'Do I need to sign up?', a: 'No. Confirm you are 18+ and start matching.' },
    { q: 'Is adult content allowed?', a: 'Yes between consenting adults. Non-consent is banned.' },
  ]),
]);

export default function Omegle18Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Omegle 18+ Alternative · Adults Only"
        title="Omegle 18+ Alternative — Free Adult Video Chat"
        description="Omegle 18+ alternative with free adult video chat — no signup. Random 1-on-1 webcam matching for adults 18+, WebRTC privacy, skip anytime. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only."
        highlights={[
          { title: '18+ only matching', desc: 'Strict age gate before chat. Minors are prohibited.' },
          { title: 'Omegle-style random chat', desc: 'Instant 1-on-1 webcam matching with strangers.' },
          { title: 'No signup required', desc: 'Confirm age and start without an account.' },
          { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible — not archived on servers.' },
          { title: 'Skip & report', desc: 'Next and Report keep you in control.' },
          { title: 'Free forever', desc: 'No credits or subscriptions for basic matching.' },
        ]}
        sections={[
          {
            title: 'Omegle 18+ alternative for adults',
            paragraphs: [
              'People searching Omegle 18+ or 18+ Omegle want adult random video chat where they can meet other adults without age-restricted content filters. Parvah is that alternative.',
              'Unlike Omegle, Parvah enforces an 18+ age gate and provides report tools. Adult content is allowed when mutual consent exists.',
            ],
            bullets: [
              'Free Omegle 18+ alternative',
              '18+ age verification',
              'Random adult matching',
              'WebRTC peer-to-peer video',
            ],
            links: [
              { href: '/', label: 'Start adult video chat' },
              { href: '/omegle-alternative', label: 'Omegle alternative' },
              { href: '/adult-video-chat', label: 'Adult video chat' },
            ],
          },
        ]}
        faqs={[
          { q: 'Is this an Omegle 18+ alternative?', a: 'Yes. Parvah is free 18+ random video chat with no signup.' },
          { q: 'Is this 18+ only?', a: 'Yes. Strictly adults. Minors are banned.' },
          { q: 'Do I need to sign up?', a: 'No. Confirm you are 18+ and start matching.' },
          { q: 'Is adult content allowed?', a: 'Yes between consenting adults. Non-consent is banned.' },
        ]}
        relatedLinks={[
          { href: '/omegle-alternative', label: 'Omegle alternative' },
          { href: '/adult-video-chat', label: 'Adult video chat' },
          { href: '/nsfw-omegle', label: 'NSFW Omegle alternative' },
          { href: '/video-chat-18', label: 'Video chat 18+' },
        ]}
      />
    </>
  );
}
