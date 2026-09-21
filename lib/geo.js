import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from './constants';

/** One quotable paragraph for AI Overviews, ChatGPT, Perplexity, and snippets. */
export const WHAT_IS_PARVAH =
  'Parvah is a free random video chat website for adults 18+. There is no signup and no app: open parvah.online, confirm your age, allow camera, and match 1-on-1 with another adult in the live queue. Matching is random. Parvah does not sell cam models and does not guarantee women, looks, or explicit content. Flirty talk is allowed only with consent.';

export const BRAND_SLOGAN = 'Free random video chat with strangers — no signup';

export const KEY_FACTS = [
  { label: 'Price', value: 'Free — no credits or subscription' },
  { label: 'Signup', value: 'None — no account or email' },
  { label: 'Age', value: '18+ only' },
  { label: 'Matching', value: 'Random 1-on-1 adults' },
  { label: 'Girls guaranteed', value: 'No — skip until the vibe fits' },
  { label: 'App', value: 'No download — browser only' },
  { label: 'Video storage', value: 'We do not record or archive chats' },
];

export const HOW_TO_START = [
  {
    name: 'Confirm you are 18+',
    text: 'Pass the age gate. Parvah is strictly for adults. Minors are banned.',
  },
  {
    name: 'Allow camera and microphone',
    text: 'Grant browser permissions so live WebRTC video can start.',
  },
  {
    name: 'Click Start Matching',
    text: 'Join the live queue. You are paired with another available adult.',
  },
  {
    name: 'Talk, skip, or report',
    text: 'Chat as long as you both want. Use Next to skip or Report for abuse.',
  },
];

export const HOW_TO_START_LINES = HOW_TO_START.map((step) => step.text);

/** Homepage FAQs — keep visible copy and FAQPage JSON-LD identical. */
export const HOME_FAQS = [
  {
    q: 'What is Parvah?',
    a: WHAT_IS_PARVAH,
  },
  {
    q: 'Is random video chat with strangers free?',
    a: 'Yes. Random video chat on Parvah is completely free — no registration, credits, or subscription required.',
  },
  {
    q: 'Do I need to sign up to video chat with strangers?',
    a: 'No. Confirm you are 18+, allow camera access, and click Start Matching. No email or account needed.',
  },
  {
    q: 'Is Parvah a good Omegle alternative?',
    a: 'Yes. Omegle shut down in 2023. Parvah is a free browser Omegle alternative with random 1-on-1 matching, an 18+ age gate, skip/report tools, and peer-to-peer WebRTC video.',
  },
  {
    q: 'Will I always match with girls?',
    a: 'No. Matches are random adults in the live queue. Parvah is not a cam-model catalog and does not guarantee gender, looks, or explicit content. Skip until you find a mutual vibe.',
  },
  {
    q: 'Is flirty or intimate chat allowed?',
    a: 'Yes, between consenting adults 18+. Non-consent, underage users, and illegal content are banned.',
  },
  {
    q: 'Do I need to download an app?',
    a: 'No. Use Chrome, Safari, Firefox, or Edge on desktop or mobile — allow camera access and start matching in the browser.',
  },
];

export const KNOWS_ABOUT = [
  'Random video chat',
  'Video chat with strangers',
  'Omegle alternative',
  'OmeTV alternative',
  'Adult video chat',
  'Free webcam chat',
  'No signup video chat',
];

export const FEATURE_LIST = [
  'Free random 1-on-1 video matching',
  'No signup or account',
  'Adults 18+ age gate',
  'Skip and report controls',
  'Peer-to-peer WebRTC video',
  'Works in mobile and desktop browsers',
];

export const LLM_PAGES = [
  { href: '/', title: 'Home', blurb: 'Start free random video chat — no signup, 18+.' },
  { href: '/random-video-chat', title: 'Random video chat', blurb: 'How free random webcam matching works.' },
  { href: '/video-chat-with-strangers', title: 'Video chat with strangers', blurb: 'Instant 1-on-1 stranger video chat.' },
  { href: '/omegle-alternative', title: 'Omegle alternative', blurb: 'Free adult Omegle alternative after Omegle shut down in 2023.' },
  { href: '/ometv-alternative', title: 'OmeTV alternative', blurb: 'Browser OmeTV alternative with no app required.' },
  { href: '/chat-with-girls', title: 'Chat with girls', blurb: 'Random adult matching — gender is not guaranteed.' },
  { href: '/video-chat-with-girls', title: 'Video chat with girls', blurb: 'Live webcam chat; skip until the vibe fits.' },
  { href: '/flirty-video-chat', title: 'Flirty video chat', blurb: 'Consent-first flirty 1-on-1 chat for adults.' },
  { href: '/hot-video-chat', title: 'Hot video chat', blurb: 'Free hot webcam chat between consenting adults.' },
  { href: '/adult-video-chat', title: 'Adult video chat', blurb: '18+ random video chat with clear consent rules.' },
  { href: '/no-signup-video-chat', title: 'No signup video chat', blurb: 'Start matching without an account.' },
  { href: '/faq', title: 'FAQ', blurb: 'Direct answers about price, safety, matching, and privacy.' },
  { href: '/safety', title: 'Safety', blurb: 'Age gate, report tools, and community rules.' },
  { href: '/about', title: 'About', blurb: 'What Parvah is and how matching works.' },
  { href: '/blog/best-omegle-alternatives-2026', title: 'Best Omegle alternatives 2026', blurb: 'Guide to free Omegle-style video chat sites.' },
  { href: '/blog/how-to-use-parvah', title: 'How to use Parvah', blurb: 'Step-by-step start guide.' },
];

export function buildLlmsTxt() {
  const facts = KEY_FACTS.map((f) => `- ${f.label}: ${f.value}`).join('\n');
  const pages = LLM_PAGES.map(
    (p) => `- [${p.title}](${SITE_URL}${p.href}): ${p.blurb}`,
  ).join('\n');

  return `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

${WHAT_IS_PARVAH}

Official site: ${SITE_URL}

## Key facts

${facts}

## How to start

${HOW_TO_START.map((s, i) => `${i + 1}. ${s.name}: ${s.text}`).join('\n')}

## What Parvah is not

- Not a paid cam-girl catalog
- Not a dating app with profiles
- Not a guarantee you will match with women
- Not a site for anyone under 18

## Pages

${pages}

## Optional

- Contact: ${SITE_URL}/contact
- Terms: ${SITE_URL}/terms
- Privacy: ${SITE_URL}/privacy
`;
}
