import './App.css';
import React from 'react'
import Name from './Name.js';
import Clock from './Clock.js'


function App(){
  return(
      <>
        <Name fname = "John" lname = "Silver"/>
        <Clock />
      </>
    
  );
}

export default App;
