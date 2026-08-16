import Link from 'next/link';

export default function HomeSEO() {
  const faqs = [
    {
      q: 'Is random video chat with strangers free?',
      a: 'Yes. Completely free with no registration, credits, or subscription — open the site and match instantly.',
    },
    {
      q: 'Do I need an app or signup?',
      a: 'No. Use any modern browser on desktop or mobile. Confirm you are 18+, allow camera access, and start.',
    },
    {
      q: 'Who will I talk to?',
      a: 'Another available adult in the live queue. Matches are random — keep tapping Next until the vibe feels right.',
    },
    {
      q: 'How do I stay safe?',
      a: 'Never share personal info, use Report for abuse, and leave any chat that is not consensual. 18+ only.',
    },
  ];

  const steps = [
    'Confirm you are 18+ and allow camera access.',
    'Click Start Matching to join the live queue.',
    'Talk, flirt, or connect — skip or report anytime.',
  ];

  return (
    <section className="border-t border-teal-900/10 bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-14">
        <div className="space-y-4 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800/80">
            Free · No signup · 18+
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
            Free random video chat with strangers — talk instantly
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
            Instant 1-on-1 webcam conversations with no account wall. Meet new people for casual talk,
            flirty chemistry, or late-night company. WebRTC privacy, skip anytime, and a modern Omegle
            alternative that works in your browser.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2 pt-1 text-sm font-semibold text-teal-800">
            <Link href="/random-video-chat" className="hover:underline">
              Random video chat
            </Link>
            <Link href="/video-chat-with-strangers" className="hover:underline">
              Video chat with strangers
            </Link>
            <Link href="/chat-with-girls" className="hover:underline">
              Chat with girls
            </Link>
            <Link href="/flirty-video-chat" className="hover:underline">
              Flirty video chat
            </Link>
            <Link href="/hot-video-chat" className="hover:underline">
              Hot video chat
            </Link>
            <Link href="/omegle-alternative" className="hover:underline">
              Omegle alternative
            </Link>
            <Link href="/safety" className="hover:underline">
              Safety
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900">Why people use this random video chat</h3>
            <p className="text-sm text-slate-600">One clear reason per point — skip anytime, no account wall.</p>
          </div>
          <ul className="space-y-7">
            {[
              {
                title: 'Instant stranger matching',
                desc: 'Join the queue and get paired with another available adult in seconds for live 1-on-1 video.',
              },
              {
                title: 'No signup friction',
                desc: 'No email, credits, or profile setup — confirm 18+ and start video chat with strangers.',
              },
              {
                title: 'Privacy + safety tools',
                desc: 'Peer-to-peer WebRTC, report and skip controls, and clear community rules for adults.',
              },
            ].map((item, i) => (
              <li key={item.title} className="grid gap-2 sm:grid-cols-[3rem_1fr] sm:gap-6">
                <span className="font-[family-name:var(--font-source-serif)] text-2xl text-teal-800/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900">How it works</h3>
            <ol className="space-y-3 text-sm text-slate-600">
              {steps.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <Link href="/about" className="inline-block text-sm font-semibold text-teal-800 hover:underline">
              About the platform →
            </Link>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Quick FAQ</h3>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="space-y-1.5">
                  <p className="text-sm font-bold text-slate-900">{faq.q}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
            <Link href="/faq" className="inline-block text-sm font-semibold text-teal-800 hover:underline">
              View all FAQs →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
