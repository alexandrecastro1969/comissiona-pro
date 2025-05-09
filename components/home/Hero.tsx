import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('home.hero')

  return (
    <div className="max-w-4xl mx-auto text-center text-white space-y-8 pt-20">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
        {t('title')}
      </h1>
      <p className="text-xl text-white font-semibold">
        {t('subtitle')}
      </p>
      
      <div className="mt-12 bg-black/30 backdrop-blur-sm p-6 rounded-lg text-left border border-blue-400/20 shadow-lg">
        <p className="text-xl font-bold text-blue-300 flex items-center mb-4">
          <span className="mr-2">🔍</span> {t('challenges.title')}
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start">
            <span className="mr-2 text-red-400 text-xl">🛑</span>
            <span>{t('challenges.hidden_issues')}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-red-400 text-xl">🛠️</span>
            <span>{t('challenges.invisible_failures')}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-red-400 text-xl">📉</span>
            <span>{t('challenges.performance_loss')}</span>
          </li>
        </ul>
        <p className="italic text-gray-300 mb-8">{t('challenges.not_alone')}</p>
        
        <p className="text-xl font-bold text-green-300 mb-4">{t('benefits.title')}</p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="mr-2 text-green-400 text-xl">✔️</span>
            <span>{t('benefits.ai_control')}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-green-400 text-xl">✔️</span>
            <span>{t('benefits.kpis')}</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-green-400 text-xl">✔️</span>
            <span>{t('benefits.methodology')}</span>
          </li>
        </ul>
      </div>
      
      <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
        {t('description')}
      </p>
    </div>
  )
}