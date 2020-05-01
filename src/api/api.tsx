import axios from 'axios';

import {setFetching, setError} from '../reducer/actions';
import {TQuestion, TDispatch} from '../reducer/types';

type TSendRequestProps = {
  url: string;
  onSuccess: (data: Array<TQuestion>, dispatch: TDispatch) => void;
  onFailure: () => void;
  method: string;
  data?: {};
  dispatch: TDispatch;
}

export const api = axios.create({
  baseURL: `https://htmlacademy-react-2.appspot.com/guess-melody`,
  timeout: 7000,
  withCredentials: true,
});

export const sendRequest = ({
  url,
  onSuccess,
  onFailure,
  dispatch,
  method,
  data,
}: TSendRequestProps): Promise<void> => {
  setFetching(true, dispatch);
  return api[method](url, data)
    .then((response) => {
      if (response.status === 200) {
        if (onSuccess) {
          onSuccess(response.data, dispatch);
        }
        setError(null, dispatch);
      } else {
        if (onFailure) {
          onFailure();
        }
      }
      setFetching(false, dispatch);
    })
    .catch(() => {
      if (onFailure) {
        onFailure();
      }
      setFetching(false, dispatch);
    });
};
