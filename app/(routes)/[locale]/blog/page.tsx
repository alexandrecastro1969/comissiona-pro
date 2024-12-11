import { getAllPosts } from '@/lib/blog/utils';
import { BlogHero } from '@/components/BlogHero';
import { Newsletter } from '@/components/Newsletter';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Blog | Comissiona Pro',
  description: 'Artigos e novidades sobre comissionamento',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-gray-900">
      <BlogHero />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="backdrop-blur-sm bg-white/5 rounded-xl overflow-hidden 
                hover:bg-white/10 transition-all border border-white/10"
            >
              {post.coverImage && (
                <div className="relative h-48 w-full">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={1200}
                    height={630}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <span>{post.readingTime}</span>
                </div>

                <h2 className="text-xl font-semibold mb-3 text-white">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {post.tags && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-blue-900/30 text-blue-200 
                          rounded-full hover:bg-blue-800/40 transition-colors"
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

        <div className="mt-16">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}