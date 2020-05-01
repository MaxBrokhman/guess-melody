import {createContext, useContext} from 'react';

import {
  TState,
  TContext,
  TAction,
  TAnswer,
} from './types';

export const initialState: TState = {
  mistakes: 0,
  currentQuestion: -1,
  time: 300,
  questions: [],
  isFetching: false,
  error: null,
  answers: [],
  isLost: false,
};

const initialContext: TContext = {
  state: initialState,
  dispatch: null,
};

export const Context = createContext(initialContext);

export const useAppContext = (): TContext => useContext(Context);

export const reducer = (state = initialState, action: TAction): TState => {
  switch (action.type) {
    case `NEXT_QUESTION`:
      return Object.assign({}, state, {
        currentQuestion: state.currentQuestion + 1,
      });
    case `MISTAKE`:
      return Object.assign({}, state, {
        mistakes: state.mistakes + 1,
      });
    case `LOOSE`:
      return Object.assign({}, state, {isLost: true});
    case `TICK`:
      return Object.assign({}, state, {time: action.payload});
    case `SET_QUESTIONS`:
      return Object.assign({}, state, {questions: action.payload});
    case `SET_ERROR`:
      return Object.assign({}, state, {error: action.payload});
    case `SET_FETCHING`:
      return Object.assign({}, state, {isFetching: action.payload});
    case `ADD_ANSWER`:
      return Object.assign({}, state, {
        answers: state.answers.concat((action.payload as TAnswer)),
      });
    case `RESET_GAME`:
      return Object.assign({}, initialState);
    default:
      return state;
  }
};
