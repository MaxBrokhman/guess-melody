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
export const Audioplayer = ({src, activeTrack, clickHandler}) => {
  const audioRef = useRef(null);
  const {className} = useActiveTrack(activeTrack, audioRef);
  return (
    <>
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
    </>
  );
};
