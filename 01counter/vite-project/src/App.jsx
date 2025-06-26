import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
//   let counter =1;
  const addValue = () => {
    if(counter >= 20) {
      console.log("Counter cannot be greater than 20");
      return;
    }
  console.log("Adding value",counter);
  counter =counter + 1;
  setCounter(counter);
}
  const removeValue = () => {
    if(counter <= 0) {
      console.log("Counter cannot be less than 0");
      return;
    }
  console.log("removing value",counter);
  counter =counter - 1;
  setCounter(counter);
}

  let [counter,setCounter]=useState(15);
  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
