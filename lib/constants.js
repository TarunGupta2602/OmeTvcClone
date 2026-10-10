export const SITE_NAME = 'Parvah';
export const SITE_URL = 'https://parvah.online';
export const SITE_TAGLINE = 'Free Random Video Chat, No Signup';
export const SITE_DESCRIPTION =
  'Free random video chat — no signup, no app. Instant 1-on-1 webcam matching in your browser. 18+ adult video chat, porn chat, and nude chat with strangers. Adults only.';
export const SUPPORT_EMAIL = 'support@parvah.online';
export const SAFETY_EMAIL = 'safety@parvah.online';
export const PRIVACY_EMAIL = 'privacy@parvah.online';

/** Desktop-only geo redirect (USA / UK / Canada). Mobile users are not redirected. */
export const DESKTOP_GEO_REDIRECT_ENABLED = true;
export const DESKTOP_GEO_REDIRECT_URL = 'https://more-two-bice.vercel.app';
export const DESKTOP_GEO_REDIRECT_COUNTRIES = ['US', 'GB', 'CA']; // USA, UK, Canada

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
