declare namespace NEWS {
  type SOURCE = { id: any; name: string };

  type CATEGORY = | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology"

  interface ARTICLE {
    source: SOURCE;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }

  
}
