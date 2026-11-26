import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('free-adult-video-chat');

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ 
    title: 'Free Adult Video Chat — No Signup 18+', 
    description: 'Free adult video chat with strangers — no signup. Random 1-on-1 webcam matching for adults 18+, WebRTC privacy, skip anytime. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    url: `${SITE_URL}/free-adult-video-chat` 
  }),
  buildFaqSchema([
    { q: 'Is adult video chat free?', a: 'Yes. Free matching with no signup for adults 18+.' },
    { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
    { q: 'Is this 18+ only?', a: 'Yes. Strictly adults. Minors are banned.' },
    { q: 'Is adult content allowed?', a: 'Yes between consenting adults. Non-consent is banned.' },
  ]),
]);

export default function FreeAdultVideoChatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Free Adult Video Chat · 18+"
        title="Free Adult Video Chat — No Signup Required"
        description="Free adult video chat with strangers — no signup. Random 1-on-1 webcam matching for adults 18+, WebRTC privacy, skip anytime. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only."
        highlights={[
          { title: 'Truly free', desc: 'No credits, subscriptions, or signup for basic matching.' },
          { title: '18+ only', desc: 'Age gate before chat. Minors prohibited.' },
          { title: 'Random adult matching', desc: 'Instant 1-on-1 webcam chat with strangers.' },
          { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible.' },
          { title: 'Skip anytime', desc: 'Next button always available.' },
          { title: 'Report abuse', desc: 'Built-in report tools for safety.' },
        ]}
        sections={[
          {
            title: 'Free adult video chat without payment',
            paragraphs: [
              'Free adult video chat means 1-on-1 webcam conversation with strangers at no cost. Parvah offers free random matching with no signup.',
              'People also search free adult video chat no registration, free adult video chat no sign up, and adult video chat free. All lead to the same experience.',
            ],
            bullets: [
              'Free adult video chat',
              'No signup or registration',
              '18+ age verification',
              'WebRTC peer-to-peer video',
            ],
            links: [
              { href: '/', label: 'Start free adult video chat' },
              { href: '/adult-video-chat', label: 'Adult video chat' },
              { href: '/nsfw-video-chat', label: 'NSFW video chat' },
            ],
          },
        ]}
        faqs={[
          { q: 'Is adult video chat free?', a: 'Yes. Free matching with no signup for adults 18+.' },
          { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
          { q: 'Is this 18+ only?', a: 'Yes. Strictly adults. Minors are banned.' },
          { q: 'Is adult content allowed?', a: 'Yes between consenting adults. Non-consent is banned.' },
        ]}
        relatedLinks={[
          { href: '/adult-video-chat', label: 'Adult video chat' },
          { href: '/nsfw-video-chat', label: 'NSFW video chat' },
          { href: '/omegle-adult', label: 'Omegle adult alternative' },
          { href: '/hot-video-chat', label: 'Hot video chat' },
        ]}
      />
    </>
  );
}
