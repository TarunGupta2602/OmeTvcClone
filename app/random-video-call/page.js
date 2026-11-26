import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('random-video-call');

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ 
    title: 'Random Video Call Free — No Signup 18+', 
    description: 'Free random video call with strangers — no signup. Instant 1-on-1 webcam calls, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    url: `${SITE_URL}/random-video-call` 
  }),
  buildFaqSchema([
    { q: 'Is random video call free?', a: 'Yes. Free matching with no signup for adults 18+.' },
    { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
    { q: 'Is this on mobile?', a: 'Yes. Works in mobile browsers with camera access.' },
  ]),
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
            ],
            bullets: [
              'Free random video call',
              'No signup required',
              'WebRTC peer-to-peer video',
              'Works on mobile and desktop',
            ],
            links: [
              { href: '/', label: 'Start random video call' },
              { href: '/random-video-chat', label: 'Random video chat' },
              { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
            ],
          },
        ]}
        faqs={[
          { q: 'Is random video call free?', a: 'Yes. Free matching with no signup for adults 18+.' },
          { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
          { q: 'Is this on mobile?', a: 'Yes. Works in mobile browsers with camera access.' },
        ]}
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
