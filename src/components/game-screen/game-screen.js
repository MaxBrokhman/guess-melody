import React from 'react';

import {GuessArtist} from '../guess-artist/guess-artist';
import {GuessGenre} from '../guess-genre/guess-genre';
import {useCurrentQuestion} from './hooks';

// eslint-disable-next-line
export const GameScreen = () => {
  const {question} = useCurrentQuestion();
  // eslint-disable-next-line
  switch (question.type) {
    case `artist`:
      return (<GuessArtist question={question} />);
    case `genre`:
      return (<GuessGenre question={question} />);
    default:
      return null;
  }
};
