import Link from 'next/link';

export default function HomeSEO() {
  const faqs = [
    {
      q: 'Is Parvah free to use?',
      a: 'Yes. Parvah is completely free with no registration or subscription required.',
    },
    {
      q: 'Is video chat private?',
      a: 'Video streams use peer-to-peer WebRTC and are not recorded or stored on our servers.',
    },
    {
      q: 'How do I stay safe?',
      a: 'Never share personal information, use the Report button for violations, and click Next to skip uncomfortable chats.',
    },
  ];

  return (
    <section className="border-t border-slate-200/60 bg-white/80 backdrop-blur-sm py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-3xl font-black text-slate-900 leading-tight">
            Free Random Video Chat — Talk to Strangers Online Safely
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Parvah is a modern Omegle and OmeTV alternative for instant 1-on-1 webcam conversations.
            Connect with people worldwide using WebRTC technology — no signup, no downloads, just click Start Match.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/omegle-alternative" className="text-sm font-semibold text-indigo-600 hover:underline">
              Omegle alternative
            </Link>
            <Link href="/ometv-alternative" className="text-sm font-semibold text-indigo-600 hover:underline">
              OmeTV alternative
            </Link>
            <Link href="/random-video-chat" className="text-sm font-semibold text-indigo-600 hover:underline">
              Random video chat
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Instant Matching',
              desc: 'Our signaling server pairs you with available users in seconds.',
            },
            {
              title: 'Privacy First',
              desc: 'Peer-to-peer video means your stream is not stored on our servers.',
            },
            {
              title: 'Built-in Safety',
              desc: '18+ age gate, Report to block and skip, and community guidelines you can read anytime.',
            },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h3 className="font-extrabold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900">How Parvah Works</h3>
            <ol className="space-y-3 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
                Confirm you are 18+ and allow camera/microphone access.
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
                Click Start Match to join the live queue.
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
                Chat via video and text. Use Next to skip or Report for safety issues.
              </li>
            </ol>
            <Link href="/about" className="inline-block text-sm font-bold text-indigo-600 hover:underline">
              Learn more about Parvah →
            </Link>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900">Quick FAQ</h3>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <div key={faq.q} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <p className="text-sm font-bold text-slate-900">{faq.q}</p>
                  <p className="text-xs text-slate-600 mt-1">{faq.a}</p>
                </div>
              ))}
            </div>
            <Link href="/faq" className="inline-block text-sm font-bold text-indigo-600 hover:underline">
              View all FAQs →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
