import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {LossScreen} from './loss-screen';
import {TIME_EXPIRED_MESSAGE, TOO_MANY_MISTAKES_MESSAGE} from './hooks';

Enzyme.configure({adapter: new Adapter()});

describe(`LossScreen component rendered correctly`, () => {
  it(`With time expired`, () => {
    const tree = shallow(
        <LossScreen mistakes={3} />
    );
    const messageContainer = tree.find(`.result__total`);
    expect(messageContainer.text()).toEqual(TIME_EXPIRED_MESSAGE);
  });

  it(`With too many mistakes`, () => {
    const tree = shallow(
        <LossScreen mistakes={4} />
    );
    const messageContainer = tree.find(`.result__total`);
    expect(messageContainer.text()).toEqual(TOO_MANY_MISTAKES_MESSAGE);
  });
});
