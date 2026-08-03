import Link from 'next/link';

export const metadata = {
  title: 'Blog | Free Random Video Chat Tips & Safety Guides',
  description: 'Read our latest articles about online video chat safety, tips for meeting new people, and guides for using StrangerLive effectively.',
  alternates: {
    canonical: 'https://parvah.online/blog',
  },
  openGraph: {
    title: 'Blog | Free Random Video Chat Tips & Safety Guides',
    description: 'Read our latest articles about online video chat safety, tips for meeting new people, and guides for using StrangerLive effectively.',
    url: 'https://parvah.online/blog',
    siteName: 'StrangerLive',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Video Chat Blog' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Free Random Video Chat Tips & Safety Guides',
    description: 'Read our latest articles about online video chat safety, tips for meeting new people, and guides.',
    images: ['/og-image.png'],
  },
};

const blogPosts = [
  {
    slug: 'how-to-stay-safe-on-video-chat-platforms',
    title: 'How to Stay Safe on Video Chat Platforms: Essential Tips',
    excerpt: 'Learn the best practices for staying safe while video chatting with strangers online. Protect your privacy and have fun responsibly.',
    date: '2026-08-01',
    category: 'Safety',
    readTime: '5 min read',
    featured: true,
  },
  {
    slug: 'omegle-alternatives-why-strangerlive-is-better',
    title: 'Top Omegle Alternatives: Why StrangerLive Stands Out',
    excerpt: 'Discover why StrangerLive is the best alternative to Omegle for random video chat. Compare features, safety, and user experience.',
    date: '2026-07-28',
    category: 'Comparison',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'tips-for-making-meaningful-connections-online',
    title: 'Tips for Making Meaningful Connections Online',
    excerpt: 'Learn how to have genuine conversations and build real connections while video chatting with strangers from around the world.',
    date: '2026-07-25',
    category: 'Tips',
    readTime: '4 min read',
    featured: false,
  },
  {
    slug: 'understanding-webrtc-technology',
    title: 'Understanding WebRTC: How Video Chat Works',
    excerpt: 'A technical deep dive into WebRTC technology and how it enables secure peer-to-peer video connections without storing your data.',
    date: '2026-07-20',
    category: 'Technology',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'video-chat-etiquette-guide',
    title: 'Video Chat Etiquette: Being a Good Online Conversationalist',
    excerpt: 'Master the art of polite and engaging video conversations with these essential etiquette tips for random video chat platforms.',
    date: '2026-07-15',
    category: 'Tips',
    readTime: '5 min read',
    featured: false,
  },
];

export default function BlogPage() {
  return (
    <main className="flex-1 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-rose-50/30 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Soft Ambient Background Mesh */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-300/15 via-purple-300/15 to-rose-300/15 rounded-full blur-3xl pointer-events-none fixed" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-teal-300/10 via-emerald-300/10 to-cyan-300/10 rounded-full blur-3xl pointer-events-none fixed" />
      
      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest shadow-sm shadow-indigo-500/10 ring-1 ring-indigo-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Blog & Resources
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
              Video Chat Tips & Guides
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Expert advice on staying safe, making connections, and getting the most out of your random video chat experience.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(p => p.featured).map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group relative p-8 rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-rose-600 text-white shadow-2xl hover:shadow-indigo-500/30 transition-all overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider">
                  Featured
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-xs font-semibold">
                  {post.category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black mb-3 group-hover:scale-105 transition-transform">
                {post.title}
              </h2>
              <p className="text-slate-100 text-sm leading-relaxed mb-4 max-w-2xl">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-white/80">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime}
                </span>
              </div>
            </div>
          </Link>
        ))}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.filter(p => !p.featured).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-6 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-xl shadow-slate-300/50 ring-1 ring-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-[10px] font-bold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-[10px] text-slate-400 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-400">{post.date}</span>
                <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold group-hover:gap-3 transition-all">
                  Read
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-white shadow-2xl space-y-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black">Ready to Start Chatting?</h2>
          <p className="text-slate-100 text-sm max-w-xl mx-auto opacity-90">
            Apply what you've learned and start making meaningful connections with people worldwide.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 rounded-2xl font-black text-sm text-slate-900 bg-white hover:bg-slate-100 shadow-xl transition-all hover:scale-105"
          >
            Start Free Video Chat Now
          </Link>
        </div>
      </div>
    </main>
  );
}
