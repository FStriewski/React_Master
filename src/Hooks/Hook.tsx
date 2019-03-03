import React, { useState } from 'react';
import {Component} from './Component';

export const Hook = () => {
    
    // Hook declaration with state(s), functions and defaults
    const [count, countUp] = useState(0);
    const [name] = useState('');

    // Function to update State, if not done inline below
    const increaseCount = () => countUp(count + 1)

    return <Component count={count} name={name} countUp={increaseCount}/>
}
