import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="text-blue-600"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <circle cx="12" cy="12" r="3" strokeWidth="2" />
              </svg>
              <div className="ml-2">
                <span className="text-lg font-bold text-gray-800">Comissiona</span>
                <span className="text-lg font-bold text-blue-600">Pro</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Plataforma completa para gestão de comissionamento industrial, oferecendo recursos 
              avançados para documentação, controle e acompanhamento de projetos.
            </p>
          </div>

          {/* Links de Navegação */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Ecossistema e Integração */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Nosso Ecossistema
            </h3>
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-base font-medium text-gray-800 mb-2">
                Conheça o Comissiona AI
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Assistente virtual com IA avançada para classificação de pendências de comissionamento.
              </p>
              <a
                href="https://comissiona-ai-v2.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-800 text-sm font-medium"
              >
                Visitar Comissiona AI
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

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ComissionaPro. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Link href="/termos" className="text-xs text-gray-500 hover:text-gray-700">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="text-xs text-gray-500 hover:text-gray-700">
                Política de Privacidade
              </Link>
              <div className="text-xs text-gray-500">
                Parte do ecossistema de soluções para comissionamento industrial
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 