// app/(routes)/[locale]/blog/page.tsx
import { getAllPosts } from '@/lib/blog/utils';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Blog | Comissiona Pro',
  description: 'Artigos e novidades sobre comissionamento',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 pt-8 pb-2">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          Últimas Publicações
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="bg-white rounded-xl overflow-hidden 
                transition-all border border-gray-200 shadow-md hover:shadow-lg"
            >
              {post.heroImage && (
                <div className="relative h-48 w-full">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    width={1200}
                    height={630}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
                  {post.authors && post.authors.length > 0 && (
                    <>
                      <span>{post.authors.join(', ')}</span>
                      <span>•</span>
                    </>
                  )}
                  <span>{post.readingTime}</span>
                </div>

                <h2 className="text-xl font-semibold mb-3 text-gray-900">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-700 mb-4 line-clamp-3">
                  {post.description}
                </p>

                {post.tags && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-blue-100 text-blue-700 
                          rounded-full hover:bg-blue-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}