import React, { useState } from 'react';
import './Counter.css';

function FunctionBasedCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="counter-box glass-effect">
      <h2 className="counter-heading">Function Component Counter</h2>
      <div className="count-display">{count}</div>
      <div className="button-group">
        <button className="btn minus" onClick={decrement}>−</button>
        <button className="btn plus" onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default FunctionBasedCounter;
