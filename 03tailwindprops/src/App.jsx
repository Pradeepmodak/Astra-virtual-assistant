import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name: "Chai aur code",
    age: 20,
    isActive: true,
    arr: [1, 2, 3],
    obj: {
      key1: "value1",
      key2: "value2"
    }
  }
  return (
    <>
    <Card channel="Chai aur code" someObj={myObj}/>
    <Card price={50}/>
    </>
  )
}

export default App
