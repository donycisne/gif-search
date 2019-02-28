import React from 'react';
import GifList from './GifList';

export default function MainContent(props) {
  return (
    <main className="main-content">
      {
        (props.loading)
        ? <p>Loading...</p>
        : <GifList data={props.data} />
      }
    </main>
  );
}
