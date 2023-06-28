import React, { useState, useEffect, useContext } from 'react';
import { ApplicationContext } from '../AppContext';
import Game from '../components/Game';
import Modal from '../modals/Modal';

import styles from './GameContainer.scss';

const GameContainer = props => {
  const [games, setGames] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const { user_id } = useContext(ApplicationContext);
  useEffect(() => {
    async function getGames() {
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
      const res = await fetch(`/api/wishlist?user_id=${user_id}`);
      const data = await res.json();
      const newGames = [];

      for (let i = 0; i < data.length; i++) {
        const game = data[i];
        console.log('game', game);
        const { id, name, cover, genres, platforms, summary } = game;

        let coverUrl = '';
        let allPlatforms = '';
        let allGenres = '';

        if (cover) {
          console.log(cover);
          coverUrl = cover;
        }
        if (platforms) {
          allPlatforms = platforms;
        }
        if (genres) {
          allGenres = genres;
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
    <div className='container'>
      {showModal ? (
        <Modal onClose={setShowModal} data={showModal} mode={props.mode} user_id={user_id} />
      ) : null}
      <h2>{title}</h2>
      <div className='games'>{games}</div>
    </div>
  );
};

export default GameContainer;
