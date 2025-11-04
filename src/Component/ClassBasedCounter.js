import React, { Component } from 'react';
import './Counter.css';

class ClassBasedCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="counter-box glass-effect">
        <h2 className="counter-heading">Class Component Counter</h2>
        <div className="count-display">{this.state.count}</div>
        <div className="button-group">
          <button className="btn minus" onClick={this.decrement}>−</button>
          <button className="btn plus" onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default ClassBasedCounter;
