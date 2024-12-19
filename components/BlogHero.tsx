import Image from 'next/image'

// components/BlogHero.tsx
export function BlogHero() {
  return (
    <div className="relative h-[200px] mb-6 overflow-hidden"> {/* Reduzido de mb-12 para mb-6 */}
      {/* Imagem de fundo com overlay escuro */}
      <div className="absolute inset-0">
        <Image
          src="/images/commissioning-bg.webp"
          alt="Industrial background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Overlay mais escuro para melhor legibilidade */}
        <div className="absolute inset-0 bg-black/75" />
      </div>
    </div>
  )
}