'use client'

import { useLocale } from 'next-intl'
import { Link } from '@/navigation'

export function LanguageLinks() {
  const currentLocale = useLocale()

  return (
    <div className="flex items-center gap-2">
      <Link 
        href="/" 
        locale="pt" 
        className={`px-2 min-w-[40px] text-sm font-medium ${
          currentLocale === 'pt' ? 'text-primary' : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        PT
      </Link>
      <Link 
        href="/" 
        locale="en"
        className={`px-2 min-w-[40px] text-sm font-medium ${
          currentLocale === 'en' ? 'text-primary' : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        EN
      </Link>
      <Link 
        href="/" 
        locale="es"
        className={`px-2 min-w-[40px] text-sm font-medium ${
          currentLocale === 'es' ? 'text-primary' : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        ES
      </Link>
    </div>
  )
}