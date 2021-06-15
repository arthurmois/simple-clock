import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Clock(props) {
  return (
    <div>
      <h1>Edward!</h1>
      <h2>It's already {props.date.toLocaleTimeString()}!</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);