export interface NewsRequest {
  country: string;
  q?: string;
  pageSize?: number;
  page?: number;
}

export interface NewsResponse {
  status: string | null;
  totalResults: number | null;
  articles: Article[];
}

export interface Article {
  source: Source;
  author: string | null;
  title: string;
  description: string;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
}

interface Source {
  id: string | null;
  name: string;
}
