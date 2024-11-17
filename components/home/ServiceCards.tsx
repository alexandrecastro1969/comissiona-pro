import Link from 'next/link'
import { FileText, Briefcase, PhoneCall } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const cards = [
  {
    titulo: "Projetos",
    descricao: "Conheça nossos casos de sucesso em comissionamento industrial, incluindo projetos complexos na Braskem e outras grandes empresas do setor.",
    icone: <Briefcase className="h-6 w-6 text-primary" />,
    link: "/projetos",
    buttonText: "Ver Projetos"
  },
  {
    titulo: "Blog",
    descricao: "Artigos técnicos, insights do setor e as últimas novidades em comissionamento industrial e gestão de projetos.",
    icone: <FileText className="h-6 w-6 text-primary" />,
    link: "/blog",
    buttonText: "Ler Blog"
  },
  {
    titulo: "Contato",
    descricao: "Entre em contato para discutir seu próximo projeto. Nossa equipe está pronta para oferecer soluções personalizadas para suas necessidades.",
    icone: <PhoneCall className="h-6 w-6 text-primary" />,
    link: "/contato",
    buttonText: "Contatar"
  }
]

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
      {cards.map((card, index) => (
        <Card 
          key={index} 
          className="backdrop-blur-sm bg-white/90 transform transition-all duration-300 hover:scale-[1.02]"
        >
          <CardContent className="p-6 text-center flex flex-col h-full">
            <div className="flex justify-center mb-4">
              {card.icone}
            </div>
            <h3 className="text-xl font-semibold mb-4">
              {card.titulo}
            </h3>
            <p className="text-gray-600 flex-grow mb-6">
              {card.descricao}
            </p>
            <Link href={card.link}>
              <Button variant="outline" className="w-full bg-white/10 hover:bg-primary hover:text-white">
                {card.buttonText}
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}