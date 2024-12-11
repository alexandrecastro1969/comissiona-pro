'use client'

import { useState } from 'react'

export function Newsletter() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // TODO: Implementar integração com serviço de newsletter
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulação
    
    setIsLoading(false)
    setEmail('')
    // TODO: Mostrar mensagem de sucesso
  }

  return (
    <div className="mt-16 p-8 bg-gray-50 dark:bg-gray-800/50 rounded-xl relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-semibold mb-4">
          Fique por dentro das novidades!
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Assine nossa newsletter para receber as últimas atualizações sobre comissionamento.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor e-mail"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <span className="animate-spin">⚪</span>
                <span>Enviando...</span>
              </>
            ) : (
              'Assinar'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}