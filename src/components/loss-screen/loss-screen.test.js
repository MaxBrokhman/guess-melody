import React from 'react';
import renderer from 'react-test-renderer';

import {LossScreen} from './loss-screen';

it(`Renders LossScreen component correctly`, () => {
  const tree = renderer
                .create(<LossScreen mistakes={3} />)
                .toJSON();
  expect(tree).toMatchSnapshot();
});
