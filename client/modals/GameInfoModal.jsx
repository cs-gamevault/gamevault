import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import { Button } from '@mui/material';

const addToDatabase = () => {
  /**
   * sends POST request to database
   */
};

const GameInfoModal = props => {
  const { mode, setShowInfoModal } = props;

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Jimmmy, how does this work again?
  const portal = document.querySelector('#modalPortal1');

  
  /**
   * based on local state and the componentType property, the ConfirmDeleteModal conditionally renders on the first button's click
   * The first button uses the passed in componentType property to determine if it should have Add functionality or Delete functionality
   * The second button closes this entire info modal
   */
  return (
    <div>
      <h2>gameData from DB or API Goes Here</h2>
      {showDeleteModal ? (
        <ConfirmDeleteModal setShowDeleteModal={setShowDeleteModal} gameData={gameData} />
      ) : null}
      {/* this button will render its text based on if its part of an API or WishList Game element; it will add or delete the current game */}
      <Button
        variant="contained"
        onClick={() => {
          if (mode === 'explore') {
            // if mode is explore, this button will send a POST request to the database with the game's info
            addToDatabase();
          } else if (mode === 'wish') {
            // if mode is wish, this button will open the ConfirmDeleteModal
            // if user confirms, that modal will fire a function that sends a DELETE request to the db to remove the current game
            setShowDeleteModal(true);
          } else {
            console.log("the dynamic add/delete button for GameInfoModal isn't working yet");
          }
        }}
      >
        {mode === 'explore' ? 'Add to WishList' : 'Delete'}
      </Button>
      <Button
        className="closeModal"
        variant="text"
        onClick={() => {
          setShowInfoModal(false);
        }}
      >
        x
      </Button>
    </div>
  );
};

export default GameInfoModal;
