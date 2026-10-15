import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Omegle Alternative Canada — Free Random Video Chat';
const description =
  'Omegle alternative in Canada for free random video chat with strangers — no signup, no app. Instant 1-on-1 webcam matching in Chrome or Safari. Adults 18+ only.';

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${SITE_URL}/omegle-alternative-canada` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/omegle-alternative-canada`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Omegle alternative Canada — free random video chat' }],
    locale: 'en_CA',
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
    q: 'Is there a free Omegle alternative in Canada?',
    a: 'Yes. Parvah offers free random video chat with strangers in the browser — no signup and no app. Adults 18+ only.',
  },
  {
    q: 'Does it work on Canadian iPhone and Android?',
    a: 'Yes in Safari or Chrome. Allow camera and microphone for parvah.online, then tap Start Matching. No App Store download.',
  },
  {
    q: 'Do I need an account in Canada?',
    a: 'No. Confirm you are 18+, allow camera and mic, and start matching.',
  },
  {
    q: 'Will I only match with people in Canada?',
    a: 'No. Matching is random and worldwide. Canadian evenings often feel active because they overlap with US night hours.',
  },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ title, description, url: `${SITE_URL}/omegle-alternative-canada` }),
  buildFaqSchema(faqs),
]);

export default function OmegleAlternativeCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Omegle Alternative Canada · 18+"
        title="Omegle Alternative Canada — Free Random Video Chat, No Signup"
        description={description}
        highlights={[
          { title: 'Built for Canadian searchers', desc: 'Omegle-style stranger chat after the shutdown — free, browser-first, adults only.' },
          { title: 'Works across Canada', desc: 'Use on home Wi‑Fi in any province — phone or desktop browser.' },
          { title: 'No account wall', desc: 'Confirm 18+, allow camera, match. Email is not required.' },
          { title: 'Peak with US evenings', desc: 'CA nights often overlap busy North American chat hours.' },
          { title: 'Skip and report', desc: 'Leave a bad match in one tap. Report abuse when needed.' },
          { title: 'Honest matching', desc: 'Random adults — not a paid cam catalog or gender guarantee.' },
        ]}
        comparison={{
          title: 'Omegle vs this Canada Omegle alternative',
          intro:
            'Canadians still search for Omegle. What they want is free stranger video chat that opens in a normal browser tab.',
          headers: ['Feature', 'Classic Omegle', 'Parvah (Canada)'],
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
            title: 'Why Canadians still search “Omegle alternative Canada”',
            paragraphs: [
              'Omegle closed in 2023. Canadian users kept looking for the same habit: open a site, meet a stranger, hit Next — without installing another dating app or buying credits.',
              'Parvah keeps that browser flow. Matching is global and random — there is no Canada-only filter and no guaranteed gender. You get a free 1-on-1 adult queue with clear safety tools.',
            ],
            bullets: [
              'Free random video chat with strangers',
              'No signup and no download',
              'Works on Canadian mobile and home internet',
              'Consent-first flirty chat between adults is allowed',
            ],
            links: [
              { href: '/', label: 'Start matching now' },
              { href: '/omegle-alternative-usa', label: 'Omegle alternative USA' },
              { href: '/omegle-alternative-uk', label: 'Omegle alternative UK' },
            ],
          },
          {
            title: 'Safety notes for users in Canada',
            paragraphs: [
              'Treat the first chat as public. Do not share your address, workplace, or payment apps. Meet offline only in a public place if you ever choose to meet at all.',
              'If someone asks for money, gift cards, or an off-site “verification” call, leave and report. Keep the conversation on the site until you trust the person.',
            ],
            links: [
              { href: '/safety', label: 'Safety guidelines' },
              { href: '/blog/how-to-stay-safe-on-video-chat-platforms', label: 'Video chat safety tips' },
              { href: '/adult-video-chat', label: 'Adult video chat' },
            ],
          },
        ]}
        popularSearches={[
          { href: '/omegle-alternative', label: 'omegle alternative' },
          { href: '/omegle-alternative-usa', label: 'omegle alternative usa' },
          { href: '/omegle-alternative-uk', label: 'omegle alternative uk' },
          { href: '/random-video-chat', label: 'random video chat' },
          { href: '/video-chat-with-strangers', label: 'video chat with strangers' },
          { href: '/free-webcam-chat', label: 'free webcam chat' },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/', label: 'Start free chat' },
          { href: '/omegle-alternative', label: 'Omegle Alternative' },
          { href: '/omegle-alternative-usa', label: 'Omegle Alternative USA' },
          { href: '/omegle-alternative-uk', label: 'Omegle Alternative UK' },
          { href: '/chatroulette-alternative', label: 'Chatroulette Alternative' },
          { href: '/blog/best-omegle-alternatives-2026', label: 'Best Omegle Alternatives 2026' },
        ]}
      />
    </>
  );
}
