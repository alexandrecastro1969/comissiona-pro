import '../../globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </NextIntlClientProvider>
  )
}