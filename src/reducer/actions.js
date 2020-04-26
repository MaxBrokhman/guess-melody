const MISTAKES_LIMIT = 3;

export const getNextQuestion = (dispatch) => dispatch({type: `NEXT_QUESTION`});

export const setLoose = (dispatch) => dispatch({type: `LOOSE`});

const handleWrongAnswer = ({mistakes, limit, dispatch}) => {
  const isToManyMistakes = checkIfTooManyMistakes(mistakes, limit);
  if (!isToManyMistakes) {
    dispatch({type: `MISTAKE`});
    return getNextQuestion(dispatch);
  }
  return setLoose(dispatch);
};

export const handleAnswer = ({
  picked,
  correct,
  type,
  dispatch,
  mistakes,
}) => {
  const isAnswerCorrect = type === `genre`
    ? checkGenreAnswer(picked, correct)
    : checkArtistAnswer(picked, correct);
  if (!isAnswerCorrect) {
    return handleWrongAnswer({
      mistakes,
      limit: MISTAKES_LIMIT,
      dispatch,
    });
  }
  return getNextQuestion(dispatch);
};

export const handleTime = (newTime, dispatch) => {
  const action = newTime > 0
    ? {type: `TICK`, payload: newTime}
    : {type: `LOOSE`};
  dispatch(action);
};

const checkGenreAnswer = (picked, correct) => picked.every((answer, i) => answer === correct[i]);

const checkArtistAnswer = (picked, correct) => picked === correct;

const checkIfTooManyMistakes = (userMistakes, limit) => userMistakes === limit;

export const setQuestions = (newQuestions, dispatch) => dispatch({
  type: `SET_QUESTIONS`,
  payload: newQuestions,
});

export const setFetching = (isFetching, dispatch) => dispatch({
  type: `SET_FETCHING`,
  payload: isFetching,
});

export const setError = (error, dispatch) => dispatch({
  type: `SET_ERROR`,
  payload: error,
});

export const setUser = (user, dispatch) => dispatch({
  type: `SET_USER`,
  payload: user,
});

export const setIsAuthorizationRequired = (status, dispatch) => dispatch({
  type: `SET_AUTHORIZATION`,
  payload: status,
});
