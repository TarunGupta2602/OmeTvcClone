import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('nsfw-omegle');

const faqs = [
  {
    q: 'Is this an NSFW Omegle alternative?',
    a: 'Yes. Parvah is free 18+ random video chat where consenting adults can have NSFW conversations when mutual. Unlike Omegle, Parvah has a strict age gate and built-in report tools.',
  },
  {
    q: 'Is NSFW content allowed?',
    a: 'Yes between consenting adults 18+. Non-consent, harassment, and underage users are banned. NSFW content is never forced or guaranteed — it only happens when both adults agree.',
  },
  {
    q: 'Do I need to sign up?',
    a: 'No. Confirm you are 18+ and start matching without an account. No email, no password, no profile — just instant matching.',
  },
  {
    q: 'Is this safe?',
    a: 'Use Next/Report, hide personal details, and leave uncomfortable chats immediately. Never share your address, phone, or payment apps on camera or in text.',
  },
  {
    q: 'Will I always find NSFW content?',
    a: 'No. Matches are random. Some people want friendly chat, others want flirty or intimate conversation. Use Next until you find someone who matches your energy.',
  },
  {
    q: 'Is this like the old Omegle?',
    a: 'Similar random matching spirit, but with modern safety: age gate, report button, WebRTC privacy, and no archived content. Omegle shut down in 2023.',
  },
  {
    q: 'Can I use this on mobile?',
    a: 'Yes. Works in modern mobile browsers on Wi-Fi or mobile data. Allow camera and microphone access — no app download required.',
  },
  {
    q: 'Is video private?',
    a: 'WebRTC peer-to-peer video when possible means streams are not archived on our servers. Still avoid sharing sensitive personal information.',
  },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ 
    title: 'NSFW Omegle Alternative — Free Adult Video Chat', 
    description: 'NSFW Omegle alternative with free 18+ video chat — no signup. Random adult matching, WebRTC privacy, and skip anytime. Adults only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    url: `${SITE_URL}/nsfw-omegle` 
  }),
  buildFaqSchema(faqs),
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
              'The key difference is consent-first design. On Parvah, you and your match decide the tone together. If someone is not interested in NSFW topics, respect that and skip.',
            ],
            bullets: [
              'Free NSFW Omegle alternative',
              '18+ age verification',
              'Consent-first adult chat',
              'WebRTC peer-to-peer video',
              'No signup or registration',
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
              'While Omegle had minimal moderation, Parvah enforces an 18+ age gate and provides report tools for abuse. This creates a safer environment for adult chat.',
            ],
            bullets: [
              'Omegle shut down in 2023',
              'Parvah has age gate and report tools',
              'WebRTC privacy (no archived content)',
              'Consent-first NSFW content',
            ],
            links: [
              { href: '/omegle-alternative', label: 'Omegle alternative' },
              { href: '/ometv-alternative', label: 'OmeTV alternative' },
              { href: '/omegle-18', label: 'Omegle 18+ alternative' },
            ],
          },
          {
            title: 'How NSFW video chat works on Parvah',
            paragraphs: [
              'Open the site, confirm you are 18+, allow camera access, and click Start Matching. You are paired with another available adult for a live 1-on-1 session.',
              'If the conversation turns NSFW, that happens only when both adults consent. If someone is not interested, respect that and use Next to find a better match.',
              'Report any harassment or non-consensual behavior immediately. This keeps the space safe for everyone who wants adult chat on their own terms.',
            ],
            bullets: [
              'Confirm 18+ before matching',
              'Allow camera and microphone',
              'NSFW only with mutual consent',
              'Skip anytime with Next',
              'Report abuse for safety',
            ],
            links: [
              { href: '/', label: 'Start matching now' },
              { href: '/safety', label: 'Safety guidelines' },
            ],
          },
          {
            title: 'Popular searches for NSFW Omegle alternatives',
            paragraphs: [
              'Users also search NSFW Omegle, Omegle NSFW, NSFW Omegle alternative, adult Omegle, and Omegle adult. All these searches lead to the same experience: free 18+ random video chat.',
              'Other related searches include NSFW video chat, adult video chat, porn chat, nude chat, and 18+ video chat. Parvah covers all these intents with consent-first design.',
            ],
            bullets: [
              'NSFW Omegle',
              'Omegle NSFW',
              'Adult Omegle',
              'NSFW video chat',
              'Adult video chat',
            ],
            links: [
              { href: '/nsfw-video-chat', label: 'NSFW video chat' },
              { href: '/adult-video-chat', label: 'Adult video chat' },
              { href: '/omegle-adult', label: 'Omegle adult alternative' },
            ],
          },
        ]}
        faqs={faqs}
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
