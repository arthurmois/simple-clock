import './App.css';
import React from 'react'



function Name(props){

  const {fname, lname} = props;

  return(
    <>
      <h1>
        Hello my name is {fname} {lname}
      </h1>
    </>
    
  );
}

export default Name;
