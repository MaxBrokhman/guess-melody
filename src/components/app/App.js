import React, {useState} from 'react';

import {WelcomeScreen} from '../welcome-screen/welcome-screen';
import {GameScreen} from '../game-screen/game-screen';
import {questions} from '../../mocks/questions';

export const App = () => {
  // eslint-disable-next-line
  const [currentQuestion, setQuestion] = useState(-1);
  const answerHandler = () => setQuestion(currentQuestion + 1);
  return (
    <>
      {
        currentQuestion > -1
          ? <GameScreen
            answerHandler={answerHandler}
            question={questions[currentQuestion]}
          />
          : <WelcomeScreen clickHandler={answerHandler} />
      }
    </>
  );
};
