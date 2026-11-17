export const SITE_NAME = 'Parvah';
export const SITE_URL = 'https://parvah.online';
export const SITE_TAGLINE = 'Free Random Video Chat, No Signup';
export const SITE_DESCRIPTION =
  'Free random video chat — instant 1-on-1 webcam matching, no signup. Meet strangers worldwide. Adults 18+ only. Start now.';
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
