import * as React from 'react';
import { Parent } from './Props/Parent';
import { Implementation } from './RenderProps/LogicComponent';
import ContextExample from './Context/ContextExample';

export const initialState = {
  count: 0,
  name: ''
};

function App() {
  return (
    <div className="App">
      <div> Parent - Child with Props </div>
      <Parent />
      <br/>
      <Implementation/>
      <br/>
      <ContextExample/>
    </div>
  );
}

export default App;

