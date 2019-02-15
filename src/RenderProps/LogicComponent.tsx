import * as React from 'react';

type State = {
  count: number,
  name: string,
}

const initialState = {
  count: 0,
  name: '',
}

class LogicComponent extends React.Component<{}, State>{
  state: State = initialState;

  onClick = (e: React.MouseEvent<HTMLDivElement>) => this.setState({ ...this.state, count: this.state.count + 1 });

  onUpdate = (input: string) => this.setState({ ...this.state, name: this.state.name })

  render() {
    return (
      this.props.children
    )
  }
};

export default LogicComponent;
