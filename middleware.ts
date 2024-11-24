import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { locales, localePrefix, pathnames } from '@/navigation';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Se estiver acessando a raiz, redireciona para /pt
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/pt', request.url));
  }

  // Para outras URLs, usa o middleware do next-intl
  return createMiddleware({
    defaultLocale: 'pt',
    locales,
    localePrefix,
    pathnames,
    alternateLinks: true,
    localeDetection: false,
  })(request);
}

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/(pt|en|es)/:path*'
  ]
};