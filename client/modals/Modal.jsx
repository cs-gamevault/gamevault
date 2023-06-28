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
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <h2>TEST!</h2>
      </div>
    </div>
  );
};

const portalElement = document.getElementById('modalPortal1');

const Modal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
