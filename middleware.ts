import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { locales, localePrefix, pathnames } from '@/navigation';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // CSP mais permissiva para desenvolvimento
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  const cspHeader = `
    default-src 'self';
    script-src 'self' ${isDevelopment ? "'unsafe-eval' 'unsafe-inline'" : `'nonce-${nonce}' 'strict-dynamic'`} https://vercel.live;
    style-src 'self' ${isDevelopment ? "'unsafe-inline'" : `'nonce-${nonce}'`};
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-src 'self' https://vercel.live;
    frame-ancestors 'self' https://vercel.live;
    connect-src 'self' https://vercel.live ${isDevelopment ? "ws://localhost:3000" : ""};
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
    // Passar o nonce para a aplicação
    response.headers.set('x-nonce', nonce);
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

  // Adiciona o header CSP e nonce na resposta
  response.headers.set(
    'Content-Security-Policy',
    cspHeader.replace(/\s{2,}/g, ' ').trim()
  );
  response.headers.set('x-nonce', nonce);

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/(pt|en|es)/:path*'
  ]
};