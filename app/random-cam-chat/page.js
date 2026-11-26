import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { buildSeoLandingMetadata } from '../../lib/seoLandings';

export const metadata = buildSeoLandingMetadata('random-cam-chat');

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ 
    title: 'Random Cam Chat Free — No Signup Webcam', 
    description: 'Free random cam chat with strangers — no signup. Instant 1-on-1 webcam matching, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    url: `${SITE_URL}/random-cam-chat` 
  }),
  buildFaqSchema([
    { q: 'Is random cam chat free?', a: 'Yes. Free matching with no signup for adults 18+.' },
    { q: 'Do I need a webcam?', a: 'Yes. Allow camera access when your browser asks.' },
    { q: 'Is this on mobile?', a: 'Yes. Works in mobile browsers with camera access.' },
  ]),
]);

export default function RandomCamChatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Random Cam Chat · 18+"
        title="Random Cam Chat Free — Live Webcam Matching"
        description="Free random cam chat with strangers — no signup. Instant 1-on-1 webcam matching, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only."
        highlights={[
          { title: 'Random webcam matching', desc: 'Get paired with another adult for live 1-on-1 cam chat.' },
          { title: 'No signup', desc: 'Confirm 18+ and start without an account.' },
          { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible — not archived on servers.' },
          { title: 'Skip freely', desc: 'Next button lets you find a better match.' },
          { title: 'Desktop + mobile', desc: 'Works in modern browsers.' },
          { title: 'Free forever', desc: 'No credits for basic matching.' },
        ]}
        sections={[
          {
            title: 'Free random cam chat in the browser',
            paragraphs: [
              'Random cam chat pairs you with another adult for live webcam conversation. No signup, no app — just confirm you are 18+ and start matching.',
              'People also search random cam chat free, random webcam chat, and free random cam chat. All lead to the same experience: live 1-on-1 video with strangers.',
            ],
            bullets: [
              'Free random cam chat',
              'No signup required',
              'WebRTC peer-to-peer video',
              'Works on mobile and desktop',
            ],
            links: [
              { href: '/', label: 'Start random cam chat' },
              { href: '/free-webcam-chat', label: 'Free webcam chat' },
              { href: '/random-video-chat', label: 'Random video chat' },
            ],
          },
        ]}
        faqs={[
          { q: 'Is random cam chat free?', a: 'Yes. Free matching with no signup for adults 18+.' },
          { q: 'Do I need a webcam?', a: 'Yes. Allow camera access when your browser asks.' },
          { q: 'Is this on mobile?', a: 'Yes. Works in mobile browsers with camera access.' },
        ]}
        relatedLinks={[
          { href: '/free-webcam-chat', label: 'Free webcam chat' },
          { href: '/random-video-chat', label: 'Random video chat' },
          { href: '/live-video-chat', label: 'Live video chat' },
          { href: '/adult-video-chat', label: 'Adult video chat' },
        ]}
      />
    </>
  );
}
