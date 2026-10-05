import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Omegle Alternative USA — Free Random Video Chat Online';
const description =
  'Omegle alternative in the USA for free random video chat with strangers — no signup, no app. Instant 1-on-1 webcam matching in Chrome, Safari, or Edge. Adults 18+ only.';

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${SITE_URL}/omegle-alternative-usa` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/omegle-alternative-usa`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Omegle alternative USA — free random video chat' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.jpg'],
  },
};

const faqs = [
  {
    q: 'What is the best Omegle alternative in the USA?',
    a: 'Look for free random video chat, no signup, browser access, and a clear 18+ rule. Parvah is built for that — open the site and start matching.',
  },
  {
    q: 'Does it work on iPhone in the US?',
    a: 'Yes in Safari or Chrome. Allow camera and microphone for parvah.online, then tap Start Matching. No App Store download.',
  },
  {
    q: 'Is this Omegle alternative free in the United States?',
    a: 'Yes. Basic matching is free with no account. Confirm you are 18+ first.',
  },
  {
    q: 'Will I only match with people in the USA?',
    a: 'No. Matching is random and worldwide. US evening hours usually feel busier because more adults are online.',
  },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ title, description, url: `${SITE_URL}/omegle-alternative-usa` }),
  buildFaqSchema(faqs),
]);

export default function OmegleAlternativeUsaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Omegle Alternative USA · 18+"
        title="Omegle Alternative USA — Free Random Video Chat, No Signup"
        description={description}
        highlights={[
          { title: 'Built for US searchers', desc: 'Same Omegle-style thrill after the shutdown — free, browser-first, adults only.' },
          { title: 'iPhone and Android', desc: 'Safari, Chrome, Firefox, or Edge. No App Store or Play Store wall.' },
          { title: 'No account required', desc: 'Confirm 18+, allow camera, match. Email is not required.' },
          { title: 'Evening US hours', desc: 'Peak activity often lines up with US nights and weekends.' },
          { title: 'Skip and report', desc: 'Leave a bad match in one tap. Report abuse when needed.' },
          { title: 'Honest matching', desc: 'Random adults — not a paid show catalog or gender guarantee.' },
        ]}
        comparison={{
          title: 'Omegle vs this USA Omegle alternative',
          intro:
            'US users still search for Omegle every day. What they want is free stranger video chat that works in a modern browser.',
          headers: ['Feature', 'Classic Omegle', 'Parvah (USA)'],
          rows: [
            ['Status', 'Shut down 2023', 'Live free matching'],
            ['Signup', 'None for basic chat', 'None for basic matching'],
            ['Devices', 'Desktop-era web', 'Phone and desktop browsers'],
            ['Age gate', 'Weak in practice', 'Strict 18+ before chat'],
            ['Privacy model', 'Varied over time', 'WebRTC P2P when networks allow'],
          ],
        }}
        sections={[
          {
            title: 'Why “Omegle alternative USA” is still a real search',
            paragraphs: [
              'Omegle closed in 2023. Americans kept searching for a replacement that feels the same: open a URL, see a stranger, hit Next. App-only clones and credit walls broke that habit.',
              'Parvah keeps the browser flow. Matching is global and random — you will not get a USA-only filter, and we do not promise a specific gender. What you get is a free 1-on-1 queue with clear adult rules.',
            ],
            bullets: [
              'Free random video chat with strangers',
              'No signup and no download',
              'Works across US time zones in the browser',
              'Sexual content and nudity are not allowed',
            ],
            links: [
              { href: '/', label: 'Start matching now' },
              { href: '/omegle-alternative', label: 'Global Omegle alternative' },
              { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
            ],
          },
          {
            title: 'Safety notes for US users',
            paragraphs: [
              'Treat the first chat as public. Do not share your address, workplace, or cash-app handles. Meet offline only in a public place if you ever choose to meet at all.',
              'If someone asks for money, a gift card, or an off-platform “verification” call, leave and report. Keep the conversation on the site until you trust the person.',
            ],
            links: [
              { href: '/safety', label: 'Safety guidelines' },
              { href: '/blog/how-to-stay-safe-on-video-chat-platforms', label: 'Video chat safety tips' },
              { href: '/adult-video-chat', label: '18+ video chat' },
            ],
          },
        ]}
        popularSearches={[
          { href: '/omegle-alternative', label: 'omegle alternative' },
          { href: '/omegle-alternative-india', label: 'omegle alternative india' },
          { href: '/omegle-alternative-uk', label: 'omegle alternative uk' },
          { href: '/random-video-chat', label: 'random video chat' },
          { href: '/free-webcam-chat', label: 'free webcam chat' },
          { href: '/flirty-video-chat', label: 'friendly video chat' },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/', label: 'Start free chat' },
          { href: '/omegle-alternative', label: 'Omegle Alternative' },
          { href: '/omegle-alternative-india', label: 'Omegle Alternative India' },
          { href: '/omegle-alternative-uk', label: 'Omegle Alternative UK' },
          { href: '/chatroulette-alternative', label: 'Chatroulette Alternative' },
          { href: '/blog/best-omegle-alternatives-2026', label: 'Best Omegle Alternatives 2026' },
        ]}
      />
    </>
  );
}
