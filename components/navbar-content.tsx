'use client'

import { NavLink } from './nav-link'
import { LanguageLinks } from './language-links'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type NavbarContentProps = {
  navItems: Array<{
    href: "/" | "/sobre" | "/servicos" | "/projects" | "/contato" | "/blog"
    label: string
  }>
  legalItems: Array<{
    href: "/termos" | "/privacidade"
    label: string
  }>
}

export function NavbarContent({ navItems, legalItems }: NavbarContentProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Fecha o menu quando a rota muda
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-sm shadow-sm z-40">
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <svg
              width="40"
              height="40"
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
              <circle
                cx="12"
                cy="12"
                r="3"
                strokeWidth="2"
              />
            </svg>
            <div className="ml-2">
              <span className="text-xl font-bold text-gray-800">Comissiona</span>
              <span className="text-xl font-bold text-blue-600">Pro</span>
            </div>
          </div>
          
          <button 
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu principal"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Menu Desktop */}
          <div className="hidden lg:flex lg:justify-between lg:w-full lg:ml-8">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href} label={item.label} />
                </li>
              ))}
              <li>
                <a
                  href="https://comissiona-ai-v2.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-purple-600 hover:text-purple-800 px-4 py-2 transition-colors rounded-md"
                >
                  Comissiona AI
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
              </li>
            </ul>
            <div className="flex items-center space-x-6">
              <ul className="flex space-x-6">
                {legalItems.map((item) => (
                  <li key={item.href}>
                    <NavLink href={item.href} label={item.label} />
                  </li>
                ))}
              </ul>
              <LanguageLinks />
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        <div 
          className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          id="mobile-menu"
        >
          <ul className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <li key={item.href} className="block">
                <NavLink 
                  href={item.href} 
                  label={item.label}
                  className="block px-3 py-2 rounded-md hover:bg-gray-100"
                />
              </li>
            ))}
            <li className="block">
              <a 
                href="https://comissiona-ai-v2.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-purple-600 hover:text-purple-800 px-3 py-2 rounded-md hover:bg-gray-100"
              >
                Comissiona AI
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
            </li>
            {legalItems.map((item) => (
              <li key={item.href} className="block">
                <NavLink 
                  href={item.href} 
                  label={item.label}
                  className="block px-3 py-2 rounded-md hover:bg-gray-100"
                />
              </li>
            ))}
          </ul>
          <div className="px-5 py-3 border-t border-gray-200">
            <LanguageLinks />
          </div>
        </div>
      </div>
    </nav>
  )
}