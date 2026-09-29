import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Omegle Alternative India — Free Random Video Chat (No App)';
const description =
  'Best Omegle alternative in India for free random video chat — no signup, no Play Store app. Works in Chrome on Android and mobile data. Adults 18+ only.';

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${SITE_URL}/omegle-alternative-india` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/omegle-alternative-india`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Omegle alternative India — free random video chat' }],
    locale: 'en_IN',
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
    q: 'Is there a free Omegle alternative in India with no app?',
    a: 'Yes. Parvah is a browser Omegle alternative for India — open Chrome, confirm 18+, allow camera, and start matching. No Play Store install.',
  },
  {
    q: 'Does random video chat work on Jio or Airtel data?',
    a: 'Yes on modern mobile browsers. Wi‑Fi is usually more stable than congested 4G/5G. Close other video apps before matching.',
  },
  {
    q: 'Do I need English to use this Omegle alternative in India?',
    a: 'No. Matching is random worldwide. Many chats are in English; some people switch languages when both agree. There is no language filter.',
  },
  {
    q: 'Is this for adults only in India?',
    a: 'Yes. Parvah is 18+ only. Underage users are not allowed. Leave and report if someone seems under 18.',
  },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ title, description, url: `${SITE_URL}/omegle-alternative-india` }),
  buildFaqSchema(faqs),
]);

export default function OmegleAlternativeIndiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Omegle Alternative India · 18+"
        title="Omegle Alternative India — Free Random Video Chat, No App"
        description={description}
        highlights={[
          { title: 'No Play Store needed', desc: 'Chrome or any modern Android browser is enough — no APK.' },
          { title: 'Works on Indian mobile data', desc: 'Start on Jio, Airtel, or Wi‑Fi. Allow camera once, then match.' },
          { title: 'Free Omegle-style matching', desc: '1-on-1 strangers, Next anytime, no signup wall.' },
          { title: 'Evening peak friendly', desc: 'India evening hours often overlap with more global chats.' },
          { title: 'Adults 18+ only', desc: 'Age gate before chat. Report tools stay in the session.' },
          { title: 'No gender guarantee', desc: 'The queue is random. Skip until the conversation fits.' },
        ]}
        comparison={{
          title: 'Omegle vs browser Omegle alternative in India',
          intro:
            'Omegle is gone. In India most people want the same thing on a phone: free random video chat without another app install.',
          headers: ['Need', 'Old Omegle habit', 'Parvah in India'],
          rows: [
            ['Install', 'Desktop site / later apps', 'Browser only — no Play Store'],
            ['Signup', 'None for basic chat', 'None for basic matching'],
            ['Network', 'Home broadband era', 'Works on phone Wi‑Fi and mobile data'],
            ['Age rule', 'Inconsistent', 'Clear 18+ age gate'],
            ['Cost', 'Free basic chat', 'Free matching — no credits to start'],
          ],
        }}
        sections={[
          {
            title: 'Why Indians search “Omegle alternative India”',
            paragraphs: [
              'After Omegle shut down, searchers in India kept looking for free random video chat that opens in Chrome — not another heavy APK. “Omegle alternative India”, “Omegle India”, and “random video chat India” are the same intent: strangers on webcam, skip button, no account.',
              'Parvah is built for that browser habit. Confirm you are 18+, allow the camera, and match. Gender and city are not filtered. Evening IST often feels busier because more adults are online worldwide.',
            ],
            bullets: [
              'No signup and no app download',
              'Works on mid-range Android phones in Chrome',
              'Free 1-on-1 random matching',
              'Skip and report in every session',
            ],
            links: [
              { href: '/', label: 'Start matching now' },
              { href: '/omegle-alternative', label: 'Global Omegle alternative' },
              { href: '/random-video-chat', label: 'Random video chat' },
            ],
          },
          {
            title: 'Mobile tips for India',
            paragraphs: [
              'Use front lighting so people stay on the call. Prefer Wi‑Fi when the tower is crowded. If the camera stays black, close WhatsApp video or Instagram first — they lock the webcam on many phones.',
              'Do not share your phone number, UPI ID, or home address on the first chat. Scam scripts are common on any random queue.',
            ],
            links: [
              { href: '/blog/browser-camera-permission-guide', label: 'Camera permission guide' },
              { href: '/safety', label: 'Safety guidelines' },
              { href: '/no-signup-video-chat', label: 'No signup video chat' },
            ],
          },
        ]}
        popularSearches={[
          { href: '/omegle-alternative', label: 'omegle alternative' },
          { href: '/omegle-alternative-usa', label: 'omegle alternative usa' },
          { href: '/omegle-alternative-uk', label: 'omegle alternative uk' },
          { href: '/free-webcam-chat', label: 'free webcam chat' },
          { href: '/talk-to-strangers', label: 'talk to strangers' },
          { href: '/video-chat-with-strangers', label: 'video chat with strangers' },
        ]}
        faqs={faqs}
        relatedLinks={[
          { href: '/', label: 'Start free chat' },
          { href: '/omegle-alternative', label: 'Omegle Alternative' },
          { href: '/omegle-alternative-usa', label: 'Omegle Alternative USA' },
          { href: '/omegle-alternative-uk', label: 'Omegle Alternative UK' },
          { href: '/ometv-alternative', label: 'OmeTV Alternative' },
          { href: '/blog/best-omegle-alternatives-2026', label: 'Best Omegle Alternatives 2026' },
        ]}
      />
    </>
  );
}
