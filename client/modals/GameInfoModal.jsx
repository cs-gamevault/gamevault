import React from 'react';
import { Button } from '@mui/material';

const GameInfoModal = props => {
  const { setShowInfoModal } = props;

  return (
    <div>
      Info Modal Goes Here
      <Button variant="text" onClick={setShowInfoModal(false)}>
        X
      </Button>
    </div>
  );
};

export default GameInfoModal;
