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
  it(`Set loosing state correctly`, () => {
    const newState = reducer(initialState, {type: `LOOSE`});
    expect(newState).toMatchObject(Object.assign({}, initialState, {isLost: true}));
  });
  it(`Resets state correctly`, () => {
    const newState = reducer(initialState, {type: `RESET_GAME`});
    expect(newState).toMatchObject(Object.assign({}, initialState));
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
  it(`Adds answer correctly`, () => {
    const answer = {
      isCorrect: true,
      isFast: false,
      time: 256,
    };
    const newState = reducer(initialState, {type: `ADD_ANSWER`, payload: answer});
    expect(newState).toMatchObject(Object.assign({}, initialState, {answers: [answer]}));
  });
});
