import {
  countResults,
  formatTime,
  resetGame,
} from '../../reducer/actions';
import {TAnswer, TDispatch, TCountedResults, TFormatTime} from '../../reducer/types';

type TUseWinStats = {
  results: TCountedResults & {time: TFormatTime};
  playAgainHandler: () => void;
}

export const useWinStats = (answers: Array<TAnswer>, dispatch: TDispatch): TUseWinStats => {
  const results = countResults(answers);
  const finalTime = formatTime(answers[answers.length - 1].time);
  const playAgainHandler = (): void => resetGame(dispatch);
  return {
    results: Object.assign({}, results, {time: finalTime}),
    playAgainHandler,
  };
};
