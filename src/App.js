// import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    result: 0,
    numPress: 0,
    firstNumber: 0,
    secondNumber: 0,
    mathsFunction: "blank"
  }

  cancel = () => {
    this.setState({result: this.state.result = 0})
    this.setState({firstNumber: this.state.firstNumber = 0})
  }

  numbers = () => {
    if (this.state.mathsFunction === "blank") {
      if (this.state.firstNumber === 0) {
        this.setState({firstNumber: this.state.firstNumber = this.state.numPress})
      }
      else {
        this.setState({firstNumber: this.state.firstNumber = this.state.firstNumber * 10});
        this.setState({firstNumber: this.state.firstNumber = this.state.firstNumber + this.state.numPress})
      }
      this.setState({result: this.state.result = this.state.firstNumber})
    }
    else {
      if (this.state.secondNumber === 0) {
        this.setState({secondNumber: this.state.secondNumber = this.state.numPress});
      }
      else {
        this.setState({secondNumber: this.state.secondNumber = this.state.secondNumber * 10});
        this.setState({secondNumber: this.state.secondNumber = this.state.secondNumber + this.state.numPress})
      }
      this.setState({result: this.state.result = this.state.secondNumber})
  }
  }

  one = () => {
    this.setState({numPress: this.state.numPress = 1});
    this.numbers()
  }
  two = () => {
    this.setState({numPress: this.state.numPress = 2});
    this.numbers()
  }
  three = () => {
    this.setState({numPress: this.state.numPress = 3});
    this.numbers()
  }
  four = () => {
    this.setState({numPress: this.state.numPress = 4});
    this.numbers()
  }
  five = () => {
    this.setState({numPress: this.state.numPress = 5});
    this.numbers()
  }
  six = () => {
    this.setState({numPress: this.state.numPress = 6});
    this.numbers()
  }
  seven = () => {
    this.setState({numPress: this.state.numPress = 7});
    this.numbers()
  }
  eight = () => {
    this.setState({numPress: this.state.numPress = 8});
    this.numbers()
  }
  nine = () => {
    this.setState({numPress: this.state.numPress = 9});
    this.numbers()
  }
  zero = () => {
    this.setState({numPress: this.state.numPress = 0});
    this.numbers()
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
    this.setState({mathsFunction: this.state.mathsFunction = "blank"});
    this.setState({firstNumber: this.state.firstNumber = this.state.result});
    this.setState({secondNumber: this.state.secondNumber = 0})
  }
  render() {
    
    return(
      <div>
        <div id = "top">
          <div id="display">
            <h1>{this.state.result}</h1>
          </div>
          <div id="topFunctions">
            <button>AC</button>
            <button onClick={this.cancel}>C</button>
            <button>M+</button>
            <button>MR</button>
          </div>
        </div>

        <div id = "main">
          <div id="numberpad">
           <button onClick={this.one}>1</button>
            <button onClick={this.two}>2</button>
            <button onClick={this.three}>3</button>
            <button onClick={this.four}>4</button>
            <button onClick={this.five}>5</button>
            <button onClick={this.six}>6</button>
            <button onClick={this.seven}>7</button>
            <button onClick={this.eight}>8</button>
            <button onClick={this.nine}>9</button>
            <button>.</button>
            <button onClick={this.zero}>0</button>
            <button></button>
          </div>

          <div id="sideFunctions">
            <button onClick={this.plusButton}>+</button>
            <button onClick={this.minusButton}>-</button>
            <button onClick={this.multiply}>x</button>
            <button onClick={this.divide}>/</button>
            <button onClick={this.equals}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
