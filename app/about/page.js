import Link from 'next/link';

export const metadata = {
  title: 'About Us | Parvah Free Random Video Chat',
  description:
    'Learn about Parvah, the WebRTC-powered free random video chat platform connecting people globally with real-time matching and strict community safety.',
  openGraph: {
    title: 'About Us | Parvah - Free Random Video Chat',
    description:
      'Discover how Parvah connects people worldwide through instant 1-on-1 WebRTC random video chat, smart matchmaking, and privacy-first engineering.',
    url: 'https://parvah.online/about',
    siteName: 'Parvah',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Parvah Free Video Chat' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Parvah - Free Random Video Chat',
    description: 'Discover how Parvah connects people worldwide through instant 1-on-1 WebRTC random video chat.',
    images: ['/og-image.png'],
  },
};

export default function AboutPage() {
  const features = [
    {
      title: 'Peer-to-Peer WebRTC Technology',
      description:
        'Direct, low-latency audio and video connections powered by modern WebRTC. Media travels directly between peers for maximum privacy and performance.',
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Instant Smart Matchmaking',
      description:
        'Our high-speed Socket.io signaling server matches you with available random users worldwide in milliseconds with zero wait times.',
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Built-in Text & Media Controls',
      description:
        'Full control over your camera, microphone, and live text chat. Mute audio, toggle video, or switch to the next partner instantly whenever you choose.',
      icon: (
        <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      title: 'Strict Safety & Community Standards',
      description:
        'We prioritize user safety with strict automated and community reporting tools, prohibiting inappropriate conduct to maintain a friendly space for all.',
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { label: 'Instant Connections', value: '100K+' },
    { label: 'Average Match Latency', value: '< 50ms' },
    { label: 'Global Coverage', value: '190+ Countries' },
    { label: 'End-to-End P2P Privacy', value: '100%' },
  ];

  return (
    <main className="flex-1 bg-slate-950 text-slate-100">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-indigo-950/40 via-slate-950 to-slate-950 py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400">
            ✨ Redefining Online Socializing
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Connecting People Worldwide in{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-rose-400 bg-clip-text text-transparent">
              Real-Time Video Chat
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Parvah brings the spontaneity of real-life conversations to your browser. Meet new friends, discover diverse cultures, and practice languages with random video connections instantly.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-500 hover:to-rose-500 shadow-lg shadow-indigo-500/25 transition-all hover:scale-105"
            >
              Start Free Video Chat
            </Link>
            <Link
              href="/safety"
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white transition-all"
            >
              Read Community Safety Guidelines
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="border-b border-slate-800/80 bg-slate-900/40 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <div className="text-3xl font-black text-white bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Why Millions Choose Parvah
          </h2>
          <p className="text-sm text-slate-400">
            Engineered for high performance, maximum privacy, and intuitive user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-indigo-500/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 Step Workflow */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">How It Works in 3 Steps</h2>
            <p className="text-sm text-slate-400 mt-2">No registration required. Jump straight into conversation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-black text-lg flex items-center justify-center mx-auto shadow-md">
                1
              </div>
              <h3 className="font-bold text-white text-base">Grant Permissions</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Allow browser access to your camera and microphone so your video partner can see and hear you.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-black text-lg flex items-center justify-center mx-auto shadow-md">
                2
              </div>
              <h3 className="font-bold text-white text-base">Click "Start Match"</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our WebRTC signaling server finds an available random partner and connects your video feed instantly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-rose-600 text-white font-black text-lg flex items-center justify-center mx-auto shadow-md">
                3
              </div>
              <h3 className="font-bold text-white text-base">Chat & Skip anytime</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Enjoy real-time video & text chat. Hit "Next" to instantly move to another stranger at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto p-10 rounded-3xl bg-gradient-to-r from-indigo-900/50 via-purple-900/40 to-slate-900 border border-indigo-500/30 shadow-2xl space-y-6">
          <h2 className="text-3xl font-extrabold text-white">Ready to Meet Someone New?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Experience high-definition WebRTC video chat now on Parvah with a single click. Respect community guidelines and have fun!
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-500 hover:to-rose-500 shadow-xl shadow-indigo-500/30 transition-all hover:scale-105"
          >
            Launch Free Video Chat Now
          </Link>
        </div>
      </section>
    </main>
  );
}
