/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./i18n/request.ts');

const nextConfig = {
  // Configurações de cache
  onDemandEntries: {
    // Período que a página deve permanecer em buffer
    maxInactiveAge: 25 * 1000,
    // Número de páginas que devem ser mantidas em buffer
    pagesBufferLength: 4,
  },

  // Otimizações gerais
  swcMinify: true,
  compress: true,
  optimizeFonts: true,
  
  // Cache de imagens
  images: {
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },
}

module.exports = withNextIntl(nextConfig);