import { IPHONE_REDIRECT_URL } from './constants';

/** iPhone only. iPad, Android, and desktop user agents stay on the chat. */
export function isIphoneUserAgent(ua = '') {
  return /\biPhone\b/.test(ua);
}

export function isIphone() {
  if (typeof navigator === 'undefined') return false;
  return isIphoneUserAgent(navigator.userAgent || '');
}

/** Redirect iPhone visitors from any country. Returns true when navigation starts. */
export function redirectIfIphone() {
  if (typeof window === 'undefined' || !isIphone()) return false;
  window.location.assign(IPHONE_REDIRECT_URL);
  return true;
}
