import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('nsfw-video-chat');

const faqs = [
  {
    q: 'Is NSFW video chat allowed?',
    a: 'Yes between consenting adults 18+. Non-consent and underage users are banned. NSFW content is never forced or guaranteed — it only happens when both adults agree.',
  },
  {
    q: 'Is NSFW video chat free?',
    a: 'Yes. Free matching with no signup. Confirm you are 18+ and start matching without credits or subscriptions.',
  },
  {
    q: 'Will every match want NSFW chat?',
    a: 'No. Read the room. Skip if they want normal conversation only. Some people want friendly chat, others want flirty or intimate conversation.',
  },
  {
    q: 'Is this safe?',
    a: 'Use Next/Report, hide personal details, and leave uncomfortable chats immediately. Never share your address, phone, or payment apps.',
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
    q: 'Is video private?',
    a: 'WebRTC peer-to-peer video when possible means streams are not archived on our servers. Still avoid sharing sensitive personal information.',
  },
  {
    q: 'What happens if someone is not interested?',
    a: 'Respect their boundary and skip. Non-consent is banned. Report harassment immediately.',
  },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ 
    title: 'NSFW Video Chat Free — Adult Webcam 18+', 
    description: 'Free NSFW video chat with strangers — no signup. Random 1-on-1 adult webcam matching, WebRTC privacy, and skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    url: `${SITE_URL}/nsfw-video-chat` 
  }),
  buildFaqSchema(faqs),
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
              'The key difference from other platforms is consent-first design. On Parvah, you and your match decide the tone together. If someone is not interested, respect that and use Next.',
            ],
            bullets: [
              'Free NSFW video chat',
              '18+ age verification',
              'Consent-first explicit chat',
              'WebRTC peer-to-peer video',
              'No signup or registration',
            ],
            links: [
              { href: '/', label: 'Start NSFW video chat' },
              { href: '/adult-video-chat', label: 'Adult video chat' },
              { href: '/nsfw-omegle', label: 'NSFW Omegle alternative' },
            ],
          },
          {
            title: 'How NSFW video chat works',
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
            title: 'Popular searches for NSFW video chat',
            paragraphs: [
              'Users also search NSFW video chat, adult video chat, porn chat, nude chat, and 18+ video chat. All these searches lead to the same experience: free 18+ random video chat.',
              'Other related searches include NSFW Omegle, Omegle NSFW, adult Omegle, and Omegle adult. Parvah covers all these intents with consent-first design.',
            ],
            bullets: [
              'NSFW video chat',
              'Adult video chat',
              'Porn chat',
              'Nude chat',
              '18+ video chat',
            ],
            links: [
              { href: '/nsfw-omegle', label: 'NSFW Omegle alternative' },
              { href: '/adult-video-chat', label: 'Adult video chat' },
              { href: '/omegle-adult', label: 'Omegle adult alternative' },
            ],
          },
          {
            title: 'NSFW video chat vs porn sites',
            paragraphs: [
              'NSFW video chat on Parvah is live conversation with real adults, not pre-recorded porn. The difference is interaction — you talk to real people in real time.',
              'Unlike porn sites, Parvah does not sell performers or guarantee explicit content. What you get is honest: live adults, instant matching, and the freedom to flirt or be intimate when both people agree.',
            ],
            bullets: [
              'Live video with real adults',
              'Not pre-recorded porn',
              'No paid performers',
              'Consent-first explicit content',
              'Random matching',
            ],
            links: [
              { href: '/hot-video-chat', label: 'Hot video chat' },
              { href: '/dirty-talk-video-chat', label: 'Dirty talk video chat' },
            ],
          },
        ]}
        faqs={faqs}
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
