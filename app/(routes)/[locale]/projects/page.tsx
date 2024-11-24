import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertTriangle, Trophy } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function Projetos({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations('projects')

  const projetos = [
    {
      titulo: t('projectTitles.pms'),
      tecnologia: "Spheripol",
      periodo: "2007",
      tipo: t('types.training'),
      escopo: [
        t('scope.processSafety'),
        t('scope.automation'),
        t('scope.electrical'),
        t('scope.instrumentation'),
        t('scope.laboratory'),
        t('scope.products'),
        t('scope.equipment')
      ],
      desafios: [
        t('challenges.hours480'),
        t('challenges.weekly8h'),
        t('challenges.onsite4months')
      ],
      resultados: [
        t('results.knowledge'),
        t('results.safety'),
        t('results.team')
      ],
      tags: [t('tags.petrochemical'), t('tags.spheripol'), t('tags.training'), t('tags.safety')]
    },
    {
      titulo: t('projectTitles.pp3'),
      tecnologia: "Spheripol",
      periodo: "2007-2008",
      tipo: t('types.greenfield'),
      escopo: [
        t('scope.assembly'),
        t('scope.precommissioning'),
        t('scope.commissioning'),
        t('scope.startup')
      ],
      desafios: [
        t('challenges.firstGreenfield'),
        t('challenges.deadline22months'),
        t('challenges.newUnitComplexity')
      ],
      resultados: [
        t('results.onTime'),
        t('results.successfulImplementation'),
        t('results.companyMilestone')
      ],
      tags: [t('tags.petrochemical'), t('tags.polypropylene'), t('tags.greenfield'), t('tags.spheripol')]
    },
    {
      titulo: t('projectTitles.p4'),
      tecnologia: "Univation",
      periodo: "2004",
      tipo: t('types.pilot'),
      escopo: [
        t('scope.assembly'),
        t('scope.precommissioning'),
        t('scope.commissioning'),
        t('scope.startup')
      ],
      desafios: [
        t('challenges.firstSkid'),
        t('challenges.utilitiesIntegration'),
        t('challenges.zeroIncidents')
      ],
      resultados: [
        t('results.successfulStartup'),
        t('results.safeIntegration'),
        t('results.pioneerUnivation')
      ],
      tags: [t('tags.petrochemical'), t('tags.polyethylene'), t('tags.univation'), t('tags.skid')]
    },
    {
      titulo: t('projectTitles.p3'),
      tecnologia: "Spherilene",
      periodo: "1998",
      tipo: t('types.pilot'),
      escopo: [
        t('scope.assembly'),
        t('scope.precommissioning'),
        t('scope.commissioning'),
        t('scope.startup')
      ],
      desafios: [
        t('challenges.p1Conversion'),
        t('challenges.swingPlant'),
        t('challenges.systemsAdaptation')
      ],
      resultados: [
        t('results.productionFlexibility'),
        t('results.resourceOptimization'),
        t('results.operationalSwing')
      ],
      tags: [t('tags.petrochemical'), t('tags.polyethylene'), t('tags.spherilene'), t('tags.swingPlant')]
    },
    {
      titulo: t('projectTitles.p2'),
      tecnologia: "Univation",
      periodo: "1997",
      tipo: t('types.pilot'),
      escopo: [
        t('scope.assembly'),
        t('scope.precommissioning'),
        t('scope.commissioning'),
        t('scope.startup')
      ],
      desafios: [
        t('challenges.p2UnivationChange'),
        t('challenges.existingSystemsAdaptation')
      ],
      resultados: [
        t('results.twoTechFlexibility'),
        t('results.existingOptimization')
      ],
      tags: [t('tags.petrochemical'), t('tags.polyethylene'), t('tags.univation')]
    }
  ]

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/projetos.webp"
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
              {projetos.map((projeto, index) => (
                <Card 
                  key={index} 
                  className="backdrop-blur-sm bg-white/90 group transform transition-all duration-300 hover:scale-[1.02]"
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                        {projeto.tecnologia}
                      </Badge>
                      <Badge variant="outline" className="text-gray-600">
                        {projeto.periodo}
                      </Badge>
                      <Badge variant="outline" className="text-primary">
                        {projeto.tipo}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">{projeto.titulo}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-1 grid-rows-[auto_auto_auto_auto] gap-6">
                      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm min-h-[160px]">
                        <h4 className="font-bold mb-4 flex items-center gap-2 text-lg text-primary">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          {t('sections.scope')}
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-2 text-gray-600">
                          {projeto.escopo.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-sm min-h-[160px]">
                        <h4 className="font-bold mb-4 flex items-center gap-2 text-lg text-blue-700">
                          <AlertTriangle className="h-5 w-5 text-blue-700" />
                          {t('sections.challenges')}
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-2 text-gray-600">
                          {projeto.desafios.map((desafio, i) => (
                            <li key={i}>{desafio}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-green-100 p-6 rounded-lg border border-green-200 shadow-sm min-h-[160px]">
                        <h4 className="font-bold mb-4 flex items-center gap-2 text-lg text-green-700">
                          <Trophy className="h-5 w-5 text-green-700" />
                          {t('sections.results')}
                        </h4>
                        <ul className="list-disc list-inside text-sm space-y-2 text-gray-600">
                          {projeto.resultados.map((resultado, i) => (
                            <li key={i}>{resultado}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-4 border-t">
                        {projeto.tags.map((tag, i) => (
                          <span 
                            key={i}
                            className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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