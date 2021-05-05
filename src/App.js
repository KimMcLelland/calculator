// import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    result: 0,
    firstNumber: 0,
    secondNumber: 0,
    mathsFunction: "blank"
  }

  cancel = () => {
    this.setState({result: this.state.result = 0})
    this.setState({firstNumber: this.state.firstNumber = 0})
  }
  one = () => {
    this.setState({result: this.state.result = 1})
    if (this.state.mathsFunction === "blank") {
      this.setState({firstNumber: this.state.firstNumber = 1})
    }
    else {
      this.setState({secondNumber: this.state.secondNumber = 1});
  }
  }
  two = () => {
    this.setState({result: this.state.result = 2})
    if (this.state.mathsFunction === "blank") {
      this.setState({firstNumber: this.state.firstNumber = 2})
    }
    else {
      this.setState({secondNumber: this.state.secondNumber = 2});
  }
  }
  three = () => {
    this.setState({result: this.state.result = 3})
    if (this.state.mathsFunction === "blank") {
      this.setState({firstNumber: this.state.firstNumber = 3})
    }
    else {
      this.setState({secondNumber: this.state.secondNumber = 3});
  }
  }
  four = () => {
    this.setState({result: this.state.result = 4})
    if (this.state.mathsFunction === "blank") {
      this.setState({firstNumber: this.state.firstNumber = 4})
    }
    else {
      this.setState({secondNumber: this.state.secondNumber = 4});
  }
  }
  five = () => {
    this.setState({result: this.state.result = 5})
    if (this.state.mathsFunction === "blank") {
      this.setState({firstNumber: this.state.firstNumber = 5})
    }
    else {
      this.setState({secondNumber: this.state.secondNumber = 5});
  }
  }
  six = () => {
    this.setState({result: this.state.result = 6})
    if (this.state.mathsFunction === "blank") {
      this.setState({firstNumber: this.state.firstNumber = 6})
    }
    else {
      this.setState({secondNumber: this.state.secondNumber = 6});
  }
  }
  seven = () => {
    this.setState({result: this.state.result = 7})
    if (this.state.mathsFunction === "blank") {
      this.setState({firstNumber: this.state.firstNumber = 7})
    }
    else {
      this.setState({secondNumber: this.state.secondNumber = 7});
  }
  }
  eight = () => {
    this.setState({result: this.state.result = 8})
    if (this.state.mathsFunction === "blank") {
      this.setState({firstNumber: this.state.firstNumber = 8})
    }
    else {
      this.setState({secondNumber: this.state.secondNumber = 8});
  }
  }
  nine = () => {
    this.setState({result: this.state.result = 9})
    if (this.state.mathsFunction === "blank") {
      this.setState({firstNumber: this.state.firstNumber = 9})
    }
    else {
      this.setState({secondNumber: this.state.secondNumber = 9});
  }
  }
  zero = () => {
    this.setState({result: this.state.result = 0})
    if (this.state.mathsFunction === "blank") {
      this.setState({firstNumber: this.state.firstNumber = 0})
    }
    else {
      this.setState({secondNumber: this.state.secondNumber = 0});
  }
  }

  plusButton = () => {
    this.setState({mathsFunction: this.state.mathsFunction = "+"});
  }

  minusButton = () => {
    this.setState({mathsFunction: this.state.mathsFunction = "-"});
  }

  multiply = () => {
    this.setState({mathsFunction: this.state.mathsFunction= "*"});
  }
  divide = () => {
    this.setState({mathsFunction: this.state.mathsFunction = "/"})
  }
  equals = () => {
    if (this.state.mathsFunction === "+") {
      this.setState({result: this.state.result = this.state.firstNumber + this.state.secondNumber});
    }
    if (this.state.mathsFunction === "-") {
      this.setState({result: this.state.result = this.state.firstNumber - this.state.secondNumber});
    }
    if (this.state.mathsFunction === "*") {
      this.setState({result: this.state.result = this.state.firstNumber * this.state.secondNumber});
    }
    if (this.state.mathsFunction === "/") {
    this.setState({result: this.state.result = this.state.firstNumber / this.state.secondNumber});
    }
    this.setState({mathsFunction: this.state.mathsFunction = "blank"})
    this.setState({firstNumber: this.state.firstNumber = this.state.result})
  }
  render() {
    
    return(
      <div>
        <div id="display">
          <h1>{this.state.result}</h1>
        </div>
        <div id="belowDisplay">
          <button onClick={this.cancel}>C</button>
        </div>
        <div id="numbers">
          <button onClick={this.one}>1</button>
          <button onClick={this.two}>2</button>
          <button onClick={this.three}>3</button>
          <button onClick={this.four}>4</button>
          <button onClick={this.five}>5</button>
          <button onClick={this.six}>6</button>
          <button onClick={this.seven}>7</button>
          <button onClick={this.eight}>8</button>
          <button onClick={this.nine}>9</button>
          <button onClick={this.zero}>0</button>
        </div>

        <div id="functions">
          <button onClick={this.plusButton}>+</button>
          <button onClick={this.minusButton}>-</button>
          <button onClick={this.multiply}>x</button>
          <button onClick={this.divide}>/</button>
          <button onClick={this.equals}>=</button>
        </div>
        </div>
    );
  }
}

export default App;
