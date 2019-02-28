import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

export default function GifList(props) {

  let gifs;
  if (props.data.length > 0) {
    gifs = props.data.map(gif =>
      <Gif
        key={gif.id}
        url={gif.images.fixed_height.url}
        title={gif.title}
      />
    );
  } else {
    gifs = <NoGifs />
  }

  return (
    <ul className="gif-list">
      {gifs}
    </ul>
  );
}
