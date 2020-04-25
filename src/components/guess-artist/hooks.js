import {useCallback} from 'react';

import {handleAnswer} from '../../reducer/actions';

export const useArtistAnswer = ({
  question,
  dispatch,
  mistakes,
}) => {
  const answerHandler = useCallback((idx) => () => {
    handleAnswer({
      dispatch,
      type: question.type,
      picked: question.answers[idx].artist,
      correct: question.song.artist,
      mistakes,
    });
  });
  return {
    answerHandler,
  };
};
