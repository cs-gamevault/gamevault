import React, { useState } from 'react';

import GameInfoModal from '../modals/GameInfoModal';

import { Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

import smile from '../assets/smile.png';

const Game = ({ id, name, cover, genres, platforms, summary, onClick }) => {
  const src = cover ? `https://${cover}` : smile;
  return (
    <button
      onClick={() => {
        onClick({ id, name, genres, platforms, summary, cover });
      }}
    >
      <img src={src} />
      <h1>{name}</h1>
      {platforms ? <p>for {platforms}</p> : platforms}
    </button>
  );
};

export default Game;
