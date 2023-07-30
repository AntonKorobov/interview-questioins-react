import React, { Component } from 'react';

interface IClassInputState {
  defaultCounterValue: number;
  counter: number;
}

interface IClassInputProps {
  title?: string;
}

export class ClassInput extends Component<IClassInputProps, IClassInputState> {
  state = { defaultCounterValue: 0, counter: 0 };

  inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((prevState) => {
      return { ...prevState, defaultCounterValue: +event.target.value };
    });
  };

  increaseCounter = () => {
    this.setState((prevState) => {
      return { ...prevState, counter: this.state.counter + 1 };
    });
  };

  decreaseCounter = () => {
    this.setState((prevState) => {
      return { ...prevState, counter: this.state.counter - 1 };
    });
  };

  render() {
    return (
      <div>
        <h2>{this.props.title || 'Default name'}</h2>
        <label form="counterDefaultValue">Default counter value</label>
        <input
          type="text"
          value={this.state.defaultCounterValue}
          onChange={this.inputHandler}
          id={'counterDefaultValue'}
        />
        <h2>Counter</h2>
        <div>
          <button onClick={this.increaseCounter}>+</button>
          {this.state.defaultCounterValue + this.state.counter}
          <button onClick={this.decreaseCounter}>-</button>
        </div>
      </div>
    );
  }
}
