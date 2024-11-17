import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="max-w-4xl mx-auto text-center text-white space-y-8">
      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        Excelência em<br />Comissionamento Industrial
      </h1>
      <p className="text-xl md:text-2xl text-gray-200">
        Três décadas de experiência transformando projetos complexos em operações bem-sucedidas
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/servicos">
          <Button variant="default" size="lg" className="text-lg">
            Nossos Serviços
          </Button>
        </Link>
        <Link href="/contato">
          <Button variant="outline" size="lg" className="text-lg bg-white/10 text-white hover:bg-white hover:text-black">
            Fale Conosco
          </Button>
        </Link>
      </div>
    </div>
  )
}