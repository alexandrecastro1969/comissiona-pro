import Link from 'next/link'
import Image from 'next/image'
import { getPostBySlug, getAllPosts } from '@/lib/blog/utils';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Newsletter } from '@/components/Newsletter';
import { TableOfContents } from '@/components/TableOfContents';
import { MDXComponents } from '@/components/MDXComponents';
import { ScrollToTop } from '@/components/ScrollToTop';

interface BlogPostPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const locales = ['pt', 'en']; // seus idiomas suportados
  
  return locales.flatMap(locale => 
    posts.map((post) => ({
      locale,
      slug: post.slug,
    }))
  );
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  try {
    const post = getPostBySlug(params.slug);
    return {
      title: `${post.title} | Comissiona Pro`,
      description: post.description,
    };
  } catch {
    return {
      title: 'Post não encontrado | Comissiona Pro',
      description: 'O post que você procura não foi encontrado.',
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const post = getPostBySlug(params.slug);

    return (
      <div className="container mx-auto px-4 py-8">
        <Link
          href={`/${params.locale}/blog`}
          className="inline-flex items-center text-white hover:text-blue-200 mb-8 transition-colors group"
        >
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
          Voltar para o Blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Conteúdo Principal */}
          <main className="lg:col-span-8 order-2 lg:order-1">
            <article>
              <div className="border-b border-gray-200/10 pb-8 mb-8">
                <h1 className="text-4xl font-bold mb-6 text-white">{post.title}</h1>
                
                <div className="flex items-center gap-3 text-gray-200 mb-4 text-sm">
                  {post.authors && post.authors.map((author, index) => (
                    <span key={index}>{author}</span>
                  ))}
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>

                {post.tags && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-white/10 text-white 
                          rounded-full hover:bg-white/20 
                          transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {post.heroImage && (
                <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    width={1200}
                    height={630}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              )}

              <div className="prose prose-base prose-invert max-w-none 
                prose-headings:text-white
                prose-p:text-gray-200
                prose-a:text-blue-300 hover:prose-a:text-blue-200
                prose-li:text-gray-200
                prose-ul:my-4 prose-li:my-1
                prose-img:rounded-xl">
                <MDXRemote 
                  source={post.content} 
                  components={MDXComponents}
                />
              </div>
            </article>

            <div className="mt-16">
              <Newsletter />
            </div>
          </main>

          {/* Sidebar com TOC */}
          <aside className="lg:col-span-4 order-1 lg:order-2 lg:sticky lg:top-8">
            <TableOfContents content={post.content} />
          </aside>
        </div>
        
        {/* Botão de voltar ao topo aqui */}
        <ScrollToTop />
      </div>
    );
  } catch (error) {
    notFound();
  }
}