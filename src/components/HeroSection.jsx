import React from 'react';
import { ArrowRight, Activity, Shield, Clock } from 'lucide-react';

function HeroSection() {
  return (
    <section className="fixed inset-0 bg-gradient-to-r from-indigo-50 to-blue-50 w-full h-full overflow-y-auto">
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Health, Our Priority
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Connect with expert doctors, get prescriptions, and manage your health all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Activity className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quick Consultations</h3>
                <p className="text-gray-600">Get medical advice from qualified doctors within minutes.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Shield className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
                <p className="text-gray-600">Your health data is protected with advanced security measures.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Clock className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                <p className="text-gray-600">Access healthcare services anytime, anywhere.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Activity className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Easy Prescriptions</h3>
                <p className="text-gray-600">Get digital prescriptions delivered to your inbox.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
