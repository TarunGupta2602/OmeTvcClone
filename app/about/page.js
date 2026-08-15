import Link from 'next/link';
import { SITE_URL, SITE_NAME } from '../../lib/constants';
import { stringifyJsonLd } from '../../lib/seo';

export const metadata = {
  title: 'About Parvah — Free Adult Random Video Chat',
  description:
    'Parvah is free adult random video chat in the browser: no signup, WebRTC privacy, 18+ age gate, and skip anytime. Learn who we are and how matching works.',
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: `About Parvah — Free Adult Random Video Chat | ${SITE_NAME}`,
    description:
      'Parvah is free adult random video chat in the browser: no signup, WebRTC privacy, and safety tools for adults 18+.',
    url: `${SITE_URL}/about`,
    siteName: 'Parvah',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'About Parvah' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `About Parvah — Free Adult Video Chat | ${SITE_NAME}`,
    description: 'Free adult random video chat in the browser — no signup, WebRTC privacy, adults 18+.',
    images: ['/og-image.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Parvah',
  description: 'About the Parvah team and product: browser stranger video chat for adults 18+ with WebRTC and safety tools.',
  url: `${SITE_URL}/about`,
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  mainEntity: {
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    applicationCategory: 'SocialNetworkingApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  },
};

export default function AboutPage() {
  const features = [
    {
      title: 'Peer-to-Peer WebRTC Technology',
      description:
        'Direct, low-latency audio and video connections powered by modern WebRTC. Media travels directly between peers for maximum privacy and performance.',
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Instant Smart Matchmaking',
      description:
        'Our high-speed Socket.io signaling server matches you with available random users worldwide in milliseconds with zero wait times.',
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Built-in Text & Media Controls',
      description:
        'Full control over your camera, microphone, and live text chat. Mute audio, toggle video, or switch to the next partner instantly whenever you choose.',
      icon: (
        <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      title: 'Strict Safety & Community Standards',
      description:
        'We prioritize user safety with community guidelines, user reporting tools, and manual safety review. Report inappropriate behavior using the in-chat Report button.',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { label: 'WebRTC P2P Video', value: 'Direct' },
    { label: 'Registration Required', value: 'None' },
    { label: 'Platform Cost', value: 'Free' },
    { label: 'Privacy Model', value: 'P2P' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />
      <main className="flex-1 bg-slate-50 text-slate-900">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white py-20 px-4 sm:px-6 lg:px-8 text-center shadow-xs">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(99,102,241,0.08),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700">
            ✨ Redefining Online Socializing
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            About Parvah
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We build browser-based stranger video chat for adults 18+ — with no signup wall, WebRTC privacy, and clear safety tools.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-4 rounded-2xl font-black text-sm text-white bg-gradient-to-r from-indigo-600 to-rose-500 hover:from-indigo-700 hover:to-rose-600 shadow-xl shadow-indigo-500/25 transition-all hover:scale-105"
            >
              Start Free Video Chat
            </Link>
            <Link
              href="/random-video-chat"
              className="px-8 py-4 rounded-2xl font-bold text-sm text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 hover:text-slate-900 transition-all shadow-xs"
            >
              Random video chat guide
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 pt-2 text-sm font-semibold text-teal-800">
            <Link href="/omegle-alternative" className="hover:underline">Omegle alternative</Link>
            <Link href="/no-signup-video-chat" className="hover:underline">No signup chat</Link>
            <Link href="/anonymous-video-chat" className="hover:underline">Anonymous chat</Link>
            <Link href="/chatroulette-alternative" className="hover:underline">Chatroulette alternative</Link>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="border-b border-slate-200/80 bg-slate-100/50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="text-3xl font-black text-slate-900 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Why Choose Parvah
          </h2>
          <p className="text-sm text-slate-600">
            Engineered for high performance, maximum privacy, and intuitive user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 hover:border-indigo-300 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 Step Workflow */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">How It Works in 3 Steps</h2>
            <p className="text-sm text-slate-600 mt-2">No registration required. Jump straight into conversation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 text-center space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-black text-lg flex items-center justify-center mx-auto shadow-md">
                1
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">Grant Permissions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Allow browser access to your camera and microphone so your video partner can see and hear you.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 text-center space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-black text-lg flex items-center justify-center mx-auto shadow-md">
                2
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">Click "Start Match"</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our WebRTC signaling server finds an available random partner and connects your video feed instantly.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 text-center space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-rose-600 text-white font-black text-lg flex items-center justify-center mx-auto shadow-md">
                3
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">Chat & Skip anytime</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enjoy real-time video & text chat. Hit "Next" to instantly move to another stranger at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto p-10 rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-white shadow-2xl space-y-6">
          <h2 className="text-3xl font-black">Ready to Meet Someone New?</h2>
          <p className="text-slate-100 text-sm max-w-xl mx-auto opacity-90">
            Experience high-definition WebRTC video chat now on Parvah with a single click. Respect community guidelines and have fun!
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 rounded-2xl font-black text-sm text-slate-900 bg-white hover:bg-slate-100 shadow-xl transition-all hover:scale-105"
          >
            Launch Free Video Chat Now
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
