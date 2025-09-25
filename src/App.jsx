import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HeroSection from './pages/HeroSection'
import Carousol from './Components/Carousol'
import Counter from './Components/Counter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
          <>
            <HeroSection />
            <Carousol/>
            <Counter/>
          </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App