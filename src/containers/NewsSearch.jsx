import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList';
import Loading from '../components/loading/Loading';
import Search from '../components/Search/Search';
import getArticles from '../services/getArticles';


export default class NewsSearch extends Component {
  state = {
    searchTerm: '',
    articles: [],
    loading: false
  }

  handleSearch = () => {
    this.setState({ loading: true });

    getArticles(this.state.searchTerm)
      .then(articles => this.setState({ articles, loading: false }));

  }

  handleChange = ({ target }) => {
    this.setState({ searchTerm: target.value });
  }

  render() {
    const { 
      articles,
      searchTerm,
      loading
    } = this.state;

    return (
      <div>
        <Search 
          onChange={this.handleChange}
          searchTerm={searchTerm}
        />
        <button onClick={this.handleSearch}>Click me</button>
        {
          loading ? 
            <Loading /> : 
            <ArticleList articles={articles} />
        }
      </div>
    );
  }
}
