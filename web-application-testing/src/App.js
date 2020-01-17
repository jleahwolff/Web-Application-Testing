import React, { Component } from 'react';
import Display from '../src/components/display';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      strike: 0,
      ball: 0,
      hit: 0,
      foul: 0
    }
  }
// Reset after strikes
  componentDidUpdate() {
    if (this.state.strike === 3) {
      this.setState({
        strike: 0,
        foul: 0,
        ball: 0
      });
    }
// Reset after balls
  if (this.state.ball === 4) {
    this.setState({
      strike: 0,
      ball: 0,
      foul: 0
    });
    }
  }
// setState for strikes 
  countStrikes = () => {
    this.setState({
      strike: this.state.strike + 1
    });
  }
// setState for balls
  countBalls = () => {
    this.setState({
      ball: this.state.ball + 1
    });
  }
// setState for hits
  countHits = () => {
    this.setState({
      hit: this.state.hit + 1,
      strike: 0,
      ball: 0,
      foul: 0
    })
  }
// setState for fouls
  countFouls = () => {
    this.setState({
      foul: this.state.foul + 1
    });
    if (this.state.strike < 2) {
      this.setState({
        strike: this.state.strike + 1
      })
    } else {
      return null;
    }
  };

render() {
  return (
    <div className="App">
      <Display
        state={this.state}
        countStrikes={this.countStrikes}
        countHits={this.countHits}
        countFouls={this.countFouls}
        countBalls={this.countBalls}
        />
    </div>
  );
}
}

export default App;