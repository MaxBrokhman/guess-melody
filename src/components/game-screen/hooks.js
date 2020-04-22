import {useAppContext} from '../../reducer/reducer';
import {questions} from '../../mocks/questions';

export const useCurrentQuestion = () => {
  const {state} = useAppContext();
  return {
    question: questions[state.currentQuestion],
  };
};
