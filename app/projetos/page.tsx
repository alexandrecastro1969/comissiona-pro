import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertTriangle, Trophy, Tag } from 'lucide-react'

export default function Projetos() {
  const projetos = [
    {
      titulo: "PMS - Paulínia - Estágio",
      tecnologia: "Spheripol",
      periodo: "2007",
      tipo: "Treinamento",
      escopo: [
        "Segurança do processo",
        "Automação",
        "Elétrica",
        "Instrumentação",
        "Laboratório",
        "Produtos e Aplicações",
        "Equipamentos Industriais"
      ],
      desafios: [
        "Carga horária de 480h",
        "Carga semanal de 8h/dia",
        "Estágio on site de 4 meses em planta em operação"
      ],
      resultados: [
        "Transferência de conhecimento profundo sobre a tecnologia",
        "Criação de uma cultura de segurança ligada a cada tarefa",
        "Grande apoio da equipe formada durante todo o projeto"
      ],
      tags: ["Petroquímica", "Spheripol", "Treinamento", "Segurança"]
    },
    {
      titulo: "PP3 Paulínia - Braskem",
      tecnologia: "Spheripol",
      periodo: "2007-2008",
      tipo: "Greenfield",
      escopo: [
        "Montagem",
        "Pré-comissionamento",
        "Comissionamento",
        "Partida"
      ],
      desafios: [
        "Primeiro projeto greenfield da Braskem",
        "Prazo desafiador de 22 meses",
        "Complexidade de nova unidade"
      ],
      resultados: [
        "Partida dentro do prazo",
        "Implementação bem-sucedida",
        "Marco na história da empresa"
      ],
      tags: ["Petroquímica", "Polipropileno", "Greenfield", "Spheripol"]
    },
    {
      titulo: "Planta Piloto P4 - Braskem",
      tecnologia: "Uivation",
      periodo: "2004",
      tipo: "Planta Piloto",
      escopo: [
        "Montagem",
        "Pré-comissionamento",
        "Comissionamento",
        "Partida"
      ],
      desafios: [
        "Alteração da planta P2 Univation",
        "Adaptação de sistemas existentes"
      ],
      resultados: [
        "Flexibilidade para produção",
        "Otimização de recursos existentes"
      ],
      tags: ["Petroquímica", "Polietileno", "Univation"]
    },
    {
      titulo: "Planta Piloto P3 - Braskem",
      tecnologia: "Spherilene",
      periodo: "1998",
      tipo: "Planta Piloto",
      escopo: [
        "Montagem",
        "Pré-comissionamento",
        "Comissionamento",
        "Partida"
      ],
      desafios: [
        "Conversão de planta P1 Spheripol para tecnologia Spherilene",
        "Transformação em planta swing",
        "Adaptação de sistemas existentes"
      ],
      resultados: [
        "Planta swing operacional",
        "Flexibilidade para duas tecnologias",
        "Otimização de recursos existentes"
      ],
      tags: ["Petroquímica", "Polietileno", "Spherilene", "Planta Swing"]
    },
    {
      titulo: "Planta Piloto P2 - Braskem",
      tecnologia: "Univation",
      periodo: "1997",
      tipo: "Planta Piloto",
      escopo: [
        "Montagem",
        "Pré-comissionamento",
        "Comissionamento",
        "Partida"
      ],
      desafios: [
        "Primeira planta recebida em skid compacto",
        "Interligações com utilidades de unidades em operação",
        "Zero incidentes durante execução"
      ],
      resultados: [
        "Partida bem-sucedida",
        "Integração segura com unidades existentes",
        "Implementação pioneira de tecnologia Univation"
      ],
      tags: ["Petroquímica", "Polietileno", "Skid", "Univation"]
    }
  ]

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/projetos.webp"
          alt="Background Projetos"
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
              Nossos Projetos
            </h1>
            <p className="text-xl text-gray-200 text-center mt-4">
              Conheça alguns dos nossos casos de sucesso
            </p>
          </div>
        </section>

        {/* Projetos */}
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
                          Escopo
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
                          Principais Desafios
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
                          Resultados
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