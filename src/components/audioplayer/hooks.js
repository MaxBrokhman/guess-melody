export const useActiveTrack = (activeTrack, {current}) => {
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
