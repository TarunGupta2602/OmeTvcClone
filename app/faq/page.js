import Link from 'next/link';

export const metadata = {
  title: 'FAQ | Free Random Video Chat Questions & Answers',
  description: 'Frequently asked questions about our free random video chat platform. Learn how to use StrangerLive, safety tips, technical requirements, and account policies.',
  alternates: {
    canonical: 'https://parvah.online/faq',
  },
  openGraph: {
    title: 'FAQ | Free Random Video Chat Questions & Answers',
    description: 'Find answers to common questions about random video chat, safety, and platform features.',
    url: 'https://parvah.online/faq',
    siteName: 'StrangerLive',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Video Chat FAQ' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Free Random Video Chat Questions & Answers',
    description: 'Find answers to common questions about random video chat, safety, and platform features.',
    images: ['/og-image.png'],
  },
};

const faqs = [
  {
    question: 'Is StrangerLive free to use?',
    answer: 'Yes, StrangerLive is completely free to use. No registration, credit card, or payment is required to start video chatting with strangers.',
  },
  {
    question: 'Do I need to register to use the platform?',
    answer: 'No registration is required. Simply visit the website, grant camera and microphone permissions, and click "Start Match" to begin chatting instantly.',
  },
  {
    question: 'Is StrangerLive safe to use?',
    answer: 'We prioritize safety with strict community guidelines, automated moderation, and user reporting tools. However, as with any online platform, users should exercise caution and never share personal information.',
  },
  {
    question: 'What are the age requirements?',
    answer: 'StrangerLive is strictly for users aged 18 and older. Minors are prohibited from using the platform. We enforce this policy through automated systems and user reports.',
  },
  {
    question: 'Can I use StrangerLive on mobile?',
    answer: 'Yes, StrangerLive works on all devices including smartphones, tablets, and desktop computers. The platform is optimized for both iOS and Android browsers.',
  },
  {
    question: 'How do I report inappropriate behavior?',
    answer: 'Use the report button during or immediately after a chat session. Our moderation team reviews all reports and takes appropriate action including permanent bans for violations.',
  },
  {
    question: 'Are video chats recorded or stored?',
    answer: 'No. All video and audio streams use peer-to-peer WebRTC technology, meaning they travel directly between users\' browsers. We do not record, store, or monitor video content.',
  },
  {
    question: 'Can I choose who I match with?',
    answer: 'Matches are random to ensure equal opportunities for all users. You can use the "Next" button to skip to a new stranger at any time.',
  },
  {
    question: 'What browsers are supported?',
    answer: 'StrangerLive works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version for the best experience.',
  },
  {
    question: 'Is my IP address visible to others?',
    answer: 'No, your IP address is not shared with other users. Only our signaling server uses it temporarily to establish the peer-to-peer connection.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: 'FAQ - StrangerLive',
  description: 'Frequently asked questions about our free random video chat platform.',
  url: 'https://parvah.online/faq',
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
              Find answers to common questions about StrangerLive, safety, and how to use our platform.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group p-6 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-xl shadow-slate-300/50 ring-1 ring-slate-200/50"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

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
