import {useState, useCallback} from 'react';

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
}) => {
  const [answers, setAnswer] = useState(new Array(question.answers.length).fill(false));
  const changeHandler = useCallback((idx) => () => {
    const updatedAnswers = [...answers];
    updatedAnswers[idx] = !updatedAnswers[idx];
    setAnswer(updatedAnswers);
  }, [answers, question]);

  const submitHandler = useCallback((evt) => {
    evt.preventDefault();
    handleAnswer({
      dispatch,
      type: question.type,
      picked: answers,
      mistakes,
      correct: question.answers.map((answer) => {
        return answer.genre === question.genre;
      })
    });
  }, [answers, question]);
  return {
    changeHandler,
    submitHandler,
  };
};
