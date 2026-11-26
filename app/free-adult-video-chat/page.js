import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('free-adult-video-chat');

const faqs = [
  {
    q: 'Is adult video chat free?',
    a: 'Yes. Free matching with no signup for adults 18+. Confirm you are 18+ and start matching without credits or subscriptions.',
  },
  {
    q: 'Do I need to sign up?',
    a: 'No. Confirm age and start matching without an account. No email, no password, no profile — just instant matching.',
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
    q: 'Can I use this on mobile?',
    a: 'Yes. Works in modern mobile browsers on Wi-Fi or mobile data. Allow camera and microphone access — no app download required.',
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
    title: 'Free Adult Video Chat — No Signup 18+', 
    description: 'Free adult video chat with strangers — no signup. Random 1-on-1 webcam matching for adults 18+, WebRTC privacy, skip anytime. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    url: `${SITE_URL}/free-adult-video-chat` 
  }),
  buildFaqSchema(faqs),
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
              'The key difference from paid platforms is honesty. No credits, no subscriptions, no hidden fees — just free random matching with other adults.',
            ],
            bullets: [
              'Free adult video chat',
              'No signup or registration',
              '18+ age verification',
              'WebRTC peer-to-peer video',
              'No credits or subscriptions',
            ],
            links: [
              { href: '/', label: 'Start free adult video chat' },
              { href: '/adult-video-chat', label: 'Adult video chat' },
              { href: '/nsfw-video-chat', label: 'NSFW video chat' },
            ],
          },
          {
            title: 'How free adult video chat works',
            paragraphs: [
              'Open the site, confirm you are 18+, allow camera access, and click Start Matching. You are paired with another verified adult for a live 1-on-1 session.',
              'Because matching is free with no signup, you can chat as long as you want without worrying about credits or time limits.',
              'Report any harassment or non-consensual behavior immediately. This keeps the space safe for everyone who wants adult chat on their own terms.',
            ],
            bullets: [
              'Confirm 18+ before matching',
              'Allow camera and microphone',
              'No credits or subscriptions',
              'Skip anytime with Next',
              'Report abuse for safety',
            ],
            links: [
              { href: '/', label: 'Start matching now' },
              { href: '/safety', label: 'Safety guidelines' },
            ],
          },
          {
            title: 'Popular searches for free adult video chat',
            paragraphs: [
              'Users also search free adult video chat, adult video chat free, adult video chat no signup, and free adult webcam chat. All these searches lead to the same experience.',
              'Other related searches include adult video chat, NSFW video chat, porn chat, nude chat, and 18+ video chat. Parvah covers all these intents with free matching.',
            ],
            bullets: [
              'Free adult video chat',
              'Adult video chat free',
              'Adult video chat no signup',
              'Free adult webcam chat',
              '18+ video chat',
            ],
            links: [
              { href: '/adult-video-chat', label: 'Adult video chat' },
              { href: '/nsfw-video-chat', label: 'NSFW video chat' },
              { href: '/omegle-adult', label: 'Omegle adult alternative' },
            ],
          },
        ]}
        faqs={faqs}
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
