import {reducer, initialState} from './reducer';

describe(`Reducer works correctly`, () => {
  it(`Reducer increment question correctly`, () => {
    const newState = reducer(initialState, {type: `NEXT_QUESTION`});
    expect(newState).toMatchObject({mistakes: 0, currentQuestion: 0, time: 300});
  });
  it(`Reducer handle mistake correctly`, () => {
    const newState = reducer({mistakes: 0, currentQuestion: 0, time: 300}, {type: `MISTAKE`});
    expect(newState).toMatchObject({mistakes: 1, currentQuestion: 0, time: 300});
  });
  it(`Reducer resets state if too many mistakes`, () => {
    const newState = reducer(initialState, {type: `TOO_MANY_MISTAKES`});
    expect(newState).toMatchObject(initialState);
  });
  it(`Updates time correctly`, () => {
    const mock = {
      mistakes: 0,
      currentQuestion: 0,
      time: 300,
    };
    const newState = reducer(mock, {type: `TICK`, payload: 299});
    expect(newState).toMatchObject({
      mistakes: 0,
      currentQuestion: 0,
      time: 299,
    });
  });
});
