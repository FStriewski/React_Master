import * as React from 'react';

type Props = {
  count: number;
  name: string;
  countUp: () => void;
};

export const Child = ({ count, name, countUp }: Props) => (
  <React.Fragment>
    <div>
    I am just receiving props that I render.
    Count {count} and name {name}.
    </div>
    <button onClick={countUp}>Count up</button>
  </React.Fragment>
);
