import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {GuessGenre} from './guess-genre';
import {questions} from '../../mocks/questions';

Enzyme.configure({adapter: new Adapter()});

it(`GuessGenre component rendered correctly, submit handler works`, () => {
  const answerHandler = jest.fn();
  const tree = shallow(
      <GuessGenre answerHandler={answerHandler} question={questions[0]} />
  );
  const form = tree.find(`.game__tracks`);
  form.simulate(`submit`);
  expect(answerHandler).toHaveBeenCalledTimes(1);
});
