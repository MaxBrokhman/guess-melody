import {
  useState,
  useCallback,
  useEffect,
} from 'react';

import {handleAnswer} from '../../reducer/actions';

export const useTracks = () => {
  const [activeTrack, setActiveTrack] = useState(``);
  const playerClickHandler = (ref) => () => {
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
}) => {
  const [chooses, setChoose] = useState([]);
  useEffect(() => {
    setChoose(new Array(question.answers.length).fill(false));
  }, [question]);
  const changeHandler = useCallback((idx) => () => {
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
