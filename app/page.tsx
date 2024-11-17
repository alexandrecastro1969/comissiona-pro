import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/home/Hero'

// Componentes carregados dinamicamente
const Highlights = dynamic(() => import('@/components/home/Highlights'), {
  loading: () => <div className="h-[300px] animate-pulse bg-gray-200/20 rounded-lg" />
})

const ServiceCards = dynamic(() => import('@/components/home/ServiceCards'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200/20 rounded-lg" />
})

// Blur hash da imagem de fundo (gere usando uma ferramenta online)
const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEwST4oLTU5MTU4N0Y+QUZENjM6OUNGRVFRVl9aXWVmbmdpRlFRZWf/2wBDAR..."

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/petroquimica.webp"
          alt="Indústria Petroquímica"
          fill
          className="object-cover"
          priority
          quality={75}
          sizes="(max-width: 768px) 100vw, 100vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <main className="flex-grow container mx-auto px-4 py-16">
          <Hero />
          
          <Suspense fallback={<div className="h-[300px] animate-pulse bg-gray-200/20 rounded-lg" />}>
            <Highlights />
          </Suspense>

          <Suspense fallback={<div className="h-[400px] animate-pulse bg-gray-200/20 rounded-lg" />}>
            <ServiceCards />
          </Suspense>
        </main>

        <footer className="relative z-10 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-white/80 text-sm">
              <div className="mb-4 md:mb-0">
                © 2024 Comissiona Pro. Todos os direitos reservados.
              </div>
              <div className="flex gap-4">
                <Link href="/termos" className="hover:text-white">
                  Termos de Uso
                </Link>
                <Link href="/privacidade" className="hover:text-white">
                  Política de Privacidade
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}