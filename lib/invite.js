import { SITE_URL } from './constants';

export const INVITE_URL = `${SITE_URL}/?from=invite`;
export const INVITE_SHARE_TEXT =
  'Free random video chat with strangers — no signup. Matches are faster with more people online.';

export function getWhatsAppShareUrl() {
  return `https://wa.me/?text=${encodeURIComponent(`${INVITE_SHARE_TEXT} ${INVITE_URL}`)}`;
}

export async function shareInvite() {
  if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
    try {
      await navigator.share({
        title: 'Parvah',
        text: INVITE_SHARE_TEXT,
        url: INVITE_URL,
      });
      return 'shared';
    } catch (err) {
      if (err?.name === 'AbortError') return 'aborted';
    }
  }

  try {
    await navigator.clipboard.writeText(INVITE_URL);
    return 'copied';
  } catch {
    return 'whatsapp';
  }
}
