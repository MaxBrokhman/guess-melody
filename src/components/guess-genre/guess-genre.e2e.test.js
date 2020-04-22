import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {GuessGenre} from './guess-genre';
import {questions} from '../../mocks/questions';

Enzyme.configure({adapter: new Adapter()});

it(`GuessGenre component rendered correctly, submit handler works`, () => {
  const tree = mount(
      <GuessGenre question={questions[0]} />
  );
  const tracks = tree.find(`.track`);
  expect(tracks).toHaveLength(4);
});
