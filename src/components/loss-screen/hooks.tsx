import {MISTAKES_LIMIT} from '../../reducer/actions';

export const TIME_EXPIRED_MESSAGE = `Время вышло! Вы не успели отгадать все мелодии`;
export const TOO_MANY_MISTAKES_MESSAGE = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;

export const useLossScreenMessage = (mistakes: number): {message: string} => {
  const message = mistakes > MISTAKES_LIMIT
    ? TOO_MANY_MISTAKES_MESSAGE
    : TIME_EXPIRED_MESSAGE;
  return {
    message,
  };
};
