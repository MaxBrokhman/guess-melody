import React from 'react';
import renderer from 'react-test-renderer';

import {GuessArtist} from './guess-artist';
import {questions} from '../../mocks/questions';

it(`Renders GuessArtist component correctly`, () => {
  const tree = renderer
                .create(
                    <GuessArtist
                      question={questions[1]}
                      time={{min: `03`, sec: `12`}}
                    />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
