import { SITE_URL, SITE_NAME } from './constants';

/**
 * High-intent marketing SEO landings. Keys map to /{slug}.
 * Query-first titles (what people type). Brand only via "| Parvah" template.
 * Honest product: random adult matching — not paid performers / not guaranteed gender.
 * All pages are 18+ only.
 */
export const SEO_LANDINGS = {
  'hot-video-chat': {
    metaTitle: 'Free Video Chat with Strangers — No Signup',
    h1: 'Free Video Chat with Strangers',
    badge: 'Free Video Chat · 18+',
    description:
      'Free video chat with strangers — no signup. Instant 1-on-1 webcam matching for conversation. For people 18 and older. Skip anytime.',
    highlights: [
      { title: 'Instant hot matching', desc: 'Join the live queue and get paired for 1-on-1 video in seconds.' },
      { title: 'Friendly vibe welcome', desc: 'Keep the chat kind and curious. Skip if the conversation is not a fit.' },
      { title: 'No signup, no credits', desc: 'Confirm 18+, allow camera, and start — no account wall.' },
      { title: 'Private WebRTC video', desc: 'Peer-to-peer streams are not archived on our servers.' },
      { title: 'Adults only', desc: 'Strict 18+ age gate. Underage users are banned.' },
      { title: 'Skip & report', desc: 'Next and Report keep you in control of every session.' },
    ],
    sections: [
      {
        title: 'What this free video chat is',
        paragraphs: [
          'This page is free random video chat — a live 1-on-1 conversation with another person 18 or older. It is not a catalog of paid performers.',
          'Who you meet varies. Use Next until the conversation is a good fit. Sexual content and nudity are not allowed.',
        ],
        bullets: [
          'Free live video chat in the browser',
          'No signup and no subscription',
          'Consent-first friendly conversation',
          'Works on mobile and desktop',
        ],
        links: [
          { href: '/', label: 'Start live video chat' },
          { href: '/flirty-video-chat', label: 'friendly video chat' },
          { href: '/video-chat-with-girls', label: 'Video chat with girls' },
        ],
      },
    ],
    faqs: [
      { q: 'Is live video chat free?', a: 'Yes — free matching with no credits or signup. Confirm you are 18+ and start.' },
      { q: 'Is this the same as a performer site?', a: 'No. Matching is random between real people. We do not sell performances.' },
      { q: 'Can chats become sexual?', a: 'No. Sexual content and nudity are not allowed. Leave and use Report if someone crosses that line.' },
    ],
    related: [
      { href: '/flirty-video-chat', label: 'friendly video chat' },
      { href: '/casual-video-chat', label: 'casual video chat' },
      { href: '/video-chat-with-girls', label: 'Video chat with girls' },
      { href: '/random-video-chat', label: 'Random video chat' },
      { href: '/adult-video-chat', label: '18+ video chat' },
    ],
  },

  'flirty-video-chat': {
    metaTitle: 'Friendly Video Chat Free — Talk with Strangers',
    h1: 'Friendly Video Chat — Meet Someone New',
    badge: 'Friendly Video Chat · 18+',
    description:
      'Free friendly video chat with strangers — no signup. Live 1-on-1 webcam matching for casual conversation. For people 18 and older.',
    highlights: [
      { title: 'Kind first, pressure never', desc: 'Start with a normal hello. Leave if the other person is not comfortable.' },
      { title: 'Real people, live video', desc: '1-on-1 chat with another adult in the queue — not bots or scripted profiles.' },
      { title: 'Great for shy openers', desc: 'A smile or a simple “how’s your night?” beats awkward silence.' },
      { title: 'Skip without guilt', desc: 'If the spark is missing, Next is one tap away.' },
      { title: 'No account needed', desc: 'Talk without building a public profile.' },
      { title: '18+ community', desc: 'Age gate and report tools. Sexual content is not allowed.' },
    ],
    sections: [
      {
        title: 'How to keep friendly video chat fun',
        paragraphs: [
          'Friendly video chat means a normal live conversation. Ask open questions, be respectful, and use Next if you are not enjoying the chat.',
          'Free matching, no signup, and safety controls so you can enjoy chemistry without oversharing personal details.',
        ],
        links: [
          { href: '/', label: 'Start friendly chat' },
          { href: '/hot-video-chat', label: 'live video chat' },
          { href: '/chat-with-girls', label: 'Chat with new people' },
        ],
      },
    ],
    faqs: [
      { q: 'What is friendly video chat?', a: 'A live 1-on-1 webcam conversation with someone new. It is for talking, not adult entertainment.' },
      { q: 'Do I need a public profile?', a: 'No. No profiles or signup — just instant matching for adults 18+.' },
      { q: 'Is chatting allowed?', a: 'Yes between consenting adults. Harassment and non-consent are not allowed.' },
    ],
    related: [
      { href: '/hot-video-chat', label: 'live video chat' },
      { href: '/chat-with-girls', label: 'Chat with new people' },
      { href: '/meet-people-online', label: 'Meet people online' },
      { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
    ],
  },

  'meet-people-online': {
    metaTitle: 'Meet People Online Free — Live Video Chat',
    h1: 'Meet People Online Through Live Video Chat',
    badge: 'Meet People Online · 18+',
    description:
      'Meet people online free with live 1-on-1 video chat — no signup. Talk, chat, or find real chemistry with adults worldwide. Skip anytime.',
    highlights: [
      { title: 'Face-to-face from minute one', desc: 'Video beats endless text apps when you want real presence.' },
      { title: 'New people every Next', desc: 'Random matching means you can meet someone new as often as you like.' },
      { title: 'Friendship to spark', desc: 'Some chats stay friendly. Some turn friendly. You decide together.' },
      { title: 'Worldwide queue', desc: 'Talk with adults across regions without downloading another social app.' },
      { title: 'Privacy-minded', desc: 'No public profile wall. WebRTC peer video when networks allow.' },
      { title: 'Free forever matching', desc: 'No credits to “boost” visibility — everyone enters the same queue.' },
    ],
    sections: [
      {
        title: 'Meet people online without the profile-app grind',
        paragraphs: [
          'If swiping feels empty, live video chat is a faster way to meet people online. You are paired with another available adult for a real-time conversation — then keep the chat or skip.',
          'Protect your privacy: never share your address, phone, or payment apps on first contact.',
        ],
        links: [
          { href: '/', label: 'Meet someone now' },
          { href: '/talk-to-strangers', label: 'Talk to strangers' },
          { href: '/flirty-video-chat', label: 'friendly video chat' },
        ],
      },
    ],
    faqs: [
      { q: 'Can I meet people online for free?', a: 'Yes. Free live video chat with no signup. Confirm 18+ and start matching.' },
      { q: 'Is this a dating site?', a: 'No. It is free random video chat for conversation. Some people become friends. The product is not a dating service.' },
      { q: 'Is meeting strangers on video safe?', a: 'It can be when you use Next/Report, hide personal details, and leave non-consensual chats immediately.' },
    ],
    related: [
      { href: '/talk-to-strangers', label: 'Talk to strangers' },
      { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
      { href: '/random-video-chat', label: 'Random video chat' },
      { href: '/chat-with-girls', label: 'Chat with new people' },
    ],
  },

  'video-chat-with-strangers': {
    metaTitle: 'Video Chat with Strangers Free — No Signup',
    h1: 'Video Chat with Strangers — Free & Instant',
    badge: 'Video Chat with Strangers',
    description:
      'Free video chat with strangers — no signup. Instant 1-on-1 webcam matching. Talk, chat, or connect live with new people worldwide. Adults 18+ only.',
    highlights: [
      { title: 'Classic stranger chat energy', desc: 'The Omegle-style surprise of meeting someone new — rebuilt for modern browsers.' },
      { title: '1-on-1 only', desc: 'Private pairwise sessions, not crowded group rooms.' },
      { title: 'Text + video', desc: 'Say hello on camera and keep the chat going with live text.' },
      { title: 'Adult rules', desc: '18+ gate, consent-first conversation, report tools for abuse.' },
      { title: 'Works on phones', desc: 'Mobile browsers supported — allow camera and mic when prompted.' },
      { title: 'Zero signup friction', desc: 'No email verification before your first stranger match.' },
    ],
    sections: [
      {
        title: 'Why people search for video chat with strangers',
        paragraphs: [
          'Stranger video chat is about discovery. You do not need a bio or mutual friends — just curiosity and respect.',
          'Whether you want casual talk, light banter, or a late-night connection, start matching and use Next until the conversation clicks.',
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
        a: 'Another available adult in the live queue. Matches are random — keep skipping until the vibe fits. Gender, looks, and inappropriate content are not guaranteed.',
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
      { href: '/chat-with-girls', label: 'Chat with new people' },
    ],
  },

  'late-night-video-chat': {
    metaTitle: 'Late Night Video Chat Free — Webcam with Strangers',
    h1: 'Late Night Video Chat — Company When You Need It',
    badge: 'Late Night Video Chat · 18+',
    description:
      'Free late night video chat for adults 18+. Instant 1-on-1 webcam matching for quiet talks, friendly energy, or midnight company — no signup.',
    highlights: [
      { title: 'Built for night owls', desc: 'Jump into live chat without setting up a public profile.' },
      { title: 'Talk or spark', desc: 'Vent, laugh, chat, or just share the silence with another adult online.' },
      { title: 'Fast re-match', desc: 'Quiet queue? Hit Next and keep looking for someone awake with you.' },
      { title: 'Camera optional mid-chat', desc: 'Start with video, then use controls if you need a quick break.' },
      { title: 'Consent always', desc: 'Late-night conversation is fine only when mutual. Pressure is not.' },
      { title: 'Free & private-minded', desc: 'No credits. WebRTC peer video when possible.' },
    ],
    sections: [
      {
        title: 'Late night video chat without the app clutter',
        paragraphs: [
          'Late night is when people search for company. Free 18+ webcam matching in the browser — confirm 18+ and meet someone still awake.',
          'Keep expectations grounded: random chat can be magical or awkward. Skip freely and stay safe with personal details.',
        ],
        links: [
          { href: '/', label: 'Start late night chat' },
          { href: '/hot-video-chat', label: 'live video chat' },
          { href: '/casual-video-chat', label: 'casual video chat' },
        ],
      },
    ],
    faqs: [
      { q: 'Is late night video chat free?', a: 'Yes. No night-time fees or signup requirements for adults 18+.' },
      { q: 'Will people be online at night?', a: 'The queue is live worldwide. Activity varies by hour — keep Next handy.' },
      { q: 'Can late night chats get friendly?', a: 'Often they do, when both adults consent. Always respect a no and use Report for abuse.' },
    ],
    related: [
      { href: '/hot-video-chat', label: 'live video chat' },
      { href: '/flirty-video-chat', label: 'friendly video chat' },
      { href: '/free-webcam-chat', label: 'Free webcam chat' },
      { href: '/adult-video-chat', label: '18+ video chat' },
    ],
  },

  'free-webcam-chat': {
    metaTitle: 'Free Webcam Chat — No Signup Video Chat',
    h1: 'Free Webcam Chat — Live 1-on-1 in Your Browser',
    badge: 'Free Webcam Chat · 18+',
    description:
      'Free webcam chat with no signup. Instant 1-on-1 video matching with strangers, WebRTC privacy, and skip anytime. Adults 18+ only.',
    highlights: [
      { title: 'Truly free matching', desc: 'No coin packs or “premium peek” upsells — basic matching stays free.' },
      { title: 'Webcam + mic ready', desc: 'Allow permissions once, then start live video chat.' },
      { title: 'Browser-native', desc: 'Works in Chrome, Safari, Firefox, and Edge on desktop or mobile.' },
      { title: 'Adult friendly OK', desc: 'Consenting adults can keep chats playful or hot. Non-consent is banned.' },
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
      { href: '/hot-video-chat', label: 'live video chat' },
      { href: '/no-signup-video-chat', label: 'No signup video chat' },
    ],
  },

  'chat-with-girls': {
    metaTitle: 'Meet New People Free — Live Video Chat 18+',
    h1: 'Meet New People with Free Live Video Chat',
    badge: 'Meet New People · 18+',
    description:
      'Free video chat with new people — no signup. Random 1-on-1 matching for people 18 and older. Gender is not filtered. Skip anytime.',
    highlights: [
      { title: 'Live video, not fake profiles', desc: '1-on-1 webcam matching with real adults in the queue — not photo catalogs.' },
      { title: 'Women join the same free queue', desc: 'Many women use random video chat. Matches are random — keep Next handy.' },
      { title: 'No signup wall', desc: 'Confirm 18+, allow camera, and start chatting without an account.' },
      { title: 'Friendly when mutual', desc: 'Playful talk is welcome between consenting adults. Pressure is not.' },
      { title: 'Honest expectations', desc: 'Not a performer directory. No guaranteed looks, gender, or private shows.' },
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
          'Consent-first chatting',
          'Not paid performers or paid companionship',
        ],
        links: [
          { href: '/', label: 'Start video chat now' },
          { href: '/video-chat-with-girls', label: 'Video chat with girls' },
          { href: '/flirty-video-chat', label: 'friendly video chat' },
        ],
      },
    ],
    faqs: [
      { q: 'Can I chat with girls for free?', a: 'Yes. Free random video chat with no signup. Women who are 18+ also use the queue. Matches are random.' },
      { q: 'Are these real girls or performers?', a: 'Real adult users. This is not a paid performer site and does not guarantee gender or inappropriate content.' },
      { q: 'Is this 18+ only?', a: 'Yes. Strictly adults. Minors are prohibited.' },
    ],
    related: [
      { href: '/video-chat-with-girls', label: 'Video chat with girls' },
      { href: '/girls-video-chat', label: 'Girls video chat' },
      { href: '/flirty-video-chat', label: 'friendly video chat' },
      { href: '/random-video-chat', label: 'Random video chat' },
    ],
  },

  'video-chat-with-girls': {
    metaTitle: 'Video Chat with New People — Free, No Signup',
    h1: 'Video Chat with New People — Free Live Webcam',
    badge: 'Video Chat with New People · 18+',
    description:
      'Free video chat with new people — no signup. Instant 1-on-1 webcam matching for people 18 and older. Matches are random. Skip anytime.',
    highlights: [
      { title: 'Webcam face-to-face', desc: 'Live video beats text apps when you want real chemistry.' },
      { title: 'No signup required', desc: 'Start matching in seconds after the age gate.' },
      { title: 'Random adult queue', desc: 'Women and men both join. Use Next to find your preferred vibe.' },
      { title: 'Friendly OK when mutual', desc: 'Consenting adults set the tone together.' },
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
          { href: '/chat-with-girls', label: 'Chat with new people' },
          { href: '/hot-video-chat', label: 'live video chat' },
        ],
      },
    ],
    faqs: [
      { q: 'Is video chat with girls free?', a: 'Yes. Free 1-on-1 matching with no signup for adults 18+.' },
      { q: 'Will I only match with girls?', a: 'No. The queue is mixed. Keep skipping until you find someone you want to talk to.' },
      { q: 'Is private video guaranteed?', a: 'No. friendly chat only happens with mutual consent between adults — never as a guarantee.' },
    ],
    related: [
      { href: '/chat-with-girls', label: 'Chat with new people' },
      { href: '/girls-video-chat', label: 'Girls video chat' },
      { href: '/casual-video-chat', label: 'casual video chat' },
      { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
    ],
  },

  'girls-video-chat': {
    metaTitle: 'Random Video Chat with New People — Free 18+',
    h1: 'Random Video Chat with New People',
    badge: 'New People · 18+',
    description:
      'Free random video chat with new people. 1-on-1 webcam for people 18 and older. No signup. Gender is not filtered. Skip anytime.',
    highlights: [
      { title: 'Search intent, honest product', desc: 'Built for people searching girls video chat — delivered as free random adult matching.' },
      { title: 'Women online too', desc: 'Many women use free video chat. Treat every match with respect.' },
      { title: 'Instant start', desc: 'No email, no credits — confirm age and go live.' },
      { title: '1-on-1 privacy', desc: 'Private pairwise sessions, not group rooms.' },
      { title: 'Friendly or friendly', desc: 'You and your match set the tone together.' },
      { title: 'Safety first', desc: '18+ gate, report button, never share personal info early.' },
    ],
    sections: [
      {
        title: 'Girls video chat without fake promises',
        paragraphs: [
          'Marketing pages that claim “people waiting online” on a random matcher are misleading. Here you get free random video chat for adults, where women may be online — and where consent matters.',
          'If a match is not what you hoped for, hit Next. That is the product.',
        ],
        links: [
          { href: '/', label: 'Start girls video chat' },
          { href: '/video-chat-with-girls', label: 'Video chat with girls' },
          { href: '/adult-video-chat', label: '18+ video chat' },
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
      { href: '/chat-with-girls', label: 'Chat with new people' },
      { href: '/hot-video-chat', label: 'live video chat' },
      { href: '/flirty-video-chat', label: 'friendly video chat' },
    ],
  },

  'casual-video-chat': {
    metaTitle: 'Casual Video Chat Free — Talk with Strangers',
    h1: 'Casual Video Chat — Free Conversation',
    badge: 'Casual Video Chat · 18+',
    description:
      'Free casual video chat for people 18 and older. Live 1-on-1 webcam matching for normal conversation. No signup. Sexual content is not allowed.',
    highlights: [
      { title: 'Words + video', desc: 'Live webcam plus chat for playful or lively conversation.' },
      { title: 'Conversation only', desc: 'This is for talking. Sexual content and nudity are not allowed.' },
      { title: 'No signup', desc: 'Confirm 18+ and start matching without an account.' },
      { title: 'Skip freely', desc: 'Not every stranger wants casual conversation — Next is always available.' },
      { title: 'Not a cam studio', desc: 'Random adults, not paid performers on a menu.' },
      { title: 'Report abuse', desc: 'Non-consent and harassment are banned.' },
    ],
    sections: [
      {
        title: 'Casual video chat, clearly explained',
        paragraphs: [
          'People looking for a simple video chat can start here. You match at random with another person who is 18 or older.',
          'Be respectful. If they want to stop, use Next. Harassment, sexual content, and nudity are not allowed.',
        ],
        links: [
          { href: '/', label: 'Start casual video chat' },
          { href: '/hot-video-chat', label: 'live video chat' },
          { href: '/flirty-video-chat', label: 'friendly video chat' },
        ],
      },
    ],
    faqs: [
      { q: 'Is this only for casual conversation?', a: 'Yes. It is free random video chat. Sexual content and underage use are not allowed.' },
      { q: 'Is casual video chat free?', a: 'Yes. Free matching with no signup.' },
      { q: 'Will every match want casual conversation?', a: 'No. Read the room. Skip if they want normal conversation only.' },
    ],
    related: [
      { href: '/hot-video-chat', label: 'live video chat' },
      { href: '/adult-video-chat', label: '18+ video chat' },
      { href: '/late-night-video-chat', label: 'Late night video chat' },
      { href: '/video-chat-with-girls', label: 'Video chat with girls' },
    ],
  },

  'talk-to-strangers': {
    metaTitle: 'Talk to Strangers Online Free — Video Chat',
    h1: 'Talk to Strangers Online — Free Video Chat',
    badge: 'Talk to Strangers',
    description:
      'Talk to strangers online free with live 1-on-1 video chat — no signup. Meet new people instantly for conversation, chat, or company. Adults 18+.',
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
      'Free live video chat with strangers — no signup. Instant 1-on-1 webcam matching in your browser. Talk live, skip anytime. Adults 18+ only.',
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
          'Use it for casual talk, friendly energy, or late-night company — always with consent.',
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
      { href: '/hot-video-chat', label: 'live video chat' },
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
