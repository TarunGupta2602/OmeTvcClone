import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Parvah',
  description:
    'Terms of Service for Parvah outlining rules of conduct, 18+ age restriction, zero tolerance content policies, and user agreements.',
  openGraph: {
    title: 'Terms of Service | Parvah',
    description:
      'Review the Terms of Service for using Parvah, including strict 18+ adult policies, user conduct guidelines, and safety enforcement.',
    url: 'https://parvah.online/terms',
    siteName: 'Parvah',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Parvah Terms of Service' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Parvah',
    description: 'Review Parvah Terms of Service and user community rules.',
    images: ['/og-image.png'],
  },
};

export default function TermsPage() {
  const lastUpdated = 'July 30, 2026';

  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      content: `By accessing or using Parvah, you agree to be bound by these Terms of Service and our Privacy Policy and Community Guidelines. If you do not agree to all terms, you are prohibited from using the platform.`,
    },
    {
      id: 'age',
      title: '2. Strict Age Requirement (18+ Only)',
      content: `Parvah is strictly intended for individuals who are at least 18 years of age or the legal age of majority in their jurisdiction. Persons under 18 years old are strictly prohibited from creating accounts, accessing video feeds, or using the platform. We reserve the right to immediately terminate access for any user suspected of being underage.`,
    },
    {
      id: 'prohibited',
      title: '3. Prohibited Conduct & Zero Tolerance Policy',
      content: `You agree NEVER to perform any of the following while using Parvah:
- Nudity, sexually explicit content, or vulgar behavior of any kind.
- Harassment, bullying, hate speech, discrimination, or abusive language.
- Violence, threats of harm, weapons display, or promotion of self-harm.
- Recording, screenshotting, or streaming video sessions without explicit consent of your peer.
- Spam, advertising, scams, phishing, or bot automation.
- Impersonation of others or law enforcement personnel.`,
    },
    {
      id: 'enforcement',
      title: '4. Enforcement, Moderation & Immediate Bans',
      content: `Parvah maintains automated monitoring tools and real-time user reporting mechanisms. Violation of any rule will result in immediate suspension or permanent hardware and IP address banning without prior warning or liability. Decisions regarding access bans are final.`,
    },
    {
      id: 'disclaimer',
      title: '5. Service Provided "As-Is"',
      content: `Parvah is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express or implied. We do not guarantee uninterrupted server uptime, connection speed, or the conduct of individual third-party users matched in video chat.`,
    },
    {
      id: 'limitation',
      title: '6. Limitation of Liability',
      content: `To the maximum extent permitted by applicable law, Parvah, its operators, affiliates, and developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service, or conduct of any third party.`,
    },
    {
      id: 'changes',
      title: '7. Amendments to Terms',
      content: `We reserve the right to revise these Terms of Service at any time. Continued use of the platform following updates constitutes full acceptance of modified terms.`,
    },
  ];

  return (
    <main className="flex-1 bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-b border-slate-800 pb-8 space-y-3">
          <span className="text-xs font-semibold text-rose-400 uppercase tracking-widest">
            Rules & User Agreement
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Terms of Service</h1>
          <p className="text-sm text-slate-400">
            Last Updated: <span className="text-slate-300 font-medium">{lastUpdated}</span>
          </p>
        </div>

        {/* Mandatory Age Notice */}
        <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 flex items-start gap-3">
          <svg className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div className="text-xs text-rose-200 leading-relaxed">
            <strong className="font-bold text-white">CRITICAL REQUIREMENT:</strong> You must be 18 years or older to use Parvah. Nudity, harassment, and unauthorized session recordings are strictly prohibited and result in instant permanent bans.
          </div>
        </div>

        {/* Sections */}
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

        {/* Safety Guidelines Redirect Card */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-white text-sm">Want to view safety rules in detail?</h3>
            <p className="text-xs text-slate-400 mt-0.5">Explore our dedicated Community Safety Hub.</p>
          </div>
          <Link
            href="/safety"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl transition"
          >
            View Community Guidelines
          </Link>
        </div>

      </div>
    </main>
  );
}
