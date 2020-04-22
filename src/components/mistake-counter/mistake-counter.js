import React from 'react';
// eslint-disable-next-line
export const MistakeCounter = ({mistakes}) => (
  <div className="game__mistakes">
    {// eslint-disable-next-line
        mistakes.map((mistake, i) => <div className="wrong" key={i}>{mistake}</div>)
    }
  </div>
);
