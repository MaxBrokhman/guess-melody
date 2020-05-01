import React, {
  useRef,
  MutableRefObject,
  Fragment,
} from 'react';

import {useActiveTrack} from './hooks';

type TAudioplayerProps = {
  src: string;
  activeTrack: string;
  clickHandler: (track: MutableRefObject<HTMLAudioElement> | {}) => () => void;
}

export const Audioplayer = ({
  src,
  activeTrack,
  clickHandler,
}: TAudioplayerProps): JSX.Element => {
  const audioRef = useRef(null);
  const {className} = useActiveTrack(activeTrack, audioRef);
  return (
    <Fragment>
      <button
        className={`track__button track__button--${className}`}
        type="button"
        onClick={clickHandler(audioRef || {})}
      >
      </button>
      <div className="track__status">
        <audio src={src} ref={audioRef}></audio>
      </div>
    </Fragment>
  );
};
