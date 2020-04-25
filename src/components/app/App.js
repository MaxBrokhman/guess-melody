import React, {useReducer} from 'react';

import {WelcomeScreen} from '../welcome-screen/welcome-screen';
import {GameScreen} from '../game-screen/game-screen';
import {useQuestionsRequest} from './hooks';
import {
  reducer,
  initialState,
  Context
} from '../../reducer/reducer';

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useQuestionsRequest(dispatch);
  return (
    <Context.Provider value={{state, dispatch}}>
      {
        state.currentQuestion > -1
          ? <GameScreen />
          : <WelcomeScreen />
      }
    </Context.Provider>
  );
};
