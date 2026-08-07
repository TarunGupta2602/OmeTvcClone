import Link from 'next/link';
import FAQContent from './FAQContent';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

export const metadata = {
  title: 'FAQ — Video Chat Questions & Answers',
  description:
    'Answers about Parvah random video chat: pricing, safety, camera setup, WebRTC privacy, age requirements, and how to talk to strangers online free.',
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
  openGraph: {
    title: 'FAQ — Video Chat Questions & Answers',
    description: 'Common questions about free random video chat, safety, and how Parvah works.',
    url: `${SITE_URL}/faq`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Video Chat FAQ' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ — Video Chat Questions & Answers',
    description: 'Common questions about free random video chat, safety, and how Parvah works.',
    images: ['/og-image.png'],
  },
};

const faqs = [
  {
    question: 'Is Parvah free to use?',
    answer: 'Yes, Parvah is completely free to use. No registration, credit card, or payment is required to start video chatting with strangers.',
    category: 'General',
  },
  {
    question: 'Do I need to register to use the platform?',
    answer: 'No registration is required. Simply visit the website, grant camera and microphone permissions, and click "Start Match" to begin chatting instantly.',
    category: 'General',
  },
  {
    question: 'Is Parvah safe to use?',
    answer: 'Parvah uses an age gate on first visit and a report button during chats. Always exercise caution, never share personal information, and use Next to skip uncomfortable conversations.',
    category: 'Safety',
  },
  {
    question: 'What are the age requirements?',
    answer: 'Parvah is strictly for users aged 18 and older. Minors are prohibited from using the platform. An age confirmation gate is shown before chatting; if you believe someone is underage, report them and email safety@parvah.online.',
    category: 'Safety',
  },
  {
    question: 'Can I use Parvah on mobile?',
    answer: 'Yes, Parvah works on all devices including smartphones, tablets, and desktop computers. The platform is optimized for both iOS and Android browsers.',
    category: 'Technical',
  },
  {
    question: 'How do I report inappropriate behavior?',
    answer: 'Click the Report button during an active chat to block that peer and skip to a new match. Report details are not stored on our servers. For serious violations, email safety@parvah.online with as much detail as you can.',
    category: 'Safety',
  },
  {
    question: 'Are video chats recorded or stored?',
    answer: 'No. All video and audio streams use peer-to-peer WebRTC technology, meaning they travel directly between users\' browsers. We do not record, store, or monitor video content.',
    category: 'Privacy',
  },
  {
    question: 'Can I choose who I match with?',
    answer: 'Matches are random to ensure equal opportunities for all users. You can use the "Next" button to skip to a new stranger at any time.',
    category: 'General',
  },
  {
    question: 'What browsers are supported?',
    answer: 'Parvah works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version for the best experience.',
    category: 'Technical',
  },
  {
    question: 'Is my IP address visible to others?',
    answer: 'Parvah does not display your IP in the chat UI. Our signaling server uses connection metadata to pair you. Like most WebRTC apps, ICE negotiation can expose network addresses to the peer during connection setup. Do not share personal details on camera or in text.',
    category: 'Privacy',
  },
  {
    question: 'How does the matching algorithm work?',
    answer: 'Our matching system pairs users randomly based on availability. When you click "Start Match", our system finds another user who is also looking to chat and connects you instantly.',
    category: 'Technical',
  },
  {
    question: 'Can I use Parvah without a camera?',
    answer: 'A camera and microphone are required to start a match. After you join, you can mute your microphone or turn off your camera from the control bar, but starting without camera permission is not supported.',
    category: 'Technical',
  },
  {
    question: 'Does Parvah have accounts or bans?',
    answer: 'Parvah has no user accounts. Reporting blocks a peer for your current session and skips them. For serious abuse, email safety@parvah.online — we may restrict access at the network level when we can identify abusive traffic, but there is no account ban or appeal system.',
    category: 'Safety',
  },
  {
    question: 'How do I improve my video quality?',
    answer: 'Ensure you have a stable internet connection, good lighting, and a working webcam. Close other applications that might be using bandwidth, and use a modern browser for best results.',
    category: 'Technical',
  },
  {
    question: 'Can I chat with people from specific countries?',
    answer: 'Matches are random and not filtered by location. This allows you to meet people from all around the world, making the experience more diverse and interesting.',
    category: 'General',
  },
  {
    question: 'Is there a time limit on conversations?',
    answer: 'No, there is no time limit on conversations. You can chat as long as both parties want to continue. Simply click "Next" when you\'re ready to move on.',
    category: 'General',
  },
  {
    question: 'How do I delete my data?',
    answer: 'Since we don\'t store personal data or video content, there\'s nothing to delete. Your session data is automatically cleared when you leave the platform.',
    category: 'Privacy',
  },
  {
    question: 'Can I use Parvah for business purposes?',
    answer: 'Parvah is designed for personal social interactions. For business video conferencing, we recommend using dedicated business communication platforms.',
    category: 'General',
  },
  {
    question: 'What should I do if I encounter a bug?',
    answer: 'If you experience technical issues, try refreshing the page or using a different browser. If the problem persists, please contact our support team with details about the issue.',
    category: 'Technical',
  },
  {
    question: 'Are there any hidden fees or subscriptions?',
    answer: 'Absolutely not. Parvah is completely free with no hidden fees, subscriptions, or premium tiers. All features are available to every user at no cost.',
    category: 'General',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: 'FAQ - Parvah',
  description: 'Frequently asked questions about our free random video chat platform.',
  url: `${SITE_URL}/faq`,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-rose-50/30 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        {/* Soft Ambient Background Mesh */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-300/15 via-purple-300/15 to-rose-300/15 rounded-full blur-3xl pointer-events-none fixed" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-teal-300/10 via-emerald-300/10 to-cyan-300/10 rounded-full blur-3xl pointer-events-none fixed" />
        
        <div className="max-w-4xl mx-auto space-y-10 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest shadow-sm shadow-indigo-500/10 ring-1 ring-indigo-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Help Center
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600">
              Find answers to common questions about Parvah, safety, and how to use our platform.
            </p>
          </div>

          <FAQContent faqs={faqs} />

          {/* CTA Section */}
          <div className="p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-white shadow-2xl space-y-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-black">Still Have Questions?</h2>
            <p className="text-slate-100 text-sm max-w-xl mx-auto opacity-90">
              Can't find the answer you're looking for? Contact our support team for assistance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-2xl font-black text-sm text-slate-900 bg-white hover:bg-slate-100 shadow-xl transition-all hover:scale-105"
              >
                Contact Support
              </Link>
              <Link
                href="/safety"
                className="px-8 py-4 rounded-2xl font-bold text-sm text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all"
              >
                View Safety Guidelines
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
