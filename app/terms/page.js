import Link from 'next/link';
import { SITE_URL, SITE_NAME } from '../../lib/constants';

export const metadata = {
  title: 'Terms of Service',
  description:
    'Parvah Terms of Service: 18+ age requirement, community conduct rules, zero-tolerance content policies, and user agreements for random video chat.',
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  openGraph: {
    title: 'Terms of Service | Parvah',
    description: 'Terms of Service and community rules for using Parvah random video chat.',
    url: `${SITE_URL}/terms`,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Video Chat Terms of Service' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Parvah',
    description: 'Terms of Service and community rules for using Parvah random video chat.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TermsOfService',
  name: 'Terms of Service - Parvah',
  description: 'Terms of Service for our random video chat platform outlining rules of conduct, 18+ age restriction, zero tolerance content policies, and user agreements.',
  url: `${SITE_URL}/terms`,
  dateModified: '2026-07-30',
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1 bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="border-b border-slate-200/80 pb-8 space-y-3">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
            Rules & User Agreement
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">Terms of Service</h1>
          <p className="text-sm text-slate-500">
            Last Updated: <span className="text-slate-700 font-semibold">{lastUpdated}</span>
          </p>
        </div>

        {/* Mandatory Age Notice */}
        <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3 shadow-xs">
          <svg className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div className="text-xs text-slate-700 leading-relaxed">
            <strong className="font-extrabold text-slate-900">CRITICAL REQUIREMENT:</strong> You must be 18 years or older to use Parvah. Nudity, harassment, and unauthorized session recordings are strictly prohibited and result in instant permanent bans.
          </div>
        </div>

        {/* Sections */}
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

        {/* Safety Guidelines Redirect Card */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-extrabold text-slate-900 text-sm">Want to view safety rules in detail?</h3>
            <p className="text-xs text-slate-500 mt-0.5">Explore our dedicated Community Safety Hub.</p>
          </div>
          <Link
            href="/safety"
            className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition"
          >
            View Community Guidelines
          </Link>
        </div>

      </div>
    </main>
    </>
  );
}
