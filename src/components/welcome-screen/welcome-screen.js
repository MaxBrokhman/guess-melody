import React from 'react';

import {useStartBtn} from './hooks';

// eslint-disable-next-line
export const WelcomeScreen = () => {
  const {startBtnClickHandler} = useStartBtn();
  return (
    <section className="welcome">
      <div className="welcome__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <button className="welcome__button" onClick={startBtnClickHandler}>
        <span className="visually-hidden">Начать игру</span>
      </button>
      <h2 className="welcome__rules-title">Правила игры</h2>
      <p className="welcome__text">Правила просты:</p>
      <ul className="welcome__rules-list">
        <li>За 5 минут нужно ответить на все вопросы.</li>
        <li>Можно допустить 3 ошибки.</li>
      </ul>
      <p className="welcome__text">Удачи!</p>
    </section>
  );
};
