import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {GuessGenre} from './guess-genre';
import {questions} from '../../mocks/questions';

Enzyme.configure({adapter: new Adapter()});

it(`GuessGenre component rendered correctly, submit handler works`, () => {
  const tree = shallow(
      <GuessGenre question={questions[0]} time={{min: `03`, sec: `12`}} />
  );
  const tracks = tree.find(`.track`);
  expect(tracks).toHaveLength(4);
});
