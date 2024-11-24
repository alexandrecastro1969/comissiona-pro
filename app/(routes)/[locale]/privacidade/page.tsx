import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { getTranslations } from 'next-intl/server'

export default async function Privacidade({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations('privacy')

  const secoes = [
    {
      titleKey: "intro.title",
      contentKey: "intro.content"
    },
    {
      titleKey: "dataCollection.title",
      contentKey: "dataCollection.content",
      listKey: "dataCollection.list"
    },
    {
      titleKey: "dataUsage.title",
      contentKey: "dataUsage.content",
      listKey: "dataUsage.list"
    },
    {
      titleKey: "dataProtection.title",
      contentKey: "dataProtection.content"
    },
    {
      titleKey: "rights.title",
      contentKey: "rights.content",
      listKey: "rights.list"
    },
    {
      titleKey: "contact.title",
      contentKey: "contact.content"
    }
  ]

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/privacidade.webp"
          alt={t('background.alt')}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-200 text-center mt-4">
              {t('subtitle')}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {secoes.map((secao, index) => (
                <Card key={index} className="backdrop-blur-sm bg-white/90">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{t(secao.titleKey)}</h2>
                    <p className="text-gray-600 mb-4">{t(secao.contentKey)}</p>
                    {secao.listKey && (
                      <ul className="list-disc list-inside text-gray-600">
                        {Array.from({ length: 4 }, (_, i) => i + 1).map((num) => (
                          <li key={num}>
                            {t(`${secao.listKey}.${num}`)}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}