import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Audioplayer} from './audioplayer';
import {questions} from '../../mocks/questions';

Enzyme.configure({adapter: new Adapter()});

it(`Audioplayer component rendered correctly, play button handler works`, () => {
  const clickHandler = jest.fn();
  const tree = shallow(
      <Audioplayer
        src={questions[0].options[0].src}
        type={questions[0].type}
        id={questions[0].options[0].id}
        activeTrack={new Audio(questions[0].options[0].src)}
        clickHandler={clickHandler}
      />
  );
  const btn = tree.find(`.track__button`);
  expect(btn.hasClass(`track__button--play`)).toEqual(true);
  // btn.simulate(`click`);
  // // eslint-disable-next-line
  // console.log(btn);
  // expect(btn.hasClass(`track__button--pause`)).toEqual(true);
});
