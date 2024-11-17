import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const slugMap: { [key: string]: string } = {
  "Industrial Plants Commissioning Procedures Using Digital Process-Oriented Architecture": "industrial-plants-commissioning-procedures",
  "Aprofundando a Importância dos KPIs no Comissionamento": "aprofundando-a-importancia-dos-kpis-no-comissionamento",
  "Detalhando o Processo de Comissionamento": "detalhando-o-processo-de-comissionamento",
  "Comissionamento em Projetos Industriais": "comissionamento-em-projetos-industriais"
}

export default function Blog() {
  const artigosProprios = [
    {
      titulo: "Industrial Plants Commissioning Procedures Using Digital Process-Oriented Architecture",
      resumo: "Brazil has abundant reserves and exponential growth potential for oil exploration for the coming decades. This article explores how digital process-oriented architecture can improve commissioning procedures in industrial plants.",
      data: "14 Nov 2024",
      categoria: "Comissionamento"
    },
    {
      titulo: "Aprofundando a Importância dos KPIs no Comissionamento",
      resumo: "Descubra como os Key Performance Indicators (KPIs) são cruciais para garantir a eficiência, qualidade e sucesso no comissionamento de plantas industriais.",
      data: "10 Out 2024",
      categoria: "Gestão"
    },
    {
      titulo: "Detalhando o Processo de Comissionamento",
      resumo: "Um guia completo sobre as etapas do processo de comissionamento industrial, desde o planejamento inicial até o pré-comissionamento, com foco em boas práticas e procedimentos essenciais.",
      data: "02 Set 2024",
      categoria: "Comissionamento"
    },
    {
      titulo: "Comissionamento em Projetos Industriais",
      resumo: "O comissionamento é uma fase crítica em projetos industriais, especialmente nos setores de petróleo e gás, energia e químico. Descubra as etapas essenciais e melhores práticas para garantir o sucesso do projeto.",
      data: "21 Mar 2024",
      categoria: "Comissionamento"
    }
  ]

  const artigosExternos = [
    {
      titulo: "Indústria 4.0 e Automação",
      resumo: "Uma análise profunda sobre como a Indústria 4.0 está transformando os processos de automação industrial.",
      data: "20 Mar 2024",
      categoria: "Automação",
      link: "https://www.automacaoindustrial.info/industria-4-0/"
    },
    {
      titulo: "Maturidade para Indústria 4.0: Avaliação Qualitativa e Quantitativa para Implantação da Digitalização",
      resumo: "A indústria moderna está sendo transformada pela tecnologia, alterando a cadeia de valor e dinâmica entre clientes e produtos, além de reformular o planejamento e operações industriais.",
      data: "10 Mar 2024",
      categoria: "Automação",
      link: "https://www.automacaoindustrial.info/maturidade-para-industria-4-0-avaliacao-qualitativa-e-quantitativa-para-implantacao-da-digitalizacao/"
    },
    {
      titulo: "Eficiência Energética na Indústria",
      resumo: "Eficiência energética pode gerar economia de R$ 10 bilhões ao setor industrial até 2050",
      data: "01 Mar 2024",
      categoria: "Sustentabilidade",
      link: "https://noticias.portaldaindustria.com.br/noticias/sustentabilidade/eficiencia-energetica-pode-gerar-economia-de-r-10-bilhoes-ao-setor-industrial-ate-2050/"
    }
  ]

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/blog.webp"
          alt="Background Blog"
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
              Blog ComissionaPro
            </h1>
            <p className="text-xl text-gray-200 text-center mt-4">
              Artigos e novidades sobre comissionamento industrial
            </p>
          </div>
        </section>

        {/* Posts do Blog */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Nossos Artigos */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Nossos Artigos</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {artigosProprios.map((post, index) => (
                  <Card key={index} className="backdrop-blur-sm bg-white/90 flex flex-col">
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">{post.data}</span>
                        <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {post.categoria}
                        </span>
                      </div>
                      <CardTitle className="text-xl mb-2">{post.titulo}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-1">
                      <p className="text-gray-600 mb-4 flex-1">{post.resumo}</p>
                      <Button variant="outline" asChild>
                        <Link href={`/blog/${slugMap[post.titulo]}`}>
                        Ler mais
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Artigos Recomendados */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Artigos Recomendados</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {artigosExternos.map((post, index) => (
                  <Card key={index} className="backdrop-blur-sm bg-white/90 flex flex-col">
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">{post.data}</span>
                        <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {post.categoria}
                        </span>
                      </div>
                      <CardTitle className="text-xl mb-2">{post.titulo}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-1">
                      <p className="text-gray-600 mb-4 flex-1">{post.resumo}</p>
                      <Button variant="outline" asChild>
                        <a href={post.link} target="_blank" rel="noopener noreferrer">
                          Ler Artigo Externo
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}