import React from 'react';

import {WelcomeScreen} from '../welcome-screen/welcome-screen';

export const App = () => {
  // eslint-disable-next-line
  const clickHandler = () => console.log(`clicked`);
  return (
    <WelcomeScreen clickHandler={clickHandler} />
  );
};
