import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { getTranslations } from 'next-intl/server'

export default async function Termos({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations('terms')

  const secoes = [
    {
      titleKey: "acceptance.title",
      contentKey: "acceptance.content",
      listKeys: [
        "acceptance.list.read",
        "acceptance.list.implies",
        "acceptance.list.updates"
      ]
    },
    {
      titleKey: "usage.title",
      contentKey: "usage.content",
      listKeys: [
        "usage.list.truthful",
        "usage.list.confidentiality",
        "usage.list.lawful",
        "usage.list.respect"
      ]
    },
    {
      titleKey: "intellectual.title",
      contentKey: "intellectual.content",
      listKeys: [
        "intellectual.list.brands",
        "intellectual.list.documents",
        "intellectual.list.software",
        "intellectual.list.content"
      ]
    },
    {
      titleKey: "responsibilities.title",
      contentKey: "responsibilities.content",
      listKeys: [
        "responsibilities.list.quality",
        "responsibilities.list.confidentiality",
        "responsibilities.list.practices",
        "responsibilities.list.deadlines"
      ]
    },
    {
      titleKey: "limitation.title",
      contentKey: "limitation.content",
      listKeys: [
        "limitation.list.misuse",
        "limitation.list.technical",
        "limitation.list.indirect",
        "limitation.list.incorrect"
      ]
    },
    {
      titleKey: "modifications.title",
      contentKey: "modifications.content",
      listKeys: [
        "modifications.list.notification",
        "modifications.list.right",
        "modifications.list.immediate"
      ]
    }
  ]

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/termos.webp"
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
                    {secao.listKeys && (
                      <ul className="list-disc list-inside text-gray-600">
                        {secao.listKeys.map((key, itemIndex) => (
                          <li key={itemIndex} className="mb-2">{t(key)}</li>
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