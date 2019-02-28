import React, { Component } from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';

export default class App extends Component {

  state = {
    gifs: []
  };

  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/trending?api_key=smU8vGUB44RDbDcuRWlEsVftEvun349U')
    .then(response => response.json())
    .then(responseData => {
      this.setState({ gifs: responseData.data });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    console.log(this.state.gifs);
    return (
      <div>
        <Header />
        <MainContent />
      </div>
    );
  }
}
