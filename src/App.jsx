import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HeroSection from './pages/HeroSection'
import DashboardSlider from './Components/DashboardSlider'
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
            
          </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App