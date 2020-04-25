import {useEffect} from 'react';

import {sendRequest} from '../../api';
import {setQuestions} from '../../reducer/actions';

export const useQuestionsRequest = (dispatch) => {
  useEffect(() => {
    const onSuccess = (innerDispatch) => (response) => {
      setQuestions(response.data, innerDispatch);
    };
    sendRequest({
      url: `/questions`,
      onSuccess: onSuccess(dispatch),
      dispatch,
    });
  }, []);
};
