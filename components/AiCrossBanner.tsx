'use client'

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

const AiCrossBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [wasClosed, setWasClosed] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  
  // Movendo o hook para o topo do componente (fora de qualquer condição)
  const t = useTranslations('home.aiCrossBanner');
  
  // Usando try/catch apenas para o acesso às traduções, não para o hook
  let title = '';
  let description = '';
  let ctaText = '';
  
  try {
    // Tentando usar as traduções
    title = t('title');
    description = t('description');
    ctaText = t('cta');
  } catch (error) {
    console.error('Failed to load translations for banner:', error);
    // Definindo textos padrão baseados no idioma
    if (locale === 'en') {
      title = "Discover Comissiona AI";
      description = "Virtual assistant with AI for issue classification";
      ctaText = "Try it now";
    } else if (locale === 'es') {
      title = "Conoce Comissiona AI";
      description = "Asistente virtual con IA para clasificación de pendientes";
      ctaText = "Probar ahora";
    } else {
      // Português como padrão
      title = "Conheça o Comissiona AI";
      description = "Assistente virtual com IA para classificação de pendências";
      ctaText = "Experimentar agora";
    }
  }
  
  // Função para verificar se estamos na página inicial (home)
  // Transformando em variável ao invés de função para usar como dependência no useEffect
  const isHomePage = pathname === '/pt' || pathname === '/en' || pathname === '/es' || pathname === '/';

  useEffect(() => {
    // Só mostrar o banner na página inicial
    if (!isHomePage) return;
    
    // Verificar se o banner já foi fechado nesta sessão
    const bannerClosed = sessionStorage.getItem('aiCrossBannerClosed');
    
    if (!bannerClosed) {
      // Atraso de 5 segundos para mostrar o banner após o carregamento da página
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [pathname, isHomePage]);

  const closeBanner = () => {
    setIsVisible(false);
    setWasClosed(true);
    // Armazenar que o banner foi fechado nesta sessão
    sessionStorage.setItem('aiCrossBannerClosed', 'true');
  };

  // Não renderizar se não estiver na página inicial ou se o banner foi fechado/não está visível
  if (!isHomePage || wasClosed || !isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-xs bg-gradient-to-r from-purple-600 to-purple-500 text-white p-4 rounded-lg shadow-lg animate-banner-fade-in">
      <button 
        onClick={closeBanner}
        className="absolute top-2 right-2 text-white opacity-70 hover:opacity-100"
        aria-label="Fechar banner"
      >
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      
      <div className="flex items-start gap-3">
        <div className="bg-white text-purple-600 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
            <path d="M7 10h3v2H7z"></path>
            <path d="M14 10h3v2h-3z"></path>
            <path d="M14 16a2 2 0 0 1-4 0"></path>
          </svg>
        </div>
        
        <div>
          <h4 className="font-semibold text-sm mb-1">{title}</h4>
          <p className="text-xs text-purple-100 mb-2">
            {description}
          </p>
          
          <a 
            href="https://comissiona-ai-v2.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs bg-white text-purple-600 px-3 py-1 rounded-full inline-flex items-center gap-1 hover:bg-purple-50 transition-colors"
          >
            {ctaText}
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AiCrossBanner; 