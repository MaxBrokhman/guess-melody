import {
  countResults,
  formatTime,
  resetGame,
} from '../../reducer/actions';

export const useWinStats = (answers, dispatch) => {
  const results = countResults(answers);
  const finalTime = formatTime(answers[answers.length - 1].time);
  const playAgainHandler = () => resetGame(dispatch);
  return {
    results: Object.assign({}, results, {time: finalTime}),
    playAgainHandler,
  };
};
