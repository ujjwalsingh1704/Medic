import React from 'react';
import { Stethoscope, Pill, Heart, Activity, Clock, Shield } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <Icon className="w-12 h-12 text-indigo-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "Online Consultations",
      description: "Connect with doctors virtually for medical advice and consultations."
    },
    {
      icon: Pill,
      title: "Digital Prescriptions",
      description: "Get your prescriptions digitally and manage your medications easily."
    },
    {
      icon: Heart,
      title: "Health Monitoring",
      description: "Track your vital signs and health metrics in real-time."
    },
    {
      icon: Activity,
      title: "Fitness Tracking",
      description: "Monitor your physical activity and set fitness goals."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Access healthcare support and assistance anytime, anywhere."
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Your health data is protected with advanced security measures."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">Comprehensive healthcare solutions for your needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;