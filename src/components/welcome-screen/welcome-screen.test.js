import React from 'react';
import renderer from 'react-test-renderer';

import {WelcomeScreen} from './welcome-screen';

it(`Renders WelcomeScreen component correctly`, () => {
  const tree = renderer
                .create(
                    <WelcomeScreen />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
