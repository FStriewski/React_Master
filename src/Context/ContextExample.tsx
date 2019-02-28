import * as React from 'react';
import { State } from '../types';
import ContextProvider from './ContextProvider';
import { Component1, Component2, Component3 } from './IntermediateComponents';
import ContextConsumer from './ContextConsumer';
import { Style } from '../styles/style';

class ContextExample extends React.Component<{}, {}>{

    // Same as Render Component in Render Props
    render() {
        return (
            <ContextProvider>
                <Style>
                <h3>Context API:</h3>
                    <Component1>
                        <Component2>
                            <Component3>
                                    <ContextConsumer />
                            </Component3>
                        </Component2>
                    </Component1>
                </Style>

            </ContextProvider>
        )
    }
}

export default ContextExample;
