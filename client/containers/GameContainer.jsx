import React, { useState, useEffect, useContext } from 'react';
import styles from './GameContainer.module.scss';

import Game from '../components/Game';
import Modal from '../modals/Modal';
import { ApplicationContext } from '../AppContext';

const GameContainer = props => {
  const [games, setGames] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const { user_id } = useContext(ApplicationContext);

  useEffect(() => {
    async function getGames() {
      console.log('exploring');
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
    }

    async function getWishlist() {
      console.log('Wishing');
      const res = await fetch(`/api/wishlist/games?user_id=${props.user_id}`);
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
    }

    if (props.mode === 'wish') getWishlist();
    else getGames();
  }, [props.mode]);

  const title = props.mode === 'wish' ? 'Your Wishlist' : 'Explore Games';

  return (
    <div className={styles.div}>
      {showModal ? (
        <Modal onClose={setShowModal} data={showModal} mode={props.mode} user_id={user_id} />
      ) : null}
      <h2 className={styles.h2}>{title}</h2>
      <div className={styles.container}>{games}</div>
    </div>
  );
};

export default GameContainer;
