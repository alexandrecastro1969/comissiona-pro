import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users2, Target, Award } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const metadata = {
  title: 'Sobre | Comissiona Pro',
  description: 'Três décadas de experiência em comissionamento industrial, transformando conhecimento em excelência operacional.',
}

export default function Sobre() {
  const t = useTranslations('about');

  const cards = [
    {
      titulo: t('cards.history.title'),
      conteudo: t('cards.history.content'),
      icone: <Building2 className="h-8 w-8 text-primary" />
    },
    {
      titulo: t('cards.team.title'),
      conteudo: t('cards.team.content'),
      icone: <Users2 className="h-8 w-8 text-primary" />
    },
    {
      titulo: t('cards.mission.title'),
      conteudo: t('cards.mission.content'),
      icone: <Target className="h-8 w-8 text-primary" />
    },
    {
      titulo: t('cards.values.title'),
      conteudo: t('cards.values.content'),
      icone: <Award className="h-8 w-8 text-primary" />
    }
  ]

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/sobre.webp"
          alt={t('background.alt')}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-200 text-center mt-4 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
          </div>
        </section>

        {/* Cards Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <Card 
                  key={index} 
                  className="backdrop-blur-sm bg-white/90 transform transition-all duration-300 hover:scale-[1.02]"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {card.icone}
                      <CardTitle className="text-2xl">{card.titulo}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {card.conteudo}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experiência Section */}
      <section className="py-16 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">{t('experience.title')}</h2>
            <p className="text-lg leading-relaxed">
              {t('experience.description')}
            </p>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}