import React from 'react';

import {Audioplayer} from '../audioplayer/audioplayer';
import {MistakeCounter} from '../mistake-counter/mistake-counter';
import {useAppContext} from '../../reducer/reducer';
import {useTracks} from './hooks';

// eslint-disable-next-line
export const GuessGenre = ({question, answerHandler}) => {
  const {activeTrack, playerClickHandler} = useTracks();
  const {state} = useAppContext();
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

        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <MistakeCounter mistakes={new Array(state.mistakes).fill(false)} />
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите инди-рок треки</h2>
        <form className="game__tracks" onSubmit={answerHandler}>
          {// eslint-disable-next-line
          question.options.map(({src, id}) => (
              <Audioplayer
                src={src}
                key={id}
                // eslint-disable-next-line
                type={question.type} 
                activeTrack={activeTrack}
                clickHandler={playerClickHandler}
              />
            ))
          }
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  );
};
