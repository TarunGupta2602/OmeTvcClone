import {
  DESKTOP_GEO_REDIRECT_ENABLED,
  DESKTOP_GEO_REDIRECT_URL,
  DESKTOP_GEO_REDIRECT_COUNTRIES,
} from './constants';

/**
 * Detect if user is on desktop (not mobile)
 */
export function isDesktop() {
  if (typeof window === 'undefined') return false;
  
  const userAgent = navigator.userAgent;
  const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const tablet = /iPad|Android/i.test(userAgent) && !/Mobile/i.test(userAgent);
  
  return !mobile && !tablet;
}

/**
 * Get user country code from Cloudflare headers or fallback to IP geolocation
 */
export async function getUserCountry() {
  // Try Cloudflare country header first (works on server-side)
  if (typeof window === 'undefined') {
    return null;
  }

  // Client-side: use free IP geolocation API
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.country_code || null;
  } catch (error) {
    console.error('Failed to detect country:', error);
    return null;
  }
}

/**
 * Check if user should be redirected based on geo and device
 */
export async function shouldRedirect() {
  if (!DESKTOP_GEO_REDIRECT_ENABLED) return false;
  
  const isDesktopDevice = isDesktop();
  if (!isDesktopDevice) return false;
  
  const country = await getUserCountry();
  if (!country) return false;
  
  return DESKTOP_GEO_REDIRECT_COUNTRIES.includes(country.toUpperCase());
}

/**
 * Perform redirect if conditions are met
 */
export async function performGeoRedirect() {
  const shouldRedirectUser = await shouldRedirect();
  
  if (shouldRedirectUser) {
    window.location.href = DESKTOP_GEO_REDIRECT_URL;
  }
}
