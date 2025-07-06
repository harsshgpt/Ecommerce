export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  category: string;
  author: string;
  publishedAt: string;
  source: string;
  url: string;
}

export interface NewsCategory {
  id: string;
  name: string;
  slug: string;
}