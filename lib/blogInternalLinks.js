/**
 * Inject first-occurrence contextual internal links into blog HTML.
 * Runs only on text nodes so existing markup / attributes stay intact.
 */

const LINK_RULES = [
  {
    pattern: /\bparvah\.online\b/gi,
    href: '/',
    max: 2,
  },
  {
    pattern: /\bbest Omegle alternatives\b/gi,
    href: '/blog/best-omegle-alternatives-2026',
    excludeSlugs: ['best-omegle-alternatives-2026', 'omegle-alternatives-why-parvah-is-better'],
    max: 1,
  },
  {
    pattern: /\bOmegle alternatives?\b/gi,
    href: '/omegle-alternative',
    max: 1,
  },
  {
    pattern: /\bOmeTV alternative\b/gi,
    href: '/ometv-alternative',
    max: 1,
  },
  {
    pattern: /\bChatroulette alternative\b/gi,
    href: '/chatroulette-alternative',
    max: 1,
  },
  {
    pattern: /\bEmerald Chat alternative\b/gi,
    href: '/emerald-chat-alternative',
    max: 1,
  },
  {
    pattern: /\badult video chat\b/gi,
    href: '/adult-video-chat',
    max: 1,
  },
  {
    pattern: /\bhot video chat\b/gi,
    href: '/hot-video-chat',
    max: 1,
  },
  {
    pattern: /\bflirty video chat\b/gi,
    href: '/flirty-video-chat',
    max: 1,
  },
  {
    pattern: /\blate[- ]night video chat\b/gi,
    href: '/late-night-video-chat',
    max: 1,
  },
  {
    pattern: /\bmeet people online\b/gi,
    href: '/meet-people-online',
    max: 1,
  },
  {
    pattern: /\bfree webcam chat\b/gi,
    href: '/free-webcam-chat',
    max: 1,
  },
  {
    pattern: /\bvideo chat with strangers\b/gi,
    href: '/video-chat-with-strangers',
    max: 1,
  },
  {
    pattern: /\banonymous video chat\b/gi,
    href: '/anonymous-video-chat',
    max: 1,
  },
  {
    pattern: /\bno[- ]signup(?: video chat)?\b/gi,
    href: '/no-signup-video-chat',
    max: 1,
  },
  {
    pattern: /\brandom video chat\b/gi,
    href: '/random-video-chat',
    max: 1,
  },
  {
    pattern: /\breport button\b/gi,
    href: '/blog/how-to-report-inappropriate-users',
    excludeSlugs: ['how-to-report-inappropriate-users'],
    max: 1,
  },
  {
    pattern: /\bage gate\b/gi,
    href: '/safety',
    max: 1,
  },
  {
    pattern: /\bsafety guidelines\b/gi,
    href: '/safety',
    max: 1,
  },
  {
    pattern: /\bcommunity guidelines\b/gi,
    href: '/safety',
    max: 1,
  },
  {
    pattern: /\bprivacy policy\b/gi,
    href: '/privacy',
    max: 1,
  },
  {
    pattern: /\bWebRTC\b/g,
    href: '/blog/understanding-webrtc-technology',
    excludeSlugs: ['understanding-webrtc-technology', 'webrtc-stun-turn-explained'],
    max: 1,
  },
  {
    pattern: /\bstay safe\b/gi,
    href: '/blog/how-to-stay-safe-on-video-chat-platforms',
    excludeSlugs: ['how-to-stay-safe-on-video-chat-platforms', 'is-random-video-chat-safe-2026'],
    max: 1,
  },
  {
    pattern: /\bwebcam not working\b/gi,
    href: '/blog/fix-webcam-not-working-video-chat',
    excludeSlugs: ['fix-webcam-not-working-video-chat', 'browser-camera-permission-guide'],
    max: 1,
  },
  {
    pattern: /\bconnection failed\b/gi,
    href: '/blog/webrtc-connection-failed-troubleshooting',
    excludeSlugs: ['webrtc-connection-failed-troubleshooting'],
    max: 1,
  },
  {
    pattern: /\bpeer-to-peer video\b/gi,
    href: '/random-video-chat',
    max: 1,
  },
  {
    pattern: /\bStart Match\b/g,
    href: '/',
    max: 1,
  },
];

const TAG_HREFS = {
  'video chat safety': '/blog/category/safety',
  'online safety': '/safety',
  Parvah: '/',
  'omegle alternative': '/omegle-alternative',
  'ome tv': '/ometv-alternative',
  'random video chat': '/random-video-chat',
  'adult video chat': '/adult-video-chat',
  'hot video chat': '/hot-video-chat',
  'flirty chat': '/flirty-video-chat',
  'video chat tips': '/blog/category/tips',
  'online connections': '/meet-people-online',
  webrtc: '/blog/category/technology',
  'video chat technology': '/blog/category/technology',
  p2p: '/blog/understanding-webrtc-technology',
  troubleshooting: '/blog/category/technical',
  'webcam fix': '/blog/fix-webcam-not-working-video-chat',
  'webrtc errors': '/blog/webrtc-connection-failed-troubleshooting',
  privacy: '/blog/category/privacy',
  'data protection': '/privacy',
  'anonymous chat': '/anonymous-video-chat',
};

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function replaceInTextNodes(html, transform) {
  return html.replace(/(^|>)([^<]*)(<|$)/g, (_, open, text, close) => {
    if (!text) return `${open}${text}${close}`;
    return `${open}${transform(text)}${close}`;
  });
}

function linkifyOnce(text, pattern, href, budget) {
  if (budget.count >= budget.max) return text;

  let replaced = false;
  return text.replace(pattern, (match) => {
    if (replaced || budget.count >= budget.max) return match;
    replaced = true;
    budget.count += 1;
    return `<a href="${href}">${match}</a>`;
  });
}

export function injectInternalLinks(html, currentSlug) {
  let result = html;

  for (const rule of LINK_RULES) {
    if (rule.excludeSlugs?.includes(currentSlug)) continue;
    if (rule.href === `/blog/${currentSlug}`) continue;

    const budget = { count: 0, max: rule.max ?? 1 };
    result = replaceInTextNodes(result, (text) =>
      linkifyOnce(text, rule.pattern, rule.href, budget)
    );
  }

  return result;
}

export function getTagHref(tag) {
  if (!tag) return '/blog';
  const key = String(tag);
  return TAG_HREFS[key] || TAG_HREFS[key.toLowerCase()] || '/blog';
}

export { LINK_RULES, TAG_HREFS, escapeRegExp };
