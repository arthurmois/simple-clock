import './App.css';
import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};

    this.pauseTimeClick = this.pauseTimeClick.bind(this);
    this.resumeTimeClick = this.resumeTimeClick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  pauseTimeClick() {
    this.componentWillUnmount();
  }

  resumeTimeClick() {
    this.componentDidMount();
  }


  render() {
    return (
      <div>
        <h2>It's already {this.state.date.toLocaleTimeString()}!</h2>

        <button onClick={this.pauseTimeClick} >Pause Time!</button>
        <br/>
        <button onClick={this.resumeTimeClick} >Resume</button>
      </div>
    );
  }
}

export default Clock;
