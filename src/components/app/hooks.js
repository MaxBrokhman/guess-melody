import {useEffect} from 'react';

import {sendRequest} from '../../api/api';
import {setQuestions, setError} from '../../reducer/actions';

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
