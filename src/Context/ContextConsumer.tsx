import * as React from 'react';
import { someContext } from './ContextProvider';
import { ContextProp, State } from '../types';

{/*ALWAYS a function */ }
const ContextConsumer = () => (
    <someContext.Consumer>
        {(value: ContextProp) => (
            <React.Fragment>
                <div>This is{value.state.name}</div>
                <div>With a count of {value.state.count}</div>
            </React.Fragment>
        )}
    </someContext.Consumer>
);

export default ContextConsumer;
