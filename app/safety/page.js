import Link from 'next/link';

export const metadata = {
  title: 'Community Guidelines & Safety | Free Random Video Chat',
  description:
    'Read our zero-tolerance safety rules, anti-harassment policies, 18+ requirement, and video chat safety tips to stay secure online when talking to strangers.',
  alternates: {
    canonical: 'https://parvah.online/safety',
  },
  openGraph: {
    title: 'Community Guidelines & Safety | Free Random Video Chat',
    description:
      'Explore the 5 Golden Rules of Conduct, user safety tips, and reporting workflows for a secure video chat experience with strangers.',
    url: 'https://parvah.online/safety',
    siteName: 'Parvah',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Video Chat Safety Guidelines' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community Guidelines & Safety | Free Random Video Chat',
    description: 'Explore zero-tolerance community safety guidelines and user reporting for random video chat.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SafetyPage',
  name: 'Community Guidelines & Safety - Parvah',
  description: 'Read our zero-tolerance safety rules, anti-harassment policies, 18+ requirement, and video chat safety tips.',
  url: 'https://parvah.online/safety',
  publisher: {
    '@type': 'Organization',
    name: 'Parvah',
    url: 'https://parvah.online',
  },
};

export default function SafetyPage() {
  const rules = [
    {
      number: '01',
      title: 'Zero Tolerance for Nudity & Sexual Content',
      description:
        'Explicit sexual behavior, nudity, or inappropriate conduct is forbidden. Use the Report button during chat or contact safety@parvah.online. Violations may result in session termination and bans.',
      icon: (
        <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      severity: 'Instant Permanent Ban',
    },
    {
      number: '02',
      title: 'No Harassment, Hate Speech, or Bullying',
      description:
        'Discriminatory remarks based on race, ethnicity, religion, gender, sexual orientation, or disability are never tolerated. Treat every person you match with dignity and respect.',
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      severity: 'Zero Tolerance Enforcement',
    },
    {
      number: '03',
      title: 'Protect Your Personal Information',
      description:
        'Never share sensitive private details such as your full name, home address, phone number, financial information, passwords, or social security numbers with strangers.',
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      severity: 'Personal Safety Guardrail',
    },
    {
      number: '04',
      title: 'No Unauthorized Session Recording',
      description:
        'Recording, screenshotting, or re-broadcasting another user’s video stream without their explicit prior written consent violates privacy laws and will lead to legal escalation.',
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      severity: 'Legal & Terms Violation',
    },
    {
      number: '05',
      title: 'No Weapons, Drugs, or Illegal Content',
      description:
        'Displaying firearms, dangerous weapons, illicit substances, or engaging in illegal acts live on stream is strictly prohibited and immediately reported to appropriate law enforcement.',
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      severity: 'Strict Law Enforcement Reporting',
    },
  ];

  const tips = [
    'Check your background before turning on your camera (ensure private mail, family photos, or location details are out of view).',
    'Stay in control: Use the "Next" button immediately if a chat makes you feel uncomfortable or unsafe.',
    'Use built-in camera/mic toggles when taking a quick break or adjusting your environment.',
    'Report inappropriate conduct instantly using the report button during or immediately after the chat.',
    'Never click suspicious links sent in text chat by strangers.',
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-rose-50/30 text-slate-900 py-8 sm:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Soft Ambient Background Mesh */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-indigo-300/15 via-purple-300/15 to-rose-300/15 rounded-full blur-3xl pointer-events-none fixed" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-teal-300/10 via-emerald-300/10 to-cyan-300/10 rounded-full blur-3xl pointer-events-none fixed" />
      
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-14 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-rose-100 to-red-100 border border-rose-200/60 text-[10px] sm:text-xs font-semibold text-rose-700 shadow-sm shadow-rose-500/10 ring-1 ring-rose-500/20">
            🛡️ Trust & Safety Center
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
              Community Guidelines & Safety
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Our mission is to create a safe, enjoyable, and respectful video chat environment for everyone on Parvah. Please review our mandatory safety rules below.
          </p>
        </div>

        {/* 18+ Warning Banner */}
        <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-rose-50 via-white to-rose-50 border border-rose-200/60 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-xl shadow-rose-200/50 ring-1 ring-rose-200/50">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-rose-600 to-red-600 text-white font-black text-lg sm:text-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-rose-500/30 ring-2 ring-rose-500/20">
              18+
            </div>
            <div className="space-y-1">
              <h3 className="text-sm sm:text-base font-bold text-slate-900">Strict Adult Only Policy</h3>
              <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
                Parvah is exclusively for adults aged 18 and older. Minors are strictly prohibited. Accounts of minors will be suspended immediately.
              </p>
            </div>
          </div>
          <Link
            href="/terms"
            className="px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-[10px] sm:text-xs rounded-xl flex-shrink-0 transition shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 ring-2 ring-rose-500/20 hover:ring-rose-500/40"
          >
            Review Terms of Service
          </Link>
        </div>

        {/* Core Rules Section */}
        <div className="space-y-4 sm:space-y-6">
          <div className="border-b border-slate-200/60 pb-3 sm:pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">The 5 Golden Rules of Conduct</h2>
            <p className="text-[10px] sm:text-xs text-slate-500 mt-1">
              Violations are reviewed by our safety team. Use the Report button during chat.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {rules.map((rule) => (
              <div
                key={rule.number}
                className="p-4 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/60 hover:border-slate-300/60 hover:shadow-xl hover:shadow-indigo-500/10 transition flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 ring-1 ring-slate-200/50 hover:ring-indigo-500/20"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 flex items-center justify-center flex-shrink-0 shadow-md">
                    {rule.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] sm:text-xs font-mono text-indigo-600 font-bold">
                        Rule {rule.number}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-gradient-to-r from-rose-50 to-red-50 border border-rose-200/60 px-1.5 sm:px-2 py-0.5 rounded-md shadow-sm">
                        {rule.severity}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">{rule.title}</h3>
                    <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">{rule.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Tips Checklist */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/60 space-y-4 sm:space-y-6 shadow-xl shadow-slate-300/50 ring-1 ring-slate-200/50">
          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              💡 Essential Video Chat Safety Checklist
            </h2>
            <p className="text-[10px] sm:text-xs text-slate-500">Follow these best practices to ensure a secure online experience.</p>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {tips.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-slate-50 to-indigo-50/30 border border-slate-200/60 hover:border-emerald-500/30 hover:shadow-md hover:shadow-emerald-500/10 transition">
                <span className="text-emerald-600 font-bold text-xs sm:text-sm">✓</span>
                <span className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reporting Workflow */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-50 via-white to-purple-50 border border-indigo-200/60 space-y-4 sm:space-y-6 shadow-xl shadow-indigo-200/50 ring-1 ring-indigo-200/50">
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">How Reporting & Enforcement Works</h2>
            <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
              When you submit a report during a chat session, we log session metadata (room ID, timestamp, reason) for manual review by our safety team. Serious violations may result in bans.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-[10px] sm:text-xs rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition ring-2 ring-indigo-500/20 hover:ring-indigo-500/40"
            >
              Report a Violation / Safety Inquiry
            </Link>
            <Link
              href="/"
              className="px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 text-slate-700 font-semibold text-[10px] sm:text-xs rounded-xl transition shadow-md hover:shadow-lg ring-1 ring-slate-300/30"
            >
              Return to Video Chat
            </Link>
          </div>
        </div>

      </div>
    </main>
    </>
  );
}
