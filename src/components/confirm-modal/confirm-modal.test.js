import React from 'react';
import renderer from 'react-test-renderer';

import {ConfirmModal} from './confirm-modal';

it(`Renders ConfirmModal component correctly`, () => {
  const onConfirm = jest.fn();
  const onClose = jest.fn();
  const tree = renderer
                .create(
                    <ConfirmModal
                      onConfirm={onConfirm}
                      onClose={onClose}
                    />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
