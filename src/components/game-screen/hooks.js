import {useEffect} from 'react';

import {useAppContext} from '../../reducer/reducer';
import {questions} from '../../mocks/questions';
import {handleTime} from '../../reducer/actions';

export const useCurrentQuestion = () => {
  const {state} = useAppContext();
  return {
    question: questions[state.currentQuestion],
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
