import * as React from 'react';
import { State } from '../types';
import ContextProvider from './ContextProvider';
import { Component1, Component2, Component3, Component4 } from './IntermediateComponents';
import ContextConsumer from './ContextConsumer';

type RenderProps = {
    // children: () => React.ReactNode,
};

class ContextExample extends React.Component<{}, {}>{

    // Same as Render Component in Render Props
    render() {
        return (
            <ContextProvider>
                <Component1>
                    <Component2>
                        <Component3>
                            <Component4>

                                <ContextConsumer/>

                            </Component4>
                        </Component3>
                    </Component2>
                </Component1>

            </ContextProvider>
        )
    }
}

export default ContextExample;
