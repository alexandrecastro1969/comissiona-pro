import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, MetaData } from './types';

const postsDirectory = path.join(process.cwd(), 'content', 'blog', 'posts');

export async function getAllPosts(): Promise<BlogPost[]> {
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true });
      return [];
    }
  
    const fileNames = fs.readdirSync(postsDirectory);
    const allPosts = fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        return getPostBySlug(slug);
      });
  
    return allPosts;
}

export function getPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const metadata = data as MetaData;

  return {
    slug,
    title: metadata.title,
    content: content,
    description: metadata.description,
    authors: metadata.authors || [],
    tags: metadata.tags || [],
    heroImage: metadata.heroImage || '/images/commissioning-bg.webp',
    readingTime: calculateReadingTime(content)
  };
}

export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const numberOfWords = content.split(/\s/g).length;
  const minutes = Math.ceil(numberOfWords / wordsPerMinute);
  return `${minutes} min de leitura`;
}

export function validateMetadata(metadata: MetaData): boolean {
  const requiredFields = ['title', 'description'];
  return requiredFields.every(field => field in metadata);
}

export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}