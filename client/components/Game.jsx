import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import GameInfoModal from '../modals/GameInfoModal';

import smile from '../assets/smile.png';

const Game = ({ id, name, cover, genres, platforms, summary, mode }) => {
  const portal = document.querySelector('#modalPortal1'); 
  const src = cover ? `https://${cover}` : smile;

  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <div>
      {showInfoModal ? createPortal(<GameInfoModal setShowInfoModal={setShowInfoModal} mode={mode} />, portal) : null}
      <button
        id="gameComponent"
        onClick={() => {
          setShowInfoModal(true);
        }}
      >
        <img src={src} />
        <h1>{name}</h1>
        {platforms ? <p>for {platforms}</p> : platforms}
      </button>
    </div>
  );
};

export default Game;
