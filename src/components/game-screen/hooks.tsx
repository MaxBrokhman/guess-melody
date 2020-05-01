import {
  useEffect,
  useState,
  useCallback,
  SyntheticEvent,
} from 'react';

import {
  handleTime,
  resetGame,
  formatTime,
} from '../../reducer/actions';
import {TDispatch, TFormatTime} from '../../reducer/types';

type TUseConfirmModal = {
  isConfirmModalOpen: boolean;
  confirmHandler: () => void;
  closeConfirmModalHandler: () => void;
  backBtnHandler: (evt: SyntheticEvent) => void;
}

export const useTimer = (currentTime: number, dispatch: TDispatch): {time: TFormatTime} => {
  useEffect(() => {
    setTimeout(() => {
      handleTime(currentTime - 1, dispatch);
    }, 1000);
  }, [currentTime]);
  return {
    time: formatTime(currentTime),
  };
};

export const useConfirmModal = (dispatch: TDispatch): TUseConfirmModal => {
  const [isOpen, setOpen] = useState(false);
  const confirmHandler = useCallback(() => {
    setOpen(false);
    resetGame(dispatch);
  }, []);
  const closeConfirmModalHandler = useCallback(() => {
    setOpen(false);
  }, []);
  const backBtnHandler = useCallback((evt) => {
    evt.preventDefault();
    setOpen(true);
  }, []);

  return {
    isConfirmModalOpen: isOpen,
    confirmHandler,
    closeConfirmModalHandler,
    backBtnHandler,
  };
};

