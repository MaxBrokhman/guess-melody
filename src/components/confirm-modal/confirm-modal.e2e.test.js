import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {ConfirmModal} from './confirm-modal';

Enzyme.configure({adapter: new Adapter()});

it(`With time expired`, () => {
  const onConfirm = jest.fn();
  const onClose = jest.fn();
  const tree = shallow(
      <ConfirmModal
        onConfirm={onConfirm}
        onClose={onClose}
      />
  );
  const buttons = tree.find(`.modal__button`);
  const okBtn = buttons.first();
  const cancelBtn = buttons.last();
  okBtn.simulate(`click`);
  expect(onConfirm).toHaveBeenCalledTimes(1);
  cancelBtn.simulate(`click`);
  expect(onClose).toHaveBeenCalledTimes(1);
});
