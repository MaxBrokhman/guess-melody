import {useCallback} from 'react';

import {handleAnswer} from '../../reducer/actions';
import {
  TQuestion,
  TDispatch,
  TAnswer,
} from '../../reducer/types';

type TUseArtistAnswerProps = {
  question: TQuestion;
  dispatch: TDispatch;
  mistakes: number;
  currentTime: number;
  answers: Array<TAnswer>;
  currentQuestion: number;
}

type TUseArtistAnswer = {
  answerHandler: (idx: number) => () => void;
}

export const useArtistAnswer = ({
  question,
  dispatch,
  mistakes,
  currentTime,
  answers,
  currentQuestion,
}: TUseArtistAnswerProps): TUseArtistAnswer => {
  const answerHandler = useCallback((idx) => (): void => {
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
  }, []);
  return {
    answerHandler,
  };
};
