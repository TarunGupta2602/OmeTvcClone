import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, buildBreadcrumbSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Adult Omegle Alternative (18+) — Free, No Signup | Parvah';
const description =
  'Looking for an Omegle alternative? Parvah is a free 18+ browser video chat: no signup, no app, 1-on-1 matching, report tools.';

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
    a: 'Parvah is a free Omegle alternative. Omegle shut down in 2023. This page is random 1-on-1 video chat in the browser: no signup, no app, adults 18+ only, with Next to skip and Report for abuse.',
  },
  {
    q: 'Is Omegle coming back in 2026?',
    a: 'Omegle shut down permanently in 2023. People searching "Omegle 2026" or "what is the new Omegle" usually want a free random video chat replacement in the browser.',
  },
  {
    q: 'Do I need to sign up for this Omegle alternative?',
    a: 'No. Confirm you are 18+, allow camera access, and click Start Matching — no email or account.',
  },
  {
    q: 'Does it work on mobile?',
    a: 'Yes. Use Chrome or another modern mobile browser on Wi‑Fi or data. Allow camera and mic — no Play Store app required.',
  },
  {
    q: 'Is flirty or adult chat allowed?',
    a: 'Yes between consenting adults 18+. Non-consent, underage users, and illegal content are banned.',
  },
  {
    q: 'What if someone is inappropriate?',
    a: 'Hit Next immediately. You do not owe anyone an explanation. If the behavior violates the rules, use the report button. The platform is for consenting adults only.',
  },
];

const url = `${SITE_URL}/omegle-alternative`;
const breadcrumbs = [
  { name: 'Home', url: SITE_URL },
  { name: title, url },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ title, description, url }),
  buildBreadcrumbSchema({ items: breadcrumbs }),
  buildFaqSchema(faqs),
]);

export default function OmegleAlternativePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Omegle Alternative · Adults 18+"
        title="Omegle Alternative for Adults (18+): Free, No Signup"
        description={description}
        highlights={[
          { title: 'No registration', desc: 'Start instantly — no email, username, or password.' },
          { title: 'Adult Omegle energy', desc: '1-on-1 random matching like classic Omegle — rebuilt for modern browsers, 18+ only.' },
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
            title: 'Why people search for an adult Omegle alternative in 2026',
            paragraphs: [
              'Omegle closed, but search demand never left. Queries like "Omegle alternative 2026" or "what is the new Omegle" all point to the same need: free random video chat with strangers without another heavy app.',
              'This Omegle alternative focuses on browser matching, no signup, and clear adult rules — so you can talk, flirt, or just meet someone new in seconds. Adults 18+ only.',
              'Many people use random video chat for language practice, making friends, or casual conversation. The matching is random by design — you meet people you would never algorithmically select. That serendipity is why people keep coming back.',
            ],
            bullets: [
              'Free random video chat with strangers',
              'Adult / flirty chat allowed between consenting 18+ users',
              'No signup / no app download',
              'Skip and report controls',
            ],
            links: [
              { href: '/', label: 'Start matching now' },
              { href: '/random-video-chat', label: 'Random video chat' },
            ],
          },
          {
            title: 'What to say in your first Omegle-style chat',
            paragraphs: [
              'Most people skip within the first 10 seconds. A simple, friendly greeting makes a huge difference. Here are some openers that work:',
            ],
            bullets: [
              '"Hey — where are you chatting from, roughly?"',
              '"You caught me mid-evening. Good time or should I let you skip?"',
              '"Quick check — is my audio coming through okay?"',
              '"What brings you to random video chat today?"',
              '"I\'m new here — how does this usually go for you?"',
            ],
            links: [
              { href: '/blog/talk-to-strangers-video-chat', label: 'How to talk to strangers on video chat' },
              { href: '/blog/language-practice-video-chat', label: 'Language practice on video chat' },
            ],
          },
          {
            title: 'Tips for better video chat matches',
            paragraphs: [
              'Small setup changes make a big difference in how long people stay:',
            ],
            bullets: [
              'Lighting: Face a lamp or ring light. Avoid having a bright window behind you — it silhouettes your face.',
              'Camera angle: Position the camera at eye level. Looking down at the camera is unflattering.',
              'Background: A clean, neutral background works best. Cluttered rooms can be distracting.',
              'Audio: Use headphones if possible. It reduces echo and makes conversation clearer.',
              'Eye contact: Look at the camera, not yourself on the screen. It feels more natural to the other person.',
            ],
          },
          {
            title: 'OmeTV alternative',
            paragraphs: [
              'OmeTV is a popular random video chat platform that often requires an app download. Parvah offers a browser-based alternative that works without installing anything. Both platforms connect users randomly for 1-on-1 video conversations, but Parvah focuses on a no-signup experience in the browser.',
            ],
            links: [
              { href: '/ometv-alternative', label: 'OmeTV alternative' },
            ],
          },
          {
            title: 'Chatroulette and Emerald Chat alternatives',
            paragraphs: [
              'Chatroulette and Emerald Chat are other well-known random video chat platforms. Chatroulette was one of the original random video chat sites, while Emerald Chat has gained popularity with its modern interface. Parvah provides a similar random matching experience with a focus on browser-based access and no signup requirement.',
            ],
            links: [
              { href: '/chatroulette-alternative', label: 'Chatroulette alternative' },
              { href: '/emerald-chat-alternative', label: 'Emerald Chat alternative' },
            ],
          },
          {
            title: 'Last reviewed',
            paragraphs: ['28 November 2026'],
          },
        ]}
        faqs={faqs}
      />
    </>
  );
}
