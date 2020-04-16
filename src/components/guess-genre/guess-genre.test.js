import React from 'react';
import renderer from 'react-test-renderer';

import {GuessGenre} from './guess-genre';
import {questions} from '../../mocks/questions';

it(`Renders GuessGenre component correctly`, () => {
  const tree = renderer
                .create(
                    <GuessGenre
                      question={questions[0]}
                      answerHandler={jest.fn()}
                    />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
