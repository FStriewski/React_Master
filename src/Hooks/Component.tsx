import * as React from 'react';
import { Props } from '../types';

export const Component = ({ count, name, countUp }: Props) => (
    <React.Fragment>
        <div>This is a react hook child named {name} and count {count}</div>
        <button onClick={countUp}>Count up</button>
    </React.Fragment>
);