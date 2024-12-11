import { getTranslations } from 'next-intl/server'
import { NavbarContent } from './navbar-content'

export async function Navbar() {
  const t = await getTranslations('navigation')

  const navItems = [
    { href: "/" as const, label: t('home') },
    { href: "/sobre" as const, label: t('about') },
    { href: "/servicos" as const, label: t('services') },
    { href: "/projects" as const, label: t('projects') },
    { href: "/contato" as const, label: t('contact') },
    { href: "/blog" as const, label: "Blog" }  // Blog adicionado aqui
  ]

  const legalItems = [
    { href: "/termos" as const, label: t('terms') },
    { href: "/privacidade" as const, label: t('privacy') }
  ]

  return <NavbarContent navItems={navItems} legalItems={legalItems} />
}