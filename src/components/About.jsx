import React from 'react';
import { Users, Target, Heart, Award } from 'lucide-react';

function About() {
  return (
    <section className="w-full bg-white pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">About HealthAI</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We're revolutionizing TB detection and treatment through advanced AI technology and compassionate care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-indigo-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              To make tuberculosis detection accessible, accurate, and affordable for everyone through innovative AI technology.
            </p>
            <p className="text-gray-700">
              We believe that early detection is the key to successful treatment, and our AI-powered screening system makes this possible.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-4">
              A world where tuberculosis is detected early and treated effectively, reducing its impact on communities worldwide.
            </p>
            <p className="text-gray-700">
              We're committed to leveraging technology to make healthcare more accessible and efficient for everyone.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h4>
            <p className="text-gray-700">
              Our team combines medical expertise with cutting-edge AI technology to provide the best care.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <Target className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">Precision</h4>
            <p className="text-gray-700">
              Our AI system achieves 90% accuracy in TB detection, ensuring reliable results.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <Heart className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">Compassionate Care</h4>
            <p className="text-gray-700">
              We provide personalized support throughout your healthcare journey.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-8 text-white">
          <div className="flex items-center justify-center mb-6">
            <Award className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold text-center mb-4">Our Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-indigo-100">Screenings Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">96%</div>
              <div className="text-indigo-100">Detection Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-indigo-100">Partner Hospitals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;