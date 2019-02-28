import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header';
import MainContent from './components/MainContent';

export default class App extends Component {

  state = {
    gifs: [],
    loading: true
  };

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'cats') => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=smU8vGUB44RDbDcuRWlEsVftEvun349U`)
      .then(response => {
        this.setState({
          gifs: response.data.data,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing the data', error);
      });
  }

  render() {
    return (
      <div>
        <Header onSearch={this.performSearch} loading={this.state.loading}/>
        <MainContent data={this.state.gifs} />
      </div>
    );
  }
}
