export interface BlogPost {
    slug: string;
    title: string;
    content: string;
    excerpt: string;
    author?: string;
    coverImage?: string;
    tags?: string[];
    readingTime?: string;
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
    author?: string;
    tags?: string[];
  }