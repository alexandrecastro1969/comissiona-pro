import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h2 className="text-2xl font-bold mb-4">Post não encontrado</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Desculpe, não conseguimos encontrar o post que você está procurando.
      </p>
      <Link
        href="/blog"
        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
      >
        ← Voltar para o Blog
      </Link>
    </div>
  )
}