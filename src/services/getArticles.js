/* eslint-disable max-len */
export const getArticles = (searchTerm) => {
  return fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${process.env.NEWS_API_KEY}`)
    .then(res => res.json())
    .then(json => json.articles.map(article => ({
      sourceName: article.source.source,
      title: article.title,
      author: article.author,
      content: article.content,
      imageUrl: article.urlToImage,
      url: article.url
    })))
    .then(console.log());
};
