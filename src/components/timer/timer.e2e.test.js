import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Timer} from './timer';

Enzyme.configure({adapter: new Adapter()});

it(`Timer renders with correct time`, () => {
  const tree = shallow(
      <Timer time={{min: `04`, sec: `53`}} />
  );
  const min = tree.find(`.timer__mins`);
  expect(min.text()).toEqual(`04`);
  const sec = tree.find(`.timer__secs`);
  expect(sec.text()).toEqual(`53`);
});
