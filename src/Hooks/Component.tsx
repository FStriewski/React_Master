import * as React from 'react';
import { Props } from '../types';
import { Style } from '../styles/style';

export const Component = ({ count, name, countUp }: Props) => (
    <Style>
        <div>This is a react hook child named {name} and count {count}</div>
        <button onClick={countUp}>Count up</button>
    </Style>
);