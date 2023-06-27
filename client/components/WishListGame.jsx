import React, { useState } from 'react';
import GameInfoModal from '../modals/GameInfoModal';
import ConfirmDeleteModal from '../modals/ConfirmDeleteModal';
import { Button } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';



/**
 * this game element needs a clickable icon that will trigger its local state to true to render the modal on top of it if selected
 * the modal needs to have an x on it that can reset that state to false to close the modal
 */


const WishListGame = props => {

  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { gameInfo } = props;
  // this game component needs its individual game information passed down to it for the info modal
  // make this a modular component by using a dyanmically rendered Plus or X button based on the function being passed into it (create entry or delete from db)

  return (
    <div>
      {showInfoModal ? <GameInfoModal setShowInfoModal={setShowInfoModal} /> : null}
      {showDeleteModal ? <ConfirmDeleteModal setShowDeleteModal={setShowDeleteModal} /> : null}
      <InfoOutlined onClick={setShowInfoModal(true)} />
      <Button variant="text" onClick={setShowDeleteModal(true)}>
        X
      </Button>
    </div>
  );
};

export default WishListGame;