import React from 'react';
import renderer from 'react-test-renderer';

import {MistakeCounter} from './mistake-counter';

it(`Renders MistakeCounter component correctly`, () => {
  const tree = renderer
                .create(
                    <MistakeCounter
                      mistakes={new Array(2)}
                    />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
