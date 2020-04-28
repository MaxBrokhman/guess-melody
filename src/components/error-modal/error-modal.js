import React from 'react';

import {useErrorModal} from './hooks';

// eslint-disable-next-line
export const ErrorModal = ({message}) => {
  useErrorModal();
  return (
    <section className="modal">
      <h2 className="modal__title">Произошла ошибка!</h2>
      <p className="modal__text">{message}</p>
    </section>
  );
};
