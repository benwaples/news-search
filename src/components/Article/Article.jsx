import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article.css';

function Article({ article }) {
  return (
    <li className={styles.Article}>
      <h1>{article.title}</h1>
      <p>{article.source}</p>
      <p>{article.author}</p>
      <p>{article.content}</p>
      <a href={article.url}>
        <img src={article.imageUrl} alt={article.name} />
      </a>
      <p>click above to see more</p>
    </li>
  );
}

Article.propTypes = {
  article: PropTypes.objectOf({
    sourceName: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
    imageUrl: PropTypes.string,
    url: PropTypes.string
  }).isRequired
};

export default Article;

