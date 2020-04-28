import React from 'react';
import renderer from 'react-test-renderer';

import {WinScreen} from './win-screen';
import {answers} from '../../mocks/answers';

it(`Renders WinScreen component correctly`, () => {
  const dispatch = jest.fn();
  const tree = renderer
                .create(
                    <WinScreen
                      answers={answers}
                      dispatch={dispatch}
                      mistakes={3}
                    />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
