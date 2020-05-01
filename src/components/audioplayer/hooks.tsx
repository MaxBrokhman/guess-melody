import {MutableRefObject} from "react";

export const useActiveTrack = (
    activeTrack: string,
    {current}: MutableRefObject<HTMLAudioElement>,
): {className: string} => {
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
