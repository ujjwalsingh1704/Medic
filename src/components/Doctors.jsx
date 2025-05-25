import React, { useState } from 'react';
import { Star, Video, Calendar, ArrowRight, X } from 'lucide-react';

const PopupMessage = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Appointment Request</h3>
          <p className="text-gray-600 mb-6">{message}</p>
          <button
            onClick={onClose}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const DoctorCard = ({ doctor, onConsult, onSchedule }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group">
      <div className="relative">
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="w-full h-64 object-cover"
        />
        {doctor.available && (
          <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
            Available Now
          </div>
        )}
      </div>
      <div className="p-6 group-hover:bg-indigo-600 transition-all duration-300">
        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-white transition-all duration-300">{doctor.name}</h3>
        <p className="text-indigo-600 mb-3 group-hover:text-white transition-all duration-300">{doctor.specialty}</p>
        
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-3">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="ml-1 text-sm font-medium group-hover:text-white transition-all duration-300">{doctor.rating}</span>
          </div>
          <span className="text-sm text-gray-500 group-hover:text-white transition-all duration-300">({doctor.reviews} reviews)</span>
        </div>
        
        <p className="text-gray-700 text-sm mb-5 group-hover:text-white transition-all duration-300">
          {doctor.experience} years of experience in TB treatment
        </p>
        
        <div className="flex space-x-2">
          <button 
            onClick={() => onConsult(doctor)}
            className="flex-1 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:border-white group-hover:text-white"
          >
            <Video size={16} className="mr-1" />
            Consult
          </button>
          <button 
            onClick={() => onSchedule(doctor)}
            className="flex-1 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:border-white group-hover:text-white"
          >
            <Calendar size={16} className="mr-1" />
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

function Doctors() {
  const [activeTab, setActiveTab] = useState('all');
  const [popupMessage, setPopupMessage] = useState(null);
  
  const handleConsult = (doctor) => {
    setPopupMessage({
      title: "Video Consultation Request",
      message: `Your video consultation request has been sent to ${doctor.name}. You will receive a confirmation email shortly.`
    });
  };

  const handleSchedule = (doctor) => {
    setPopupMessage({
      title: "Appointment Request",
      message: `Your appointment request has been sent to ${doctor.name}. You will receive a confirmation email shortly.`
    });
  };

  const closePopup = () => {
    setPopupMessage(null);
  };

  const doctors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialty: "Pulmonologist",
      rating: 4.9,
      reviews: 124,
      experience: 12,
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
      available: true
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      specialty: "TB Specialist",
      rating: 4.8,
      reviews: 98,
      experience: 15,
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",
      available: false
    },
    {
      id: 3,
      name: "Dr. Ananya Patel",
      specialty: "Infectious Disease",
      rating: 4.7,
      reviews: 86,
      experience: 10,
      image: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg",
      available: true
    },
    {
      id: 4,
      name: "Dr.Alka Singh",
      specialty: "Pulmonologist",
      rating: 4.9,
      reviews: 152,
      experience: 18,
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
      available: true
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Specialists' },
    { id: 'pulmonologist', label: 'Pulmonologists' },
    { id: 'tb-specialist', label: 'TB Specialists' },
    { id: 'infectious', label: 'Infectious Disease' }
  ];

  const filteredDoctors = activeTab === 'all' 
    ? doctors 
    : doctors.filter(doctor => {
        if (activeTab === 'pulmonologist') return doctor.specialty === 'Pulmonologist';
        if (activeTab === 'tb-specialist') return doctor.specialty === 'TB Specialist';
        if (activeTab === 'infectious') return doctor.specialty === 'Infectious Disease';
        return true;
      });

  return (
    <section id="doctors" className="w-full bg-white">
      {popupMessage && (
        <PopupMessage 
          message={popupMessage.message}
          onClose={closePopup}
        />
      )}
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our TB Specialists</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Connect with experienced doctors specializing in tuberculosis diagnosis and treatment.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-8">
          <div className="bg-gray-100 rounded-full p-1 inline-flex">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`py-2 px-6 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map(doctor => (
            <DoctorCard 
              key={doctor.id} 
              doctor={doctor} 
              onConsult={handleConsult}
              onSchedule={handleSchedule}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-all duration-300">
            View All Doctors
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Doctors;