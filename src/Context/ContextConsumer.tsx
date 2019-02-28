import * as React from 'react';
import { someContext } from './ContextProvider';
import { ContextProp, State } from '../types';

{/*ALWAYS a function */ }
const ContextConsumer = () => (
    <someContext.Consumer>
        {(value: ContextProp) => (
            <React.Fragment>
                <br/>
                <div>This is{value.state.name} with a count of {value.state.count}</div>
                <button onClick={value.increaseCount}>Count up</button>
            </React.Fragment>
        )}
    </someContext.Consumer>
);

export default ContextConsumer;
