import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('omegle-alternatives');

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ 
    title: 'Omegle Alternatives Free — No Signup Video Chat', 
    description: 'Free Omegle alternatives with no signup video chat. Random 1-on-1 webcam matching, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    url: `${SITE_URL}/omegle-alternatives` 
  }),
  buildFaqSchema([
    { q: 'Is this a free Omegle alternative?', a: 'Yes. Parvah is free random video chat with no signup for adults 18+.' },
    { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
    { q: 'Is this 18+ only?', a: 'Yes. Strictly adults. Minors are banned.' },
    { q: 'How does it compare to Omegle?', a: 'Parvah has age gate, report tools, and WebRTC privacy. No signup required.' },
  ]),
]);

export default function OmegleAlternativesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Omegle Alternatives"
        title="Omegle Alternatives — Free Random Video Chat"
        description="Free Omegle alternatives with no signup video chat. Random 1-on-1 webcam matching, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only."
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
            ],
            bullets: [
              'Free Omegle alternative',
              'No signup or registration',
              '18+ age verification',
              'WebRTC peer-to-peer video',
            ],
            links: [
              { href: '/', label: 'Start video chat' },
              { href: '/omegle-alternative', label: 'Omegle alternative' },
              { href: '/ometv-alternative', label: 'OmeTV alternative' },
            ],
          },
        ]}
        faqs={[
          { q: 'Is this a free Omegle alternative?', a: 'Yes. Parvah is free random video chat with no signup for adults 18+.' },
          { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
          { q: 'Is this 18+ only?', a: 'Yes. Strictly adults. Minors are banned.' },
          { q: 'How does it compare to Omegle?', a: 'Parvah has age gate, report tools, and WebRTC privacy. No signup required.' },
        ]}
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
