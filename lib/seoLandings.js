import { SITE_URL, SITE_NAME } from './constants';

/**
 * High-intent SEO landing configs. Each key maps to /{slug}.
 * Keep claims honest: random adult matching, not paid cam models.
 */
export const SEO_LANDINGS = {
  'hot-video-chat': {
    metaTitle: 'Hot Video Chat Free — Adult Webcam Chat 18+',
    h1: 'Hot Video Chat Free — Instant Adult Webcam Matching',
    badge: 'Hot Video Chat · 18+',
    description:
      'Free hot video chat with no signup. Match adults 18+ for flirty energy, late-night chemistry, and live 1-on-1 webcam talk on Parvah — skip anytime.',
    highlights: [
      {
        title: 'Instant hot matching',
        desc: 'Join the live queue and get paired with another adult for 1-on-1 video in seconds.',
      },
      {
        title: 'Flirty vibe welcome',
        desc: 'Keep chats playful or steamy when both people consent. Skip if the energy is off.',
      },
      {
        title: 'No signup, no credits',
        desc: 'Open the browser, confirm 18+, and start — no account wall or pay-per-minute tricks.',
      },
      {
        title: 'Private WebRTC video',
        desc: 'Peer-to-peer streams are not archived on Parvah servers.',
      },
      {
        title: 'Adults only',
        desc: 'Strict 18+ age gate before matching. Underage users are banned.',
      },
      {
        title: 'Skip & report',
        desc: 'Next and Report keep you in control of every session.',
      },
    ],
    sections: [
      {
        title: 'What hot video chat means on Parvah',
        paragraphs: [
          'Hot video chat on Parvah is free random adult webcam chat — not a catalog of paid performers. You match with real adults in the queue who may want flirty talk, late-night company, or mutual chemistry.',
          'Gender and vibe vary. Use Next until you find someone who matches your energy. Consent is required for anything intimate.',
        ],
        bullets: [
          'Free adult hot video chat in the browser',
          'No signup and no subscription required',
          'Consent-first flirty and intimate conversation',
          'Works on mobile and desktop worldwide',
        ],
        links: [
          { href: '/', label: 'Start hot video chat' },
          { href: '/adult-video-chat', label: 'Adult video chat hub' },
          { href: '/flirty-video-chat', label: 'Flirty video chat' },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is hot video chat free on Parvah?',
        a: 'Yes. Parvah is free hot adult video chat with no credits or signup. Confirm you are 18+ and start matching.',
      },
      {
        q: 'Is this the same as cam girl sites?',
        a: 'No. Parvah randomly matches real users. It does not sell performers or guarantee nude shows.',
      },
      {
        q: 'Can chats get flirty or intimate?',
        a: 'Yes when both adults consent. Stop immediately if the other person is not interested.',
      },
    ],
    related: [
      { href: '/adult-video-chat', label: 'Adult video chat' },
      { href: '/flirty-video-chat', label: 'Flirty video chat' },
      { href: '/late-night-video-chat', label: 'Late night video chat' },
      { href: '/random-video-chat', label: 'Random video chat' },
      { href: '/omegle-alternative', label: 'Omegle alternative' },
    ],
  },

  'flirty-video-chat': {
    metaTitle: 'Flirty Video Chat Free — Talk & Spark Chemistry 18+',
    h1: 'Flirty Video Chat — Meet Someone New Tonight',
    badge: 'Flirty Video Chat · 18+',
    description:
      'Free flirty video chat with strangers — no signup. Live 1-on-1 webcam matching for playful talks, chemistry, and adult connections on Parvah (18+).',
    highlights: [
      {
        title: 'Playful first, pressure never',
        desc: 'Start light, read the room, and only escalate when both adults are clearly into it.',
      },
      {
        title: 'Real people, live video',
        desc: '1-on-1 WebRTC chat with another adult in the queue — not bots or scripted profiles.',
      },
      {
        title: 'Great for shy openers',
        desc: 'A smile, a joke, or a simple “how’s your night?” beats awkward silence.',
      },
      {
        title: 'Skip without guilt',
        desc: 'If the spark is missing, Next is one tap away.',
      },
      {
        title: 'No account drama',
        desc: 'Flirt without building a public dating profile.',
      },
      {
        title: '18+ community',
        desc: 'Age gate and report tools keep the space adult-focused.',
      },
    ],
    sections: [
      {
        title: 'How to keep flirty video chat fun',
        paragraphs: [
          'Flirty video chat works best when you lead with respect. Compliment the vibe, ask open questions, and mirror their energy. If they want friendship-only chat, stay there — or skip.',
          'Parvah is built for spontaneity: free matching, no signup, and safety controls so you can enjoy chemistry without oversharing personal details.',
        ],
        links: [
          { href: '/', label: 'Start flirty chat' },
          { href: '/hot-video-chat', label: 'Hot video chat' },
          { href: '/meet-people-online', label: 'Meet people online' },
        ],
      },
    ],
    faqs: [
      {
        q: 'What is flirty video chat?',
        a: 'Flirty video chat is live webcam conversation with playful chemistry between consenting adults. On Parvah it happens through random 1-on-1 matching.',
      },
      {
        q: 'Do I need a dating profile?',
        a: 'No. Parvah has no profiles or signup — just instant matching for adults 18+.',
      },
      {
        q: 'Is flirting allowed?',
        a: 'Yes between consenting adults. Harassment and non-consent are not allowed.',
      },
    ],
    related: [
      { href: '/hot-video-chat', label: 'Hot video chat' },
      { href: '/adult-video-chat', label: 'Adult video chat' },
      { href: '/meet-people-online', label: 'Meet people online' },
      { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
    ],
  },

  'meet-people-online': {
    metaTitle: 'Meet People Online Free — Live Video Chat 18+',
    h1: 'Meet People Online Through Live Video Chat',
    badge: 'Meet People Online · 18+',
    description:
      'Meet people online free with live 1-on-1 video chat — no signup. Talk, flirt, or find real chemistry with adults worldwide on Parvah (18+).',
    highlights: [
      {
        title: 'Face-to-face from minute one',
        desc: 'Video beats endless text apps when you want real presence and instant chemistry.',
      },
      {
        title: 'New people every Next',
        desc: 'Random matching means you can meet someone new as often as you like.',
      },
      {
        title: 'Friendship to spark',
        desc: 'Some chats stay friendly. Some turn flirty. You decide together.',
      },
      {
        title: 'Worldwide queue',
        desc: 'Talk with adults across regions without downloading another social app.',
      },
      {
        title: 'Privacy-minded',
        desc: 'No public profile wall. WebRTC peer video when networks allow.',
      },
      {
        title: 'Free forever matching',
        desc: 'No credits to “boost” visibility — everyone enters the same queue.',
      },
    ],
    sections: [
      {
        title: 'Meet people online without the dating-app grind',
        paragraphs: [
          'If swiping feels empty, live video chat is a faster way to meet people online. Parvah pairs you with another available adult for a real-time conversation — then you keep the chat or skip.',
          'Protect your privacy while you explore: never share your address, phone, or payment apps on first contact.',
        ],
        links: [
          { href: '/', label: 'Meet someone now' },
          { href: '/adult-video-chat', label: 'Adult video chat' },
          { href: '/flirty-video-chat', label: 'Flirty video chat' },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I meet people online for free on Parvah?',
        a: 'Yes. Parvah is free live video chat with no signup. Confirm 18+ and start matching.',
      },
      {
        q: 'Is this for dating or just talking?',
        a: 'Both happen. Some users want friendship, others want flirty chemistry. Mutual consent sets the tone.',
      },
      {
        q: 'Is meeting strangers on video safe?',
        a: 'It can be when you use Next/Report, hide personal details, and leave non-consensual chats immediately.',
      },
    ],
    related: [
      { href: '/flirty-video-chat', label: 'Flirty video chat' },
      { href: '/video-chat-with-strangers', label: 'Video chat with strangers' },
      { href: '/random-video-chat', label: 'Random video chat' },
      { href: '/anonymous-video-chat', label: 'Anonymous video chat' },
    ],
  },

  'video-chat-with-strangers': {
    metaTitle: 'Video Chat with Strangers Free — No Signup 18+',
    h1: 'Video Chat with Strangers — Free & Instant',
    badge: 'Video Chat with Strangers',
    description:
      'Free video chat with strangers — no signup. Instant 1-on-1 webcam matching for adults 18+. Talk, flirt, or connect live on Parvah.',
    highlights: [
      {
        title: 'Classic stranger chat energy',
        desc: 'The Omegle-style surprise of meeting someone new — rebuilt for modern browsers.',
      },
      {
        title: '1-on-1 only',
        desc: 'Private pairwise sessions, not crowded group rooms.',
      },
      {
        title: 'Text + video',
        desc: 'Say hello on camera and keep the chat going with live text.',
      },
      {
        title: 'Adult rules',
        desc: '18+ gate, consent-first intimacy, report tools for abuse.',
      },
      {
        title: 'Works on phones',
        desc: 'Mobile browsers supported — allow camera and mic when prompted.',
      },
      {
        title: 'Zero signup friction',
        desc: 'No email verification before your first stranger match.',
      },
    ],
    sections: [
      {
        title: 'Why people still want video chat with strangers',
        paragraphs: [
          'Stranger video chat is about discovery. You do not need a bio or mutual friends — just curiosity and respect. Parvah keeps that spirit with free matching and clearer adult safety basics.',
          'Whether you want casual talk, flirty banter, or a late-night connection, start on the homepage and use Next until the conversation clicks.',
        ],
        links: [
          { href: '/', label: 'Chat with strangers now' },
          { href: '/omegle-alternative', label: 'Omegle alternative' },
          { href: '/no-signup-video-chat', label: 'No signup video chat' },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is video chat with strangers free?',
        a: 'Yes on Parvah — free matching with no signup for adults 18+.',
      },
      {
        q: 'Who will I meet?',
        a: 'Another available adult in the live queue. Matches are random, so keep skipping until the vibe fits.',
      },
      {
        q: 'Is it anonymous?',
        a: 'You do not create a public profile. Still avoid sharing personal identifiers on camera or in text.',
      },
    ],
    related: [
      { href: '/random-video-chat', label: 'Random video chat' },
      { href: '/anonymous-video-chat', label: 'Anonymous video chat' },
      { href: '/adult-video-chat', label: 'Adult video chat' },
      { href: '/omegle-alternative', label: 'Omegle alternative' },
    ],
  },

  'late-night-video-chat': {
    metaTitle: 'Late Night Video Chat Free — Adult Webcam 18+',
    h1: 'Late Night Video Chat — Company When You Need It',
    badge: 'Late Night Video Chat · 18+',
    description:
      'Free late night video chat for adults 18+. Instant 1-on-1 webcam matching for quiet talks, flirty energy, or midnight company — no signup on Parvah.',
    highlights: [
      {
        title: 'Built for night owls',
        desc: 'When the day is done, jump into live chat without setting up a dating profile.',
      },
      {
        title: 'Talk or spark',
        desc: 'Vent, laugh, flirt, or just share the silence with another adult online.',
      },
      {
        title: 'Fast re-match',
        desc: 'Quiet queue? Hit Next and keep looking for someone awake with you.',
      },
      {
        title: 'Camera optional mid-chat',
        desc: 'Start with video, then use controls if you need a quick break.',
      },
      {
        title: 'Consent always',
        desc: 'Late-night intimacy is fine only when mutual. Pressure is not.',
      },
      {
        title: 'Free & private-minded',
        desc: 'No credits. WebRTC peer video when possible.',
      },
    ],
    sections: [
      {
        title: 'Late night video chat without the app clutter',
        paragraphs: [
          'Late night is when people search for company. Parvah gives you free adult webcam matching in the browser — open the site, confirm 18+, and meet someone still awake.',
          'Keep expectations grounded: random chat can be magical or awkward. Skip freely and stay safe with personal details.',
        ],
        links: [
          { href: '/', label: 'Start late night chat' },
          { href: '/hot-video-chat', label: 'Hot video chat' },
          { href: '/flirty-video-chat', label: 'Flirty video chat' },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is late night video chat free?',
        a: 'Yes. Parvah has no night-time fees or signup requirements for adults 18+.',
      },
      {
        q: 'Will people be online at night?',
        a: 'The queue is live worldwide. Activity varies by hour — keep Next handy if wait times stretch.',
      },
      {
        q: 'Can late night chats get flirty?',
        a: 'Often they do, when both adults consent. Always respect a no and use Report for abuse.',
      },
    ],
    related: [
      { href: '/hot-video-chat', label: 'Hot video chat' },
      { href: '/adult-video-chat', label: 'Adult video chat' },
      { href: '/meet-people-online', label: 'Meet people online' },
      { href: '/free-webcam-chat', label: 'Free webcam chat' },
    ],
  },

  'free-webcam-chat': {
    metaTitle: 'Free Webcam Chat — No Signup Adult Video Chat 18+',
    h1: 'Free Webcam Chat — Live 1-on-1 in Your Browser',
    badge: 'Free Webcam Chat · 18+',
    description:
      'Free webcam chat with no signup. Instant adult 1-on-1 video matching, WebRTC privacy, and skip anytime on Parvah — for adults 18+ only.',
    highlights: [
      {
        title: 'Truly free matching',
        desc: 'No coin packs, no “premium peek” upsells — basic matching stays free.',
      },
      {
        title: 'Webcam + mic ready',
        desc: 'Allow permissions once, then start live adult video chat.',
      },
      {
        title: 'Browser-native',
        desc: 'Works in Chrome, Safari, Firefox, and Edge on desktop or mobile.',
      },
      {
        title: 'Adult flirty OK',
        desc: 'Consenting adults can keep chats playful or hot. Non-consent is banned.',
      },
      {
        title: 'Safety controls',
        desc: 'Age gate, Next, and Report are part of every session.',
      },
      {
        title: 'No profile farm',
        desc: 'You are not maintaining a public bio for strangers to browse.',
      },
    ],
    sections: [
      {
        title: 'Free webcam chat that respects your time',
        paragraphs: [
          'Searchers for free webcam chat usually want two things: live video and no payment wall. Parvah is built for that — open the site, confirm you are an adult, and match.',
          'It is random adult matching, not a paid cam studio. That honesty helps users stay and return.',
        ],
        links: [
          { href: '/', label: 'Start free webcam chat' },
          { href: '/no-signup-video-chat', label: 'No signup video chat' },
          { href: '/adult-video-chat', label: 'Adult video chat' },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is webcam chat really free?',
        a: 'Yes. Parvah does not charge for basic adult matching and does not require signup.',
      },
      {
        q: 'Do I need to download software?',
        a: 'No. Use a modern browser with camera access.',
      },
      {
        q: 'Is free webcam chat for adults?',
        a: 'Parvah is 18+ only. Minors are prohibited.',
      },
    ],
    related: [
      { href: '/adult-video-chat', label: 'Adult video chat' },
      { href: '/hot-video-chat', label: 'Hot video chat' },
      { href: '/no-signup-video-chat', label: 'No signup video chat' },
      { href: '/random-video-chat', label: 'Random video chat' },
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
