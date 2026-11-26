import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('video-chat-18');

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ 
    title: 'Video Chat 18+ Free — Adult Webcam No Signup', 
    description: 'Free video chat 18+ with strangers — no signup. Random 1-on-1 adult webcam matching, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    url: `${SITE_URL}/video-chat-18` 
  }),
  buildFaqSchema([
    { q: 'Is video chat 18+ free?', a: 'Yes. Free matching with no signup for adults 18+.' },
    { q: 'Is this 18+ only?', a: 'Yes. Strictly adults. Minors are banned.' },
    { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
  ]),
]);

export default function VideoChat18Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Video Chat 18+ · Adults Only"
        title="Video Chat 18+ — Free Adult Webcam Chat"
        description="Free video chat 18+ with strangers — no signup. Random 1-on-1 adult webcam matching, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only."
        highlights={[
          { title: '18+ verified', desc: 'Age gate before matching. Minors prohibited.' },
          { title: 'Random adult matching', desc: 'Instant 1-on-1 webcam chat with other adults.' },
          { title: 'No signup', desc: 'Confirm age and start without an account.' },
          { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible.' },
          { title: 'Skip anytime', desc: 'Next button always available.' },
          { title: 'Free matching', desc: 'No credits or subscriptions.' },
        ]}
        sections={[
          {
            title: 'Free video chat 18+ for adults',
            paragraphs: [
              'Video chat 18+ means adult webcam chat where participants are verified as 18 or older. Parvah offers free random matching with no signup.',
              'Use it for casual talk, flirty energy, or intimate conversation when both adults consent.',
            ],
            links: [
              { href: '/', label: 'Start video chat 18+' },
              { href: '/adult-video-chat', label: 'Adult video chat' },
              { href: '/omegle-18', label: 'Omegle 18+ alternative' },
            ],
          },
        ]}
        faqs={[
          { q: 'Is video chat 18+ free?', a: 'Yes. Free matching with no signup for adults 18+.' },
          { q: 'Is this 18+ only?', a: 'Yes. Strictly adults. Minors are banned.' },
          { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
        ]}
        relatedLinks={[
          { href: '/adult-video-chat', label: 'Adult video chat' },
          { href: '/omegle-18', label: 'Omegle 18+ alternative' },
          { href: '/nsfw-video-chat', label: 'NSFW video chat' },
          { href: '/random-video-chat', label: 'Random video chat' },
        ]}
      />
    </>
  );
}
