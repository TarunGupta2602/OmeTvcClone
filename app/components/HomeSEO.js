import Link from 'next/link';
import DirectAnswer from './DirectAnswer';
import { HOME_FAQS, HOW_TO_START_LINES } from '../../lib/geo';

export default function HomeSEO() {
  return (
    <section className="border-t border-teal-900/10 bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-14">
        <DirectAnswer />

        <div className="space-y-4 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800/80">
            Free · No signup · 18+
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
            Free random video chat — no signup
          </h2>
          <nav className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2 text-sm font-semibold text-teal-800" aria-label="Related chats">
            <Link href="/random-video-chat" className="hover:underline">
              Random video chat
            </Link>
            <Link href="/omegle-alternative" className="hover:underline">
              Omegle alternative
            </Link>
          </nav>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
            Instant 1-on-1 webcam conversations with no account wall. Confirm you are 18+, allow camera, and start matching with adults worldwide. Skip anytime.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2 pt-1 text-sm font-semibold text-teal-800">
            <Link href="/random-video-chat" className="hover:underline">
              Random video chat
            </Link>
            <Link href="/omegle-alternative" className="hover:underline">
              Omegle alternative
            </Link>
            <Link href="/adult-video-chat" className="hover:underline">
              Adult video chat
            </Link>
            <Link href="/chat-with-girls" className="hover:underline">
              Chat with girls
            </Link>
            <Link href="/safety" className="hover:underline">
              Safety guidelines
            </Link>
          </div>
        </div>

        <div className="space-y-10">
          <article className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900">Random video chat that starts in the browser</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Random video chat means you are matched with a new person, live, without a profile or a friend request.
              On Parvah it is free: confirm you are 18+, allow the camera, and start. There is no credit pack and no
              email wall. If the chat is not a fit, Next finds someone else.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Since Omegle shut down in 2023, people are looking for browser-based alternatives that work without app downloads. Parvah uses WebRTC peer-to-peer technology to route video directly between browsers when networks allow it, giving you lower latency and better privacy.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900">Video chat with strangers, free and 1-on-1</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Video chat with strangers is a private webcam conversation with someone you have not met. It is not a
              group room and not a text-only app. You see one person, you can type as well as talk, and you leave
              whenever you want.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Many people use random video chat for language practice, making friends, or just casual conversation. The matching is random by design — you meet people you would never algorithmically select. That serendipity is why people keep coming back.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900">18+ adult video chat</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Read the rules on{' '}
              <Link href="/adult-video-chat" className="font-semibold text-teal-800 hover:underline">
                adult video chat
              </Link>{' '}
              and the{' '}
              <Link href="/safety" className="font-semibold text-teal-800 hover:underline">
                safety guidelines
              </Link>
              .
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Consent is everything. Flirty chat is allowed when mutual, but harassment, demands, or pressure get you reported. Use Next immediately if a chat feels wrong — you do not owe anyone an explanation.
            </p>
          </article>


          <article className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900">What to say in your first video chat</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Most people skip within the first 10 seconds. A simple, friendly greeting makes a huge difference. Here are some openers that work:
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>“Hey — where are you chatting from, roughly?”</li>
              <li>“You caught me mid-evening. Good time or should I let you skip?”</li>
              <li>“Quick check — is my audio coming through okay?”</li>
              <li>“What brings you to random video chat today?”</li>
              <li>“I'm new here — how does this usually go for you?”</li>
            </ul>
            <p className="text-sm text-slate-600 leading-relaxed">
              Skip the demand for socials, photos, or money. People who want a conversation will stay for a normal hello. For more conversation tips, check out our guide on{' '}
              <Link href="/blog/talk-to-strangers-video-chat" className="font-semibold text-teal-800 hover:underline">
                how to talk to strangers on video chat
              </Link>
              .
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900">Tips for better video chat matches</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Small setup changes make a big difference in how long people stay:
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><strong>Lighting:</strong> Face a lamp or ring light. Avoid having a bright window behind you — it silhouettes your face.</li>
              <li><strong>Camera angle:</strong> Position the camera at eye level. Looking down at the camera is unflattering.</li>
              <li><strong>Background:</strong> A clean, neutral background works best. Cluttered rooms can be distracting.</li>
              <li><strong>Audio:</strong> Use headphones if possible. It reduces echo and makes conversation clearer.</li>
              <li><strong>Eye contact:</strong> Look at the camera, not yourself on the screen. It feels more natural to the other person.</li>
            </ul>
          </article>

          <div className="pt-4 border-t border-teal-900/10">
            <p className="text-xs text-slate-500">Last reviewed: November 28, 2026</p>
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
                desc: 'No email, credits, or profile setup — confirm 18+ and start random video chat.',
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
              {HOW_TO_START_LINES.map((step, i) => (
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
            <h3 className="text-lg font-bold text-slate-900">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {HOME_FAQS.slice(1, 8).map((faq) => (
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
