import React from 'react';
// eslint-disable-next-line
export const Timer = ({time}) => (
  <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
    {// eslint-disable-next-line
    <span className="timer__mins">{time.min}</span>}
    <span className="timer__dots">:</span>
    {// eslint-disable-next-line
    <span className="timer__secs">{time.sec}</span>}
  </div>
);
