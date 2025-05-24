import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WorkingModel from './components/WorkingModel'
import Services from './components/Services'
import ScreeningProcess from './components/ScreeningProcess'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
            
            </>
          } />
          
          <Route path="/Services" element={
            <>
              
              <Services />
              <ScreeningProcess />
            </>
          } />

          <Route path="/working-model" element={
            <>
              <WorkingModel />
              <div className="p-4">Model</div>
            </>
          } />

          <Route path="/services" element={<div className="p-4">Services</div>} />
          
          <Route path="/about" element={<div className="p-4">About Page</div>} />
          <Route path="/contact" element={<div className="p-4">Contact Page</div>} />
          <Route path="/doctors" element={<div className="p-4">Doctors Page</div>} />
          <Route path="/signup" element={<div className="p-4">Sign Up Page</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
