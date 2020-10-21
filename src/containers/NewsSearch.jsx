import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewsSearch extends Component {
  state = {
    searchTerm: '',
    articles: '',
    loading: true
  }

  handleSearch() {

  }

  handleChange({ target }) {
    this.setState({ searchTerm: target.value });
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}
