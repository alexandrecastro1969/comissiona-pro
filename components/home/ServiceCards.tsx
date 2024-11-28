'use client'

import { FileText, Briefcase, PhoneCall } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import { useLocale } from 'next-intl'

export default function ServiceCards() {
  const t = useTranslations('home')
  const routesT = useTranslations('routes')
  const locale = useLocale()

  const cards = [
    {
      titleKey: "cards.projects.title",
      descriptionKey: "cards.projects.description",
      icone: <Briefcase className="h-6 w-6" />,
      linkKey: "projects",
      buttonKey: "cards.projects.button"
    },
    {
      titleKey: "cards.contact.title",
      descriptionKey: "cards.contact.description",
      icone: <PhoneCall className="h-6 w-6" />,
      linkKey: "contact",
      buttonKey: "cards.contact.button"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
      {cards.map((card, index) => (
        <Card 
          key={index} 
          className="backdrop-blur-sm bg-gray-800/80 transform transition-all duration-300 hover:scale-[1.02]"
        >
          <CardContent className="p-6 text-center flex flex-col h-full">
            <div className="flex justify-center mb-4 text-white">
              {card.icone}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              {t(card.titleKey)}
            </h3>
            <p className="text-gray-200 flex-grow mb-6">
              {t(card.descriptionKey)}
            </p>
            <Link href={routesT(card.linkKey)} className="w-full">
              <Button 
                variant="outline" 
                className="w-full bg-transparent hover:bg-white/10 text-white border-white/20"
              >
                {t(card.buttonKey)}
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}