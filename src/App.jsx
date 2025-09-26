import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HeroSection from './pages/HeroSection'
import Carousol from './Components/Carousol'
import Counter from './Components/Counter'
import Agents from './Components/Agents'
import Contact from './pages/Contact'
import LoginPage from './pages/LoginPage'
import Footer from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Carousol />
              <Agents />
              <Counter />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
