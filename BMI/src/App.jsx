import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bmi from './Components/Bmi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Bmi/>
    </>
  )
}

export default App
