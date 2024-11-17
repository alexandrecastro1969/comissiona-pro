'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-sm shadow-sm z-40">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-end items-center">
        <ul className="flex space-x-8">
          <li>
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                pathname === '/' ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/sobre" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                pathname === '/sobre' ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link 
              href="/servicos" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                pathname === '/servicos' ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link 
              href="/projetos" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                pathname === '/projetos' ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link 
              href="/contato" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                pathname === '/contato' ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}