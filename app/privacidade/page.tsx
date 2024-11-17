import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export default function Privacidade() {
  const secoes = [
    {
      titulo: "1. Introdução",
      conteudo: "A ComissionaPro está comprometida em proteger a privacidade e os dados pessoais de seus usuários e clientes. Esta política descreve como coletamos, usamos e protegemos suas informações."
    },
    {
      titulo: "2. Coleta de Dados",
      conteudo: "Coletamos apenas as informações necessárias para a prestação de nossos serviços, incluindo:",
      lista: [
        "Dados de identificação básica",
        "Informações de contato",
        "Dados relacionados aos serviços contratados"
      ]
    },
    {
      titulo: "3. Uso das Informações",
      conteudo: "As informações coletadas são utilizadas exclusivamente para:",
      lista: [
        "Prestação dos serviços contratados",
        "Comunicação com clientes",
        "Melhorias em nossos serviços",
        "Cumprimento de obrigações legais"
      ]
    },
    {
      titulo: "4. Proteção de Dados",
      conteudo: "Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição não autorizada."
    },
    {
      titulo: "5. Seus Direitos",
      conteudo: "Você tem direito a:",
      lista: [
        "Acessar seus dados pessoais",
        "Solicitar correções de dados incorretos",
        "Solicitar a exclusão de seus dados",
        "Revogar consentimento para uso dos dados"
      ]
    },
    {
      titulo: "6. Contato",
      conteudo: "Para questões relacionadas à privacidade de seus dados, entre em contato através do email: privacidade@comissionapro.com.br"
    }
  ]

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/privacidade.webp"
          alt="Background Privacidade"
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
              Política de Privacidade
            </h1>
            <p className="text-xl text-gray-200 text-center mt-4">
              Como protegemos seus dados
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
                          <li key={itemIndex}>{item}</li>
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