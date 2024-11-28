import '../../globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'
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
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}