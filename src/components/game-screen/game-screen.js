import React from 'react';

import {GuessArtist} from '../guess-artist/guess-artist';
import {GuessGenre} from '../guess-genre/guess-genre';
import {useCurrentQuestion, useTimer} from './hooks';
import {useAppContext} from '../../reducer/reducer';

// eslint-disable-next-line
export const GameScreen = () => {
  const {question} = useCurrentQuestion();
  const {state, dispatch} = useAppContext();
  const {time} = useTimer(state.time, dispatch);
  // eslint-disable-next-line
  switch (question.type) {
    case `artist`:
      return (<GuessArtist question={question} time={time} />);
    case `genre`:
      return (<GuessGenre question={question} time={time} />);
    default:
      return null;
  }
};
