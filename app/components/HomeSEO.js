import Link from 'next/link';

export default function HomeSEO() {
  const faqs = [
    {
      q: 'Is Parvah free adult video chat?',
      a: 'Yes. Completely free with no registration, credits, or subscription — open the site and match instantly.',
    },
    {
      q: 'Can I have flirty or hot conversations?',
      a: 'Yes, between consenting adults 18+. Mutual chemistry is welcome. Skip or report anything that feels wrong.',
    },
    {
      q: 'Will I meet women or new people every time?',
      a: 'Matches are random adults in the live queue. Gender and vibe vary — keep tapping Next until the spark feels right.',
    },
    {
      q: 'How do I stay safe?',
      a: 'Never share personal info, use Report for abuse, and leave any chat that is not consensual. Parvah is 18+ only.',
    },
  ];

  const steps = [
    'Confirm you are 18+ and allow camera access.',
    'Click Start Matching to join the live adult queue.',
    'Flirt, talk, connect — skip or report anytime.',
  ];

  return (
    <section className="border-t border-teal-900/10 bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-14">
        <div className="space-y-4 text-center sm:text-left">
          <p className="font-[family-name:var(--font-source-serif)] text-3xl sm:text-4xl text-teal-900 tracking-tight">
            Parvah
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
            Free adult random video chat — flirty talks, new people, real chemistry
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
            Instant 1-on-1 webcam chat for adults who want hot conversations, late-night company, or a
            spark that might turn into something more. No signup. WebRTC privacy. Built-in skip and
            report. A modern adult Omegle alternative in your browser.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2 pt-1 text-sm font-semibold text-teal-800">
            <Link href="/adult-video-chat" className="hover:underline">
              Adult video chat
            </Link>
            <Link href="/hot-video-chat" className="hover:underline">
              Hot video chat
            </Link>
            <Link href="/flirty-video-chat" className="hover:underline">
              Flirty video chat
            </Link>
            <Link href="/meet-people-online" className="hover:underline">
              Meet people online
            </Link>
            <Link href="/video-chat-with-strangers" className="hover:underline">
              Chat with strangers
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
            <h3 className="text-xl font-bold text-slate-900">Why adults choose Parvah</h3>
            <p className="text-sm text-slate-600">One clear reason per point — skip anytime, no account wall.</p>
          </div>
          <ul className="space-y-7">
            {[
              {
                title: 'Instant adult matching',
                desc: 'Join the queue and get paired with another available adult in seconds for live 1-on-1 video.',
              },
              {
                title: 'Flirty to deep — your vibe',
                desc: 'From playful dirty talk to late-night honesty to dating energy — consenting adults set the tone together.',
              },
              {
                title: 'Privacy + safety tools',
                desc: 'Peer-to-peer WebRTC, 18+ age gate, report and skip controls, and clear community rules.',
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
