import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Factory, Laptop2, BookOpen, Users, Shield, Settings, Layout, Tool } from 'lucide-react'

export default function Servicos() {
  const servicos = [
    {
      titulo: "Comissionamento Industrial",
      descricao: "Serviços especializados de comissionamento para garantir a operação segura e eficiente de sistemas industriais. Nossa metodologia abrange todas as fases do projeto:",
      topicos: [
        "Planejamento e estratégia de comissionamento",
        "Desenvolvimento de procedimentos específicos",
        "Supervisão e execução das atividades",
        "Documentação e relatórios detalhados",
        "Gestão de interfaces entre disciplinas"
      ],
      icone: <Factory className="h-8 w-8 text-primary" />
    },
    {
      titulo: "Softwares para Gestão do Comissionamento",
      descricao: "Soluções digitais especializadas para gerenciar todo o ciclo de comissionamento, oferecendo:",
      topicos: [
        "Controle total das atividades em tempo real",
        "Gestão de documentação técnica",
        "Acompanhamento de progresso e KPIs",
        "Rastreabilidade de pendências",
        "Relatórios automatizados"
      ],
      icone: <Laptop2 className="h-8 w-8 text-primary" />
    },
    {
      titulo: "Consultoria Técnica",
      descricao: "Assessoria especializada em projetos industriais, compartilhando conhecimento e melhores práticas em:",
      topicos: [
        "Análise e otimização de processos",
        "Desenvolvimento de procedimentos",
        "Avaliação de riscos e segurança",
        "Suporte técnico especializado",
        "Recomendações para melhorias"
      ],
      icone: <BookOpen className="h-8 w-8 text-primary" />
    },
    {
      titulo: "Treinamento",
      descricao: "Programas de capacitação customizados para equipes de operação e manutenção, incluindo:",
      topicos: [
        "Fundamentos de comissionamento",
        "Práticas de segurança industrial",
        "Operação de sistemas específicos",
        "Gestão de documentação técnica",
        "Uso de ferramentas digitais"
      ],
      icone: <Users className="h-8 w-8 text-primary" />
    },
    {
      titulo: "Planejamento de Paradas",
      descricao: "Gestão completa de paradas de manutenção industrial, garantindo:",
      topicos: [
        "Planejamento detalhado de shutdown",
        "Coordenação de liberação da planta",
        "Gestão de retorno às operações",
        "Otimização de cronogramas",
        "Minimização de tempo de parada"
      ],
      icone: <Tool className="h-8 w-8 text-primary" />
    },
    {
      titulo: "Análise de Risco (HAZOP)",
      descricao: "Expertise em identificação e avaliação de riscos de processo, incluindo:",
      topicos: [
        "Condução de estudos HAZOP",
        "Identificação de desvios de processo",
        "Avaliação de consequências",
        "Recomendações de segurança",
        "Documentação técnica especializada"
      ],
      icone: <Shield className="h-8 w-8 text-primary" />
    },
    {
      titulo: "Otimização de Processos",
      descricao: "Implementação de metodologias de melhoria contínua:",
      topicos: [
        "Aplicação de Six Sigma",
        "Implementação Lean Manufacturing",
        "Redução de desperdícios",
        "Melhoria de eficiência",
        "Indicadores de performance"
      ],
      icone: <Settings className="h-8 w-8 text-primary" />
    },
    {
      titulo: "Sistemas de Produção",
      descricao: "Implementação de sistemas de gestão da produção baseados em:",
      topicos: [
        "Metodologia TPM",
        "Programa 5S",
        "Manutenção autônoma",
        "Gestão visual",
        "Melhoria contínua"
      ],
      icone: <Layout className="h-8 w-8 text-primary" />
    }
  ]

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/serviços.webp"
          alt="Background Serviços"
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
              Nossos Serviços
            </h1>
            <p className="text-xl text-gray-200 text-center mt-4 max-w-3xl mx-auto">
              Soluções completas em comissionamento industrial, combinando experiência técnica com inovação digital
            </p>
          </div>
        </section>

        {/* Cards Section */}
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