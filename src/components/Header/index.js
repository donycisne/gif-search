import React from 'react';
import SearchForm from './SearchForm';

export default function Header(props) {
  return (
    <header className="main-header">
      <div className="inner">
        <h1 className="main-title">Gif Search</h1>
        <SearchForm onSearch={props.onSearch} />
      </div>
    </header>
  );
}
