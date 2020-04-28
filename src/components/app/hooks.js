import {useCallback} from 'react';

import {resetGame} from '../../reducer/actions';

export const usePlayAgainHandler = (dispatch) => ({
  playAgainHandler: useCallback(() => resetGame(dispatch), []),
});
