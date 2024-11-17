import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contato() {
  const informacoes = [
    {
      titulo: "Endereço",
      conteudo: [
        "Av. Paulista, 1106 - Sala 1 - 16° andar",
        "Bairro Bela Vista",
        "São Paulo - SP"
      ],
      icone: <MapPin className="h-6 w-6 text-primary" />
    },
    {
      titulo: "Telefones",
      conteudo: [
        "(19) 98149-0835",
      ],
      icone: <Phone className="h-6 w-6 text-primary" />
    },
    {
      titulo: "E-mail",
      conteudo: [
        "contato@castroconsultoria.com"
      ],
      icone: <Mail className="h-6 w-6 text-primary" />
    },
    {
      titulo: "Horário de Atendimento",
      conteudo: [
        "Segunda a Sexta: 9h às 18h",
      ],
      icone: <Clock className="h-6 w-6 text-primary" />
    }
  ]

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/contato.webp"
          alt="Background Contato"
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
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-200 text-center mt-4">
              Estamos prontos para atender você
            </p>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Formulário de Contato */}
              <Card className="backdrop-blur-sm bg-white/90 h-full transform transition-all duration-300 hover:scale-[1.01]">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="nome" className="block text-sm font-medium mb-2">
                          Nome
                        </label>
                        <Input
                          id="nome"
                          placeholder="Seu nome completo"
                          required
                          className="bg-white/50"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          E-mail
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          required
                          className="bg-white/50"
                        />
                      </div>

                      <div>
                        <label htmlFor="telefone" className="block text-sm font-medium mb-2">
                          Telefone
                        </label>
                        <Input
                          id="telefone"
                          placeholder="(00) 00000-0000"
                          className="bg-white/50"
                        />
                      </div>

                      <div>
                        <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                          Mensagem
                        </label>
                        <Textarea
                          id="mensagem"
                          placeholder="Digite sua mensagem..."
                          rows={4}
                          required
                          className="bg-white/50"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button type="submit" className="w-full">
                      Enviar Mensagem
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Informações de Contato */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {informacoes.map((info, index) => (
                  <Card 
                    key={index} 
                    className="backdrop-blur-sm bg-white/90 transform transition-all duration-300 hover:scale-[1.05]"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        {info.icone}
                        <h3 className="text-xl font-bold">{info.titulo}</h3>
                      </div>
                      {info.conteudo.map((linha, lineIndex) => (
                        <p key={lineIndex} className="text-gray-600">
                          {linha}
                        </p>
                      ))}
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