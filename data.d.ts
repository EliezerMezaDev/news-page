declare namespace NEWS {
  type SOURCE = { id: any; name: string };

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
