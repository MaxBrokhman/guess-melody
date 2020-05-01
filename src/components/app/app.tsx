import React, {useReducer} from 'react';

import {WelcomeScreen} from '../welcome-screen/welcome-screen';
import {GameScreen} from '../game-screen/game-screen';
import {ErrorModal} from '../error-modal/error-modal';
import {WinScreen} from '../win-screen/win-screen';
import {LossScreen} from '../loss-screen/loss-screen';
import {usePlayAgainHandler} from './hooks';
import {
  reducer,
  initialState,
  Context,
} from '../../reducer/reducer';

export const App = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {playAgainHandler} = usePlayAgainHandler(dispatch);
  const isEnd = state.currentQuestion > 0 && state.currentQuestion === state.questions.length;
  return (
    <Context.Provider value={{state, dispatch}}>
      {
        state.isLost && (
          <LossScreen mistakes={state.mistakes} playAgainHandler={playAgainHandler} />
        )
      }
      {
        isEnd && !state.isLost && (
          <WinScreen
            answers={state.answers}
            dispatch={dispatch}
            mistakes={state.mistakes}
            playAgainHandler={playAgainHandler}
          />
        )
      }
      {
        state.currentQuestion > -1 && !isEnd && !state.isLost && <GameScreen />
      }
      {
        state.currentQuestion === -1 && !isEnd && !state.isLost && (
          <WelcomeScreen isFetching={state.isFetching} />
        )
      }
      {
        state.error && <ErrorModal message={state.error.message} />
      }
    </Context.Provider>
  );
};
