import { useState } from 'react'
import Button from './Components/Buttons';

function App() {
  return (
    <> 
    <h1 className="text-3xl font-bold underline">Try Out</h1>
    <Button colorType="blue"></Button>
    <Button colorType="red"></Button>
    <Button colorType="green"></Button>
    <Button colorType="yellow"></Button>
    <Button colorType="purple"></Button>
    <Button colorType="pink"></Button>
     </>  
  )
}

export default App;
