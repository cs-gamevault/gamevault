import { Button } from '@mui/material';
import React from 'react';

// render a modal with 2 button: confirm, cancel
// confirm deletes the game from the database AND closes the modal
// cancel closes the modal

const deleteFromDatabase = (gameData) => {
  /**
   * sends DELETE request to database
   */
};

const ConfirmDeleteModal = props => {
  const { gameData, setShowDeleteModal } = props;

  // Jimmmy, how does this work again? ReactDOM.render is outdated...
  const portal = document.querySelector('#modalPortal2');

  return (
    <div>
      <h3>Are you sure you want to delete this game from your list?</h3>
      <Button
        variant="contained"
        onClick={() => {
          deleteFromDatabase(gameData);
          setShowDeleteModal(false);
        }}
      >
        Delete Game
      </Button>
      <Button
        className="closeModal"
        variant="outlined"
        onClick={() => {
          setShowDeleteModal(false);
        }}
      >
        x
      </Button>
    </div>
  );
};

export default ConfirmDeleteModal;
