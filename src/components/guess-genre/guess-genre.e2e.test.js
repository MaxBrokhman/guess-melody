import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {GuessGenre} from './guess-genre';
import {questions} from '../../mocks/questions';

Enzyme.configure({adapter: new Adapter()});

it(`GuessGenre component rendered correctly, submit handler works`, () => {
  const answerHandler = jest.fn();
  const tree = mount(
      <GuessGenre answerHandler={answerHandler} question={questions[0]} />
  );
  const form = tree.find(`.game__tracks`);
  form.simulate(`submit`);
  expect(answerHandler).toHaveBeenCalledTimes(1);
  const tracks = tree.find(`.track`);
  expect(tracks).toHaveLength(4);
});
