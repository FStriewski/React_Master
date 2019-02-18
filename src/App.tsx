import * as React from 'react';
import { Parent } from './Props/Parent';
import { Implementation } from './RenderProps/LogicComponent';


function App() {
  return (
    <div className="App">
      <div> Parent - Child with Props </div>
      <Parent />
      <br/>
      <Implementation/>
    </div>
  );
}

export default App;

