import {useCallback} from 'react';

import {handleAnswer} from '../../reducer/actions';

export const useArtistAnswer = ({
  question,
  dispatch,
  mistakes,
  currentTime,
  answers,
  currentQuestion,
}) => {
  const answerHandler = useCallback((idx) => () => {
    handleAnswer({
      dispatch,
      type: question.type,
      picked: question.answers[idx].artist,
      correct: question.song.artist,
      mistakes,
      currentTime,
      answers,
      currentQuestion,
    });
  });
  return {
    answerHandler,
  };
};
