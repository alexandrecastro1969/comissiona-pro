import Image from 'next/image'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen relative">
      {/* Background fixo para toda a página */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/commissioning-bg.webp"
          alt="Industrial background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/80" />
      </div>
      
      {/* Conteúdo principal */}
      <div className="relative z-10">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="backdrop-blur-md bg-white/10 rounded-xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}