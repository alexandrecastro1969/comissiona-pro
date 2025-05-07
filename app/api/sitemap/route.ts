import { getAllPosts } from '@/lib/blog/utils';
import { NextResponse } from 'next/server';

export async function GET() {
  // URLs fixas
  const baseUrl = 'https://comissiona-pro.vercel.app';
  const staticUrls = [
    {
      url: '/',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 1.0,
    },
    {
      url: '/sobre',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/servicos',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/projects',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/contato',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/blog',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      url: '/termos',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'yearly',
      priority: 0.3,
    },
    {
      url: '/privacidade',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'yearly',
      priority: 0.3,
    },
  ];

  // Obter todos os posts para incluir no sitemap
  const posts = await getAllPosts();
  
  const blogUrls = posts.map((post) => ({
    url: `/blog/${post.slug}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'yearly',
    priority: 0.7,
  }));

  // Combinar URLs estáticas e dinâmicas
  const allUrls = [...staticUrls, ...blogUrls];

  // Gerar o XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      (url) => `
  <url>
    <loc>${baseUrl}${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
} 