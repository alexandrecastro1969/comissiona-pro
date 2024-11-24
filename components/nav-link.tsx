'use client'

import { Link } from '@/navigation'
import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { pathnames } from '@/navigation'

interface NavLinkProps {
  href: "/" | "/sobre" | "/servicos" | "/projetos" | "/contato" | "/termos" | "/privacidade"
  label: string
}

export function NavLink({ href, label }: NavLinkProps) {
  const locale = useLocale()
  const pathname = usePathname()
  
  const isActive = () => {
    // Para a página inicial
    if (href === '/') {
      return pathname === `/${locale}` || pathname === `/${locale}/`
    }

    // Para outras páginas
    const currentPath = pathname.replace(`/${locale}`, '')
    const translatedPaths = pathnames[href as keyof typeof pathnames]
    
    if (!translatedPaths) {
      return currentPath === href
    }
    
    if (typeof translatedPaths === 'string') {
      return currentPath === href
    }
    
    // Verifica se o caminho atual corresponde a qualquer tradução da rota
    return Object.values(translatedPaths).some(path => 
      currentPath === path
    )
  }
  
  return (
    <Link 
      href={href}
      className={`text-sm font-medium transition-colors hover:text-blue-600 ${
        isActive() ? 'text-blue-600' : 'text-gray-600'
      }`}
    >
      {label}
    </Link>
  )
}