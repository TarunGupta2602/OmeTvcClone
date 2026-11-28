import SeoLandingPage from '../components/SeoLandingPage';
import { buildFaqSchema, buildJsonLdGraph, buildWebPageSchema, buildBreadcrumbSchema, stringifyJsonLd } from '../../lib/seo';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

const title = 'Video Chat No Sign Up — Free 18+ Video Chat';
const description =
  'Video chat no sign up — free 18+ video chat in the browser. No email, no account, no app. Confirm your age, allow the camera, and match.';

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${SITE_URL}/no-signup-video-chat` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/no-signup-video-chat`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Parvah No Signup Video Chat' }],
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
    q: 'Is this video chat 18+ with no sign up?',
    a: 'Yes. Video chat no sign up here is free and 18+ only. Confirm your age, allow the camera, and start. No email and no account.',
  },
  {
    q: 'Can I video chat without creating an account?',
    a: 'Yes. Open the site, confirm you are 18+, allow camera access, and click Start Match.',
  },
  {
    q: 'Is free video chat with no registration safe?',
    a: 'No signup reduces account data, but you still protect yourself: avoid showing IDs, addresses, or workplace details, and use Report or Next when needed.',
  },
  {
    q: 'Why avoid signup for stranger chat?',
    a: 'Fewer accounts mean fewer passwords to leak and less long-term profile data tied to your email. You still follow safety rules and protect what you show on camera.',
  },
  {
    q: 'Does no signup video chat work on mobile?',
    a: 'Yes. Use Chrome, Safari, or another modern mobile browser. No app store install is required for basic matching.',
  },
  {
    q: 'Is no-signup chat free on Parvah?',
    a: 'Yes. There is no registration wall and no paid tier required for basic random matching.',
  },
];

const url = `${SITE_URL}/no-signup-video-chat`;
const breadcrumbs = [
  { name: 'Home', url: SITE_URL },
  { name: title, url },
];

const jsonLd = buildJsonLdGraph([
  buildWebPageSchema({ title, description, url }),
  buildBreadcrumbSchema({ items: breadcrumbs }),
  buildFaqSchema(faqs),
]);

export default function NoSignupVideoChatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }} />
      <SeoLandingPage
        badge="Video Chat No Sign Up · 18+"
        title="Video Chat No Sign Up — Free 18+ Video Chat"
        description={description}
        highlights={[
          { title: 'Zero Forms', desc: 'No email verification loops before your first match.' },
          { title: 'Instant Lobby', desc: 'Age gate, permissions, Start Match — that is the whole onboarding.' },
          { title: 'No account profile', desc: 'No email address, username, or password is needed to start basic matching.' },
          { title: 'Same Safety Tools', desc: 'Skip and report still work even without a username.' },
          { title: 'Works Everywhere', desc: 'Desktop and mobile browsers — no app store account required either.' },
          { title: 'Free Access', desc: 'Chat without buying credits to unlock strangers.' },
        ]}
        sections={[
          {
            title: 'What no-signup video chat means',
            paragraphs: [
              'No signup means you can start basic matching without creating a profile, username, email address, or password. Open Parvah in a supported browser, confirm you are 18+, allow camera and microphone access, and join the queue. No app is needed.',
              'It does not mean no technical information is processed or that you are anonymous to your match. A temporary connection is needed to place you in the queue, and the other person can see and hear what you choose to share. When finished, leave the chat and close the tab; there is no account profile to deactivate.',
            ],
            links: [
              { href: '/', label: 'Start video chat' },
              { href: '/random-video-chat', label: 'Random video chat' },
              { href: '/safety', label: 'Safety guidelines' },
            ],
          },
          {
            title: 'Information used to provide the service',
            paragraphs: [
              'The Privacy Policy lists temporary socket session IDs, room IDs and timestamps, plus IP address, browser type, operating system and WebRTC capability for matching and site operation. These are technical details, not a signup profile.',
              'Text messages are held temporarily in memory during a chat and discarded at disconnect. The policy says report details are not stored on the servers. Essential local storage supports age confirmation and cookie consent; optional analytics load only if you accept the banner. Read the Privacy Policy for details.',
            ],
            bullets: [
              'No account, username, email, or password is needed for basic matching.',
              'Temporary connection and technical details operate the service.',
              'Optional analytics depend on your cookie choice.',
            ],
            links: [
              { href: '/privacy', label: 'Read the Privacy Policy' },
            ],
          },
          {
            title: 'Practical anonymity tips',
            paragraphs: [
              'A camera can reveal identifying details even without a profile. Use a neutral background and keep documents, workplace or school identifiers, and your address out of view. Do not share your full name, phone number, schedule, payment information, passwords, or one-time codes.',
              'Be wary of requests to move to another app or send money. Press Next if uncomfortable and Report rule-breaking behavior. Do not record or share another person’s video.',
            ],
            links: [{ href: '/safety', label: 'Safety guidelines' }],
          },
          {
            title: 'Browser and device requirements',
            paragraphs: [
              'Use a current WebRTC-capable browser such as Chrome, Safari, Firefox, or Edge, plus a working camera, microphone, and stable connection. On mobile, use the regular browser if an in-app browser does not show camera controls.',
              'Allow Parvah to use your camera and microphone when prompted. If you previously blocked access, change it in the browser’s site settings before trying again.',
            ],
          },
          {
            title: 'Camera and microphone troubleshooting',
            paragraphs: [
              'For a blank preview, allow camera access in the address bar or site settings, select the intended camera, and close other apps or tabs using it. Reload and grant permission again if prompted.',
              'For silent audio, check microphone permission, input selection, and operating-system mute or privacy settings. Headphones can reduce echo; confirm their microphone is selected.',
              'If it still fails, restart the browser, try another current browser, and check the connection. Stop other apps using the camera before retrying.',
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
