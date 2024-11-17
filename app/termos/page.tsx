import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export default function Termos() {
  const secoes = [
    {
      titulo: "1. Aceitação dos Termos",
      conteudo: "Ao acessar e utilizar os serviços da ComissionaPro, você concorda com estes termos e condições. Se você não concordar com alguma parte destes termos, recomendamos que não utilize nossos serviços.",
      lista: [
        "Leia atentamente todos os termos",
        "A utilização dos serviços implica em aceitação",
        "Atualizações podem ocorrer periodicamente"
      ]
    },
    {
      titulo: "2. Uso do Serviço",
      conteudo: "Os serviços da ComissionaPro devem ser utilizados de acordo com as leis aplicáveis e estas diretrizes:",
      lista: [
        "Fornecer informações verdadeiras e precisas",
        "Manter a confidencialidade de suas credenciais",
        "Não utilizar os serviços para fins ilícitos",
        "Respeitar os direitos de propriedade intelectual"
      ]
    },
    {
      titulo: "3. Propriedade Intelectual",
      conteudo: "Todo o conteúdo disponibilizado em nossos serviços está protegido por direitos autorais e outras leis de propriedade intelectual.",
      lista: [
        "Marcas, logos e nomes comerciais",
        "Documentos técnicos e metodologias",
        "Software e ferramentas desenvolvidas",
        "Conteúdo visual e textual do site"
      ]
    },
    {
      titulo: "4. Responsabilidades",
      conteudo: "A ComissionaPro se compromete a:",
      lista: [
        "Prestar serviços com qualidade e profissionalismo",
        "Manter a confidencialidade das informações",
        "Seguir as melhores práticas do mercado",
        "Cumprir prazos e acordos estabelecidos"
      ]
    },
    {
      titulo: "5. Limitação de Responsabilidade",
      conteudo: "A ComissionaPro não se responsabiliza por:",
      lista: [
        "Uso indevido dos serviços pelo cliente",
        "Problemas técnicos fora de nosso controle",
        "Perdas ou danos indiretos",
        "Informações incorretas fornecidas pelo cliente"
      ]
    },
    {
      titulo: "6. Modificações dos Termos",
      conteudo: "Reservamos o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas aos usuários através de nossos canais oficiais.",
      lista: [
        "Notificação prévia de alterações",
        "Direito de aceitar ou recusar novos termos",
        "Vigência imediata após publicação"
      ]
    }
  ]

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/termos.webp"
          alt="Background Termos"
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
              Termos de Uso
            </h1>
            <p className="text-xl text-gray-200 text-center mt-4">
              Condições gerais para uso de nossos serviços
            </p>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {secoes.map((secao, index) => (
                <Card key={index} className="backdrop-blur-sm bg-white/90">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{secao.titulo}</h2>
                    <p className="text-gray-600 mb-4">{secao.conteudo}</p>
                    {secao.lista && (
                      <ul className="list-disc list-inside text-gray-600">
                        {secao.lista.map((item, itemIndex) => (
                          <li key={itemIndex} className="mb-2">{item}</li>
                        ))}
                      </ul>
                    )}
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