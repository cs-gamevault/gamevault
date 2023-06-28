import React from 'react';

const APIGame = props => {
  const platforms = props.data.platforms
    .map(platform => {
      return platform.name;
    })
    .join(', ');

  return (
    <button
      onClick={() => {
        console.log(props.number);
      }}
    >
      <p>{props.number}</p>
      <p>{props.data.name}</p>
      <p>for {platforms}</p>
    </button>
  );
};

export default APIGame;
