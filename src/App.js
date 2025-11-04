import React from 'react';
import './App.css';
import ClassBasedCounter from './Component/ClassBasedCounter';
import FunctionBasedCounter from './Component/FunctionBasedCounter';

function App() {
  return (
    <div className="App">
      <h1 className="main-heading">Assignment-2 Counter Application</h1>
      <div className="counter-row">
        <ClassBasedCounter />
        <FunctionBasedCounter />
      </div>
    </div>
  );
}

export default App;
