import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('nsfw-video-chat');

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ 
    title: 'NSFW Video Chat Free — Adult Webcam 18+', 
    description: 'Free NSFW video chat with strangers — no signup. Random 1-on-1 adult webcam matching, WebRTC privacy, and skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    url: `${SITE_URL}/nsfw-video-chat` 
  }),
  buildFaqSchema([
    { q: 'Is NSFW video chat allowed?', a: 'Yes between consenting adults 18+. Non-consent and underage users are banned.' },
    { q: 'Is NSFW video chat free?', a: 'Yes. Free matching with no signup.' },
    { q: 'Will every match want NSFW chat?', a: 'No. Read the room. Skip if they want normal conversation only.' },
    { q: 'Is this safe?', a: 'Use Next/Report, hide personal details, and leave uncomfortable chats immediately.' },
  ]),
]);

export default function NsfwVideoChatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="NSFW Video Chat · 18+"
        title="NSFW Video Chat — Free Adult Webcam Chat"
        description="Free NSFW video chat with strangers — no signup. Random 1-on-1 adult webcam matching, WebRTC privacy, and skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only."
        highlights={[
          { title: 'Adult-only space', desc: 'Strict 18+ age gate. Minors are banned.' },
          { title: 'NSFW when mutual', desc: 'Consenting adults can keep chats flirty, steamy, or explicit together.' },
          { title: 'No signup wall', desc: 'Confirm age and start matching without an account.' },
          { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible — not stored on servers.' },
          { title: 'Skip freely', desc: 'Not every stranger wants NSFW chat — Next is always available.' },
          { title: 'Report abuse', desc: 'Non-consent and harassment are prohibited.' },
        ]}
        sections={[
          {
            title: 'Free NSFW video chat with consent',
            paragraphs: [
              'NSFW video chat means adult webcam conversations that may include explicit content when both people agree. Parvah is free 18+ random matching with no signup.',
              'Consent is the rule. If the other person is not interested in NSFW topics, respect that and skip. Never pressure anyone.',
            ],
            bullets: [
              'Free NSFW video chat',
              '18+ age verification',
              'Consent-first explicit chat',
              'WebRTC peer-to-peer video',
            ],
            links: [
              { href: '/', label: 'Start NSFW video chat' },
              { href: '/adult-video-chat', label: 'Adult video chat' },
              { href: '/nsfw-omegle', label: 'NSFW Omegle alternative' },
            ],
          },
        ]}
        faqs={[
          { q: 'Is NSFW video chat allowed?', a: 'Yes between consenting adults 18+. Non-consent and underage users are banned.' },
          { q: 'Is NSFW video chat free?', a: 'Yes. Free matching with no signup.' },
          { q: 'Will every match want NSFW chat?', a: 'No. Read the room. Skip if they want normal conversation only.' },
          { q: 'Is this safe?', a: 'Use Next/Report, hide personal details, and leave uncomfortable chats immediately.' },
        ]}
        relatedLinks={[
          { href: '/nsfw-omegle', label: 'NSFW Omegle alternative' },
          { href: '/adult-video-chat', label: 'Adult video chat' },
          { href: '/hot-video-chat', label: 'Hot video chat' },
          { href: '/dirty-talk-video-chat', label: 'Dirty talk video chat' },
        ]}
      />
    </>
  );
}
