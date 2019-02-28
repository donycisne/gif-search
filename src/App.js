import React, { Component } from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainContent />
      </div>
    );
  }
}
