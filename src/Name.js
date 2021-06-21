import './App.css';
import React from 'react'



function Name(props){

  const {fname, lname} = props;

  return(
    <>
      <h1>
        {fname} {lname}!
      </h1>
    </>
    
  );
}

export default Name;
