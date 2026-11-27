import { SITE_URL, SITE_NAME } from './constants';

/**
 * High-intent marketing SEO landings. Keys map to /{slug}.
 * Query-first titles (what people type). Brand only via "| Parvah" template.
 * Honest product: random adult matching — not paid cam models / not guaranteed gender.
 * All pages are 18+ only.
 */
export const SEO_LANDINGS = {
  'hot-video-chat': {
    metaTitle: 'Hot Video Chat Free — Live Webcam with Strangers',
    h1: 'Hot Video Chat Free — Live 1-on-1 Webcam',
    badge: 'Hot Video Chat · 18+',
    description:
      'Free hot video chat with strangers — no signup. Instant 1-on-1 webcam matching for flirty energy and late-night chemistry. Adults 18+ only. Skip anytime. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: 'Instant hot matching', desc: 'Join the live queue and get paired for 1-on-1 video in seconds.' },
      { title: 'Flirty vibe welcome', desc: 'Keep chats playful or steamy when both people consent. Skip if the energy is off.' },
      { title: 'No signup, no credits', desc: 'Confirm 18+, allow camera, and start — no account wall.' },
      { title: 'Private WebRTC video', desc: 'Peer-to-peer streams are not archived on our servers.' },
      { title: 'Adults only', desc: 'Strict 18+ age gate. Underage users are banned.' },
      { title: 'Skip & report', desc: 'Next and Report keep you in control of every session.' },
    ],
    sections: [
      {
        title: 'What free hot video chat actually is',
        paragraphs: [
          'Hot video chat here means free random adult webcam chat — not a catalog of paid performers. You match with real adults who may want flirty talk, late-night company, or mutual chemistry.',
          'Gender and vibe vary. Use Next until you find someone who matches your energy. Consent is required for anything intimate.',
        ],
        bullets: [
          'Free hot video chat in the browser',
          'No signup and no subscription',
          'Consent-first flirty conversation',
          'Works on mobile and desktop',
        ],
        links: [
          { href: '/', label: 'Start hot video chat' },
          { href: '/flirty-video-chat', label: 'Flirty video chat' },
          { href: '/video-chat-with-girls', label: 'Video chat with girls' },
        ],
      },
    ],
    faqs: [
      { q: 'Is hot video chat free?', a: 'Yes — free matching with no credits or signup. Confirm you are 18+ and start.' },
      { q: 'Is this the same as cam girl sites?', a: 'No. Matching is random between real users. We do not sell performers or guarantee nude shows.' },
      { q: 'Can chats get flirty or intimate?', a: 'Yes when both adults consent. Stop immediately if the other person is not interested.' },
    ],
    related: [
      { href: '/flirty-video-chat', label: 'Flirty video chat' },
      { href: '/dirty-talk-video-chat', label: 'Dirty talk video chat' },
      { href: '/video-chat-with-girls', label: 'Video chat with girls' },
      { href: '/random-video-chat', label: 'Random video chat' },
      { href: '/adult-video-chat', label: 'Adult video chat' },
    ],
  },

  'flirty-video-chat': {
    metaTitle: 'Flirty Video Chat Free — Chat with Strangers | Parvah',
    h1: 'Flirty Video Chat: Free, Playful and Consent-First (18+)',
    badge: 'Flirty Video Chat · 18+',
    description:
      'Flirty video chat tips for adults: openers, reading signals, consent and when to skip. Free 1-on-1 video chat, no signup. 18+ only.',
    highlights: [
      { title: 'Playful first, pressure never', desc: 'Start light and only escalate when both adults are clearly into it.' },
      { title: 'Real people, live video', desc: '1-on-1 chat with another adult in the queue — not bots or scripted profiles.' },
      { title: 'Great for shy openers', desc: 'A smile or a simple “how’s your night?” beats awkward silence.' },
      { title: 'Skip without guilt', desc: 'If the spark is missing, Next is one tap away.' },
      { title: 'No account drama', desc: 'Flirt without building a public dating profile.' },
      { title: '18+ community', desc: 'Age gate and report tools keep the space adult-focused.' },
    ],
    sections: [
      {
        title: 'Flirty video chat is light, playful conversation',
        paragraphs: [
          'Flirty video chat is light, playful conversation between two adults who both want it. On Parvah you are matched at random, so nobody owes you a certain kind of chat, and you do not owe anyone one either. This guide covers how to start, how to read the other person, and how to stay safe.',
        ],
      },
      {
        title: 'What "flirty" means here, and what it does not',
        paragraphs: [
          'Flirting is humor, compliments, curiosity and a bit of chemistry. It is not pressure, demands, or steering a conversation somewhere the other person has not agreed to go. If the other person gives short answers or changes the subject, that is your signal to relax or press Next.',
        ],
      },
      {
        title: 'Openers that work',
        paragraphs: [
          'Keep the first minute light. Humor and a real question beat a forced compliment.',
        ],
        bullets: [
          '"Hey, you look like you have a story. What\'s yours tonight?"',
          '"Rate my lighting, honestly."',
          '"Two truths and a lie, you go first."',
          '"What\'s the best part of your day so far?"',
          '"I\'m bad at small talk. Help me out?"',
          '"Where are you chatting from? Is it late there too?"',
        ],
      },
      {
        title: 'Signs the chat is going well',
        paragraphs: [],
        bullets: [
          'They ask questions back and keep eye contact.',
          'They laugh, joke, or build on what you say.',
          'They stay on the call after the first minute.',
        ],
      },
      {
        title: 'Signs to stop or skip',
        paragraphs: [],
        bullets: [
          'One-word answers, looking away, or silence.',
          'They ask you to stop or change topic.',
          'Anyone pressures you for photos, personal info, or to move to another app.',
        ],
      },
      {
        title: 'Consent and boundaries',
        paragraphs: [
          'Anything beyond light flirting needs a clear yes from both people, and either person can say no or leave at any time. Do not record, screenshot, or share the other person\'s video. Be the kind of chat partner you would want to meet.',
        ],
      },
      {
        title: 'Safety on a flirty chat',
        paragraphs: [],
        bullets: [
          'Never send money, gift cards, or crypto, whatever story you are told.',
          'Do not share your phone number, address, workplace or social accounts early.',
          'Be careful with anyone who tries to push you onto another app or threatens to share your video. That is a common scam. Press Next, use Report, and do not pay.',
          'Use a neutral background and keep personal documents out of view.',
        ],
      },
      {
        title: 'How to start',
        paragraphs: [],
        bullets: [
          'Confirm you are 18 or older.',
          'Allow camera and microphone in your browser.',
          'Join the queue and wait for a match.',
          'Say a friendly hello. Use Next if it is not a fit.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I choose to talk only to women or men?', a: 'No. Matching is random. Press Next until the conversation suits you.' },
      { q: 'Is flirting allowed on Parvah?', a: 'Yes, between consenting adults. Harassment and pressure are not allowed.' },
      { q: 'What if someone gets inappropriate?', a: 'Press Next and use Report. You never have to explain.' },
      { q: 'What if someone threatens me or asks for money?', a: 'Stop the chat, report it, and do not pay. Do not engage.' },
      { q: 'Are chats recorded?', a: 'No. Parvah does not record or store your video chats. Video uses peer-to-peer WebRTC when networks allow it.' },
    ],
    related: [
      { href: '/', label: 'Random video chat' },
      { href: '/adult-video-chat', label: 'Adult video chat' },
      { href: '/safety', label: 'Safety & rules' },
    ],
  },

  'meet-people-online': {
    metaTitle: 'Meet People Online Free — Live Video Chat',
    h1: 'Meet People Online Through Live Video Chat',
    badge: 'Meet People Online · 18+',
    description:
      'Meet people online free with live 1-on-1 video chat — no signup. Talk, flirt, or find real chemistry with adults worldwide. Skip anytime. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: 'Face-to-face from minute one', desc: 'Video beats endless text apps when you want real presence.' },
      { title: 'New people every Next', desc: 'Random matching means you can meet someone new as often as you like.' },
      { title: 'Friendship to spark', desc: 'Some chats stay friendly. Some turn flirty. You decide together.' },
      { title: 'Worldwide queue', desc: 'Talk with adults across regions without downloading another social app.' },
      { title: 'Privacy-minded', desc: 'No public profile wall. WebRTC peer video when networks allow.' },
      { title: 'Free forever matching', desc: 'No credits to “boost” visibility — everyone enters the same queue.' },
    ],
    sections: [
      {
        title: 'Meet people online without the dating-app grind',
        paragraphs: [
          'If swiping feels empty, live video chat is a faster way to meet people online. You are paired with another available adult for a real-time conversation — then keep the chat or skip.',
          'Protect your privacy: never share your address, phone, or payment apps on first contact.',
        ],
        links: [
          { href: '/', label: 'Meet someone now' },
          { href: '/talk-to-strangers', label: 'Talk to strangers' },
          { href: '/flirty-video-chat', label: 'Flirty video chat' },
        ],
      },
    ],
    faqs: [
      { q: 'Can I meet people online for free?', a: 'Yes. Free live video chat with no signup. Confirm 18+ and start matching.' },
      { q: 'Is this for dating or just talking?', a: 'Both happen. Some users want friendship, others want flirty chemistry. Mutual consent sets the tone.' },
      { q: 'Is meeting strangers on video safe?', a: 'It can be when you use Next/Report, hide personal details, and leave non-consensual chats immediately.' },
    ],
    related: [
      { href: '/talk-to-strangers', label: 'Talk to strangers' },
      { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
      { href: '/random-video-chat', label: 'Random video chat' },
      { href: '/chat-with-girls', label: 'Chat with girls' },
    ],
  },

  'video-chat-with-strangers': {
    metaTitle: 'Video Chat with Strangers Free — No Signup',
    h1: 'Video Chat with Strangers — Free & Instant',
    badge: 'Video Chat with Strangers',
    description:
      'Free video chat with strangers — no signup. Instant 1-on-1 webcam matching. Talk, flirt, or connect live with new people worldwide. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: 'Classic stranger chat energy', desc: 'The Omegle-style surprise of meeting someone new — rebuilt for modern browsers.' },
      { title: '1-on-1 only', desc: 'Private pairwise sessions, not crowded group rooms.' },
      { title: 'Text + video', desc: 'Say hello on camera and keep the chat going with live text.' },
      { title: 'Adult rules', desc: '18+ gate, consent-first intimacy, report tools for abuse.' },
      { title: 'Works on phones', desc: 'Mobile browsers supported — allow camera and mic when prompted.' },
      { title: 'Zero signup friction', desc: 'No email verification before your first stranger match.' },
    ],
    sections: [
      {
        title: 'Why people search for video chat with strangers',
        paragraphs: [
          'Video chat with strangers is a live 1-on-1 webcam talk with someone you do not know. Free video chat with strangers on this site needs no signup and no app. Confirm you are 18+, allow the camera, and you are in the queue.',
          'People also type video chat strangers, cam chat with strangers, and video chat with strangers free. The match is random. Gender, looks, and nude chat are not promised. Skip until the conversation is one you want.',
          'Whether you want casual talk, flirty banter, or a late-night connection, start matching and use Next until the conversation clicks.',
        ],
        links: [
          { href: '#start', label: 'Chat with strangers now' },
          { href: '/random-video-chat', label: 'Random video chat' },
          { href: '/omegle-alternative', label: 'Omegle alternative' },
        ],
      },
    ],
    faqs: [
      {
        q: 'What is video chat with strangers?',
        a: 'Video chat with strangers is a live 1-on-1 webcam conversation with someone you do not already know. On this page you confirm you are 18+, allow the camera, and match in the browser. There is no signup and no app.',
      },
      {
        q: 'Is video chat with strangers free?',
        a: 'Yes. Video chat with strangers here is free — no registration, credits, or subscription. Adults 18+ only.',
      },
      {
        q: 'Do I need to sign up to video chat with strangers?',
        a: 'No. Confirm you are 18+, allow camera access, and click Start Matching. No email or account is required.',
      },
      {
        q: 'Who will I meet on video chat with strangers?',
        a: 'Another available adult in the live queue. Matches are random — keep skipping until the vibe fits. Gender, looks, and explicit content are not guaranteed.',
      },
      {
        q: 'Is video chat with strangers anonymous?',
        a: 'You do not create a public profile. Still avoid sharing your name, phone, address, or social accounts on camera or in text.',
      },
    ],
    related: [
      { href: '/random-video-chat', label: 'Random video chat' },
      { href: '/talk-to-strangers', label: 'Talk to strangers' },
      { href: '/omegle-alternative', label: 'Omegle alternative' },
      { href: '/chat-with-girls', label: 'Chat with girls' },
    ],
  },

  'late-night-video-chat': {
    metaTitle: 'Late Night Video Chat Free — Webcam with Strangers',
    h1: 'Late Night Video Chat — Company When You Need It',
    badge: 'Late Night Video Chat · 18+',
    description:
      'Free late night video chat for adults 18+. Instant 1-on-1 webcam matching for quiet talks, flirty energy, or midnight company — no signup. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: 'Built for night owls', desc: 'Jump into live chat without setting up a dating profile.' },
      { title: 'Talk or spark', desc: 'Vent, laugh, flirt, or just share the silence with another adult online.' },
      { title: 'Fast re-match', desc: 'Quiet queue? Hit Next and keep looking for someone awake with you.' },
      { title: 'Camera optional mid-chat', desc: 'Start with video, then use controls if you need a quick break.' },
      { title: 'Consent always', desc: 'Late-night intimacy is fine only when mutual. Pressure is not.' },
      { title: 'Free & private-minded', desc: 'No credits. WebRTC peer video when possible.' },
    ],
    sections: [
      {
        title: 'Late night video chat without the app clutter',
        paragraphs: [
          'Late night is when people search for company. Free adult webcam matching in the browser — confirm 18+ and meet someone still awake.',
          'Keep expectations grounded: random chat can be magical or awkward. Skip freely and stay safe with personal details.',
        ],
        links: [
          { href: '/', label: 'Start late night chat' },
          { href: '/hot-video-chat', label: 'Hot video chat' },
          { href: '/dirty-talk-video-chat', label: 'Dirty talk video chat' },
        ],
      },
    ],
    faqs: [
      { q: 'Is late night video chat free?', a: 'Yes. No night-time fees or signup requirements for adults 18+.' },
      { q: 'Will people be online at night?', a: 'The queue is live worldwide. Activity varies by hour — keep Next handy.' },
      { q: 'Can late night chats get flirty?', a: 'Often they do, when both adults consent. Always respect a no and use Report for abuse.' },
    ],
    related: [
      { href: '/hot-video-chat', label: 'Hot video chat' },
      { href: '/flirty-video-chat', label: 'Flirty video chat' },
      { href: '/free-webcam-chat', label: 'Free webcam chat' },
      { href: '/adult-video-chat', label: 'Adult video chat' },
    ],
  },

  'free-webcam-chat': {
    metaTitle: 'Free Webcam Chat — No Signup Video Chat',
    h1: 'Free Webcam Chat — Live 1-on-1 in Your Browser',
    badge: 'Free Webcam Chat · 18+',
    description:
      'Free webcam chat with no signup. Instant 1-on-1 video matching with strangers, WebRTC privacy, and skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: 'Truly free matching', desc: 'No coin packs or “premium peek” upsells — basic matching stays free.' },
      { title: 'Webcam + mic ready', desc: 'Allow permissions once, then start live video chat.' },
      { title: 'Browser-native', desc: 'Works in Chrome, Safari, Firefox, and Edge on desktop or mobile.' },
      { title: 'Adult flirty OK', desc: 'Consenting adults can keep chats playful or hot. Non-consent is banned.' },
      { title: 'Safety controls', desc: 'Age gate, Next, and Report are part of every session.' },
      { title: 'No profile farm', desc: 'You are not maintaining a public bio for strangers to browse.' },
    ],
    sections: [
      {
        title: 'Free webcam chat that respects your time',
        paragraphs: [
          'Searchers for free webcam chat usually want live video and no payment wall. Open the site, confirm you are an adult, and match.',
          'It is random adult matching, not a paid cam studio. That honesty helps users stay and return.',
        ],
        links: [
          { href: '/', label: 'Start free webcam chat' },
          { href: '/no-signup-video-chat', label: 'No signup video chat' },
          { href: '/live-video-chat', label: 'Live video chat' },
        ],
      },
    ],
    faqs: [
      { q: 'Is webcam chat really free?', a: 'Yes. Basic matching is free and does not require signup.' },
      { q: 'Do I need to download software?', a: 'No. Use a modern browser with camera access.' },
      { q: 'Is free webcam chat for adults?', a: 'Yes — 18+ only. Minors are prohibited.' },
    ],
    related: [
      { href: '/live-video-chat', label: 'Live video chat' },
      { href: '/random-video-chat', label: 'Random video chat' },
      { href: '/hot-video-chat', label: 'Hot video chat' },
      { href: '/no-signup-video-chat', label: 'No signup video chat' },
    ],
  },

  'chat-with-girls': {
    metaTitle: 'Chat with Girls Free — Live Video Chat 18+',
    h1: 'Chat with Girls Free — Live Random Video Chat',
    badge: 'Chat with Girls · Adults 18+',
    description:
      'Free chat with girls online via live random video chat — no signup. Match adults 18+ for real 1-on-1 webcam talk. Gender varies; skip until the vibe fits. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: 'Live video, not fake profiles', desc: '1-on-1 webcam matching with real adults in the queue — not photo catalogs.' },
      { title: 'Women join the same free queue', desc: 'Many women use random video chat. Matches are random — keep Next handy.' },
      { title: 'No signup wall', desc: 'Confirm 18+, allow camera, and start chatting without an account.' },
      { title: 'Flirty when mutual', desc: 'Playful talk is welcome between consenting adults. Pressure is not.' },
      { title: 'Honest expectations', desc: 'Not a cam-girl directory. No guaranteed looks, gender, or nude shows.' },
      { title: 'Safety tools', desc: 'Skip and report anytime. Under-18 users are banned.' },
    ],
    sections: [
      {
        title: 'Free chat with girls — what this page means',
        paragraphs: [
          'People search “chat with girls” when they want live conversation with women online. This site offers free random video chat for adults 18+. Women and men both join the queue.',
          'Because matching is random, you will not get a guaranteed female match every time. Use Next until you find a mutual connection. Be respectful — that is what keeps real women chatting.',
        ],
        bullets: [
          'Free live video chat (no credits)',
          'Adults 18+ only',
          'Consent-first flirting',
          'Not paid performers or escorting',
        ],
        links: [
          { href: '/', label: 'Start video chat now' },
          { href: '/video-chat-with-girls', label: 'Video chat with girls' },
          { href: '/flirty-video-chat', label: 'Flirty video chat' },
        ],
      },
    ],
    faqs: [
      { q: 'Can I chat with girls for free?', a: 'Yes. Free random video chat with no signup. Women who are 18+ also use the queue. Matches are random.' },
      { q: 'Are these real girls or cam models?', a: 'Real adult users. This is not a paid cam-model site and does not guarantee gender or explicit content.' },
      { q: 'Is this 18+ only?', a: 'Yes. Strictly adults. Minors are prohibited.' },
    ],
    related: [
      { href: '/video-chat-with-girls', label: 'Video chat with girls' },
      { href: '/girls-video-chat', label: 'Girls video chat' },
      { href: '/flirty-video-chat', label: 'Flirty video chat' },
      { href: '/random-video-chat', label: 'Random video chat' },
    ],
  },

  'video-chat-with-girls': {
    metaTitle: 'Video Chat with Girls Free — No Signup 18+',
    h1: 'Video Chat with Girls — Free Live Webcam Chat',
    badge: 'Video Chat with Girls · 18+',
    description:
      'Free video chat with girls — no signup. Instant 1-on-1 webcam matching for adults 18+. Real people in a random queue; skip until you connect. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: 'Webcam face-to-face', desc: 'Live video beats text apps when you want real chemistry.' },
      { title: 'No signup required', desc: 'Start matching in seconds after the age gate.' },
      { title: 'Random adult queue', desc: 'Women and men both join. Use Next to find your preferred vibe.' },
      { title: 'Flirty OK when mutual', desc: 'Consenting adults set the tone together.' },
      { title: 'Mobile friendly', desc: 'Works in phone browsers — no app download.' },
      { title: 'Report & skip', desc: 'Leave any chat that feels wrong immediately.' },
    ],
    sections: [
      {
        title: 'Free video chat with girls online',
        paragraphs: [
          '“Video chat with girls” is one of the most searched stranger-chat intents. This page is for adults who want live webcam conversation — including with women who choose to join free random chat.',
          'Be honest with yourself: random matching cannot promise a female partner every time. Respect, patience, and Next are how you find good chats.',
        ],
        links: [
          { href: '/', label: 'Start video chat with girls' },
          { href: '/chat-with-girls', label: 'Chat with girls' },
          { href: '/hot-video-chat', label: 'Hot video chat' },
        ],
      },
    ],
    faqs: [
      { q: 'Is video chat with girls free?', a: 'Yes. Free 1-on-1 matching with no signup for adults 18+.' },
      { q: 'Will I only match with girls?', a: 'No. The queue is mixed. Keep skipping until you find someone you want to talk to.' },
      { q: 'Is nude video guaranteed?', a: 'No. Intimate chat only happens with mutual consent between adults — never as a guarantee.' },
    ],
    related: [
      { href: '/chat-with-girls', label: 'Chat with girls' },
      { href: '/girls-video-chat', label: 'Girls video chat' },
      { href: '/dirty-talk-video-chat', label: 'Dirty talk video chat' },
      { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
    ],
  },

  'girls-video-chat': {
    metaTitle: 'Girls Video Chat Free — Random Webcam 18+',
    h1: 'Girls Video Chat Free — Random Live Matching',
    badge: 'Girls Video Chat · Adults Only',
    description:
      'Free girls video chat online — random 1-on-1 webcam for adults 18+. No signup. Meet women and other adults in a live queue; skip anytime. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: 'Search intent, honest product', desc: 'Built for people searching girls video chat — delivered as free random adult matching.' },
      { title: 'Women online too', desc: 'Many women use free video chat. Treat every match with respect.' },
      { title: 'Instant start', desc: 'No email, no credits — confirm age and go live.' },
      { title: '1-on-1 privacy', desc: 'Private pairwise sessions, not group rooms.' },
      { title: 'Flirty or friendly', desc: 'You and your match set the tone together.' },
      { title: 'Safety first', desc: '18+ gate, report button, never share personal info early.' },
    ],
    sections: [
      {
        title: 'Girls video chat without fake promises',
        paragraphs: [
          'Marketing pages that claim “hot girls waiting nude” on a random matcher are misleading. Here you get free random video chat for adults, where women may be online — and where consent matters.',
          'If a match is not what you hoped for, hit Next. That is the product.',
        ],
        links: [
          { href: '/', label: 'Start girls video chat' },
          { href: '/video-chat-with-girls', label: 'Video chat with girls' },
          { href: '/adult-video-chat', label: 'Adult video chat' },
        ],
      },
    ],
    faqs: [
      { q: 'What is girls video chat on this site?', a: 'Free random webcam chat for adults 18+. Women use the same queue. Gender is not filtered or guaranteed.' },
      { q: 'Do I pay to unlock girls?', a: 'No. Basic matching is free with no signup.' },
      { q: 'Is everyone 18+?', a: 'Yes. Minors are banned. Leave and report if you suspect someone is underage.' },
    ],
    related: [
      { href: '/video-chat-with-girls', label: 'Video chat with girls' },
      { href: '/chat-with-girls', label: 'Chat with girls' },
      { href: '/hot-video-chat', label: 'Hot video chat' },
      { href: '/flirty-video-chat', label: 'Flirty video chat' },
    ],
  },

  'dirty-talk-video-chat': {
    metaTitle: 'Dirty Talk Video Chat Free — Adult Webcam 18+',
    h1: 'Dirty Talk Video Chat — Free for Consenting Adults',
    badge: 'Dirty Talk Video Chat · 18+',
    description:
      'Free dirty talk video chat for adults 18+. Live 1-on-1 webcam matching — flirty and steamy talk welcome when both people consent. No signup. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: 'Words + video', desc: 'Live webcam plus chat for playful or steamy conversation.' },
      { title: 'Consent is the rule', desc: 'Dirty talk only when mutual. Stop the second someone says no.' },
      { title: 'No signup', desc: 'Confirm 18+ and start matching without an account.' },
      { title: 'Skip freely', desc: 'Not every stranger wants dirty talk — Next is always available.' },
      { title: 'Not a cam studio', desc: 'Random adults, not paid performers on a menu.' },
      { title: 'Report abuse', desc: 'Non-consent and harassment are banned.' },
    ],
    sections: [
      {
        title: 'Dirty talk video chat done respectfully',
        paragraphs: [
          'People search dirty talk video chat when they want adult conversation with heat. This page is for consenting adults using free random matching.',
          'Lead with respect. Ask before escalating. If they are not interested, move on.',
        ],
        links: [
          { href: '/', label: 'Start dirty talk video chat' },
          { href: '/hot-video-chat', label: 'Hot video chat' },
          { href: '/flirty-video-chat', label: 'Flirty video chat' },
        ],
      },
    ],
    faqs: [
      { q: 'Is dirty talk allowed?', a: 'Yes between consenting adults 18+. Non-consent and underage users are banned.' },
      { q: 'Is dirty talk video chat free?', a: 'Yes. Free matching with no signup.' },
      { q: 'Will every match want dirty talk?', a: 'No. Read the room. Skip if they want normal conversation only.' },
    ],
    related: [
      { href: '/hot-video-chat', label: 'Hot video chat' },
      { href: '/adult-video-chat', label: 'Adult video chat' },
      { href: '/late-night-video-chat', label: 'Late night video chat' },
      { href: '/video-chat-with-girls', label: 'Video chat with girls' },
    ],
  },

  'talk-to-strangers': {
    metaTitle: 'Talk to Strangers Online Free — Video Chat',
    h1: 'Talk to Strangers Online — Free Video Chat',
    badge: 'Talk to Strangers',
    description:
      'Talk to strangers online free with live 1-on-1 video chat — no signup. Meet new people instantly for conversation, flirt, or company. Adults 18+. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: 'Instant new conversations', desc: 'No friend requests. Match and talk live.' },
      { title: 'Video + text', desc: 'See each other and keep the chat going in the sidebar.' },
      { title: 'No signup', desc: 'Confirm age and start — that is the whole onboarding.' },
      { title: 'Worldwide', desc: 'People from many countries join the same free queue.' },
      { title: 'Skip anytime', desc: 'Not clicking? Next.' },
      { title: 'Adults 18+', desc: 'Age gate before matching.' },
    ],
    sections: [
      {
        title: 'Talk to strangers without an app',
        paragraphs: [
          'Talking to strangers online is still one of the simplest ways to meet someone new. Free browser video chat keeps that spirit with modern safety basics.',
          'Stay curious, stay respectful, and never share personal details too early.',
        ],
        links: [
          { href: '/', label: 'Talk to strangers now' },
          { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
          { href: '/meet-people-online', label: 'Meet people online' },
        ],
      },
    ],
    faqs: [
      { q: 'Can I talk to strangers for free?', a: 'Yes. Free video matching with no signup for adults 18+.' },
      { q: 'Is it safe to talk to strangers?', a: 'Use Next/Report, hide personal info, and leave uncomfortable chats immediately.' },
      { q: 'Do I need an account?', a: 'No account required.' },
    ],
    related: [
      { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
      { href: '/random-video-chat', label: 'Random video chat' },
      { href: '/omegle-alternative', label: 'Omegle alternative' },
      { href: '/meet-people-online', label: 'Meet people online' },
    ],
  },

  'live-video-chat': {
    metaTitle: 'Live Video Chat Free — Random Webcam No Signup',
    h1: 'Live Video Chat Free — Instant Random Matching',
    badge: 'Live Video Chat',
    description:
      'Free live video chat with strangers — no signup. Instant 1-on-1 webcam matching in your browser. Talk live, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: 'Truly live', desc: 'Real-time WebRTC video — not pre-recorded clips.' },
      { title: 'Random matching', desc: 'Get paired with another available adult in seconds.' },
      { title: 'No signup', desc: 'No email wall before your first live session.' },
      { title: 'Desktop + mobile', desc: 'Works in modern browsers worldwide.' },
      { title: 'Free forever basics', desc: 'No credits required for matching.' },
      { title: 'Safety tools', desc: 'Age gate, skip, and report built in.' },
    ],
    sections: [
      {
        title: 'Free live video chat in the browser',
        paragraphs: [
          'Live video chat means you and another person are on camera at the same time. Open the site, confirm 18+, and start matching.',
          'Use it for casual talk, flirty energy, or late-night company — always with consent.',
        ],
        links: [
          { href: '/', label: 'Start live video chat' },
          { href: '/free-webcam-chat', label: 'Free webcam chat' },
          { href: '/random-video-chat', label: 'Random video chat' },
        ],
      },
    ],
    faqs: [
      { q: 'Is live video chat free?', a: 'Yes. Free matching with no signup for adults 18+.' },
      { q: 'Do I need an app?', a: 'No. Use Chrome, Safari, Firefox, or Edge.' },
      { q: 'Is it 1-on-1?', a: 'Yes. Private pairwise sessions.' },
    ],
    related: [
      { href: '/free-webcam-chat', label: 'Free webcam chat' },
      { href: '/random-video-chat', label: 'Random video chat' },
      { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
      { href: '/hot-video-chat', label: 'Hot video chat' },
    ],
  },

  'nsfw-omegle': {
    metaTitle: 'NSFW Omegle Alternative — Free 18+ Video Chat',
    h1: 'NSFW Omegle Alternative — Free Adult Video Chat',
    badge: 'NSFW Omegle Alternative · 18+',
    description:
      'NSFW Omegle alternative with free 18+ video chat — no signup. Random adult matching, WebRTC privacy, and skip anytime. Adults only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: 'Adult-only matching', desc: '18+ age gate before chat. Minors are prohibited.' },
      { title: 'NSFW-friendly space', desc: 'Consenting adults can keep chats flirty or intimate when mutual.' },
      { title: 'No signup required', desc: 'Confirm age and start matching without an account.' },
      { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible — not archived on servers.' },
      { title: 'Skip & report', desc: 'Next and Report keep you in control of every session.' },
      { title: 'Free matching', desc: 'No credits, subscriptions, or time limits for basic chat.' },
    ],
    sections: [
      {
        title: 'Why search for NSFW Omegle alternatives',
        paragraphs: [
          'People searching NSFW Omegle or Omegle NSFW want adult video chat where explicit content is possible between consenting adults. Parvah is that alternative: 18+ only, random 1-on-1 matching, and no signup.',
          'Unlike Omegle, Parvah has a strict age gate and built-in report tools. NSFW content is allowed when both adults consent — never forced or guaranteed.',
        ],
        bullets: [
          'Free NSFW Omegle alternative',
          '18+ age verification',
          'Consent-first adult chat',
          'WebRTC peer-to-peer video',
        ],
        links: [
          { href: '/', label: 'Start NSFW video chat' },
          { href: '/adult-video-chat', label: 'Adult video chat' },
          { href: '/nsfw-video-chat', label: 'NSFW video chat' },
        ],
      },
      {
        title: 'NSFW Omegle vs Parvah',
        paragraphs: [
          'Omegle shut down in 2023. Parvah carries forward the random stranger chat spirit with modern safety: age gate, report button, and WebRTC privacy.',
          'NSFW searches on Parvah land on adult video chat pages where mutual consent decides the tone — not a porn archive.',
        ],
        links: [
          { href: '/omegle-alternative', label: 'Omegle alternative' },
          { href: '/ometv-alternative', label: 'OmeTV alternative' },
        ],
      },
    ],
    faqs: [
      { q: 'Is this an NSFW Omegle alternative?', a: 'Yes. Parvah is free 18+ random video chat where consenting adults can have NSFW conversations when mutual.' },
      { q: 'Is NSFW content allowed?', a: 'Yes between consenting adults 18+. Non-consent, harassment, and underage users are banned.' },
      { q: 'Do I need to sign up?', a: 'No. Confirm you are 18+ and start matching without an account.' },
      { q: 'Is this safe?', a: 'Use Next/Report, hide personal details, and leave uncomfortable chats immediately.' },
    ],
    related: [
      { href: '/nsfw-video-chat', label: 'NSFW video chat' },
      { href: '/adult-video-chat', label: 'Adult video chat' },
      { href: '/omegle-alternative', label: 'Omegle alternative' },
      { href: '/hot-video-chat', label: 'Hot video chat' },
    ],
  },

  'nsfw-video-chat': {
    metaTitle: 'NSFW Video Chat Free — Adult Webcam 18+',
    h1: 'NSFW Video Chat — Free Adult Webcam Chat',
    badge: 'NSFW Video Chat · 18+',
    description:
      'Free NSFW video chat with strangers — no signup. Random 1-on-1 adult webcam matching, WebRTC privacy, and skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: 'Adult-only space', desc: 'Strict 18+ age gate. Minors are banned.' },
      { title: 'NSFW when mutual', desc: 'Consenting adults can keep chats flirty, steamy, or explicit together.' },
      { title: 'No signup wall', desc: 'Confirm age and start matching without an account.' },
      { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible — not stored on servers.' },
      { title: 'Skip freely', desc: 'Not every stranger wants NSFW chat — Next is always available.' },
      { title: 'Report abuse', desc: 'Non-consent and harassment are prohibited.' },
    ],
    sections: [
      {
        title: 'Free NSFW video chat with consent',
        paragraphs: [
          'NSFW video chat means adult webcam conversations that may include explicit content when both people agree. Parvah is free 18+ random matching with no signup.',
          'Consent is the rule. If the other person is not interested in NSFW topics, respect that and skip. Never pressure anyone.',
        ],
        bullets: [
          'Free NSFW video chat',
          '18+ age verification',
          'Consent-first explicit chat',
          'WebRTC peer-to-peer video',
        ],
        links: [
          { href: '/', label: 'Start NSFW video chat' },
          { href: '/adult-video-chat', label: 'Adult video chat' },
          { href: '/nsfw-omegle', label: 'NSFW Omegle alternative' },
        ],
      },
    ],
    faqs: [
      { q: 'Is NSFW video chat allowed?', a: 'Yes between consenting adults 18+. Non-consent and underage users are banned.' },
      { q: 'Is NSFW video chat free?', a: 'Yes. Free matching with no signup.' },
      { q: 'Will every match want NSFW chat?', a: 'No. Read the room. Skip if they	want normal conversation only.' },
      { q: 'Is this safe?', a: 'Use Next/Report, hide personal details, and leave uncomfortable chats immediately.' },
    ],
    related: [
      { href: '/nsfw-omegle', label: 'NSFW Omegle alternative' },
      { href: '/adult-video-chat', label: 'Adult video chat' },
      { href: '/hot-video-chat', label: 'Hot video chat' },
      { href: '/dirty-talk-video-chat', label: 'Dirty talk video chat' },
    ],
  },

  'omegle-18': {
    metaTitle: 'Omegle 18+ Alternative — Free Adult Video Chat',
    h1: 'Omegle 18+ Alternative — Free Adult Video Chat',
    badge: 'Omegle 18+ Alternative · Adults Only',
    description:
      'Omegle 18+ alternative with free adult video chat — no signup. Random 1-on-1 webcam matching for adults 18+, WebRTC privacy, skip anytime. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: '18+ only matching', desc: 'Strict age gate before chat. Minors are prohibited.' },
      { title: 'Omegle-style random chat', desc: 'Instant 1-on-1 webcam matching with strangers.' },
      { title: 'No signup required', desc: 'Confirm age and start without an account.' },
      { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible — not archived on servers.' },
      { title: 'Skip & report', desc: 'Next and Report keep you in control.' },
      { title: 'Free forever', desc: 'No credits or subscriptions for basic matching.' },
    ],
    sections: [
      {
        title: 'Omegle 18+ alternative for adults',
        paragraphs: [
          'People searching Omegle 18+ or 18+ Omegle want adult random video chat where they can meet other adults without age-restricted content filters. Parvah is that alternative.',
          'Unlike Omegle, Parvah enforces an 18+ age gate and provides report tools. Adult content is allowed when mutual consent exists.',
        ],
        bullets: [
          'Free Omegle 18+ alternative',
          '18+ age verification',
          'Random adult matching',
          'WebRTC peer-to-peer video',
        ],
        links: [
          { href: '/', label: 'Start adult video chat' },
          { href: '/omegle-alternative', label: 'Omegle alternative' },
          { href: '/adult-video-chat', label: 'Adult video chat' },
        ],
      },
    ],
    faqs: [
      { q: 'Is this an Omegle 18+ alternative?', a: 'Yes. Parvah is free 18+ random video chat with no signup.' },
      { q: 'Is this 18+ only?', a: 'Yes. Strictly adults. Minors are banned.' },
      { q: 'Do I need to sign up?', a: 'No. Confirm you are 18+ and start matching.' },
      { q: 'Is adult content allowed?', a: 'Yes between consenting adults. Non-consent is banned.' },
    ],
    related: [
      { href: '/omegle-alternative', label: 'Omegle alternative' },
      { href: '/adult-video-chat', label: 'Adult video chat' },
      { href: '/nsfw-omegle', label: 'NSFW Omegle alternative' },
      { href: '/video-chat-18', label: 'Video chat 18+' },
    ],
  },

  'video-chat-18': {
    metaTitle: 'Video Chat 18+ Free — Adult Webcam No Signup',
    h1: 'Video Chat 18+ — Free Adult Webcam Chat',
    badge: 'Video Chat 18+ · Adults Only',
    description:
      'Free video chat 18+ with strangers — no signup. Random 1-on-1 adult webcam matching, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: '18+ verified', desc: 'Age gate before matching. Minors prohibited.' },
      { title: 'Random adult matching', desc: 'Instant 1-on-1 webcam chat with other adults.' },
      { title: 'No signup', desc: 'Confirm age and start without an account.' },
      { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible.' },
      { title: 'Skip anytime', desc: 'Next button always available.' },
      { title: 'Free matching', desc: 'No credits or subscriptions.' },
    ],
    sections: [
      {
        title: 'Free video chat 18+ for adults',
        paragraphs: [
          'Video chat 18+ means adult webcam chat where participants are verified as 18 or older. Parvah offers free random matching with no signup.',
          'Use it for casual talk, flirty energy, or intimate conversation when both adults consent.',
        ],
        links: [
          { href: '/', label: 'Start video chat 18+' },
          { href: '/adult-video-chat', label: 'Adult video chat' },
          { href: '/omegle-18', label: 'Omegle 18+ alternative' },
        ],
      },
    ],
    faqs: [
      { q: 'Is video chat 18+ free?', a: 'Yes. Free matching with no signup for adults 18+.' },
      { q: 'Is this 18+ only?', a: 'Yes. Strictly adults. Minors are banned.' },
      { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
    ],
    related: [
      { href: '/adult-video-chat', label: 'Adult video chat' },
      { href: '/omegle-18', label: 'Omegle 18+ alternative' },
      { href: '/nsfw-video-chat', label: 'NSFW video chat' },
      { href: '/random-video-chat', label: 'Random video chat' },
    ],
  },

  'random-cam-chat': {
    metaTitle: 'Random Cam Chat Free — No Signup Webcam',
    h1: 'Random Cam Chat Free — Live Webcam Matching',
    badge: 'Random Cam Chat · 18+',
    description:
      'Free random cam chat with strangers — no signup. Instant 1-on-1 webcam matching, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: 'Random webcam matching', desc: 'Get paired with another adult for live 1-on-1 cam chat.' },
      { title: 'No signup', desc: 'Confirm 18+ and start without an account.' },
      { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible — not archived on servers.' },
      { title: 'Skip freely', desc: 'Next button lets you find a better match.' },
      { title: 'Desktop + mobile', desc: 'Works in modern browsers.' },
      { title: 'Free forever', desc: 'No credits for basic matching.' },
    ],
    sections: [
      {
        title: 'Free random cam chat in the browser',
        paragraphs: [
          'Random cam chat pairs you with another adult for live webcam conversation. No signup, no app — just confirm you are 18+ and start matching.',
          'People also search random cam chat free, random webcam chat, and free random cam chat. All lead to the same experience: live 1-on-1 video with strangers.',
        ],
        bullets: [
          'Free random cam chat',
          'No signup required',
          'WebRTC peer-to-peer video',
          'Works on mobile and desktop',
        ],
        links: [
          { href: '/', label: 'Start random cam chat' },
          { href: '/free-webcam-chat', label: 'Free webcam chat' },
          { href: '/random-video-chat', label: 'Random video chat' },
        ],
      },
    ],
    faqs: [
      { q: 'Is random cam chat free?', a: 'Yes. Free matching with no signup for adults 18+.' },
      { q: 'Do I need a webcam?', a: 'Yes. Allow camera access when your browser asks.' },
      { q: 'Is this on mobile?', a: 'Yes. Works in mobile browsers with camera access.' },
    ],
    related: [
      { href: '/free-webcam-chat', label: 'Free webcam chat' },
      { href: '/random-video-chat', label: 'Random video chat' },
      { href: '/live-video-chat', label: 'Live video chat' },
      { href: '/adult-video-chat', label: 'Adult video chat' },
    ],
  },

  'omegle-adult': {
    metaTitle: 'Omegle Adult Alternative — Free 18+ Video Chat',
    h1: 'Omegle Adult Alternative — Free Adult Video Chat',
    badge: 'Omegle Adult Alternative · 18+',
    description:
      'Omegle adult alternative with free 18+ video chat — no signup. Random adult matching, WebRTC privacy, skip anytime. Adults only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: 'Adult-only matching', desc: '18+ age gate before chat. Minors prohibited.' },
      { title: 'Omegle-style random chat', desc: 'Instant 1-on-1 webcam matching with strangers.' },
      { title: 'No signup', desc: 'Confirm age and start without an account.' },
      { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible.' },
      { title: 'Skip & report', desc: 'Next and Report built into every session.' },
      { title: 'Free matching', desc: 'No credits or subscriptions.' },
    ],
    sections: [
      {
        title: 'Omegle adult alternative for 18+ users',
        paragraphs: [
          'People searching Omegle adult or adult Omegle want random video chat where adult content is possible between consenting adults. Parvah is that alternative.',
          'Unlike the original Omegle, Parvah has a strict age gate and report tools. Adult content is allowed when mutual consent exists.',
        ],
        bullets: [
          'Free Omegle adult alternative',
          '18+ age verification',
          'Random adult matching',
          'WebRTC peer-to-peer video',
        ],
        links: [
          { href: '/', label: 'Start adult video chat' },
          { href: '/omegle-alternative', label: 'Omegle alternative' },
          { href: '/adult-video-chat', label: 'Adult video chat' },
        ],
      },
    ],
    faqs: [
      { q: 'Is this an Omegle adult alternative?', a: 'Yes. Parvah is free 18+ random video chat with no signup.' },
      { q: 'Is this 18+ only?', a: 'Yes. Strictly adults. Minors are banned.' },
      { q: 'Is adult content allowed?', a: 'Yes between consenting adults. Non-consent is banned.' },
      { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
    ],
    related: [
      { href: '/omegle-alternative', label: 'Omegle alternative' },
      { href: '/adult-video-chat', label: 'Adult video chat' },
      { href: '/nsfw-omegle', label: 'NSFW Omegle alternative' },
      { href: '/omegle-18', label: 'Omegle 18+ alternative' },
    ],
  },

  'free-adult-video-chat': {
    metaTitle: 'Free Adult Video Chat — No Signup 18+',
    h1: 'Free Adult Video Chat — No Signup Required',
    badge: 'Free Adult Video Chat · 18+',
    description:
      'Free adult video chat with strangers — no signup. Random 1-on-1 webcam matching for adults 18+, WebRTC privacy, skip anytime. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: 'Truly free', desc: 'No credits, subscriptions, or signup for basic matching.' },
      { title: '18+ only', desc: 'Age gate before chat. Minors prohibited.' },
      { title: 'Random adult matching', desc: 'Instant 1-on-1 webcam chat with strangers.' },
      { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible.' },
      { title: 'Skip anytime', desc: 'Next button always available.' },
      { title: 'Report abuse', desc: 'Built-in report tools for safety.' },
    ],
    sections: [
      {
        title: 'Free adult video chat without payment',
        paragraphs: [
          'Free adult video chat means 1-on-1 webcam conversation with strangers at no cost. Parvah offers free random matching with no signup.',
          'People also search free adult video chat no registration, free adult video chat no sign up, and adult video chat free. All lead to the same experience.',
        ],
        bullets: [
          'Free adult video chat',
          'No signup or registration',
          '18+ age verification',
          'WebRTC peer-to-peer video',
        ],
        links: [
          { href: '/', label: 'Start free adult video chat' },
          { href: '/adult-video-chat', label: 'Adult video chat' },
          { href: '/nsfw-video-chat', label: 'NSFW video chat' },
        ],
      },
    ],
    faqs: [
      { q: 'Is adult video chat free?', a: 'Yes. Free matching with no signup for adults 18+.' },
      { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
      { q: 'Is this 18+ only?', a: 'Yes. Strictly adults. Minors are banned.' },
      { q: 'Is adult content allowed?', a: 'Yes between consenting adults. Non-consent is banned.' },
    ],
    related: [
      { href: '/adult-video-chat', label: 'Adult video chat' },
      { href: '/nsfw-video-chat', label: 'NSFW video chat' },
      { href: '/omegle-adult', label: 'Omegle adult alternative' },
      { href: '/hot-video-chat', label: 'Hot video chat' },
    ],
  },

  'random-video-call': {
    metaTitle: 'Random Video Call Free — No Signup 18+',
    h1: 'Random Video Call Free — Live 1-on-1 Calls',
    badge: 'Random Video Call · 18+',
    description:
      'Free random video call with strangers — no signup. Instant 1-on-1 webcam calls, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: 'Random video calling', desc: 'Get paired with another adult for live 1-on-1 video calls.' },
      { title: 'No signup', desc: 'Confirm 18+ and start without an account.' },
      { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible.' },
      { title: 'Skip freely', desc: 'Next button lets you find a better match.' },
      { title: 'Desktop + mobile', desc: 'Works in modern browsers.' },
      { title: 'Free forever', desc: 'No credits for basic calls.' },
    ],
    sections: [
      {
        title: 'Free random video call in the browser',
        paragraphs: [
          'Random video call pairs you with another adult for live 1-on-1 video conversation. No signup, no app — just confirm you are 18+ and start.',
          'People also search random video call free, random video call with strangers, and free random video call. All lead to the same experience.',
        ],
        bullets: [
          'Free random video call',
          'No signup required',
          'WebRTC peer-to-peer video',
          'Works on mobile and desktop',
        ],
        links: [
          { href: '/', label: 'Start random video call' },
          { href: '/random-video-chat', label: 'Random video chat' },
          { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
        ],
      },
    ],
    faqs: [
      { q: 'Is random video call free?', a: 'Yes. Free matching with no signup for adults 18+.' },
      { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
      { q: 'Is this on mobile?', a: 'Yes. Works in mobile browsers with camera access.' },
    ],
    related: [
      { href: '/random-video-chat', label: 'Random video chat' },
      { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
      { href: '/live-video-chat', label: 'Live video chat' },
      { href: '/adult-video-chat', label: 'Adult video chat' },
    ],
  },

  'omegle-free': {
    metaTitle: 'Omegle Free Alternative — No Signup Video Chat',
    h1: 'Omegle Free Alternative — No Signup Required',
    badge: 'Omegle Free Alternative',
    description:
      'Omegle free alternative with no signup video chat. Random 1-on-1 webcam matching, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: 'Free like Omegle', desc: 'No credits, subscriptions, or signup for basic matching.' },
      { title: 'Random matching', desc: 'Instant 1-on-1 webcam chat with strangers.' },
      { title: 'No signup', desc: 'Confirm 18+ and start without an account.' },
      { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible.' },
      { title: 'Skip anytime', desc: 'Next button always available.' },
      { title: '18+ age gate', desc: 'Adults only. Minors prohibited.' },
    ],
    sections: [
      {
        title: 'Omegle free alternative without signup',
        paragraphs: [
          'People searching Omegle free or free Omegle want random video chat without payment or registration. Parvah is that alternative.',
          'Unlike Omegle, Parvah has a strict age gate and report tools. Matching is free with no signup.',
        ],
        bullets: [
          'Free Omegle alternative',
          'No signup or registration',
          '18+ age verification',
          'WebRTC peer-to-peer video',
        ],
        links: [
          { href: '/', label: 'Start free video chat' },
          { href: '/omegle-alternative', label: 'Omegle alternative' },
          { href: '/random-video-chat', label: 'Random video chat' },
        ],
      },
    ],
    faqs: [
      { q: 'Is this like Omegle free?', a: 'Yes. Free random video chat with no signup for adults 18+.' },
      { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
      { q: 'Is this 18+ only?', a: 'Yes. Strictly adults. Minors are banned.' },
      { q: 'Is it really free?', a: 'Yes. No credits or subscriptions for basic matching.' },
    ],
    related: [
      { href: '/omegle-alternative', label: 'Omegle alternative' },
      { href: '/random-video-chat', label: 'Random video chat' },
      { href: '/no-signup-video-chat', label: 'No signup video chat' },
      { href: '/adult-video-chat', label: 'Adult video chat' },
    ],
  },

  'omegle-alternatives': {
    metaTitle: 'Omegle Alternatives Free — No Signup Video Chat',
    h1: 'Omegle Alternatives — Free Random Video Chat',
    badge: 'Omegle Alternatives',
    description:
      'Free Omegle alternatives with no signup video chat. Random 1-on-1 webcam matching, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: 'Top Omegle alternative', desc: 'Parvah is a leading free alternative to Omegle.' },
      { title: 'No signup', desc: 'Confirm 18+ and start without an account.' },
      { title: 'Random matching', desc: 'Instant 1-on-1 webcam chat with strangers.' },
      { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible.' },
      { title: 'Skip anytime', desc: 'Next button always available.' },
      { title: '18+ age gate', desc: 'Adults only. Minors prohibited.' },
    ],
    sections: [
      {
        title: 'Best free Omegle alternatives',
        paragraphs: [
          'Since Omegle shut down, people search for Omegle alternatives that offer free random video chat without signup. Parvah is one of the best options.',
          'Unlike many alternatives, Parvah has a strict age gate, report tools, and WebRTC privacy. No registration required.',
        ],
        bullets: [
          'Free Omegle alternative',
          'No signup or registration',
          '18+ age verification',
          'WebRTC peer-to-peer video',
        ],
        links: [
          { href: '/', label: 'Start video chat' },
          { href: '/omegle-alternative', label: 'Omegle alternative' },
          { href: '/ometv-alternative', label: 'OmeTV alternative' },
        ],
      },
    ],
    faqs: [
      { q: 'Is this a free Omegle alternative?', a: 'Yes. Parvah is free random video chat with no signup for adults 18+.' },
      { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
      { q: 'Is this 18+ only?', a: 'Yes. Strictly adults. Minors are banned.' },
      { q: 'How does it compare to Omegle?', a: 'Parvah has age gate, report tools, and WebRTC privacy. No signup required.' },
    ],
    related: [
      { href: '/omegle-alternative', label: 'Omegle alternative' },
      { href: '/ometv-alternative', label: 'OmeTV alternative' },
      { href: '/chatroulette-alternative', label: 'Chatroulette alternative' },
      { href: '/emerald-chat-alternative', label: 'Emerald Chat alternative' },
    ],
  },

  'videochat': {
    metaTitle: 'Videochat Free — Random Video Chat No Signup',
    h1: 'Videochat Free — Random 1-on-1 Video Chat',
    badge: 'Videochat · 18+',
    description:
      'Free videochat with strangers — no signup. Random 1-on-1 webcam matching, WebRTC privacy, skip anytime. Adults 18+ only. 18+ adult video chat, porn chat, and nude chat with strangers — free, no signup, adults only.',
    highlights: [
      { title: 'Random videochat', desc: 'Get paired with another adult for live 1-on-1 video chat.' },
      { title: 'No signup', desc: 'Confirm 18+ and start without an account.' },
      { title: 'WebRTC privacy', desc: 'Peer-to-peer video when possible.' },
      { title: 'Skip freely', desc: 'Next button lets you find a better match.' },
      { title: 'Desktop + mobile', desc: 'Works in modern browsers.' },
      { title: 'Free forever', desc: 'No credits for basic videochat.' },
    ],
    sections: [
      {
        title: 'Free videochat in the browser',
        paragraphs: [
          'Videochat means live webcam conversation with strangers. Parvah offers free random matching with no signup.',
          'People search videochat, video chat, and free videochat. All lead to the same experience: 1-on-1 video with strangers.',
        ],
        bullets: [
          'Free videochat',
          'No signup required',
          'WebRTC peer-to-peer video',
          'Works on mobile and desktop',
        ],
        links: [
          { href: '/', label: 'Start videochat' },
          { href: '/random-video-chat', label: 'Random video chat' },
          { href: '/live-video-chat', label: 'Live video chat' },
        ],
      },
    ],
    faqs: [
      { q: 'Is videochat free?', a: 'Yes. Free matching with no signup for adults 18+.' },
      { q: 'Do I need to sign up?', a: 'No. Confirm age and start matching.' },
      { q: 'Is this on mobile?', a: 'Yes. Works in mobile browsers with camera access.' },
    ],
    related: [
      { href: '/random-video-chat', label: 'Random video chat' },
      { href: '/live-video-chat', label: 'Live video chat' },
      { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
      { href: '/adult-video-chat', label: 'Adult video chat' },
    ],
  },
};

export const SEO_LANDING_SLUGS = Object.keys(SEO_LANDINGS);

export function getSeoLanding(slug) {
  return SEO_LANDINGS[slug] || null;
}

export function buildSeoLandingMetadata(slug) {
  const landing = getSeoLanding(slug);
  if (!landing) return {};
  const url = `${SITE_URL}/${slug}`;
  return {
    title: landing.metaTitle,
    description: landing.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${landing.metaTitle} | ${SITE_NAME}`,
      description: landing.description,
      url,
      siteName: SITE_NAME,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: landing.h1 }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${landing.metaTitle} | ${SITE_NAME}`,
      description: landing.description,
      images: ['/og-image.jpg'],
    },
  };
}
