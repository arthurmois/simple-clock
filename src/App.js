import './App.css';
import React from 'react'
import Name from './Name.js';
import Clock from './Clock.js'


function App(){
  return(
      <>
        <Clock />
        <Name fname = "John" lname = "Silver"/>
      </>
    
  );
}

export default App;
