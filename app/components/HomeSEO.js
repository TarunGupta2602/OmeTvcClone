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

  const steps = [
    'Confirm you are 18+ and allow camera access.',
    'Click Start Match to join the live queue.',
    'Chat via video and text — skip or report anytime.',
  ];

  return (
    <section className="border-t border-teal-900/10 bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-14">
        <div className="space-y-4 text-center sm:text-left">
          <p className="font-[family-name:var(--font-source-serif)] text-3xl sm:text-4xl text-teal-900 tracking-tight">
            Parvah
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
            Free random video chat with strangers
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
            Instant 1-on-1 webcam conversations — no signup, WebRTC privacy, and built-in safety tools for
            adults 18+. A modern alternative to Omegle and OmeTV.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2 pt-1 text-sm font-semibold text-teal-800">
            <Link href="/omegle-alternative" className="hover:underline">
              Omegle alternative
            </Link>
            <Link href="/random-video-chat" className="hover:underline">
              Random video chat
            </Link>
            <Link href="/no-signup-video-chat" className="hover:underline">
              No signup chat
            </Link>
            <Link href="/safety" className="hover:underline">
              Safety
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900">Why people choose Parvah</h3>
            <p className="text-sm text-slate-600">One clear reason per point — skip anytime, no account wall.</p>
          </div>
          <ul className="space-y-7">
            {[
              {
                title: 'Instant matching',
                desc: 'Join the queue and get paired with another available adult in seconds.',
              },
              {
                title: 'Privacy first',
                desc: 'Peer-to-peer WebRTC video is not archived on Parvah servers.',
              },
              {
                title: 'Built-in safety',
                desc: '18+ age gate, report and skip controls, and clear community guidelines.',
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
              About Parvah →
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
