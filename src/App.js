import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header';
import MainContent from './components/MainContent';

export default class App extends Component {

  state = {
    gifs: []
  };

  componentDidMount() {
    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=smU8vGUB44RDbDcuRWlEsVftEvun349U')
      .then(response => {
        this.setState({ gifs: response.data.data })
      })
      .catch(error => {
        console.log('Error fetching and parsing the data', error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <MainContent />
      </div>
    );
  }
}
