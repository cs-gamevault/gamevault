import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.scss';

const Backdrop = props => {
  return (
    <div
      className={styles.backdrop}
      onClick={() => {
        props.onClose(false);
      }}
    />
  );
};

const ModalOverlay = props => {
  const buttonText = props.mode === 'wish' ? 'Remove from wishlist' : 'Add to wishlist';

  function handleClick() {
    let endpoint = ``;
    if (props.mode === 'wish') {
      endpoint = `/api/wishlist?user_id=${props.user_id}&game_id=${props.data.id}`;
      fetch(endpoint, {
        method: 'DELETE',
      });
    }

    if (props.mode === 'explore') {
      endpoint = `/api/wishlist?user_id=${props.user_id}`;
      const body = { game: props.data };
      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
    }
  }

  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <h2>{props.data.name}</h2>
        <h3>
          Genres: <span>{props.data.genres || 'No listed genres'}</span>
        </h3>
        <h3>
          Platforms: <span>{props.data.platforms || 'No listed platforms'}</span>
        </h3>
        <button onClick={handleClick}>{buttonText}</button>
      </div>
    </div>
  );
};

const portalElement = document.getElementById('modalPortal1');

const Modal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay data={props.data} mode={props.mode} user_id={props.user_id}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
