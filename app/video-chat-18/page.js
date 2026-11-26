import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('video-chat-18');

const faqs = [
  {
    q: 'Is video chat 18+ free?',
    a: 'Yes. Free matching with no signup for adults 18+. Confirm you are 18+ and start matching without credits or subscriptions.',
  },
  {
    q: 'Is this 18+ only?',
    a: 'Yes. Strictly adults. Minors are banned. You must confirm you are 18+ before matching.',
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
    q: 'Is adult content allowed?',
    a: 'Yes between consenting adults. Non-consent is banned. Adult content is never forced or guaranteed — it only happens when both adults agree.',
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
    title: 'Video Chat 18+ Free — Adult Webcam No Signup', 
    description: 'Free video chat 18+ with strangers — no signup. Random 1-on-1 adult webcam matching, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    url: `${SITE_URL}/video-chat-18` 
  }),
  buildFaqSchema(faqs),
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
              'The key difference from other platforms is the strict age verification. On Parvah, everyone in the queue is verified as 18+ before matching. This creates a space where adults can chat freely without worrying about minors.',
            ],
            bullets: [
              'Free video chat 18+',
              '18+ age verification',
              'Random adult matching',
              'WebRTC peer-to-peer video',
              'No signup or registration',
            ],
            links: [
              { href: '/', label: 'Start video chat 18+' },
              { href: '/adult-video-chat', label: 'Adult video chat' },
              { href: '/omegle-18', label: 'Omegle 18+ alternative' },
            ],
          },
          {
            title: 'How 18+ video chat works',
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
            title: 'Popular searches for video chat 18+',
            paragraphs: [
              'Users also search video chat 18+, 18+ video chat, adult video chat, NSFW video chat, and 18+ webcam chat. All these searches lead to the same experience: free 18+ random video chat.',
              'Other related searches include Omegle 18+, 18+ Omegle, adult Omegle, and Omegle adult. Parvah covers all these intents with strict age verification.',
            ],
            bullets: [
              'Video chat 18+',
              '18+ video chat',
              'Adult video chat',
              'NSFW video chat',
              '18+ webcam chat',
            ],
            links: [
              { href: '/omegle-18', label: 'Omegle 18+ alternative' },
              { href: '/adult-video-chat', label: 'Adult video chat' },
              { href: '/nsfw-video-chat', label: 'NSFW video chat' },
            ],
          },
        ]}
        faqs={faqs}
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
