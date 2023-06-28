import React, { useState } from 'react';
import GameInfoModal from '../modals/GameInfoModal';
import ConfirmDeleteModal from '../modals/ConfirmDeleteModal';
import { Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';



/**
 * this game element needs a clickable icon that will trigger its local state to true to render the modal on top of it if selected
 * the modal needs to have an x on it that can reset that state to false to close the modal
 */


const Game = props => {
  // pass down the setShow.. functions so the X button can close the modal's window
  const [showInfoModal, setShowInfoModal] = useState(false);
  
  const { gameData, componentType } = props;

  return (
    <div>
      <h3>game Thumbnail and Title goes here</h3>
      {showInfoModal ? (
        <GameInfoModal componentType={componentType} gameData={ gameData } setShowInfoModal={setShowInfoModal} />
      ) : null}
      <InfoIcon
        onClick={() => {
          setShowInfoModal(true);
        }}
      />
    </div>
  );
};

export default Game;