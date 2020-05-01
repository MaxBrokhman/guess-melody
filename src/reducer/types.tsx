export type TAction = {
  type: string;
  payload?: TAnswer | number | Array<TQuestion> | boolean | TError;
}

export type TDispatch = (props: TAction) => void

export type TFormatTime = {
  min: string;
  sec: string;
}

export type TFetchedAnswer = {
  src?: string;
  genre?: string;
  artist?: string;
  picture?: string;
}

type TSong = {
  src: string;
  artist: string;
}

export type TQuestion = {
  type: string;
  genre?: string;
  answers: Array<TFetchedAnswer>;
  song?: TSong;
  artist?: string;
}

export type TError = {
  message: string;
}

export type TAnswer = {
  isCorrect: boolean;
  isFast: boolean;
  time: number;
}

export type TState = {
  mistakes: number;
  currentQuestion: number;
  time: number;
  questions: Array<TQuestion>;
  isFetching: boolean;
  error?: TError;
  answers: Array<TAnswer>;
  isLost: boolean;
}

export type TContext = {
  state: TState;
  dispatch?: TDispatch;
}

export type TCountedResults = {
  fast: number;
  points: number;
}

export type THandleWrongAnswerProps = {
  mistakes: number;
  limit: number;
  dispatch: TDispatch;
}

export type TCheckIsAnswerFastProps = {
  answers: Array<TAnswer>;
  time: number;
  question: number;
}

export type THandleAnswerProps = {
  picked: Array<boolean> | string;
  correct: Array<boolean> | string;
  type: string;
  dispatch: TDispatch;
  mistakes: number;
  currentTime: number;
  answers: Array<TAnswer>;
  currentQuestion: number;
}
