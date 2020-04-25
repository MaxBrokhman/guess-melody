import {useEffect} from 'react';

import {handleTime, setLoose} from '../../reducer/actions';

export const useCurrentQuestion = ({
  questions,
  currentQuestion,
  dispatch,
}) => {
  if (currentQuestion === questions.length) {
    setLoose(dispatch);
    return {
      question: null,
    };
  }
  return {
    question: questions[currentQuestion],
  };
};

export const useTimer = (currentTime, dispatch) => {
  useEffect(() => {
    setTimeout(() => {
      handleTime(currentTime - 1, dispatch);
    }, 1000);
  }, [currentTime]);
  const min = Math.floor(currentTime / 60);
  const sec = currentTime - min * 60;
  return {
    time: {
      min: `0${min}`,
      sec: sec < 10
        ? `0${sec}`
        : sec
    }
  };
};
