// import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    result: 0,
    currentNum: 0,
    numbersSelected: [],
    mathsFunction: [],
    equalPressed: false,
    decimalDivider: 1,
    memory: 0
  }


  // cancel and memory buttons
  cancel = () => {
    this.setState({result: this.state.result = 0});
    this.setState({currentNum: this.state.currentNum = 0});
    this.setState({decimalDivider: this.state.decimalDivider = 1});
    this.setState({mathsFunction: []});
    this.setState({numbersSelected: []})
  }
  memCancel = () => {
    this.setState({memory: this.state.memory = 0})
  }
  memPlus = () => {
    this.setState({memory: this.state.memory = this.state.memory + this.state.result})
  }
  memRecall = () => {
    this.setState({result: this.state.result = this.state.memory});
    this.setState({currentNum: this.state.currentNum = this.state.memory})
  }


  // number buttons
  numbers = (numPress) => {
    if (this.state.equalPressed === true) {
      this.setState({currentNum: this.state.currentNum = 0});
      this.setState({equalPressed: this.state.equalPressed = false});
    }
    if (this.state.decimalDivider > 1) {
      this.setState({currentNum: this.state.currentNum = this.state.currentNum + numPress / this.state.decimalDivider});
      this.setState({decimalDivider: this.state.decimalDivider = this.state.decimalDivider * 10})
    }
    else{
      if (this.state.currentNum === 0) {
        this.setState({currentNum: this.state.currentNum = numPress})
      }
      else {
        this.setState({currentNum: this.state.currentNum = this.state.currentNum * 10});
        this.setState({currentNum: this.state.currentNum = this.state.currentNum + numPress})
      }
    }
    this.setState({result: this.state.result = this.state.currentNum})
  }

  one = () => {
    this.numbers(1)
  }
  two = () => {
    this.numbers(2)
  }
  three = () => {
    this.numbers(3)
  }
  four = () => {
    this.numbers(4)
  }
  five = () => {
    this.numbers(5)
  }
  six = () => {
    this.numbers(6)
  }
  seven = () => {
    this.numbers(7)
  }
  eight = () => {
    this.numbers(8)
  }
  nine = () => {
    this.numbers(9)
  }
  zero = () => {
    this.numbers(0)
  }

  decimal = () => {
    if (this.state.decimalDivider < 10) {
      this.setState({decimalDivider: this.state.decimalDivider = this.state.decimalDivider * 10})
    }
  }

// mathematical function buttons

  plusButton = () => {
    let tempNumArray = this.state.numbersSelected
    tempNumArray.push(this.state.currentNum)
    this.setState({numbersSelected: tempNumArray})
    let tempMathsArray = this.state.mathsFunction
    tempMathsArray.push("+")
    this.setState({mathsFunction: tempMathsArray})
    this.setState({currentNum: this.state.currentNum = 0});
    this.setState({decimalDivider: this.state.decimalDivider = 1})
  }

  minusButton = () => {
    let tempNumArray = this.state.numbersSelected
    tempNumArray.push(this.state.currentNum)
    this.setState({numbersSelected: tempNumArray})
    let tempMathsArray = this.state.mathsFunction
    tempMathsArray.push("-")
    this.setState({mathsFunction: tempMathsArray})
    this.setState({currentNum: this.state.currentNum = 0});
    this.setState({decimalDivider: this.state.decimalDivider = 1});
  }

  multiply = () => {
    let tempNumArray = this.state.numbersSelected
    tempNumArray.push(this.state.currentNum)
    this.setState({numbersSelected: tempNumArray})
    let tempMathsArray = this.state.mathsFunction
    tempMathsArray.push("*")
    this.setState({mathsFunction: tempMathsArray})
    this.setState({currentNum: this.state.currentNum = 0});
    this.setState({decimalDivider: this.state.decimalDivider = 1});
  }
  divide = () => {
    let tempNumArray = this.state.numbersSelected
    tempNumArray.push(this.state.currentNum)
    this.setState({numbersSelected: tempNumArray})
    let tempMathsArray = this.state.mathsFunction
    tempMathsArray.push("/")
    this.setState({mathsFunction: tempMathsArray})
    this.setState({currentNum: this.state.currentNum = 0});
    this.setState({decimalDivider: this.state.decimalDivider = 1});
  }

  squareRoot = () => {
    let tempNumArray = this.state.numbersSelected
    tempNumArray.push(this.state.currentNum)
    this.setState({numbersSelected: tempNumArray})
    this.setState({result: this.state.result = Math.sqrt(this.state.currentNum)});
    this.setState({currentNum: this.state.currentNum = 0});
    this.setState({decimalDivider: this.state.decimalDivider = 1});
  }


  // And the calculation itself
  equals = () => {
    let tempNumArray = this.state.numbersSelected
    tempNumArray.push(this.state.currentNum)
    this.setState({numbersSelected: tempNumArray})
    let runningTotal = 0;
    let i
    for (i in this.state.numbersSelected) {
      if (this.state.mathsFunction[i-1] === "+") {
        runningTotal = runningTotal + this.state.numbersSelected[i]
      }
      else if (this.state.mathsFunction[i-1] === "-") {
        runningTotal = runningTotal - this.state.numbersSelected[i]
      }
      else if (this.state.mathsFunction[i-1] === "*") {
        runningTotal = runningTotal * this.state.numbersSelected[i]
      }
      else if (this.state.mathsFunction[i-1] === "/") {
        runningTotal = runningTotal / this.state.numbersSelected[i]
      }
      else {
        runningTotal = this.state.numbersSelected[i]
      }
    }
    this.setState({result: this.state.result = runningTotal});
    this.setState({currentNum: this.state.currentNum = this.state.result});
    this.setState({equalPressed: this.state.equalPressed = true});
    this.setState({decimalDivider: this.state.decimalDivider = 1});
    this.setState({mathsFunction: []});
    this.setState({numbersSelected: []});
  }
    
  render() {
    
    return(
      <div>
        <div id = "top">
          <div id="display">
            <p>{this.state.memory}</p>
            <h1>{this.state.result}</h1>
          </div>
          <div id="topFunctions">
            <button onClick={this.cancel}>AC</button>
            <button onClick={this.memCancel}>MC</button>
            <button onClick={this.memPlus}>M+</button>
            <button onClick={this.memRecall}>MR</button>
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
            <button onClick={this.decimal}>.</button>
            <button onClick={this.zero}>0</button>
            <button onClick={this.squareRoot}>&#8730;</button>
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
