import {createContext, useContext} from 'react';

export const initialState = {
  mistakes: 0,
  currentQuestion: -1
};

const initialContext = {
  state: initialState,
  dispatch: null
};

export const Context = createContext(initialContext);

export const useAppContext = () => useContext(Context);

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `NEXT_QUESTION`:
      return Object.assign({}, state, {
        currentQuestion: state.currentQuestion + 1,
      });
    case `MISTAKE`:
      return Object.assign({}, state, {
        mistakes: state.mistakes + 1,
      });
    default:
      return state;
  }
};
