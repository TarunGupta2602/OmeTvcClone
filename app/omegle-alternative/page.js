import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Adult Omegle Alternative 2026 — Free Random Video Chat (18+)';
const description =
  'Free adult Omegle alternative for 18+ — random video chat with strangers, no signup, no app. Instant 1-on-1 webcam matching in your browser. Flirty or friendly chats welcome between consenting adults.';

export const metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: { canonical: `${SITE_URL}/omegle-alternative` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/omegle-alternative`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Adult Omegle alternative — free random video chat 18+' }],
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
    q: 'What is the best free Omegle alternative in 2026?',
    a: 'A strong Omegle alternative offers free random video chat with strangers, no signup, browser access, an 18+ age gate, and skip/report tools. This site is built for that exact checklist.',
  },
  {
    q: 'Is this an adult Omegle alternative?',
    a: 'Yes — it is for adults 18+ only. Consenting adults can have flirty or adult conversations. Non-consent, underage users, and illegal content are banned. Use Skip or Report anytime.',
  },
  {
    q: 'Is Omegle coming back in 2026?',
    a: 'Omegle shut down permanently in 2023. People searching “Omegle 2026”, “adult Omegle”, or “what is the new Omegle” usually want a free random video chat replacement in the browser.',
  },
  {
    q: 'Do I need to sign up for this Omegle alternative?',
    a: 'No. Confirm you are 18+, allow camera access, and click Start Matching — no email or account.',
  },
  {
    q: 'Does it work on mobile in India?',
    a: 'Yes. Use Chrome or another modern mobile browser on Wi‑Fi or data. Allow camera and mic — no Play Store app required.',
  },
  {
    q: 'Is flirty or adult chat allowed?',
    a: 'Yes between consenting adults 18+. Non-consent, underage users, and illegal content are banned.',
  },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ title, description, url: `${SITE_URL}/omegle-alternative` }),
  buildFaqSchema(faqs),
]);

export default function OmegleAlternativePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Omegle Alternative · Adults 18+"
        title="Adult Omegle Alternative — Free Random Video Chat (No Signup)"
        description={description}
        highlights={[
          { title: 'No registration', desc: 'Start instantly — no email, username, or password.' },
          { title: 'Adult Omegle energy', desc: '1-on-1 random matching like classic Omegle — rebuilt for modern browsers, 18+ only.' },
          { title: 'Works on phones', desc: 'Popular with users in India and worldwide who want no-app video chat.' },
          { title: 'WebRTC privacy', desc: 'Peer-to-peer video when networks allow — streams are not archived on our servers.' },
          { title: 'Safety built in', desc: '18+ age gate, report button, and skip anytime.' },
          { title: '100% free matching', desc: 'No credits, no premium unlock to meet strangers.' },
        ]}
        sections={[
          {
            title: 'Why people search for an adult Omegle alternative in 2026',
            paragraphs: [
              'Omegle closed, but search demand never left. Queries like “Omegle alternative 2026”, “adult Omegle”, “omegle adults”, and “what is the new Omegle” all point to the same need: free random video chat with strangers without another heavy app.',
              'This Omegle alternative focuses on browser matching, no signup, and clear adult rules — so you can talk, flirt, or just meet someone new in seconds. Adults 18+ only.',
            ],
            bullets: [
              'Free random video chat with strangers',
              'Adult / flirty chat allowed between consenting 18+ users',
              'No signup / no app download',
              'Skip and report controls',
            ],
            links: [
              { href: '/blog/best-omegle-alternatives-2026', label: 'Best Omegle alternatives 2026' },
              { href: '/adult-video-chat', label: 'Adult video chat' },
              { href: '/random-video-chat', label: 'Random video chat' },
            ],
          },
          {
            title: 'Omegle alternative vs OmeTV vs Chatroulette',
            paragraphs: [
              'OmeTV is often app-first. Chatroulette is the classic roulette brand. If you want a lightweight browser Omegle alternative with no account wall, start here and compare from experience — not ads.',
              'Keep personal info private on every platform you try.',
            ],
            links: [
              { href: '/ometv-alternative', label: 'OmeTV alternative' },
              { href: '/chatroulette-alternative', label: 'Chatroulette alternative' },
              { href: '/no-signup-video-chat', label: 'No signup video chat' },
            ],
          },
        ]}
        popularSearches={[
          { href: '/adult-video-chat', label: 'adult video chat' },
          { href: '/random-video-chat', label: 'random video chat' },
          { href: '/talk-to-strangers', label: 'talk to strangers' },
          { href: '/hot-video-chat', label: 'hot video chat' },
          { href: '/flirty-video-chat', label: 'flirty video chat' },
          { href: '/live-video-chat', label: 'live video chat' },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/', label: 'Start free chat' },
          { href: '/adult-video-chat', label: 'Adult Video Chat' },
          { href: '/random-video-chat', label: 'Random Video Chat' },
          { href: '/ometv-alternative', label: 'OmeTV Alternative' },
          { href: '/chatroulette-alternative', label: 'Chatroulette Alternative' },
          { href: '/blog/best-omegle-alternatives-2026', label: 'Best Omegle Alternatives 2026' },
        ]}
      />
    </>
  );
}
