import React from 'react';

export default function Gif(props) {
  return (
    <li className="gif-wrap">
      <img
        src={props.url}
        alt={props.title}
      />
    </li>
  );
}
