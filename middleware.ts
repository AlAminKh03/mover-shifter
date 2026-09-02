import { NextRequest, NextResponse } from 'next/server';
import Negotiator from 'negotiator';
import { match as matchLocale } from '@formatjs/intl-localematcher';

const locales = ['en', 'ar'];
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  try {
    return matchLocale(languages, locales, defaultLocale);
  } catch (error) {
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Belt-and-braces: files under /public are served at the URL root (an
  // image at public/work/x.webp is requested as /work/x.webp, never
  // /public/work/x.webp), so the matcher below is what actually keeps
  // static assets out of locale redirection. This is a second guard in
  // case a request reaches here anyway — anything with a file extension
  // in its last segment is an asset, not a page.
  if (/\.[^/]+$/.test(pathname)) return NextResponse.next();

  // Check if pathname already includes a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Get the locale from Accept-Language header
  const locale = getLocale(request);

  // Redirect to locale-prefixed path
  return NextResponse.redirect(
    new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
  );
}

export const config = {
  matcher: [
    // Skip _next internals, api routes, and any path with a file extension
    // (images, video, fonts, robots.txt, sitemap.xml, manifest.json, etc.)
    // Files under /public are served at the URL root with no /public
    // prefix, so excluding the literal segment "public" here matched
    // nothing real — this was letting every static asset request get
    // redirected to a locale-prefixed path that doesn't exist, which is
    // why images disappeared site-wide.
    '/((?!_next|_vercel|api|.*\\..*).*)',
  ],
};
