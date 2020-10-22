import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleList.css';
import Article from '../Article/Article';

function ArticleList({ articles }) {
  const ArticleElements = articles.map(article => (
    <Article key={article.title} article={article}/>
  ));

  return (
    <div id={styles.articleList}>
      <ul>
        {ArticleElements}
      </ul>
    </div>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    sourceName: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
    url: PropTypes.string
  })).isRequired
};

export default ArticleList;

