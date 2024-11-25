'use client'

import { NavLink } from './nav-link'
import { LanguageLinks } from './language-links'
import { useState } from 'react'

type NavbarContentProps = {
  navItems: Array<{
    href: "/" | "/sobre" | "/servicos" | "/projects" | "/contato"
    label: string
  }>
  legalItems: Array<{
    href: "/termos" | "/privacidade"
    label: string
  }>
}

export function NavbarContent({ navItems, legalItems }: NavbarContentProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-sm shadow-sm z-40">
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
        <div className="flex items-center">
  <svg 
    width="40" 
    height="40" 
    viewBox="0 0 40 40" 
    className="text-blue-600"
  >
    <path 
      d="M20 5L35 30H5L20 5Z" 
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle 
      cx="20" 
      cy="20" 
      r="8" 
      fill="white"
      stroke="currentColor"
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