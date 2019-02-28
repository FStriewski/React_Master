import * as React from 'react';
import { Parent } from './Props/Parent';
import { Implementation } from './RenderProps/LogicComponent';
import ContextExample from './Context/ContextExample';
import { Style } from './styles/style';

export const initialState = {
  count: 0,
  name: 'initial'
};

function App() {
  return (
    <div className="App">
    <Style>
      <h3> Props & State </h3>
      <Parent />
    </Style>
      <br/>
      <Implementation/>
      <br/>
      <ContextExample/>
    </div>
  );
}

export default App;

