import {useEffect} from 'react';

import {setError} from '../../reducer/actions';
import {useAppContext} from '../../reducer/reducer';

export const useErrorModal = (): void => {
  const {dispatch} = useAppContext();
  useEffect(() => {
    setTimeout(() => {
      setError(null, dispatch);
    }, 200);
  }, []);
};
