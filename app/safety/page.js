import Link from 'next/link';

export const metadata = {
  title: 'Community Guidelines & Safety | Parvah',
  description:
    'Read Parvah zero-tolerance safety rules, anti-harassment policies, 18+ requirement, and video chat safety tips to stay secure online.',
  openGraph: {
    title: 'Community Guidelines & Safety | Parvah',
    description:
      'Explore the 5 Golden Rules of Conduct on Parvah, user safety tips, and reporting workflows for a secure video chat experience.',
    url: 'https://parvah.online/safety',
    siteName: 'Parvah',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Parvah Safety Guidelines' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community Guidelines & Safety | Parvah',
    description: 'Explore Parvah zero-tolerance community safety guidelines and user reporting.',
    images: ['/og-image.png'],
  },
};

export default function SafetyPage() {
  const rules = [
    {
      number: '01',
      title: 'Zero Tolerance for Nudity & Sexual Content',
      description:
        'Explicit sexual behavior, nudity, or inappropriate attire is strictly forbidden. Automated filters and human moderators instantly issue permanent hardware and IP bans for violations.',
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
    <main className="flex-1 bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-400">
            🛡️ Trust & Safety Center
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Community Guidelines & Safety
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            Our mission is to create a safe, enjoyable, and respectful video chat environment for everyone on Parvah. Please review our mandatory safety rules below.
          </p>
        </div>

        {/* 18+ Warning Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-950/60 via-slate-900 to-rose-950/60 border border-rose-800/60 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white font-black text-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              18+
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">Strict Adult Only Policy</h3>
              <p className="text-xs text-rose-200/90 leading-relaxed">
                Parvah is exclusively for adults aged 18 and older. Minors are strictly prohibited. Accounts of minors will be suspended immediately.
              </p>
            </div>
          </div>
          <Link
            href="/terms"
            className="px-4 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl flex-shrink-0 transition"
          >
            Review Terms of Service
          </Link>
        </div>

        {/* Core Rules Section */}
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white">The 5 Golden Rules of Conduct</h2>
            <p className="text-xs text-slate-400 mt-1">
              Violations are reviewed by automated moderation systems and lead to immediate bans.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {rules.map((rule) => (
              <div
                key={rule.number}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                    {rule.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-indigo-400 font-bold">
                        Rule {rule.number}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 bg-rose-950/60 border border-rose-800/40 px-2 py-0.5 rounded-md">
                        {rule.severity}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white">{rule.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{rule.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Tips Checklist */}
        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              💡 Essential Video Chat Safety Checklist
            </h2>
            <p className="text-xs text-slate-400">Follow these best practices to ensure a secure online experience.</p>
          </div>

          <div className="space-y-3">
            {tips.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
                <span className="text-emerald-400 font-bold text-sm">✓</span>
                <span className="text-xs text-slate-300 leading-relaxed">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reporting Workflow */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-950/50 via-slate-900 to-slate-900 border border-indigo-500/30 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-white">How Reporting & Enforcement Works</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              When you submit a report during a chat session, our automated safety engine logs room parameters and flags the user's connection. Violators undergo immediate session termination and hardware ban processing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg transition"
            >
              Report a Violation / Safety Inquiry
            </Link>
            <Link
              href="/"
              className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl transition"
            >
              Return to Video Chat
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
