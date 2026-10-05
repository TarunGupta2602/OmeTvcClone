import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Omegle for adults 18+ Alternative 2026 — Free Random Video Chat (18+)';
const description =
  'Free Omegle for adults 18+ alternative for 18+ — random video chat with strangers, no signup, no app. Instant 1-on-1 webcam matching in your browser. Friendly or friendly chats welcome between consenting adults.';

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
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Omegle for adults 18+ alternative — free random video chat 18+' }],
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
    a: 'Parvah is a free Omegle alternative. Omegle shut down in 2023. This page is random 1-on-1 video chat in the browser: no signup, no app, adults 18+ only, with Next to skip and Report for abuse.',
  },
  {
    q: 'Is this Omegle for adults 18+?',
    a: 'Yes. People searching “Omegle for adults 18+” or “Omegle adult” land here. It is free 18+ random video chat, not a paid cam site, and it does not guarantee who you will meet.',
  },
  {
    q: 'Is there an 18+ Omegle?',
    a: 'Omegle is closed. This 18+ Omegle alternative lets adults start free random video chat with no signup. Minors are banned. Confirm your age, allow the camera, and match 1-on-1.',
  },
  {
    q: 'Is this an Omegle for adults 18+ alternative?',
    a: 'Yes — it is for adults 18+ only. Consenting adults can have friendly conversations. Non-consent, underage users, and illegal content are banned. Use Skip or Report anytime.',
  },
  {
    q: 'Is Omegle coming back in 2026?',
    a: 'Omegle shut down permanently in 2023. People searching “Omegle 2026”, “Omegle for adults 18+”, or “what is the new Omegle” usually want a free random video chat replacement in the browser.',
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
    q: 'Is sexual content allowed?',
    a: 'No. This is random video chat for conversation. Sexual content, nudity, underage users, and harassment are not allowed. Use Skip or Report anytime.',
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
        title="Free Omegle Alternative — No Signup Random Video Chat (18+)"
        description={description}
        highlights={[
          { title: 'No registration', desc: 'Start instantly — no email, username, or password.' },
          { title: 'Omegle for adults 18+ energy', desc: '1-on-1 random matching like classic Omegle — rebuilt for modern browsers, 18+ only.' },
          { title: 'Works on phones', desc: 'Popular with users in India and worldwide who want no-app video chat.' },
          { title: 'WebRTC privacy', desc: 'Peer-to-peer video when networks allow — streams are not archived on our servers.' },
          { title: 'Safety built in', desc: '18+ age gate, report button, and skip anytime.' },
          { title: '100% free matching', desc: 'No credits, no premium unlock to meet strangers.' },
        ]}
        comparison={{
          title: 'Classic Omegle vs this free Omegle alternative',
          intro:
            'Omegle shut down in 2023. This page is for people who still want free random video chat with strangers in a browser — no signup, 18+ only.',
          headers: ['Feature', 'Classic Omegle', 'Parvah (this page)'],
          rows: [
            ['Status', 'Permanently closed', 'Live browser matching'],
            ['Signup', 'No account for basic chat', 'No signup for basic matching'],
            ['Access', 'Desktop-era web', 'Desktop and mobile browser'],
            ['Age gate', 'Inconsistent in practice', 'Adults 18+ only'],
            ['Skip / report', 'Skip existed; tools varied', 'Next + Report in the session'],
            ['Video', 'Flash then WebRTC era', 'WebRTC peer-to-peer when networks allow'],
          ],
        }}
        sections={[
          {
            title: 'Why people search for an Omegle for adults 18+ alternative in 2026',
            paragraphs: [
              'Omegle closed, but search demand never left. Queries like “Omegle alternative 2026”, “Omegle for adults 18+”, “omegle adults”, and “what is the new Omegle” all point to the same need: free random video chat with strangers without another heavy app.',
              'This Omegle alternative focuses on browser matching and no signup, so you can meet someone new in seconds. People 18 and older only.',
            ],
            bullets: [
              'Free random video chat with strangers',
              '18+ age check before matching',
              'No signup / no app download',
              'Skip and report controls',
            ],
            links: [
              { href: '/', label: 'Start matching now' },
              { href: '/blog/best-omegle-alternatives-2026', label: 'Best Omegle alternatives 2026' },
              { href: '/omegle-alternative-india', label: 'Omegle alternative India' },
              { href: '/random-video-chat', label: 'Random video chat' },
            ],
          },
          {
            title: 'Omegle alternative by country',
            paragraphs: [
              'Search demand splits by country. If you want the same free browser chat with local tips for mobile networks and peak hours, open the page for your region.',
              'Matching stays global and random on every page — country pages explain how to start, not a fake local-only filter.',
            ],
            links: [
              { href: '/omegle-alternative-india', label: 'Omegle alternative India' },
              { href: '/omegle-alternative-usa', label: 'Omegle alternative USA' },
              { href: '/omegle-alternative-uk', label: 'Omegle alternative UK' },
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
          { href: '/adult-video-chat', label: '18+ video chat' },
          { href: '/random-video-chat', label: 'random video chat' },
          { href: '/omegle-alternative-india', label: 'omegle alternative india' },
          { href: '/omegle-alternative-usa', label: 'omegle alternative usa' },
          { href: '/omegle-alternative-uk', label: 'omegle alternative uk' },
          { href: '/talk-to-strangers', label: 'talk to strangers' },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/', label: 'Start free chat' },
          { href: '/omegle-alternative-india', label: 'Omegle Alternative India' },
          { href: '/omegle-alternative-usa', label: 'Omegle Alternative USA' },
          { href: '/omegle-alternative-uk', label: 'Omegle Alternative UK' },
          { href: '/adult-video-chat', label: '18+ video chat' },
          { href: '/random-video-chat', label: 'Random Video Chat' },
          { href: '/ometv-alternative', label: 'OmeTV Alternative' },
          { href: '/blog/best-omegle-alternatives-2026', label: 'Best Omegle Alternatives 2026' },
        ]}
      />
    </>
  );
}
