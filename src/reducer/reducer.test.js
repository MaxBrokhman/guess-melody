import {reducer, initialState} from './reducer';

describe(`Reducer works correctly`, () => {
  it(`Reducer increment question correctly`, () => {
    const newState = reducer(initialState, {type: `NEXT_QUESTION`});
    expect(newState).toMatchObject({mistakes: 0, currentQuestion: 0});
  });
  it(`Reducer handle mistake correctly`, () => {
    const newState = reducer({mistakes: 0, currentQuestion: 0}, {type: `MISTAKE`});
    expect(newState).toMatchObject({mistakes: 1, currentQuestion: 0});
  });
  it(`Reducer resets state if too many mistakes`, () => {
    const newState = reducer(initialState, {type: `TOO_MANY_MISTAKES`});
    expect(newState).toMatchObject(initialState);
  });
});
