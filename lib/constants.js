export const SITE_NAME = 'Parvah';
export const SITE_URL = 'https://parvah.online';
export const SITE_TAGLINE = 'Free Random Video Chat';
export const SITE_DESCRIPTION =
  'Free random video chat to talk to strangers online. Instant 1-on-1 webcam chat, no registration. Connect safely worldwide on Parvah.';
export const SUPPORT_EMAIL = 'support@parvah.online';
export const SAFETY_EMAIL = 'safety@parvah.online';
export const PRIVACY_EMAIL = 'privacy@parvah.online';

export function getIceServers() {
  return {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun.cloudflare.com:3478' },
    ],
  };
}
