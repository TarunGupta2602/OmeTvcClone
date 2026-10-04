export const SITE_NAME = 'Parvah';
export const SITE_URL = 'https://parvah.online';

/**
 * Start button redirect for Microsoft Edge visitors in these countries.
 * Change EDGE_REDIRECT_URL to update the destination.
 * Country codes: US, GB (United Kingdom), CA (Canada).
 */
export const EDGE_REDIRECT_URL = 'https://prank-phi-eight.vercel.app';
export const EDGE_REDIRECT_COUNTRIES = ['US', 'GB', 'CA'];
export const SITE_TAGLINE = 'Free Random Video Chat, No Signup';
export const SITE_DESCRIPTION =
  'Free random video chat — no signup, no app. Instant 1-on-1 webcam matching in your browser. Talk, flirt, or meet someone new. Adults 18+ only.';
export const SUPPORT_EMAIL = 'support@parvah.online';
export const SAFETY_EMAIL = 'safety@parvah.online';
export const PRIVACY_EMAIL = 'privacy@parvah.online';

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
