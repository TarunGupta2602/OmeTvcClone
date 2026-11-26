import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('omegle-adult');

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ 
    title: 'Omegle Adult Alternative — Free 18+ Video Chat', 
    description: 'Omegle adult alternative with free 18+ video chat — no signup. Random adult matching, WebRTC privacy, skip anytime. Adults only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    url: `${SITE_URL}/omegle-adult` 
  }),
  buildFaqSchema([
    { q: 'Is this an Omegle adult alternative?', a: 'Yes. Parvah is free 18+ random video chat with no signup.' },
    { q: 'Is this 18+ only?', a: 'Yes. Strictly adults. Minors are banned.' },
    { q: 'Is adult content allowed?', a: 'Yes between consenting adults. Non-consent is banned.' },
    { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
  ]),
]);

export default function OmegleAdultPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Omegle Adult Alternative · 18+"
        title="Omegle Adult Alternative — Free Adult Video Chat"
        description="Omegle adult alternative with free 18+ video chat — no signup. Random adult matching, WebRTC privacy, skip anytime. Adults only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only."
        highlights={[
          { title: 'Adult-only matching', desc: '18+ age gate before chat. Minors prohibited.' },
          { title: 'Omegle-style random chat', desc: 'Instant 1-on-1 webcam matching with strangers.' },
          { title: 'No signup', desc: 'Confirm age and start without an account.' },
          { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible.' },
          { title: 'Skip & report', desc: 'Next and Report built into every session.' },
          { title: 'Free matching', desc: 'No credits or subscriptions.' },
        ]}
        sections={[
          {
            title: 'Omegle adult alternative for 18+ users',
            paragraphs: [
              'People searching Omegle adult or adult Omegle want random video chat where adult content is possible between consenting adults. Parvah is that alternative.',
              'Unlike the original Omegle, Parvah has a strict age gate and report tools. Adult content is allowed when mutual consent exists.',
            ],
            bullets: [
              'Free Omegle adult alternative',
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
          { q: 'Is this an Omegle adult alternative?', a: 'Yes. Parvah is free 18+ random video chat with no signup.' },
          { q: 'Is this 18+ only?', a: 'Yes. Strictly adults. Minors are banned.' },
          { q: 'Is adult content allowed?', a: 'Yes between consenting adults. Non-consent is banned.' },
          { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
        ]}
        relatedLinks={[
          { href: '/omegle-alternative', label: 'Omegle alternative' },
          { href: '/adult-video-chat', label: 'Adult video chat' },
          { href: '/nsfw-omegle', label: 'NSFW Omegle alternative' },
          { href: '/omegle-18', label: 'Omegle 18+ alternative' },
        ]}
      />
    </>
  );
}
