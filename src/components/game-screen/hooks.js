import {
  useEffect,
  useState,
  useCallback,
} from 'react';

import {
  handleTime,
  resetGame,
  formatTime,
} from '../../reducer/actions';

export const useTimer = (currentTime, dispatch) => {
  useEffect(() => {
    setTimeout(() => {
      handleTime(currentTime - 1, dispatch);
    }, 1000);
  }, [currentTime]);
  return {
    time: formatTime(currentTime),
  };
};

export const useConfirmModal = (dispatch) => {
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

