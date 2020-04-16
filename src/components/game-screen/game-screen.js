import React from 'react';

import {GuessArtist} from '../guess-artist/guess-artist';
import {GuessGenre} from '../guess-genre/guess-genre';
// eslint-disable-next-line
export const GameScreen = ({ question, answerHandler }) => {
  // eslint-disable-next-line
  switch (question.type) {
    case `artist`:
      return (<GuessArtist question={question} answerHandler={answerHandler} />);
    case `genre`:
      return (<GuessGenre question={question} answerHandler={answerHandler} />);
    default:
      return null;
  }
};
