import React, {useRef} from 'react';

const useActiveTrack = (activeTrack, {current}) => {
  const isCurrentTrackActive = current && activeTrack === current.src;
  const className = isCurrentTrackActive
    ? `pause`
    : `play`;
  if (isCurrentTrackActive) {
    current.play();
  } else if (current) {
    current.pause();
  }
  return {
    className,
  };
};
// eslint-disable-next-line
export const Audioplayer = ({src, type, activeTrack, clickHandler}) => {
  const audioRef = useRef(null);
  const {className} = useActiveTrack(activeTrack, audioRef);
  return (
    <div className="track">
      <button
        className={`track__button track__button--${className}`}
        type="button"
        onClick={clickHandler(audioRef || {})}
      >
      </button>
      <div className="track__status">
        {// eslint-disable-next-line
          <audio src={src} ref={audioRef}></audio>}
      </div>
      {
        type === `genre` && <div className="game__answer">
          <input className="game__input visually-hidden" type="checkbox" name="answer" value={src} id={`answer-${src}`} />
          <label className="game__check" htmlFor={`answer-${src}`}>Отметить</label>
        </div>
      }
    </div>
  );
};
