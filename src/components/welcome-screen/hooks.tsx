import {useCallback, useEffect} from 'react';

import {
  getNextQuestion,
  setQuestions,
  setError,
} from '../../reducer/actions';
import {sendRequest} from '../../api/api';
import {TDispatch} from '../../reducer/types';

type TUseStartBtn = {
  startBtnClickHandler: () => void;
}

export const useStartBtn = (dispatch: TDispatch): TUseStartBtn => {
  const startBtnClickHandler = useCallback(() => getNextQuestion(dispatch), []);
  return {
    startBtnClickHandler,
  };
};

export const useQuestionsRequest = (dispatch: TDispatch): void => {
  const onFailure = (): void => {
    setError({
      message: `Questions are not available right now. Please, try again later`,
    }, dispatch);
  };
  useEffect(() => {
    sendRequest({
      url: `/questions`,
      onSuccess: setQuestions,
      onFailure,
      dispatch,
      method: `get`,
    });
  }, []);
};
