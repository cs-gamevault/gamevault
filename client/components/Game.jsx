import React, { useState } from 'react';
import GameInfoModal from '../modals/GameInfoModal';
import { Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import smile from '../assets/smile.png';

import './Game.scss';

const Game = ({ id, name, cover, genres, platforms, summary, onClick }) => {
  const src = cover ? `https://${cover}` : smile;

  return (
    <button className='game'
      onClick={() => {
        onClick({ id, name, genres, platforms, summary, cover: src });
      }}
    >
      <img src={src} />
      <div className='info'>
        <h1>{name}</h1>
        {platforms ? <p>{platforms}</p> : platforms}
      </div>
    </button>
  );
};

export default Game;
