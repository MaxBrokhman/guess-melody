import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {WelcomeScreen} from './welcome-screen';

Enzyme.configure({adapter: new Adapter()});

it(`WelcomeScreen component rendered correctly, click handler working`, () => {
  const clickHandler = jest.fn();
  const tree = shallow(
      <WelcomeScreen clickHandler={clickHandler} />
  );
  const btn = tree.find(`.welcome__button`);
  btn.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
