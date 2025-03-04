export const urlFormat = (_url: string): string => {
  return `${import.meta.env.NEWS_API_URL}/${_url}&apiKey=${import.meta.env.NEWS_API_KEY}`;
};
