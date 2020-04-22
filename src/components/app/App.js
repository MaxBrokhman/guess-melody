import React, {useState, useReducer} from 'react';

import {WelcomeScreen} from '../welcome-screen/welcome-screen';
import {GameScreen} from '../game-screen/game-screen';
import {questions} from '../../mocks/questions';
import {
  reducer,
  initialState,
  Context
} from '../../reducer/reducer';

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // eslint-disable-next-line
  const [currentQuestion, setQuestion] = useState(-1);
  const answerHandler = () => setQuestion(currentQuestion + 1);
  return (
    <Context.Provider value={{state, dispatch}}>
      {
        currentQuestion > -1
          ? <GameScreen
            answerHandler={answerHandler}
            question={questions[currentQuestion]}
          />
          : <WelcomeScreen clickHandler={answerHandler} />
      }
    </Context.Provider>
  );
};
