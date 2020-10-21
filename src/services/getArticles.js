/* eslint-disable max-len */
export const getArticles = (searchTerm) => {
  return fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${process.env.NEWS_API_KEY}`);
};
