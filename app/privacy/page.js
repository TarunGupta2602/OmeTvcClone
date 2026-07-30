import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Parvah',
  description:
    'Read Parvah\'s Privacy Policy to understand how we protect your privacy, handle peer-to-peer WebRTC video streams, and safeguard personal data.',
  openGraph: {
    title: 'Privacy Policy | Parvah',
    description:
      'Learn how Parvah uses peer-to-peer WebRTC connections to ensure your video calls are private, end-to-end direct, and never stored on our servers.',
    url: 'https://parvah.online/privacy',
    siteName: 'Parvah',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Parvah Privacy Policy' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Parvah',
    description: 'Learn how Parvah safeguards your privacy with end-to-end peer-to-peer WebRTC video chat.',
    images: ['/og-image.png'],
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'July 30, 2026';

  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction & Scope',
      content: `Welcome to Parvah. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how our free WebRTC video chat platform processes information when you access or use our services. By using Parvah, you agree to the collection and use of information in accordance with this policy.`,
    },
    {
      id: 'webrtc-stream',
      title: '2. Peer-to-Peer (WebRTC) Video & Audio Privacy',
      content: `Our video and audio calls utilize WebRTC (Web Real-Time Communication) technology. Media streams are established directly peer-to-peer between your web browser and your chat partner's browser. Parvah signaling servers only facilitate the initial connection exchange (SDP offers/answers and ICE candidates). We DO NOT record, store, or monitor video or audio stream content on our servers.`,
    },
    {
      id: 'data-collected',
      title: '3. Information We Collect',
      content: `We collect minimal data required to provide and secure our matchmaking service:
- Connection Metadata: Temporary socket session IDs, room identifiers, and timestamps required for pairing.
- Technical Data: IP address, browser type, operating system, and WebRTC capability flags.
- Text Chat Logs: Messages sent in active text chat sessions are held transiently in memory during the match to deliver messages and are discarded upon disconnect.
- Safety & Moderation Reports: Reports submitted by users regarding inappropriate conduct, along with associated session metadata for moderation evaluation.`,
    },
    {
      id: 'cookies',
      title: '4. Cookies & Local Storage',
      content: `We use local browser storage and essential cookies solely for technical functionality, such as storing user interface preferences (e.g. audio/video mute states) and preventing spam or bot activity. We do not use third-party tracking cookies to target advertisements.`,
    },
    {
      id: 'data-use',
      title: '5. How We Use Information',
      content: `We use collected technical data to:
- Establish fast WebRTC peer-to-peer connections via signaling.
- Prevent spam, bot abuse, DDoS attacks, and unauthorized access.
- Enforce Community Guidelines and investigate reported safety violations.
- Maintain and improve system reliability and server stability.`,
    },
    {
      id: 'sharing',
      title: '6. Data Sharing & Third Parties',
      content: `We do NOT sell, rent, or trade your personal data to third parties under any circumstances. We may disclose technical information or IP records only if required by valid legal process, subpoena, or law enforcement agency investigating serious illegal activities.`,
    },
    {
      id: 'rights',
      title: '7. Your Privacy Rights (GDPR & CCPA)',
      content: `Depending on your location, you have rights under regulations such as GDPR or CCPA, including:
- The right to request information about data collected.
- The right to request erasure of session metadata or IP logs where applicable.
- The right to object to processing based on legitimate interest.
To exercise any privacy rights, contact privacy@parvah.app.`,
    },
    {
      id: 'security',
      title: '8. Security Measures',
      content: `We implement modern encryption standards (TLS/HTTPS for WebSockets and DTLS-SRTP for WebRTC P2P streams) to protect network traffic from interception. However, no internet transmission is 100% secure, and users are encouraged not to share sensitive personal information during video chats.`,
    },
  ];

  return (
    <main className="flex-1 bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-b border-slate-800 pb-8 space-y-3">
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-sm text-slate-400">
            Last Updated: <span className="text-slate-300 font-medium">{lastUpdated}</span>
          </p>
        </div>

        {/* Quick Highlights Alert */}
        <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-800/60 flex items-start gap-3">
          <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="text-xs text-indigo-200 leading-relaxed">
            <strong className="font-bold text-white">Key Takeaway:</strong> Parvah video and audio streams run directly peer-to-peer (P2P). Your video feed is transmitted directly to your chat partner's browser and is never recorded or stored on our servers.
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
              <h2 className="text-lg font-bold text-slate-100">{section.title}</h2>
              <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Contact Footer Note */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-white text-sm">Have Questions About Privacy?</h3>
            <p className="text-xs text-slate-400 mt-0.5">Contact our Data Privacy Team for assistance.</p>
          </div>
          <Link
            href="/contact"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl transition"
          >
            Contact Privacy Support
          </Link>
        </div>

      </div>
    </main>
  );
}
