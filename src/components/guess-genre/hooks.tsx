import {
  useState,
  useCallback,
  useEffect,
} from 'react';

import {handleAnswer} from '../../reducer/actions';
import {
  TUseTracks,
  TUseGenreAnswerProps,
  TUseGenreAnswer,
} from './types';

export const useTracks = (): TUseTracks => {
  const [activeTrack, setActiveTrack] = useState(``);
  const playerClickHandler = (ref) => (): void => {
    const {current} = ref;
    if (current) {
      const trackToSet = activeTrack !== current.src
        ? current.src
        : ``;
      setActiveTrack(trackToSet);
    }
  };
  return {
    activeTrack,
    playerClickHandler,
  };
};

export const useGenreAnswer = ({
  question,
  dispatch,
  mistakes,
  currentTime,
  answers,
  currentQuestion,
}: TUseGenreAnswerProps): TUseGenreAnswer => {
  const [chooses, setChoose] = useState([]);
  useEffect(() => {
    setChoose(new Array(question.answers.length).fill(false));
  }, [question]);
  const changeHandler = useCallback((idx) => (): void => {
    const updatedAnswers = [...chooses];
    updatedAnswers[idx] = !updatedAnswers[idx];
    setChoose(updatedAnswers);
  }, [chooses, question]);

  const submitHandler = useCallback((evt) => {
    evt.preventDefault();
    handleAnswer({
      dispatch,
      type: question.type,
      picked: chooses,
      mistakes,
      currentTime,
      answers,
      currentQuestion,
      correct: question.answers.map((answer) => {
        return answer.genre === question.genre;
      }),
    });
  }, [chooses, question]);
  return {
    changeHandler,
    submitHandler,
  };
};
