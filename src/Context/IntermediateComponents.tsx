import * as React from 'react';

export const Component1: React.SFC<{}> = ({children}) => <div>Something {children}</div>
export const Component2: React.SFC<{}> = ({ children }) => <div>Something {children}</div>
export const Component3: React.SFC<{}> = ({ children }) => <div>Something {children}</div>
export const Component4: React.SFC<{}> = ({ children }) => <div>Something {children}</div>

// This would bring up a type error, as children are not automatically 
// typed in a non SFC. Also needs requires children prop or renders only one layer
// export const Component = () => <div>Something</div>