import {useCallback} from 'react';

import {resetGame} from '../../reducer/actions';
import {TDispatch} from '../../reducer/types';

type TUsePlayagainHandler = {
  playAgainHandler: () => void;
}

export const usePlayAgainHandler = (dispatch: TDispatch): TUsePlayagainHandler => ({
  playAgainHandler: useCallback(() => resetGame(dispatch), []),
});
