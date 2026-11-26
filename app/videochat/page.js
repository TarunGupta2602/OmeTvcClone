import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('videochat');

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ 
    title: 'Videochat Free — Random Video Chat No Signup', 
    description: 'Free videochat with strangers — no signup. Random 1-on-1 webcam matching, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    url: `${SITE_URL}/videochat` 
  }),
  buildFaqSchema([
    { q: 'Is videochat free?', a: 'Yes. Free matching with no signup for adults 18+.' },
    { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
    { q: 'Is this on mobile?', a: 'Yes. Works in mobile browsers with camera access.' },
  ]),
]);

export default function VideochatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Videochat · 18+"
        title="Videochat Free — Random 1-on-1 Video Chat"
        description="Free videochat with strangers — no signup. Random 1-on-1 webcam matching, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only."
        highlights={[
          { title: 'Random videochat', desc: 'Get paired with another adult for live 1-on-1 video chat.' },
          { title: 'No signup', desc: 'Confirm 18+ and start without an account.' },
          { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible.' },
          { title: 'Skip freely', desc: 'Next button lets you find a better match.' },
          { title: 'Desktop + mobile', desc: 'Works in modern browsers.' },
          { title: 'Free forever', desc: 'No credits for basic videochat.' },
        ]}
        sections={[
          {
            title: 'Free videochat in the browser',
            paragraphs: [
              'Videochat means live webcam conversation with strangers. Parvah offers free random matching with no signup.',
              'People search videochat, video chat, and free videochat. All lead to the same experience: 1-on-1 video with strangers.',
            ],
            bullets: [
              'Free videochat',
              'No signup required',
              'WebRTC peer-to-peer video',
              'Works on mobile and desktop',
            ],
            links: [
              { href: '/', label: 'Start videochat' },
              { href: '/random-video-chat', label: 'Random video chat' },
              { href: '/live-video-chat', label: 'Live video chat' },
            ],
          },
        ]}
        faqs={[
          { q: 'Is videochat free?', a: 'Yes. Free matching with no signup for adults 18+.' },
          { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
          { q: 'Is this on mobile?', a: 'Yes. Works in mobile browsers with camera access.' },
        ]}
        relatedLinks={[
          { href: '/random-video-chat', label: 'Random video chat' },
          { href: '/live-video-chat', label: 'Live video chat' },
          { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
          { href: '/adult-video-chat', label: 'Adult video chat' },
        ]}
      />
    </>
  );
}
