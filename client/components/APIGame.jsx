import React, {useState} from 'react';

import GameInfoModal from '../modals/GameInfoModal';

import { Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const APIGame = props => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const platforms = props.gameData.platforms
    .map(platform => {
      return platform.name;
    })
    .join(', ');

  return (
    <Button
      variant="outlined"
      onClick={() => {
        console.log(props.number);
      }}
    >
      <p>{props.number}</p>
      <p>{props.gameData.name}</p>
      <p>for {platforms}</p>
      {showInfoModal ? (
        <GameInfoModal
          componentType={props.componentType}
          gameData={props.gameData}
          setShowInfoModal={setShowInfoModal}
        />
      ) : (
        <InfoIcon
          onClick={() => {
            setShowInfoModal(true);
          }}
        />
      )}
    </Button>
  );
};

export default APIGame;
