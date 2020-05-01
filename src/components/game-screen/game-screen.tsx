import React from 'react';

import {GuessArtist} from '../guess-artist/guess-artist';
import {GuessGenre} from '../guess-genre/guess-genre';
import {useTimer, useConfirmModal} from './hooks';
import {useAppContext} from '../../reducer/reducer';

export const GameScreen = (): JSX.Element => {
  const {state, dispatch} = useAppContext();
  const question = state.questions[state.currentQuestion];
  const {
    isConfirmModalOpen,
    confirmHandler,
    closeConfirmModalHandler,
    backBtnHandler,
  } = useConfirmModal(dispatch);
  const {time} = useTimer(state.time, dispatch);
  switch (question.type) {
    case `artist`:
      return (
        <GuessArtist
          question={question}
          time={time}
          backBtnHandler={backBtnHandler}
          isConfirmModalOpen={isConfirmModalOpen}
          confirmHandler={confirmHandler}
          closeConfirmModalHandler={closeConfirmModalHandler}
        />
      );
    case `genre`:
      return (
        <GuessGenre
          question={question}
          time={time}
          backBtnHandler={backBtnHandler}
          isConfirmModalOpen={isConfirmModalOpen}
          confirmHandler={confirmHandler}
          closeConfirmModalHandler={closeConfirmModalHandler}
        />
      );
    default:
      return null;
  }
};
