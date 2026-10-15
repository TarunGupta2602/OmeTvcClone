export const SITE_NAME = 'Parvah';
export const SITE_URL = 'https://parvah.online';
export const SITE_TAGLINE = 'Free Random Video Chat, No Signup';
export const SITE_DESCRIPTION =
  'Free random video chat — no signup, no app. Instant 1-on-1 webcam matching in your browser. 18+ adult video chat, porn chat, and nude chat with strangers. Adults only.';
export const SUPPORT_EMAIL = 'support@parvah.online';
export const SAFETY_EMAIL = 'safety@parvah.online';
export const PRIVACY_EMAIL = 'privacy@parvah.online';

/** ExoClick publisher zones. Override via NEXT_PUBLIC_EXOCLICK_* env vars */
export const EXOCLICK_POPUNDER_ZONE = '6055122';
export const EXOCLICK_BANNER_ZONE = '6055136';
/** Sticky live; IM / In-page Push — set after creating ExoClick zones */
export const EXOCLICK_STICKY_ZONE = process.env.NEXT_PUBLIC_EXOCLICK_STICKY_ZONE || '6056618';
export const EXOCLICK_IM_ZONE = process.env.NEXT_PUBLIC_EXOCLICK_IM_ZONE || '';
export const EXOCLICK_PUSH_ZONE = process.env.NEXT_PUBLIC_EXOCLICK_PUSH_ZONE || '';

/**
 * ICE servers for WebRTC — public STUN only (no TURN relay).
 * Direct peer-to-peer works for most home Wi-Fi and mobile networks.
 */
export function getIceServers() {
  return {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun.cloudflare.com:3478' },
    ],
  };
}
