import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['pt', 'en', 'es'] as const;
export const localePrefix = 'always';

type Locale = (typeof locales)[number];

type PathnameConfig = {
  [key: string]: string | {
    [K in Locale]: string;
  };
};

export const pathnames: PathnameConfig = {
  '/': '/',
  '/sobre': {
    en: '/about',
    es: '/sobre',
    pt: '/sobre'
  },
  '/servicos': {
    en: '/services',
    es: '/servicios',
    pt: '/servicos'
  },
  '/projects': {
    en: '/projects',
    es: '/proyectos',
    pt: '/projetos'
  },
  '/contato': {
    en: '/contact',
    es: '/contacto',
    pt: '/contato'
  },
  '/termos': {
    en: '/terms',
    es: '/terminos',
    pt: '/termos'
  },
  '/privacidade': {
    en: '/privacy',
    es: '/privacidad',
    pt: '/privacidade'
  }
} as const;

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  localePrefix
});

export function getLocalizedUrl(path: string, locale: Locale) {
  const pathWithoutLeadingSlash = path.startsWith('/') ? path.slice(1) : path;
  return `/${locale}/${pathWithoutLeadingSlash}`;
}

export function getTranslatedPathname(pathname: string, locale: Locale): string {
  const path = pathnames[pathname];
  if (typeof path === 'string') return path;
  return path ? path[locale] : pathname;
}