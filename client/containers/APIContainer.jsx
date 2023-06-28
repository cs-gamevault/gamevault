import React, { useState, useEffect } from 'react';

import APIGame from '../components/APIGame';

import styles from './APIContainer.module.scss';

import data from '../../data.js';

const APIResultContainer = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    //  Send a GET request to server
    //  Server then makes a call to the API
    //  Then responds to the front end with the game data
    //  Store this in a data variable
    const newGames = [];

    for (let i = 0; i < data.length; i++) {
      const game = data[i];
      newGames.push(<APIGame gameData={game} key={i} number={i + 1} componentType="API" />);
    }

    setGames(newGames);
  }, []);

  return (
    <div className={styles.div}>
      <h2 className={styles.h2}>All Results from API</h2>
      <div className={styles.container}>{games}</div>
    </div>
  );
};

export default APIResultContainer;
