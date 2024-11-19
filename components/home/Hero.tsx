import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="max-w-4xl mx-auto text-center text-white space-y-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        <span className="md:hidden">
          Comissionamento<br />Industrial
        </span>
        <span className="hidden md:inline">
          Comissionamento Industrial e Treinamento
        </span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
        Três décadas de experiência transformando projetos complexos em operações bem-sucedidas
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link href="/servicos">
          <Button variant="default" size="lg" className="w-full sm:w-auto text-lg">
            Nossos Serviços
          </Button>
        </Link>
        <Link href="/contato">
          <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg bg-white/10 text-white hover:bg-white hover:text-black">
            Fale Conosco
          </Button>
        </Link>
      </div>
    </div>
  )
}