import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Audioplayer} from './audioplayer';
import {questions} from '../../mocks/questions';

Enzyme.configure({adapter: new Adapter()});

describe(`Audioplayer component rendered correctly, play button handler works`, () => {
  it(`Start loading`, () => {
    const clickHandler = jest.fn();
    const tree = shallow(
        <Audioplayer
          src={questions[0].answers[0].src}
          activeTrack={``}
          clickHandler={clickHandler}
        />
    );
    const btn = tree.find(`.track__button`);
    expect(btn.hasClass(`track__button--play`)).toEqual(true);
    btn.simulate(`click`);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
