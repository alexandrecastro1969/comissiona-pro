import { getTranslations } from 'next-intl/server'
import { NavLink } from './nav-link'
import { LanguageLinks } from './language-links'

export async function Navbar() {
  const t = await getTranslations('navigation')

  const navItems = [
    { href: "/" as const, label: t('home') },
    { href: "/sobre" as const, label: t('about') },
    { href: "/servicos" as const, label: t('services') },
    { href: "/projetos" as const, label: t('projects') },
    { href: "/contato" as const, label: t('contact') }
  ]

  const legalItems = [
    { href: "/termos" as const, label: t('terms') },
    { href: "/privacidade" as const, label: t('privacy') }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-sm shadow-sm z-40">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        <button className="md:hidden" onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}>
          Menu
        </button>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href} label={item.label} />
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6">
            {legalItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
          <LanguageLinks />
        </div>
      </div>
      {/* Menu Mobile */}
      <div id="mobile-menu" className="md:hidden hidden">
        <ul className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href} label={item.label} />
            </li>
          ))}
          {legalItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href} label={item.label} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}