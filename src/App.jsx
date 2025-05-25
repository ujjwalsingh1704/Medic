import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WorkingModel from './components/WorkingModel'
import Services from './components/Services'
import ScreeningProcess from './components/ScreeningProcess'
import About from './components/About'
import Contact from './components/Contact'
import Doctors from './components/Doctors'
import UserInput from './components/UserInput'
import DigitalTwinDemo from './components/DigitalTwinDemo'

function App() {
  const [userData, setUserData] = useState(null);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleUserDataSubmit = (data) => {
    setUserData(data);
    setShowAnalysis(true);
  };

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <div className="mt-16">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
              </>
            } />
            
            <Route
              path="/services"
              element={
                <div className="w-full">
                  <Services />
                  <ScreeningProcess />
                  {!showAnalysis ? (
                    <UserInput onSubmit={handleUserDataSubmit} />
                  ) : (
                    <DigitalTwinDemo userData={userData} />
                  )}
                </div>
              }
            />

            <Route path="/working-model" element={
              <>
                <WorkingModel />
              </>
            } />

            <Route path="/about" element={
              <>
                <About />
              </>
            } />
            
            <Route path="/contact" element={
              <>
                <Contact />
              </>
            } />

            <Route path="/doctors" element={
              <>
                <Doctors />
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App