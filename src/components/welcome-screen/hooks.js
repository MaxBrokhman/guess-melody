import {useCallback, useEffect} from 'react';

import {
  getNextQuestion,
  setQuestions,
  setError,
} from '../../reducer/actions';
import {sendRequest} from '../../api/api';

export const useStartBtn = (dispatch) => {
  const startBtnClickHandler = useCallback(() => getNextQuestion(dispatch), []);
  return {
    startBtnClickHandler,
  };
};

export const useQuestionsRequest = (dispatch) => {
  const onFailure = () => {
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
