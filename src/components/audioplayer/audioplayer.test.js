import React from 'react';
import renderer from 'react-test-renderer';

import {Audioplayer} from './audioplayer';
import {questions} from '../../mocks/questions';

it(`Renders Audioplayer component correctly`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
                .create(
                    <Audioplayer
                      src={questions[0].answers[0].src}
                      activeTrack={new Audio(questions[0].answers[0].src)}
                      clickHandler={clickHandler}
                    />
                )
                .toJSON();
  expect(tree).toMatchSnapshot();
});
