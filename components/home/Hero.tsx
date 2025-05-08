import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('home.hero')

  return (
    <div className="max-w-4xl mx-auto text-center text-white space-y-8 pt-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        {t('title')}
      </h1>
      <p className="text-xl text-white font-semibold">
        {t('subtitle')}
      </p>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
        {t('description')}
      </p>
    </div>
  )
}