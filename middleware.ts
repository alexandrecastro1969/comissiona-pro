import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { locales, localePrefix, pathnames } from '@/navigation';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // Configuração do CSP
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `;

  // Se estiver acessando a raiz, redireciona para /pt
  if (pathname === '/') {
    const response = NextResponse.redirect(new URL('/pt', request.url));
    response.headers.set(
      'Content-Security-Policy',
      cspHeader.replace(/\s{2,}/g, ' ').trim()
    );
    return response;
  }

  // Para outras URLs, usa o middleware do next-intl
  const response = createMiddleware({
    defaultLocale: 'pt',
    locales,
    localePrefix,
    pathnames,
    alternateLinks: true,
    localeDetection: false,
  })(request);

  // Adiciona o header CSP na resposta
  response.headers.set(
    'Content-Security-Policy',
    cspHeader.replace(/\s{2,}/g, ' ').trim()
  );

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/(pt|en|es)/:path*'
  ]
};