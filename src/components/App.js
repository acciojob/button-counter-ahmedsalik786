
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  let [count , setCount]=useState(0);
  function handleclick(){
      setCount(count+1);
  }
  return (
    <div>
         <h1>Button clicked {count} times</h1>
        <button onClick={handleclick}>Click me</button>
    </div>
  )
}

export default App
