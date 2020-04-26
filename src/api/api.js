import axios from 'axios';

import {setFetching, setError} from '../reducer/actions';

export const api = axios.create({
  baseURL: `https://htmlacademy-react-2.appspot.com/guess-melody`,
  timeout: 7000,
  withCredentials: true,
});

const onEveryFailure = (dispatch) => {
  setFetching(false, dispatch);
  setError({
    message: `Questions are not available right now. Please, try again later`,
  }, dispatch);
};

export const sendRequest = ({
  url,
  onSuccess,
  onFailure,
  dispatch,
}) => {
  setFetching(true, dispatch);
  return api.get(url)
    .then((response) => {
      if (response.status === 200) {
        if (onSuccess) {
          onSuccess(response.data);
        }
        setFetching(false, dispatch);
        setError(null, dispatch);
      } else {
        if (onFailure) {
          onFailure(dispatch);
        }
        onEveryFailure(dispatch);
      }
    })
    .catch(() => {
      if (onFailure) {
        onFailure(dispatch);
      }
      onEveryFailure(dispatch);
    });
};
