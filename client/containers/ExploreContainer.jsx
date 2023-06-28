import React, { useState, useEffect } from 'react';
import Game from '../components/Game';
import styles from './ExploreContainer.module.scss';

const APIResultContainer = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    (async () => {
      // fetch game data for explore page
      const res = await fetch('/api/explore');
      const data = await res.json();

      const newGames = [];

      for (let i = 0; i < data.length; i++) {
        newGames.push(<Game data={data[i]} key={data[i].name} componentType="API" />);
      }

      setGames(newGames);
    })();
  }, []);

  return (
    <div className={styles.div}>
      <h2 className={styles.h2}>All Results from API</h2>
      <div className={styles.container}>{games}</div>
    </div>
  );
};

export default APIResultContainer;
