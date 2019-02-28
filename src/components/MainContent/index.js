import React from 'react';
import GifList from './GifList';

export default function MainContent(props) {
  return (
    <main className="main-content">
      <GifList data={props.data} />
    </main>
  );
}
