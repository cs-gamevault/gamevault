import React, { useState, useEffect } from 'react';
import Game from '../components/Game';
import styles from './GameContainer.module.scss';

const GameContainer = (props) => {
  const { mode } = props;
  const [games, setGames] = useState([]);
  
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
            mode={mode}
          />
        );
      }

      setGames(newGames);
    })();
  }, []);

  return (
    <div className={styles.div}>
      <h2 className={styles.h2}>{mode === 'wish' ? 'Your Wishlist' : 'Explore Games!'}</h2>
      <div className={styles.container}>{games}</div>
    </div>
  );
};

export default GameContainer;
