import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {MistakeCounter} from './mistake-counter';

Enzyme.configure({adapter: new Adapter()});

it(`MistakeCounter component rendered correctly`, () => {
  const tree = shallow(
      <MistakeCounter mistakes={new Array(2).fill(false)} />
  );
  const mistakes = tree.find(`.wrong`);
  expect(mistakes).toHaveLength(2);
});
