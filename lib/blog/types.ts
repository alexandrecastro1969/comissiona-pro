export interface BlogPost {
  slug: string;
  title: string;
  content: string;
  description: string;
  authors: string[];
  tags: string[];
  heroImage?: string;
  readingTime: string;
}
  
  export interface BlogPrompt {
    type: 'research' | 'news' | 'tutorial';
    wordCount: number;
    tone: string;
    format: string;
    seoRequirements: {
      titleMaxLength: number;
      descriptionMaxLength: number;
    };
  }
  
  export interface ProcessingConfig {
    prompt: string;
    language: string;
    outputFormat: 'mdx' | 'markdown';
  }
  
  export interface MetaData {
    title: string;
    description: string;
    authors?: string[];
    tags?: string[];
    heroImage?: string;
  }