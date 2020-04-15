import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app';

it(`Renders App component correctly`, () => {
  const tree = renderer
                .create(
                    <App />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
