import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Assessment from './components/Assessment'
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
            <Route path="/" element={<Hero />} />
            
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

            <Route path="/working-model" element={<WorkingModel />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/assessment" element={<Assessment />} />
            
            <Route path="/help" element={
              <div className="min-h-screen bg-gradient-to-br from-calm-50 via-white to-sage-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h1 className="text-4xl font-bold text-slate-800">Help & Support</h1>
                  <p className="mt-4 text-lg text-slate-600">Coming soon...</p>
                </div>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App