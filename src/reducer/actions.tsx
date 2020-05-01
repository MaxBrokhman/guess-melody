import {
  TDispatch,
  TAnswer,
  TCountedResults,
  THandleWrongAnswerProps,
  TCheckIsAnswerFastProps,
  THandleAnswerProps,
  TQuestion,
  TError,
  TFormatTime,
} from './types';

export const MISTAKES_LIMIT = 3;
const POINTS_FOR_CORRECT_ANSWER = 1;
const POINTS_FOR_WRONG_ANSWER = -2;
const FAST_ANSWER_TIME = 30;

export const getNextQuestion = (dispatch: TDispatch): void => dispatch({type: `NEXT_QUESTION`});

export const setLoose = (dispatch: TDispatch): void => dispatch({type: `LOOSE`});

export const resetGame = (dispatch: TDispatch): void => dispatch({type: `RESET_GAME`});

const checkGenreAnswer = (picked: Array<boolean>, correct: Array<boolean>): boolean =>
  picked.every((answer, i) => answer === correct[i]);

const checkArtistAnswer = (picked: string, correct: string): boolean =>
  picked === correct;

const checkIfTooManyMistakes = (userMistakes: number, limit: number): boolean =>
  userMistakes === limit;

export const countResults = (answers: Array<TAnswer>): TCountedResults =>
  answers.reduce((result, answer) => {
    const pointsForCorrectAnswer = answer.isCorrect
      ? POINTS_FOR_CORRECT_ANSWER
      : POINTS_FOR_WRONG_ANSWER;
    const isCorrectAndFast = answer.isCorrect && answer.isFast;
    const pointsForFastAnswer = isCorrectAndFast
      ? pointsForCorrectAnswer + POINTS_FOR_CORRECT_ANSWER
      : pointsForCorrectAnswer;
    result.points += pointsForFastAnswer;
    result.fast = isCorrectAndFast
      ? result.fast + 1
      : result.fast;
    return result;
  }, {
    points: 0,
    fast: 0,
  });

export const formatTime = (time: number): TFormatTime => {
  const min = Math.floor(time / 60);
  const sec = time - min * 60;
  return {
    min: `0${min}`,
    sec: sec < 10
      ? `0${sec}`
      : `${sec}`
  };
};

const handleWrongAnswer = ({
  mistakes,
  limit,
  dispatch,
}: THandleWrongAnswerProps): void => {
  const isToManyMistakes = checkIfTooManyMistakes(mistakes, limit);
  dispatch({type: `MISTAKE`});
  if (!isToManyMistakes) {
    return getNextQuestion(dispatch);
  }
  return setLoose(dispatch);
};

export const addAnswer = (answer: TAnswer, dispatch: TDispatch): void => dispatch({
  type: `ADD_ANSWER`,
  payload: answer,
});

const checkIsAnswerFast = ({
  answers,
  time,
  question
}: TCheckIsAnswerFastProps): boolean => {
  const startTime = answers.length > 1
    ? answers[question - 1].time
    : 300;
  return startTime - time <= FAST_ANSWER_TIME;
};

export const handleAnswer = ({
  picked,
  correct,
  type,
  dispatch,
  mistakes,
  currentTime,
  answers,
  currentQuestion,
}: THandleAnswerProps): void => {
  const isAnswerCorrect = type === `genre`
    ? checkGenreAnswer((picked as Array<boolean>), (correct as Array<boolean>))
    : checkArtistAnswer((picked as string), (correct as string));
  const answer = {
    isCorrect: isAnswerCorrect,
    isFast: checkIsAnswerFast({
      answers,
      question: currentQuestion,
      time: currentTime,
    }),
    time: currentTime,
  };
  addAnswer(answer, dispatch);
  if (!isAnswerCorrect) {
    return handleWrongAnswer({
      mistakes,
      limit: MISTAKES_LIMIT,
      dispatch,
    });
  }
  return getNextQuestion(dispatch);
};

export const handleTime = (newTime: number, dispatch: TDispatch): void => {
  const action = newTime > 0
    ? {type: `TICK`, payload: newTime}
    : {type: `LOOSE`};
  dispatch(action);
};


export const setQuestions = (newQuestions: Array<TQuestion>, dispatch: TDispatch): void =>
  dispatch({
    type: `SET_QUESTIONS`,
    payload: newQuestions,
  });

export const setFetching = (isFetching: boolean, dispatch: TDispatch): void => dispatch({
  type: `SET_FETCHING`,
  payload: isFetching,
});

export const setError = (error: TError, dispatch: TDispatch): void => dispatch({
  type: `SET_ERROR`,
  payload: error,
});
