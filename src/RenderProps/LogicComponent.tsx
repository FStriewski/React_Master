import * as React from 'react';
import { RenderComponent } from './RenderComponent';

type State = {
  count: number;
  name: string;
};

// Props that are handed to the render component, from logic components state.
type RenderProps = {
  children: (count: number, name: string) => React.ReactNode;
  
};

type Props = {
  onClick: () => void;
}


const initialState = {
  count: 0,
  name: ''
};

// This component provides reusable logic

class LogicComponent extends React.Component<RenderProps, State> {
  state: State = initialState;

  onClick = (e: React.MouseEvent<HTMLDivElement>) =>
    this.setState({ ...this.state, count: this.state.count + 1 });

  onUpdate = (input: string) =>
    this.setState({ ...this.state, name: this.state.name });

  render() {
    return (
      <React.Fragment>
        {this.props.children(this.state.count, this.state.name)}
      </React.Fragment>
    );
  }
}
export default LogicComponent;

// This is a third component that puts together Logic & Render. 
// "children" could also be "render" or sth else. 

 const NoImplementation = () => (
  <LogicComponent
   children={(data, literal) => (<RenderComponent count={data} name={literal}/>)}
  />
);

// Shortchut, because of "children". 
export const Implementation = () => (
  <LogicComponent>
    {(count: number, name: string) => (<div>I am just rendering something! My Count {count} for {name}</div>)}
    </LogicComponent>

);
