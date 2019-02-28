import React from 'react';
import SearchForm from './SearchForm';

export default function Header() {
  return (
    <header className="main-header">
      <div className="inner">
        <h1 className="main-title">GifSearch</h1>
        <SearchForm />
      </div>
    </header>
  );
}
