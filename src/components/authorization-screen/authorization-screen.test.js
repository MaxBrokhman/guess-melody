import React from 'react';
import renderer from 'react-test-renderer';

import {AuthorizationScreen} from './authorization-screen';

it(`Renders AuthorizationScreen component correctly`, () => {
  const tree = renderer
                .create(<AuthorizationScreen />)
                .toJSON();
  expect(tree).toMatchSnapshot();
});
