import React from 'react';

type TMistakesCounterProps = {
  mistakes: Array<boolean>;
}

export const MistakeCounter = ({mistakes}: TMistakesCounterProps): JSX.Element => (
  <div className="game__mistakes">
    {
      mistakes.map((mistake, i) => <div className="wrong" key={i}>{mistake}</div>)
    }
  </div>
);
