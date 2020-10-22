import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article.css';

function Article({ article }) {
  return (
    <li className={styles.Article}>
      <div>
        <h1 data-testid="article">{article.title}</h1>
        <p>{article.source}</p>
        <p>{article.author}</p>
      </div>
      <p>{article.content}</p>
      <a href={article.url}>
        <img src={article.imageUrl} alt={article.title} />
      </a>
      <p>click above to see more</p>
    </li>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    source: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
    imageUrl: PropTypes.string,
    url: PropTypes.string
  }).isRequired
};

export default Article;

