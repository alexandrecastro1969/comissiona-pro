import { Inter } from 'next/font/google'
import { ClientToaster } from '@/components/ClientToaster'

const inter = Inter({ subsets: ['latin'] })

// Metadados melhorados para SEO
export const metadata = {
  title: 'ComissionaPro - Especialistas em Comissionamento Industrial',
  description: 'A ComissionaPro oferece serviços especializados de comissionamento industrial, garantindo segurança e eficiência em seus projetos.',
  keywords: 'comissionamento industrial, comissionamento de plantas, segurança industrial, eficiência operacional',
  authors: [{ name: 'ComissionaPro', url: 'https://comissiona-pro.vercel.app' }],
  creator: 'ComissionaPro',
  publisher: 'ComissionaPro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: 'index, follow',
  openGraph: {
    title: 'ComissionaPro - Especialistas em Comissionamento Industrial',
    description: 'A ComissionaPro oferece serviços especializados de comissionamento industrial, garantindo segurança e eficiência em seus projetos.',
    url: 'https://comissiona-pro.vercel.app',
    siteName: 'ComissionaPro',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ComissionaPro - Especialistas em Comissionamento Industrial',
    description: 'A ComissionaPro oferece serviços especializados de comissionamento industrial, garantindo segurança e eficiência em seus projetos.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        {/* Para verificação do Google Search Console - substitua com seu código de verificação */}
        <meta name="google-site-verification" content="SEU_CÓDIGO_DE_VERIFICAÇÃO" />
      </head>
      <body className={inter.className}>
        {children}
        <ClientToaster />
        
        {/* Aqui você pode adicionar o script do Google Analytics */}
        {/* 
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=SEU_ID_GA"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'SEU_ID_GA');
            `,
          }}
        />
        */}
      </body>
    </html>
  )
}