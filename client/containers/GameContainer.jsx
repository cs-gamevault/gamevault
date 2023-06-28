import React, { useState, useEffect } from 'react';
import styles from './GameContainer.module.scss';

import Game from '../components/Game';
import Modal from '../modals/Modal';
const GameContainer = () => {
  const [games, setGames] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    (async () => {
      // fetch game data for explore page
      const res = await fetch('/api/explore');
      const data = await res.json();
      const newGames = [];

      for (let i = 0; i < data.length; i++) {
        const game = data[i];

        const { id, name, cover, genres, platforms, summary } = game;

        let coverUrl = '';
        let allPlatforms = '';
        let allGenres = '';

        if (cover) {
          coverUrl = cover.url.slice(2);
        }
        if (platforms) {
          allPlatforms = platforms.map(platform => platform.name).join(', ');
        }
        if (genres) {
          allGenres = genres.map(genre => genre.name).join(', ');
        }

        newGames.push(
          <Game
            id={id}
            name={name}
            cover={coverUrl}
            genres={allGenres}
            platforms={allPlatforms}
            summary={summary}
            key={name}
            onClick={setShowModal}
          />
        );
      }

      setGames(newGames);
    })();
  }, []);

  return (
    <div className={styles.div}>
      {showModal ? <Modal onClose={setShowModal} /> : null}
      <h2 className={styles.h2}>Explore Games!</h2>
      <div className={styles.container}>{games}</div>
    </div>
  );
};

export default GameContainer;
