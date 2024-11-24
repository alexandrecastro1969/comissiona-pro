import { Timer, CheckCircle2, Award } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const destaques = [
  {
    numero: "30+",
    texto: "Anos de Experiência",
    icone: <Timer className="h-8 w-8 text-primary" />
  },
  {
    numero: "10+",
    texto: "Projetos Concluídos",
    icone: <CheckCircle2 className="h-8 w-8 text-primary" />
  },
  {
    numero: "100%",
    texto: "Clientes Satisfeitos",
    icone: <Award className="h-8 w-8 text-primary" />
  }
]

export default function Highlights() {
  return (
    <section aria-label="Destaques">
      <h2 className="sr-only">Nossos Números</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
        {destaques.map((destaque, index) => (
          <Card key={index} className="backdrop-blur-sm bg-white/20 border-none">
            <CardContent className="p-6 text-center text-white">
              <div className="flex justify-center mb-4">
                {destaque.icone}
              </div>
              <p className="text-3xl font-bold mb-2">{destaque.numero}</p>
              <p className="text-gray-100">{destaque.texto}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}