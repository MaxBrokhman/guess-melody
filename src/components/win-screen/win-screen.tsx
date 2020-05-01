import React from 'react';

import {getCaption} from '../../utils/get-caption';

import {useWinStats} from './hooks';
import {TAnswer, TDispatch} from '../../reducer/types';

type TWinScreenProps = {
  answers: Array<TAnswer>;
  dispatch: TDispatch;
  mistakes: number;
  playAgainHandler: () => void;
}

export const WinScreen = ({
  answers,
  dispatch,
  mistakes,
  playAgainHandler
}: TWinScreenProps): JSX.Element => {
  const {results} = useWinStats(answers, dispatch);
  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">
        За {results.time.min} {getCaption(results.time.min, {
          one: `минуту`,
          lessThenFive: `минуты`,
          lessThenTen: `минут`,
        })} и {results.time.sec} {getCaption(results.time.sec, {
          one: `секунду`,
          lessThenFive: `секунды`,
          lessThenTen: `секунд`,
        })} вы набрали {results.points} {getCaption(results.points, {
          one: `балл`,
          lessThenFive: `балла`,
          lessThenTen: `баллов`,
        })}, дав {results.fast} {getCaption(results.fast, {
          one: `быстрый ответ`,
          lessThenFive: `быстрых ответа`,
          lessThenTen: `быстрых ответов`,
        })}, совершив {mistakes} {getCaption(mistakes, {
          one: `ошибку`,
          lessThenFive: `ошибки`,
          lessThenTen: `ошибок`,
        })}
      </p>
      <button className="replay" type="button" onClick={playAgainHandler}>Сыграть ещё раз</button>
    </section>
  );
};
