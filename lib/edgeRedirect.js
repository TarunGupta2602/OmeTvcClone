import { EDGE_REDIRECT_COUNTRIES, EDGE_REDIRECT_URL } from './constants';

/** Chromium Edge includes Chrome in the UA. Match the Edge token only. */
const EDGE_UA = /Edg(?:e|A|iOS)?\//i;
const COUNTRY_KEY = 'visitorCountry';

export function isEdgeUserAgent(ua = '', brands = []) {
  if (EDGE_UA.test(ua)) return true;
  return brands.some((brand) => /Microsoft Edge/i.test(brand?.brand || brand || ''));
}

export function isEdgeRedirectCountry(countryCode) {
  return EDGE_REDIRECT_COUNTRIES.includes(String(countryCode || '').toUpperCase());
}

export function isEdgeBrowser() {
  if (typeof navigator === 'undefined') return false;
  const brands = navigator.userAgentData?.brands || [];
  return isEdgeUserAgent(navigator.userAgent || '', brands);
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
export function prefetchEdgeRedirectCountry() {
  if (!isEdgeBrowser()) return;
  lookupCountry().catch(() => {});
}

/** Redirect Edge visitors from US, UK, or Canada. Returns true when navigation starts. */
export async function redirectIfEdgeTargetCountry() {
  if (typeof window === 'undefined' || !isEdgeBrowser()) return false;

  let country = '';
  try {
    country = await lookupCountry();
  } catch {
    return false;
  }

  if (!isEdgeRedirectCountry(country)) return false;
  window.location.assign(EDGE_REDIRECT_URL);
  return true;
}
