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
      picked: question.options[idx].artist,
      correct: question.answer,
      mistakes,
    });
  });
  return {
    answerHandler,
  };
};
