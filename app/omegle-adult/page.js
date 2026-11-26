import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('omegle-adult');

const faqs = [
  {
    q: 'Is this an Omegle adult alternative?',
    a: 'Yes. Parvah is free 18+ random video chat with no signup. Unlike Omegle, Parvah has a strict age gate and built-in report tools for safety.',
  },
  {
    q: 'Is this 18+ only?',
    a: 'Yes. Strictly adults. Minors are banned. You must confirm you are 18+ before matching.',
  },
  {
    q: 'Is adult content allowed?',
    a: 'Yes between consenting adults. Non-consent is banned. Adult content is never forced or guaranteed — it only happens when both adults agree.',
  },
  {
    q: 'Do I need to sign up?',
    a: 'No. Confirm age and start matching without an account. No email, no password, no profile — just instant matching.',
  },
  {
    q: 'Can I use this on mobile?',
    a: 'Yes. Works in modern mobile browsers on Wi-Fi or mobile data. Allow camera and microphone access — no app download required.',
  },
  {
    q: 'Is this like the old Omegle?',
    a: 'Similar random matching spirit, but with modern safety: age gate, report button, WebRTC privacy, and no archived content. Omegle shut down in 2023.',
  },
  {
    q: 'Is video private?',
    a: 'WebRTC peer-to-peer video when possible means streams are not archived on our servers. Still avoid sharing sensitive personal information.',
  },
  {
    q: 'What if someone is underage?',
    a: 'Report immediately. Underage users are banned and will be removed from the platform.',
  },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ 
    title: 'Omegle Adult Alternative — Free 18+ Video Chat', 
    description: 'Omegle adult alternative with free 18+ video chat — no signup. Random adult matching, WebRTC privacy, skip anytime. Adults only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    url: `${SITE_URL}/omegle-adult` 
  }),
  buildFaqSchema(faqs),
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
              'The key difference is the strict age verification. On Parvah, everyone in the queue is verified as 18+ before matching. This creates a space where adults can chat freely without worrying about minors.',
            ],
            bullets: [
              'Free Omegle adult alternative',
              '18+ age verification',
              'Random adult matching',
              'WebRTC peer-to-peer video',
              'No signup or registration',
            ],
            links: [
              { href: '/', label: 'Start adult video chat' },
              { href: '/omegle-alternative', label: 'Omegle alternative' },
              { href: '/adult-video-chat', label: 'Adult video chat' },
            ],
          },
          {
            title: 'Omegle adult vs Parvah',
            paragraphs: [
              'Omegle shut down in 2023. Parvah carries forward the random stranger chat spirit with modern safety: age gate, report button, and WebRTC privacy.',
              'While Omegle had minimal age verification, Parvah enforces a strict 18+ age gate before anyone can join the queue. This creates a safer environment for adult chat.',
              'Adult content on Parvah is allowed when mutual consent exists — never forced or guaranteed. This is the honest approach to adult random video chat.',
            ],
            bullets: [
              'Omegle shut down in 2023',
              'Parvah has strict 18+ age gate',
              'WebRTC privacy (no archived content)',
              'Consent-first adult content',
              'Report tools for safety',
            ],
            links: [
              { href: '/omegle-alternative', label: 'Omegle alternative' },
              { href: '/nsfw-omegle', label: 'NSFW Omegle alternative' },
              { href: '/omegle-18', label: 'Omegle 18+ alternative' },
            ],
          },
          {
            title: 'Popular searches for Omegle adult alternatives',
            paragraphs: [
              'Users also search Omegle adult, adult Omegle, Omegle 18+, 18+ Omegle, and adult video chat. All these searches lead to the same experience: free 18+ random video chat.',
              'Other related searches include NSFW video chat, porn chat, nude chat, and 18+ video chat. Parvah covers all these intents with strict age verification.',
            ],
            bullets: [
              'Omegle adult',
              'Adult Omegle',
              'Omegle 18+',
              'NSFW video chat',
              'Adult video chat',
            ],
            links: [
              { href: '/nsfw-omegle', label: 'NSFW Omegle alternative' },
              { href: '/adult-video-chat', label: 'Adult video chat' },
              { href: '/omegle-18', label: 'Omegle 18+ alternative' },
            ],
          },
        ]}
        faqs={faqs}
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
