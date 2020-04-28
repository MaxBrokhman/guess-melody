import React from 'react';

import {useLossScreenMessage} from './hooks';

// eslint-disable-next-line
export const LossScreen = ({mistakes, playAgainHandler}) => {
  const {message} = useLossScreenMessage(mistakes);
  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="result__title">Увы и ах!</h2>
      <p className="result__total result__total--fail">{message}</p>
      <button className="replay" type="button" onClick={playAgainHandler}>Попробовать ещё раз</button>
    </section>
  );
};
