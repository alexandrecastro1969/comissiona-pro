import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Hero from '@/components/home/Hero';
import { useTranslations } from 'next-intl';
import ChatInterface from '@/components/ChatInterface';

// Componentes carregados dinamicamente
const Highlights = dynamic(() => import('@/components/home/Highlights'), {
  loading: () => <div className="h-[300px] animate-pulse bg-gray-200/20 rounded-lg" />
});

const ServiceCards = dynamic(() => import('@/components/home/ServiceCards'), {
  loading: () => <div className="h-[400px] animate-pulse bg-gray-200/20 rounded-lg" />
});

const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEwST4oLTU5MTU4N0Y+QUZENjM6OUNGRVFRVl9aXWVmbmdpRlFRZWf/2wBDAR...";

export const metadata = {
  title: 'Comissiona Pro | Excelência em Comissionamento Industrial',
  description: 'Soluções especializadas para comissionamento seguro e eficiente de plantas industriais',
};

export default function Home() {
  const t = useTranslations('home');

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/petroquimica.webp"
          alt={t('background.alt')}
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

          {/* Chat Interface */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-white">
              ComissionaPro chat
            </h2>
            <ChatInterface />
          </div>
        </main>
      </div>
    </div>
  );
}