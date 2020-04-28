import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {WinScreen} from './win-screen';
import {answers} from '../../mocks/answers';

Enzyme.configure({adapter: new Adapter()});

it(`With time expired`, () => {
  const dispatch = jest.fn();
  const playAgainHandler = jest.fn();
  const tree = shallow(
      <WinScreen
        answers={answers}
        dispatch={dispatch}
        mistakes={3}
        playAgainHandler={playAgainHandler}
      />
  );
  const replayBtn = tree.find(`.replay`);
  replayBtn.simulate(`click`);
  expect(playAgainHandler).toHaveBeenCalledTimes(1);
});
