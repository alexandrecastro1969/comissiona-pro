'use client'

import { Link } from '@/navigation'
import { useLocale } from 'next-intl' // Importando useLocale para obter o idioma atual
import { usePathname } from 'next/navigation'
import { pathnames } from '@/navigation'

interface NavLinkProps {
  href: "/" | "/sobre" | "/servicos" | "/projects" | "/contato" | "/termos" | "/privacidade"
  label: string
}

export function NavLink({ href, label }: NavLinkProps) {
  const locale = useLocale() // Obtendo o locale atual
  const pathname = usePathname() // Obtendo o pathname atual
  
  const isActive = () => {
    // Para a página inicial
    if (href === '/') {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
  
    // Para outras páginas
    const currentPath = pathname.replace(`/${locale}`, '');
    const translatedPaths = pathnames[href as keyof typeof pathnames];
  
  
    if (!translatedPaths) {
      return currentPath === href;
    }
  
    // Se translatedPaths for uma string, compare diretamente
    if (typeof translatedPaths === 'string') {
      return currentPath === translatedPaths; // Corrigido para comparar com o caminho traduzido
    }
  
    // Verifica se o caminho atual corresponde a qualquer tradução da rota
    return Object.values(translatedPaths).some(path => 
      currentPath === path
    );
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