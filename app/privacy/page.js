import Link from 'next/link';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'How Parvah protects your privacy with WebRTC peer-to-peer video chat. Learn what data we collect, cookie usage, and your rights when talking to strangers online.',
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  openGraph: {
    title: 'Privacy Policy | Parvah',
    description:
      'Parvah uses peer-to-peer WebRTC — video is not stored on our servers. Read our full privacy policy.',
    url: `${SITE_URL}/privacy`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Video Chat Privacy Policy' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Parvah',
    description: 'Parvah uses peer-to-peer WebRTC — video is not stored on our servers.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PrivacyPolicy',
  name: 'Privacy Policy - Parvah',
  description: 'Read our Privacy Policy to understand how we protect your privacy, handle peer-to-peer WebRTC video streams, and safeguard personal data.',
  url: `${SITE_URL}/privacy`,
  dateModified: '2026-08-07',
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'August 7, 2026';

  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction & Scope',
      content: `Welcome to Parvah. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how our free WebRTC video chat platform processes information when you access or use our services. By using Parvah, you agree to the collection and use of information in accordance with this policy.`,
    },
    {
      id: 'webrtc-stream',
      title: '2. Peer-to-Peer (WebRTC) Video & Audio Privacy',
      content: `Our video and audio calls utilize WebRTC (Web Real-Time Communication) technology. Media streams are established directly peer-to-peer between your web browser and your chat partner's browser whenever possible. Parvah signaling servers only facilitate the initial connection exchange (SDP offers/answers and ICE candidates). We DO NOT record, store, or monitor video or audio stream content on our servers. Note that WebRTC ICE negotiation can expose network addresses to the peer during connection setup.`,
    },
    {
      id: 'data-collected',
      title: '3. Information We Collect',
      content: `We collect minimal data required to provide and secure our matchmaking service:
- Connection Metadata: Temporary socket session IDs, room identifiers, and timestamps required for pairing.
- Technical Data: IP address, browser type, operating system, and WebRTC capability flags (used by the signaling server; not shown in the chat UI).
- Text Chat Logs: Messages sent in active text chat sessions are held transiently in memory during the match to deliver messages and are discarded upon disconnect.
- In-Chat Safety Actions: When you report a user, they are blocked and skipped for your session. We do not store report details on our servers.`,
    },
    {
      id: 'cookies',
      title: '4. Cookies & Local Storage',
      content: `We use essential local storage for UI preferences (e.g. age confirmation, cookie consent choice, mute states). Optional analytics via Google Tag Manager loads only if you click Accept on our cookie banner. If you Decline, analytics scripts are not loaded. You can clear site data in your browser to reset this choice. We do not sell your data or use third-party ad tracking cookies.`,
    },
    {
      id: 'data-use',
      title: '5. How We Use Information',
      content: `We use collected technical data to:
- Establish WebRTC peer-to-peer connections via signaling.
- Prevent spam, bot abuse, and unauthorized access (rate limits and session blocks).
- Maintain and improve system reliability.
- If you accept analytics, understand aggregate usage via Google Tag Manager.`,
    },
    {
      id: 'sharing',
      title: '6. Data Sharing & Third Parties',
      content: `We do NOT sell, rent, or trade your personal data to third parties under any circumstances. If you accept analytics, Google may process analytics events under their terms. We may disclose technical information or IP records only if required by valid legal process, subpoena, or law enforcement investigating serious illegal activities.`,
    },
    {
      id: 'rights',
      title: '7. Your Privacy Rights (GDPR & CCPA)',
      content: `Depending on your location, you have rights under regulations such as GDPR or CCPA, including:
- The right to request information about data collected.
- The right to request erasure of session metadata or IP logs where applicable.
- The right to object to processing based on legitimate interest, including declining analytics.
To exercise any privacy rights, contact privacy@parvah.online.`,
    },
    {
      id: 'security',
      title: '8. Security Measures',
      content: `We implement modern encryption standards (TLS/HTTPS for WebSockets and DTLS-SRTP for WebRTC P2P streams) to protect network traffic from interception. However, no internet transmission is 100% secure, and users are encouraged not to share sensitive personal information during video chats.`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1 bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-b border-slate-200/80 pb-8 space-y-3">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">Privacy Policy</h1>
          <p className="text-sm text-slate-500">
            Last Updated: <span className="text-slate-700 font-semibold">{lastUpdated}</span>
          </p>
        </div>

        {/* Quick Highlights Alert */}
        <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-200/80 flex items-start gap-3 shadow-xs">
          <svg className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="text-xs text-slate-700 leading-relaxed">
            <strong className="font-extrabold text-slate-900">Key Takeaway:</strong> Parvah video and audio streams run directly peer-to-peer (P2P). Your video feed is transmitted directly to your chat partner's browser and is never recorded or stored on our servers.
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 space-y-3">
              <h2 className="text-lg font-extrabold text-slate-900">{section.title}</h2>
              <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Contact Footer Note */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-extrabold text-slate-900 text-sm">Have Questions About Privacy?</h3>
            <p className="text-xs text-slate-500 mt-0.5">Contact our Data Privacy Team for assistance.</p>
          </div>
          <Link
            href="/contact"
            className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition"
          >
            Contact Privacy Support
          </Link>
        </div>

      </div>
    </main>
    </>
  );
}
