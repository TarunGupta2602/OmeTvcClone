import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('nsfw-omegle');

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ 
    title: 'NSFW Omegle Alternative — Free Adult Video Chat', 
    description: 'NSFW Omegle alternative with free 18+ video chat — no signup. Random adult matching, WebRTC privacy, and skip anytime. Adults only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    url: `${SITE_URL}/nsfw-omegle` 
  }),
  buildFaqSchema([
    { q: 'Is this an NSFW Omegle alternative?', a: 'Yes. Parvah is free 18+ random video chat where consenting adults can have NSFW conversations when mutual.' },
    { q: 'Is NSFW content allowed?', a: 'Yes between consenting adults 18+. Non-consent, harassment, and underage users are banned.' },
    { q: 'Do I need to sign up?', a: 'No. Confirm you are 18+ and start matching without an account.' },
    { q: 'Is this safe?', a: 'Use Next/Report, hide personal details, and leave uncomfortable chats immediately.' },
  ]),
]);

export default function NsfwOmeglePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="NSFW Omegle Alternative · 18+"
        title="NSFW Omegle Alternative — Free Adult Video Chat"
        description="NSFW Omegle alternative with free 18+ video chat — no signup. Random adult matching, WebRTC privacy, and skip anytime. Adults only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only."
        highlights={[
          { title: 'Adult-only matching', desc: '18+ age gate before chat. Minors are prohibited.' },
          { title: 'NSFW-friendly space', desc: 'Consenting adults can keep chats flirty or intimate when mutual.' },
          { title: 'No signup required', desc: 'Confirm age and start matching without an account.' },
          { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible — not archived on servers.' },
          { title: 'Skip & report', desc: 'Next and Report keep you in control of every session.' },
          { title: 'Free matching', desc: 'No credits, subscriptions, or time limits for basic chat.' },
        ]}
        sections={[
          {
            title: 'Why search for NSFW Omegle alternatives',
            paragraphs: [
              'People searching NSFW Omegle or Omegle NSFW want adult video chat where explicit content is possible between consenting adults. Parvah is that alternative: 18+ only, random 1-on-1 matching, and no signup.',
              'Unlike Omegle, Parvah has a strict age gate and built-in report tools. NSFW content is allowed when both adults consent — never forced or guaranteed.',
            ],
            bullets: [
              'Free NSFW Omegle alternative',
              '18+ age verification',
              'Consent-first adult chat',
              'WebRTC peer-to-peer video',
            ],
            links: [
              { href: '/', label: 'Start NSFW video chat' },
              { href: '/adult-video-chat', label: 'Adult video chat' },
              { href: '/nsfw-video-chat', label: 'NSFW video chat' },
            ],
          },
          {
            title: 'NSFW Omegle vs Parvah',
            paragraphs: [
              'Omegle shut down in 2023. Parvah carries forward the random stranger chat spirit with modern safety: age gate, report button, and WebRTC privacy.',
              'NSFW searches on Parvah land on adult video chat pages where mutual consent decides the tone — not a porn archive.',
            ],
            links: [
              { href: '/omegle-alternative', label: 'Omegle alternative' },
              { href: '/ometv-alternative', label: 'OmeTV alternative' },
            ],
          },
        ]}
        faqs={[
          { q: 'Is this an NSFW Omegle alternative?', a: 'Yes. Parvah is free 18+ random video chat where consenting adults can have NSFW conversations when mutual.' },
          { q: 'Is NSFW content allowed?', a: 'Yes between consenting adults 18+. Non-consent, harassment, and underage users are banned.' },
          { q: 'Do I need to sign up?', a: 'No. Confirm you are 18+ and start matching without an account.' },
          { q: 'Is this safe?', a: 'Use Next/Report, hide personal details, and leave uncomfortable chats immediately.' },
        ]}
        relatedLinks={[
          { href: '/nsfw-video-chat', label: 'NSFW video chat' },
          { href: '/adult-video-chat', label: 'Adult video chat' },
          { href: '/omegle-alternative', label: 'Omegle alternative' },
          { href: '/hot-video-chat', label: 'Hot video chat' },
        ]}
      />
    </>
  );
}
