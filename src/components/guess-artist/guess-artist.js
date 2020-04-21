import React from 'react';

import {Audioplayer} from '../audioplayer/audioplayer';
import {useTracks} from '../guess-genre/guess-genre';
// eslint-disable-next-line
export const GuessArtist = ({ question, answerHandler }) => {
  const {activeTrack, playerClickHandler} = useTracks();
  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
        </svg>

        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <Audioplayer
            // eslint-disable-next-line
            src={question.src}
            // eslint-disable-next-line
            type={question.type} 
            activeTrack={activeTrack}
            clickHandler={playerClickHandler}
          />
        </div>

        <form className="game__artist">
          {// eslint-disable-next-line
          question.options.map(({ artist, imgSrc }, i) => (
              <div className="artist" key={i}>
                <input className="artist__input visually-hidden" type="radio" name="answer" value={i} id={`answer-${i}`} onChange={answerHandler} />
                <label className="artist__name" htmlFor={`answer-${i}`}>
                  <img className="artist__picture" src={imgSrc} alt={artist} />
                  {artist}
                </label>
              </div>
            ))
          }
        </form>
      </section>
    </section>
  );
};
