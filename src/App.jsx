import { useState } from 'react'
import { Router, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    </>
  )
}

export default App
