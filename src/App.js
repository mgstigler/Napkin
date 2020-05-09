import React, { Component, Fragment } from 'react';
import './App.css';
import Canvas from './canvas';
import Colors from './colors';
import Prompt from './prompt';
import Timer from './timer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      penColor: "#000000",
      timeRemaining: "true"
    };
 }

 changeColor(color) {
    this.setState({penColor: color})
  }

  changeTimeRemaining(timeRemaining) {
    this.setState({timeRemaining: timeRemaining})
  }

  render() {
    return (
      <Fragment>
        <h1 style={{ textAlign: 'left', paddingLeft: '100px' }}>NAPKIN</h1>
        <div className="main">
          <Colors penColor={this.state.penColor} onChange={this.changeColor.bind(this)}/>
          <Canvas penColor={this.state.penColor} timeRemaining={this.state.timeRemaining} onChange={this.changeColor.bind(this)} onTimeOut={this.changeTimeRemaining.bind(this)}/>
          <div className="info">
            <Timer timeRemaining={this.state.timeRemaining} onTimeOut={this.changeTimeRemaining.bind(this)}/>
            <Prompt />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
