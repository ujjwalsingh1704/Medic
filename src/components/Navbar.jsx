import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import healthLogo from '../assets/health (2).png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          <NavLink to="/" className="flex items-center">
            <img 
              src={healthLogo}
              alt="Health Logo" 
              className="h-12 w-auto object-contain"
            />
          </NavLink>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={`text-base font-clan-pro uppercase transition-all duration-300 ${
                isActive('/') 
                  ? 'text-indigo-600 font-bold' 
                  : 'text-indigo-600 hover:text-indigo-800'
              }`}
            >
              HOME
            </NavLink>
            <NavLink 
              to="/working-model" 
              className={`text-base font-clan-pro uppercase transition-all duration-300 ${
                isActive('/working-model') 
                  ? 'text-indigo-600 font-bold' 
                  : 'text-indigo-600 hover:text-indigo-800'
              }`}
            >
              Model
            </NavLink>
            <NavLink 
              to="/services" 
              className={`text-base font-clan-pro uppercase transition-all duration-300 ${
                isActive('/services') 
                  ? 'text-indigo-600 font-bold' 
                  : 'text-indigo-600 hover:text-indigo-800'
              }`}
            >
              Services
            </NavLink>
            <NavLink 
              to="/doctors" 
              className={`text-base font-clan-pro uppercase transition-all duration-300 ${
                isActive('/doctors') 
                  ? 'text-indigo-600 font-bold' 
                  : 'text-indigo-600 hover:text-indigo-800'
              }`}
            >
              Doctors
            </NavLink>
            <NavLink 
              to="/about" 
              className={`text-base font-clan-pro uppercase transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-indigo-600 font-bold' 
                  : 'text-indigo-600 hover:text-indigo-800'
              }`}
            >
              ABOUT
            </NavLink>
            <NavLink 
              to="/contact" 
              className={`text-base font-clan-pro uppercase transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-indigo-600 font-bold' 
                  : 'text-indigo-600 hover:text-indigo-800'
              }`}
            >
              CONTACT
            </NavLink>
            <NavLink 
              to="/signup" 
              className="bg-indigo-600 text-white px-4 py-1.5 rounded-full hover:bg-indigo-700 transition-colors font-clan-pro text-base"
            >
              Create account
            </NavLink>
          </div>

          <button 
            className="md:hidden p-2 text-indigo-600 hover:text-indigo-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink 
                to="/" 
                className={`block text-base font-clan-pro uppercase py-2 transition-all duration-300 ${
                  isActive('/') 
                    ? 'text-indigo-600 font-bold' 
                    : 'text-indigo-600 hover:text-indigo-800'
                }`}
              >
                HOME
              </NavLink>
              <NavLink 
                to="/working-model" 
                className={`block text-base font-clan-pro uppercase py-2 transition-all duration-300 ${
                  isActive('/working-model') 
                    ? 'text-indigo-600 font-bold' 
                    : 'text-indigo-600 hover:text-indigo-800'
                }`}
              >
                 Model
              </NavLink>
              <NavLink 
                to="/services" 
                className={`block text-base font-clan-pro uppercase py-2 transition-all duration-300 ${
                  isActive('/services') 
                    ? 'text-indigo-600 font-bold' 
                    : 'text-indigo-600 hover:text-indigo-800'
                }`}
              >
                Services
              </NavLink>
              <NavLink 
                to="/doctors" 
                className={`block text-base font-clan-pro uppercase py-2 transition-all duration-300 ${
                  isActive('/doctors') 
                    ? 'text-indigo-600 font-bold' 
                    : 'text-indigo-600 hover:text-indigo-800'
                }`}
              >
                Doctors
              </NavLink>
              <NavLink 
                to="/about" 
                className={`block text-base font-clan-pro uppercase py-2 transition-all duration-300 ${
                  isActive('/about') 
                    ? 'text-indigo-600 font-bold' 
                    : 'text-indigo-600 hover:text-indigo-800'
                }`}
              >
                ABOUT
              </NavLink>
              <NavLink 
                to="/contact" 
                className={`block text-base font-clan-pro uppercase py-2 transition-all duration-300 ${
                  isActive('/contact') 
                    ? 'text-indigo-600 font-bold' 
                    : 'text-indigo-600 hover:text-indigo-800'
                }`}
              >
                Contact
              </NavLink>
              <NavLink 
                to="/signup" 
                className="block bg-indigo-600 text-white px-4 py-1.5 rounded-full hover:bg-indigo-700 transition-colors text-center font-clan-pro text-base"
              >
                Create account
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 