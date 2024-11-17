import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users2, Target, Award } from 'lucide-react'

export default function Sobre() {
  const cards = [
    {
      titulo: "Nossa História",
      conteudo: "Com mais de 30 anos de experiência em comissionamento industrial, nossa jornada começou na Braskem, onde desenvolvemos expertise única em projetos complexos de plantas petroquímicas. Esta experiência nos permitiu criar metodologias eficientes e inovadoras para o comissionamento de plantas industriais.",
      icone: <Building2 className="h-8 w-8 text-primary" />
    },
    {
      titulo: "Nossa Equipe",
      conteudo: "Contamos com profissionais altamente qualificados e experientes, com décadas de atuação em comissionamento industrial. Nossa equipe combina conhecimento técnico profundo com habilidades práticas, garantindo excelência em cada projeto.",
      icone: <Users2 className="h-8 w-8 text-primary" />
    },
    {
      titulo: "Nossa Missão",
      conteudo: "Entregar excelência em comissionamento industrial, garantindo a partida segura e eficiente de plantas industriais. Buscamos constantemente inovar em nossas metodologias e ferramentas, sempre focando na satisfação total de nossos clientes.",
      icone: <Target className="h-8 w-8 text-primary" />
    },
    {
      titulo: "Nossos Valores",
      conteudo: "Comprometimento com a segurança, excelência técnica, inovação constante e satisfação do cliente são os pilares que norteiam nossa atuação. Acreditamos que o sucesso de nossos clientes é nosso próprio sucesso.",
      icone: <Award className="h-8 w-8 text-primary" />
    }
  ]

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/sobre.webp"
          alt="Background Sobre"
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
              Sobre Nós
            </h1>
            <p className="text-xl text-gray-200 text-center mt-4 max-w-3xl mx-auto">
              Três décadas de experiência em comissionamento industrial, 
              transformando conhecimento em excelência operacional.
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
              <h2 className="text-3xl font-bold mb-6">Nossa Experiência</h2>
              <p className="text-lg leading-relaxed">
                Nossa trajetória na Braskem nos proporcionou uma perspectiva única 
                no comissionamento de plantas industriais. Participamos de projetos 
                cruciais como as Plantas Piloto P2 e P3, além do projeto greenfield 
                PP3 em Paulínia, desenvolvendo metodologias inovadoras e eficientes 
                para o comissionamento industrial.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}