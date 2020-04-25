import {reducer, initialState} from './reducer';

describe(`Reducer works correctly`, () => {
  it(`Reducer increment question correctly`, () => {
    const newState = reducer(initialState, {type: `NEXT_QUESTION`});
    expect(newState).toMatchObject(Object.assign({}, initialState, {currentQuestion: 0}));
  });
  it(`Reducer handle mistake correctly`, () => {
    const newState = reducer(initialState, {type: `MISTAKE`});
    expect(newState).toMatchObject(Object.assign({}, initialState, {mistakes: 1}));
  });
  it(`Reducer resets state if too many mistakes`, () => {
    const newState = reducer(initialState, {type: `TOO_MANY_MISTAKES`});
    expect(newState).toMatchObject(initialState);
  });
  it(`Updates time correctly`, () => {
    const newState = reducer(initialState, {type: `TICK`, payload: 299});
    expect(newState).toMatchObject(Object.assign({}, initialState, {time: 299}));
  });
  it(`Sets questions correctly`, () => {
    const newState = reducer(initialState, {type: `SET_QUESTIONS`, payload: `DATA AQUIRED`});
    expect(newState).toMatchObject(Object.assign({}, initialState, {questions: `DATA AQUIRED`}));
  });
  it(`Sets error correctly`, () => {
    const newState = reducer(initialState, {type: `SET_ERROR`, payload: `ERROR OCCURED`});
    expect(newState).toMatchObject(Object.assign({}, initialState, {error: `ERROR OCCURED`}));
  });
  it(`Sets isFetching status correctly`, () => {
    const newState = reducer(initialState, {type: `SET_FETCHING`, payload: true});
    expect(newState).toMatchObject(Object.assign({}, initialState, {isFetching: true}));
  });
});
