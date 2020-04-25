import React from 'react';

import {GuessArtist} from '../guess-artist/guess-artist';
import {GuessGenre} from '../guess-genre/guess-genre';
import {useCurrentQuestion, useTimer} from './hooks';
import {useAppContext} from '../../reducer/reducer';

export const GameScreen = () => {
  const {state, dispatch} = useAppContext();
  const {question} = useCurrentQuestion({
    currentQuestion: state.currentQuestion,
    questions: state.questions,
    dispatch,
  });
  const {time} = useTimer(state.time, dispatch);
  switch (question.type) {
    case `artist`:
      return (<GuessArtist question={question} time={time} />);
    case `genre`:
      return (<GuessGenre question={question} time={time} />);
    default:
      return null;
  }
};
