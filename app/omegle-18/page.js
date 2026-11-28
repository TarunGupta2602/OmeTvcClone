import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('omegle-18');

const faqs = [
  {
    q: 'Is this an Omegle 18+ alternative?',
    a: 'Yes. Parvah is free 18+ random video chat with no signup. Unlike Omegle, Parvah has a strict age gate and built-in report tools for safety.',
  },
  {
    q: 'Is this 18+ only?',
    a: 'Yes. Strictly adults. Minors are banned. You must confirm you are 18+ before matching.',
  },
  {
    q: 'Do I need to sign up?',
    a: 'No. Confirm you are 18+ and start matching without an account. No email, no password, no profile — just instant matching.',
  },
  {
    q: 'Is adult content allowed?',
    a: 'Yes between consenting adults. Non-consent is banned. Adult content is never forced or guaranteed — it only happens when both adults agree.',
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
    title: 'Omegle 18+ Alternative — Free Adult Video Chat', 
    description: 'Omegle 18+ alternative with free adult video chat — no signup. Random 1-on-1 webcam matching for adults 18+, WebRTC privacy, skip anytime.',
    url: `${SITE_URL}/omegle-18` 
  }),
  buildFaqSchema(faqs),
]);

export default function Omegle18Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Omegle 18+ Alternative · Adults Only"
        title="Omegle 18+ Alternative — Free Adult Video Chat"
        description="Omegle 18+ alternative with free adult video chat — no signup. Random 1-on-1 webcam matching for adults 18+, WebRTC privacy, skip anytime."
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
              'The key difference is the strict age verification. On Parvah, everyone in the queue is verified as 18+ before matching. This creates a space where adults can chat freely without worrying about minors.',
            ],
            bullets: [
              'Free Omegle 18+ alternative',
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
            title: 'Omegle 18+ vs Parvah',
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
              { href: '/omegle-adult', label: 'Omegle adult alternative' },
            ],
          },
          {
            title: 'How 18+ video chat works on Parvah',
            paragraphs: [
              'Open the site, confirm you are 18+, allow camera access, and click Start Matching. You are paired with another verified adult for a live 1-on-1 session.',
              'Because everyone is verified as 18+, you can chat freely without worrying about age restrictions. Adult content is allowed when both adults consent.',
              'Report any harassment or non-consensual behavior immediately. This keeps the space safe for everyone who wants adult chat on their own terms.',
            ],
            bullets: [
              'Confirm 18+ before matching',
              'Allow camera and microphone',
              'Adult content with mutual consent',
              'Skip anytime with Next',
              'Report abuse for safety',
            ],
            links: [
              { href: '/', label: 'Start matching now' },
              { href: '/safety', label: 'Safety guidelines' },
            ],
          },
          {
            title: 'Popular searches for Omegle 18+ alternatives',
            paragraphs: [
              'Users also search Omegle 18+, 18+ Omegle, Omegle adult, adult Omegle, and Omegle 18. All these searches lead to the same experience: free 18+ random video chat.',
              'Other related searches include adult video chat, NSFW video chat, adult chat, intimate chat, and 18+ video chat. Parvah covers all these intents with strict age verification.',
            ],
            bullets: [
              'Omegle 18+',
              '18+ Omegle',
              'Adult Omegle',
              'NSFW video chat',
              'Adult video chat',
            ],
            links: [
              { href: '/nsfw-omegle', label: 'NSFW Omegle alternative' },
              { href: '/adult-video-chat', label: 'Adult video chat' },
              { href: '/video-chat-18', label: 'Video chat 18+' },
            ],
          },
        ]}
        faqs={faqs}
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
