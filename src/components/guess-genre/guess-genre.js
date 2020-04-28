import React from 'react';

import {Audioplayer} from '../audioplayer/audioplayer';
import {MistakeCounter} from '../mistake-counter/mistake-counter';
import {useAppContext} from '../../reducer/reducer';
import {useTracks, useGenreAnswer} from './hooks';
import {Timer} from '../timer/timer';
import {ConfirmModal} from '../confirm-modal/confirm-modal';

export const GuessGenre = ({
  // eslint-disable-next-line
  question, 
  // eslint-disable-next-line
  time, 
  // eslint-disable-next-line
  backBtnHandler,
  // eslint-disable-next-line
  isConfirmModalOpen,
  // eslint-disable-next-line
  confirmHandler,
  // eslint-disable-next-line
  closeConfirmModalHandler,
}) => {
  const {activeTrack, playerClickHandler} = useTracks();
  const {state, dispatch} = useAppContext();
  const {changeHandler, submitHandler} = useGenreAnswer({
    question,
    dispatch,
    mistakes: state.mistakes,
    currentTime: state.time,
    answers: state.answers,
    currentQuestion: state.currentQuestion,
  });
  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#" onClick={backBtnHandler}>
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
        </svg>

        <Timer time={time} />

        <MistakeCounter mistakes={new Array(state.mistakes).fill(false)} />
      </header>
      {
        isConfirmModalOpen && <ConfirmModal onConfirm={confirmHandler} onClose={closeConfirmModalHandler} />
      }
      <section className="game__screen">
        {// eslint-disable-next-line
        <h2 className="game__title">{`Выберите ${question.genre} треки`}</h2>}
        <form className="game__tracks" onSubmit={submitHandler}>
          {// eslint-disable-next-line
          question.answers.map(({src}, i) => (
              <div className="track" key={`${src}-${i}-${state.currentQuestion}`}>
                <Audioplayer
                  src={src}
                  activeTrack={activeTrack}
                  clickHandler={playerClickHandler}
                />
                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name="answer"
                    value={i}
                    id={`answer-${src}`}
                    onChange={changeHandler(i)}
                  />
                  <label className="game__check" htmlFor={`answer-${src}`}>Отметить</label>
                </div>
              </div>
            ))
          }
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  );
};
