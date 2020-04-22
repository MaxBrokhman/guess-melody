const MISTAKES_LIMIT = 3;

export const getNextQuestion = (dispatch) => dispatch({type: `NEXT_QUESTION`});

const handleWrongAnswer = ({mistakes, limit, dispatch}) => {
  const isToManyMistakes = checkIfTooManyMistakes(mistakes, limit);
  if (!isToManyMistakes) {
    dispatch({type: `MISTAKE`});
    return getNextQuestion(dispatch);
  }
  return dispatch({type: `LOOSE`});
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


