import React from 'react';

import {TFormatTime} from '../../reducer/types';

type TTimerProps = {
  time: TFormatTime;
}

export const Timer = ({time}: TTimerProps): JSX.Element => (
  <div className="timer__value">
    <span className="timer__mins">{time.min}</span>
    <span className="timer__dots">:</span>
    <span className="timer__secs">{time.sec}</span>
  </div>
);
