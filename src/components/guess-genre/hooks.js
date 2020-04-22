import {useState} from 'react';

export const useTracks = () => {
  const [activeTrack, setActiveTrack] = useState(``);
  const playerClickHandler = (ref) => () => {
    const {current} = ref;
    if (current) {
      const trackToSet = activeTrack !== current.src
        ? current.src
        : ``;
      setActiveTrack(trackToSet);
    }
  };
  return {
    activeTrack,
    playerClickHandler,
  };
};
