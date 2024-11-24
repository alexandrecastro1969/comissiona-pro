import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Factory, Laptop2, BookOpen, Users, Shield, Settings, Layout, Wrench } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const t = await getTranslations('services')

  return {
    title: t('meta.title'),
    description: t('meta.description')
  }
}

export default function Servicos() {
  const t = useTranslations('services');

  const servicos = [
    {
      titulo: t('commissioning.title'),
      descricao: t('commissioning.description'),
      topicos: [
        t('commissioning.topics.1'),
        t('commissioning.topics.2'),
        t('commissioning.topics.3'),
        t('commissioning.topics.4'),
        t('commissioning.topics.5')
      ],
      icone: <Factory className="h-8 w-8 text-primary" />
    },
    {
      titulo: t('software.title'),
      descricao: t('software.description'),
      topicos: [
        t('software.topics.1'),
        t('software.topics.2'),
        t('software.topics.3'),
        t('software.topics.4'),
        t('software.topics.5')
      ],
      icone: <Laptop2 className="h-8 w-8 text-primary" />
    },
    {
      titulo: t('consulting.title'),
      descricao: t('consulting.description'),
      topicos: [
        t('consulting.topics.1'),
        t('consulting.topics.2'),
        t('consulting.topics.3'),
        t('consulting.topics.4'),
        t('consulting.topics.5')
      ],
      icone: <BookOpen className="h-8 w-8 text-primary" />
    },
    {
      titulo: t('training.title'),
      descricao: t('training.description'),
      topicos: [
        t('training.topics.1'),
        t('training.topics.2'),
        t('training.topics.3'),
        t('training.topics.4'),
        t('training.topics.5')
      ],
      icone: <Users className="h-8 w-8 text-primary" />
    },
    {
      titulo: t('shutdown.title'),
      descricao: t('shutdown.description'),
      topicos: [
        t('shutdown.topics.1'),
        t('shutdown.topics.2'),
        t('shutdown.topics.3'),
        t('shutdown.topics.4'),
        t('shutdown.topics.5')
      ],
      icone: <Wrench className="h-8 w-8 text-primary" />
    },
    {
      titulo: t('hazop.title'),
      descricao: t('hazop.description'),
      topicos: [
        t('hazop.topics.1'),
        t('hazop.topics.2'),
        t('hazop.topics.3'),
        t('hazop.topics.4'),
        t('hazop.topics.5')
      ],
      icone: <Shield className="h-8 w-8 text-primary" />
    },
    {
      titulo: t('optimization.title'),
      descricao: t('optimization.description'),
      topicos: [
        t('optimization.topics.1'),
        t('optimization.topics.2'),
        t('optimization.topics.3'),
        t('optimization.topics.4'),
        t('optimization.topics.5')
      ],
      icone: <Settings className="h-8 w-8 text-primary" />
    },
    {
      titulo: t('production.title'),
      descricao: t('production.description'),
      topicos: [
        t('production.topics.1'),
        t('production.topics.2'),
        t('production.topics.3'),
        t('production.topics.4'),
        t('production.topics.5')
      ],
      icone: <Layout className="h-8 w-8 text-primary" />
    }
  ]

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/servicos.webp"
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
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-200 text-center mt-4 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicos.map((servico, index) => (
                <Card 
                  key={index} 
                  className="backdrop-blur-sm bg-white/90 transform transition-all duration-300 hover:scale-[1.02]"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {servico.icone}
                      <CardTitle className="text-2xl">{servico.titulo}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {servico.descricao}
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {servico.topicos.map((topico, i) => (
                        <li key={i}>{topico}</li>
                      ))}
                    </ul>
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