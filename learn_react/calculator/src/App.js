import logo from './logo.svg';
import './App.css';
import KeyPad from './components/KeyPad';
import './styles.css'
import React, { Component } from 'react'
import Result from './components/Result';

class App extends Component {

  state = {
    result: ""
  }

 
  onClick = button => {
    if(button === "=") {
      this.calculate();
    }

    else if(button === "C") {
      this.reset();
    }

    else if(button === "CE") {
      this.backspace();
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
  };

  calculate = () =>{
    var checkResult = ''
    checkResult= this.state.result

    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      })
    } catch(e) {
      this.setState({
        result: "error"
      })
    }
  }

 
  render(){return (
    
    <div className="calculator-body">
      <h1>Simple Calculator</h1>
      <Result result={this.state.result}/>
      <KeyPad onClick={this.onClick}/>
    </div>
  )}
}

export default App;
