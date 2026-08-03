import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Free Random Video Chat Support',
  description: 'Get in touch with our team for support, safety inquiries, or general questions about our free random video chat platform. Talk to strangers online safely.',
  alternates: {
    canonical: 'https://parvah.online/contact',
  },
  openGraph: {
    title: 'Contact Us | Free Random Video Chat Support',
    description: 'Get in touch with our team for support, safety inquiries, or general questions about our random video chat platform.',
    url: 'https://parvah.online/contact',
    siteName: 'StrangerLive',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Video Chat Contact Support' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Free Random Video Chat Support',
    description: 'Get in touch with our team for support, safety inquiries, or general questions about our random video chat.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Us - StrangerLive',
  description: 'Get in touch with our team for support, safety inquiries, or general questions about our free random video chat platform.',
  url: 'https://parvah.online/contact',
  publisher: {
    '@type': 'Organization',
    name: 'StrangerLive',
    url: 'https://parvah.online',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'support@parvah.online',
      contactType: 'customer service',
      areaServed: 'Worldwide',
    },
    {
      '@type': 'ContactPoint',
      email: 'safety@parvah.online',
      contactType: 'safety',
      areaServed: 'Worldwide',
    },
    {
      '@type': 'ContactPoint',
      email: 'business@parvah.online',
      contactType: 'sales',
      areaServed: 'Worldwide',
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-rose-50/30 text-slate-900 py-8 sm:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Soft Ambient Background Mesh */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-300/15 via-purple-300/15 to-rose-300/15 rounded-full blur-3xl pointer-events-none fixed" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-teal-300/10 via-emerald-300/10 to-cyan-300/10 rounded-full blur-3xl pointer-events-none fixed" />
      
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest shadow-sm shadow-indigo-500/10 ring-1 ring-indigo-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Get In Touch
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Have questions or need assistance? Reach out to our team through any of the channels below.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-xl shadow-slate-300/50 space-y-3 ring-1 ring-slate-200/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 text-indigo-600 flex items-center justify-center font-bold text-xl shadow-sm">
              ✉️
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">General Support</h3>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-1">For general platform inquiries and technical questions.</p>
              <a href="mailto:support@parvah.online" className="text-xs sm:text-sm font-mono text-indigo-600 font-bold mt-2 block hover:underline">
                support@parvah.online
              </a>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-xl shadow-slate-300/50 space-y-3 ring-1 ring-slate-200/50 hover:shadow-xl hover:shadow-rose-500/10 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100 border border-rose-200 text-rose-600 flex items-center justify-center font-bold text-xl shadow-sm">
              🛡️
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">Safety & Appeals</h3>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-1">Report serious violations or submit a ban review request.</p>
              <a href="mailto:safety@parvah.online" className="text-xs sm:text-sm font-mono text-rose-600 font-bold mt-2 block hover:underline">
                safety@parvah.online
              </a>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-xl shadow-slate-300/50 space-y-3 ring-1 ring-slate-200/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold text-xl shadow-sm">
              ⚡
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">Business Inquiries</h3>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-1">Partnerships, media, and business opportunities.</p>
              <a href="mailto:business@parvah.online" className="text-xs sm:text-sm font-mono text-emerald-600 font-bold mt-2 block hover:underline">
                business@parvah.online
              </a>
            </div>
          </div>
        </div>

        {/* Response Time Info */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-50 via-white to-purple-50 border border-indigo-200/60 space-y-4 sm:space-y-6 shadow-xl shadow-indigo-200/50 ring-1 ring-indigo-200/50">
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">Response Times</h2>
            <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
              We typically respond to all inquiries within 24-48 hours. For urgent safety matters, please use the safety email address for priority handling.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <Link
              href="/safety"
              className="px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-[10px] sm:text-xs rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition ring-2 ring-indigo-500/20 hover:ring-indigo-500/40"
            >
              View Safety Guidelines
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
