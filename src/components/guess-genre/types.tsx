import {MutableRefObject, SyntheticEvent} from 'react';

import {
  TQuestion,
  TDispatch,
  TAnswer,
  TFormatTime,
} from '../../reducer/types';

export type TUseTracks = {
  activeTrack: string;
  playerClickHandler: (ref: MutableRefObject<HTMLAudioElement>) => () => void;
}

export type TUseGenreAnswerProps = {
  question: TQuestion;
  dispatch: TDispatch;
  mistakes: number;
  currentTime: number;
  answers: Array<TAnswer>;
  currentQuestion: number;
}

export type TUseGenreAnswer = {
  changeHandler: (idx: number) => () => void;
  submitHandler: (evt: SyntheticEvent) => void;
}

export type TGuessGenreProps = {
  question: TQuestion;
  time: TFormatTime;
  backBtnHandler: (evt: SyntheticEvent) => void;
  isConfirmModalOpen: boolean;
  confirmHandler: () => void;
  closeConfirmModalHandler: () => void;
}
