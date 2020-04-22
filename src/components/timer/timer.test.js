import React from 'react';
import renderer from 'react-test-renderer';

import {Timer} from './timer';

it(`Renders Timer component correctly`, () => {
  const tree = renderer
                .create(
                    <Timer time={{min: `03`, sec: `50`}} />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
