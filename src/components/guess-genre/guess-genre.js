import React from 'react';

import {Audioplayer} from '../audioplayer/audioplayer';
import {MistakeCounter} from '../mistake-counter/mistake-counter';
import {useAppContext} from '../../reducer/reducer';
import {useTracks, useGenreAnswer} from './hooks';
import {Timer} from '../timer/timer';

// eslint-disable-next-line
export const GuessGenre = ({question, time}) => {
  const {activeTrack, playerClickHandler} = useTracks();
  const {state, dispatch} = useAppContext();
  const {changeHandler, submitHandler} = useGenreAnswer({
    question,
    dispatch,
    mistakes: state.mistakes,
  });
  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
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

      <section className="game__screen">
        {// eslint-disable-next-line
        <h2 className="game__title">{`Выберите ${question.answer} треки`}</h2>}
        <form className="game__tracks" onSubmit={submitHandler}>
          {// eslint-disable-next-line
          question.options.map(({src, id}, i) => (
              <div className="track" key={id}>
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
