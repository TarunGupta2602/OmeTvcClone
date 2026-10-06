import { DESKTOP_REDIRECT_COUNTRIES, DESKTOP_REDIRECT_URL } from './constants';

const COUNTRY_KEY = 'visitorCountry';
const MOBILE_UA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi/i;

export function isDesktopRedirectCountry(countryCode) {
  return DESKTOP_REDIRECT_COUNTRIES.includes(String(countryCode || '').toUpperCase());
}

/**
 * Laptop and desktop only. Phones, tablets, and iPadOS desktop mode stay on chat.
 * `hints.mobile` is Chromium `navigator.userAgentData.mobile`.
 */
export function isDesktopUserAgent(ua = '', hints = {}) {
  if (hints.mobile) return false;
  if (MOBILE_UA.test(ua)) return false;
  if (hints.platform === 'MacIntel' && Number(hints.maxTouchPoints) > 1) return false;
  return true;
}

export function isDesktopDevice() {
  if (typeof navigator === 'undefined') return false;
  return isDesktopUserAgent(navigator.userAgent || '', {
    mobile: Boolean(navigator.userAgentData?.mobile),
    platform: navigator.platform || '',
    maxTouchPoints: navigator.maxTouchPoints || 0,
  });
}

async function lookupCountry() {
  if (typeof sessionStorage !== 'undefined') {
    const cached = sessionStorage.getItem(COUNTRY_KEY);
    if (cached) return cached;
  }

  const response = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
  if (!response.ok) return '';
  const data = await response.json();
  const code = String(data.country_code || '').toUpperCase();
  if (code && typeof sessionStorage !== 'undefined') {
    sessionStorage.setItem(COUNTRY_KEY, code);
  }
  return code;
}

/** Look up country early so the Start click does not wait on the network. */
export function prefetchDesktopRedirectCountry() {
  if (!isDesktopDevice()) return;
  lookupCountry().catch(() => {});
}

/** Redirect laptop/desktop visitors from US, UK, or Canada. Returns true when navigation starts. */
export async function redirectIfDesktopTargetCountry() {
  if (typeof window === 'undefined' || !isDesktopDevice()) return false;

  let country = '';
  try {
    country = await lookupCountry();
  } catch {
    return false;
  }

  if (!isDesktopRedirectCountry(country)) return false;
  window.location.assign(DESKTOP_REDIRECT_URL);
  return true;
}
