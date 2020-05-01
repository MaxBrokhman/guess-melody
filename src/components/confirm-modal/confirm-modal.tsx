import React from 'react';

type TConfirmModalProps = {
  onConfirm: () => void;
  onClose: () => void;
}

export const ConfirmModal = ({onConfirm, onClose}: TConfirmModalProps): JSX.Element => (
  <section className="modal">
    <button className="modal__close" type="button" onClick={onClose}>
      <span className="visually-hidden">Закрыть</span>
    </button>
    <h2 className="modal__title">Подтверждение</h2>
    <p className="modal__text">Вы уверены что хотите начать игру заново?</p>
    <div className="modal__buttons">
      <button className="modal__button button" onClick={onConfirm}>Ок</button>
      <button className="modal__button button" onClick={onClose}>Отмена</button>
    </div>
  </section>
);
