import { useTranslations } from 'next-intl';
import React from 'react';

export default function AiPromotion() {
  const t = useTranslations('home.aiPromotion');
  
  return (
    <div 
      className="mx-auto max-w-3xl my-20 mb-12 rounded-xl overflow-hidden animate-fadeIn opacity-0" 
      style={{animationDelay: '500ms', animationFillMode: 'forwards'}}
    >
      <div className="bg-gradient-to-r from-purple-900/80 via-purple-800/80 to-purple-900/80 backdrop-blur-sm border border-purple-500/20 rounded-xl shadow-lg p-6 text-center">
        <div className="flex flex-col items-center gap-4">
          {/* Ícone */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center flex-shrink-0">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
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
          
          {/* Conteúdo */}
          <div>
            <h2 className="text-xl font-bold text-white mb-2">
              {t('title')}
            </h2>
            <p className="text-purple-100 mb-4 text-sm">
              {t('description')}
            </p>
            
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <span className="inline-flex items-center text-xs text-purple-200 bg-purple-800/40 px-2 py-1 rounded-full">
                <span className="mr-1 text-purple-300">✓</span> {t('features.conversational')}
              </span>
              <span className="inline-flex items-center text-xs text-purple-200 bg-purple-800/40 px-2 py-1 rounded-full">
                <span className="mr-1 text-purple-300">✓</span> {t('features.classification')}
              </span>
              <span className="inline-flex items-center text-xs text-purple-200 bg-purple-800/40 px-2 py-1 rounded-full">
                <span className="mr-1 text-purple-300">✓</span> {t('features.semantic')}
              </span>
              <span className="inline-flex items-center text-xs text-purple-200 bg-purple-800/40 px-2 py-1 rounded-full">
                <span className="mr-1 text-purple-300">✓</span> {t('features.learning')}
              </span>
            </div>
            
            {/* CTA */}
            <a
              href="https://comissiona-ai-v2.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-600 to-purple-400 text-white px-4 py-2 text-sm rounded-full font-medium shadow-md hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1"
            >
              {t('cta')}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 