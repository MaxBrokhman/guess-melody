import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {GuessArtist} from './guess-artist';
import {questions} from '../../mocks/questions';

Enzyme.configure({adapter: new Adapter()});

it(`GuessArtist component rendered correctly, change handler works`, () => {
  const answerHandler = jest.fn();
  const tree = shallow(
      <GuessArtist answerHandler={answerHandler} question={questions[1]} />
  );
  const input = tree.find(`.artist__input`).first();
  input.simulate(`change`);
  expect(answerHandler).toHaveBeenCalledTimes(1);
});
