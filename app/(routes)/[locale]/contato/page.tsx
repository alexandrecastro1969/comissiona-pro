'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useTranslations } from 'next-intl'

type FormData = {
  nome: string
  email: string
  telefone: string
  mensagem: string
}

export default function Contato() {
  const t = useTranslations('contact')
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const informacoes = [
    {
      titleKey: "address.title",
      content: [
        t('address.line1'),
        t('address.line2'),
        t('address.line3')
      ],
      icone: <MapPin className="h-6 w-6 text-primary" />
    },
    {
      titleKey: "phone.title",
      content: [
        "(19) 98149-0835",
      ],
      icone: <Phone className="h-6 w-6 text-primary" />
    },
    {
      titleKey: "email.title",
      content: [
        "contato@castroconsultoria.com"
      ],
      icone: <Mail className="h-6 w-6 text-primary" />
    },
    {
      titleKey: "hours.title",
      content: [
        t('hours.schedule'),
      ],
      icone: <Clock className="h-6 w-6 text-primary" />
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert(t('form.success'))
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          mensagem: ''
        })
      } else {
        alert(t('form.error'))
      }
    } catch (error) {
      alert(t('form.error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/contato.webp"
          alt={t('background.alt')}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-200 text-center mt-4">
              {t('subtitle')}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="backdrop-blur-sm bg-white/90 h-full transform transition-all duration-300 hover:scale-[1.01]">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold mb-6">{t('form.title')}</h2>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="nome" className="block text-sm font-medium mb-2">
                          {t('form.name.label')}
                        </label>
                        <Input
                          id="nome"
                          value={formData.nome}
                          onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
                          placeholder={t('form.name.placeholder')}
                          required
                          className="bg-white/50"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          {t('form.email.label')}
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder={t('form.email.placeholder')}
                          required
                          className="bg-white/50"
                        />
                      </div>

                      <div>
                        <label htmlFor="telefone" className="block text-sm font-medium mb-2">
                          {t('form.phone.label')}
                        </label>
                        <Input
                          id="telefone"
                          value={formData.telefone}
                          onChange={(e) => setFormData(prev => ({ ...prev, telefone: e.target.value }))}
                          placeholder={t('form.phone.placeholder')}
                          className="bg-white/50"
                        />
                      </div>

                      <div>
                        <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                          {t('form.message.label')}
                        </label>
                        <Textarea
                          id="mensagem"
                          value={formData.mensagem}
                          onChange={(e) => setFormData(prev => ({ ...prev, mensagem: e.target.value }))}
                          placeholder={t('form.message.placeholder')}
                          rows={4}
                          required
                          className="bg-white/50"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? t('form.submitting') : t('form.submit')}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {informacoes.map((info, index) => (
                  <Card 
                    key={index} 
                    className="backdrop-blur-sm bg-white/90 transform transition-all duration-300 hover:scale-[1.05]"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        {info.icone}
                        <h3 className="text-xl font-bold">{t(info.titleKey)}</h3>
                      </div>
                      {info.content.map((linha, lineIndex) => (
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