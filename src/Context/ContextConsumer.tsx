import * as React from 'react';
import { someContext } from './ContextProvider';
import { State } from '../types';

type Context = {
    state: State;
};

{/*ALWAYS a function */}
const ContextConsumer = () => (
    <someContext.Consumer>
        {(context: Context) => { 
            <div>This is{context.state.name}</div>
        }}
    </someContext.Consumer>
);

export default ContextConsumer;
