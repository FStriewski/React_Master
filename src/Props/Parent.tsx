import * as React from 'react';
import {Child} from './Child';

type State = {
  count: number,
  name: string,
}

const initialState = {
  count: 0,
  name: ' from parent by props',
}

export class Parent extends React.Component<{}, State>{
  state: State = initialState;

  countUp = () => this.setState({ ...this.state, count: this.state.count + 1 });

  onUpdate = (input: string) => this.setState({ ...this.state, name: this.state.name })

  render() {
    return (
      <Child count={this.state.count} name={this.state.name} countUp={this.countUp}   / > 
    )
  }
};
