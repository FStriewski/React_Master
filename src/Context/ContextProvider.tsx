import * as React from 'react';
import { State } from '../types';

// Creates context obj. Subscribers will read value from the closest matching Provider in the tree.
// If none found, pass in a default value.
export const someContext = React.createContext({});

class ContextProvider extends React.Component<{}, State>{
    state = {
        count: 0,
        name: ''
    }

    increaseCount = () => {
        this.setState({ ...this.state, count: this.state.count + 1 })
    }

    // Same as Logic Component in Render Props
    render() {
        return (
            <someContext.Provider value={{
                state: this.state,
            }}>
                {this.props.children}
            </someContext.Provider>
        )
    }
}

export default ContextProvider;
