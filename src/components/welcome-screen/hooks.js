import {useCallback} from 'react';

import {getNextQuestion} from '../../reducer/actions';
import {useAppContext} from '../../reducer/reducer';

export const useStartBtn = () => {
  const {dispatch} = useAppContext();
  const startBtnClickHandler = useCallback(() => getNextQuestion(dispatch), []);
  return {
    startBtnClickHandler,
  };
};
