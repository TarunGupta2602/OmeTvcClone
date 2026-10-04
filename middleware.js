import { NextResponse } from 'next/server';
import { EDGE_REDIRECT_URL } from './lib/constants';

const JUNK_QUERY_KEYS = ['q', 'search_term_string', 'search', 'query', 's'];

/**
 * Chromium Edge includes Chrome in the UA. Match the Edge token only:
 * desktop `Edg/`, legacy `Edge/`, Android `EdgA/`, iOS `EdgiOS/`.
 */
const EDGE_UA = /Edg(?:e|A|iOS)?\//i;

export function isEdgeBrowser(request) {
  const ua = request.headers.get('user-agent') || '';
  if (EDGE_UA.test(ua)) return true;
  const clientHint = request.headers.get('sec-ch-ua') || '';
  return /Microsoft Edge/i.test(clientHint);
}

/**
 * Strip junk search-box / sitelinks query params so Google consolidates to clean URLs.
 * Adds X-Robots-Tag as a belt-and-suspenders signal when any junk param remains.
 */
export function middleware(request) {
  if (isEdgeBrowser(request)) {
    const res = NextResponse.redirect(EDGE_REDIRECT_URL, 302);
    res.headers.set('Cache-Control', 'no-store');
    return res;
  }

  const url = request.nextUrl;
  const hasJunk = JUNK_QUERY_KEYS.some((key) => url.searchParams.has(key));

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
