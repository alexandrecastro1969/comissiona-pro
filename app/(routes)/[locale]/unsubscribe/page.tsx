'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function UnsubscribePage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  useEffect(() => {
    if (!token) {
      setStatus('error')
      return
    }

    fetch(`/api/newsletter/unsubscribe?token=${token}`)
      .then(res => res.json())
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'))
  }, [token])

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/images/petroquimica.webp)' }}
    >
      <div className="absolute inset-0 bg-black/50" /> {/* Overlay escuro */}
      
      <div className="container mx-auto px-4 py-8 relative z-10"> {/* z-10 para ficar acima do overlay */}
        <div className="max-w-lg mx-auto text-center">
          {status === 'loading' && (
            <p className="text-white">Processando seu descadastro...</p>
          )}
          
          {status === 'success' && (
            <>
              <h1 className="text-3xl font-bold mb-6 text-white">Descadastro Confirmado</h1>
              <p className="text-white text-lg mb-3">Você foi removido da nossa lista de newsletter com sucesso.</p>
              <p className="text-white text-lg">Se mudar de ideia, você pode se inscrever novamente a qualquer momento.</p>
              <Link 
                href="/" 
                className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Voltar para Home
              </Link>
            </>
          )}
          
          {status === 'error' && (
            <>
              <h1 className="text-3xl font-bold mb-6 text-white">Erro no Descadastro</h1>
              <p className="text-white text-lg mb-4">Não foi possível processar seu descadastro. Por favor, tente novamente mais tarde.</p>
              <Link 
                href="/" 
                className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Voltar para Home
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}