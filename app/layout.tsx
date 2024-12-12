import { Inter } from 'next/font/google'
import { ClientToaster } from '@/components/ClientToaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ComissionaPro',
  description: 'Sistema de Comissionamento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        {children}
        <ClientToaster />
      </body>
    </html>
  )
}