import React from 'react';
import {
  Mic,
  FileImage,
  Activity,
  Video,
  Shield,
  Stethoscope
} from 'lucide-react';

function WorkingModel() {
  return (
    <section id="how-it-works" className="w-full bg-white">
      <div className="w-full flex flex-col items-center justify-start">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              How Our AI Screening Works
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              HealthAI combines multiple AI technologies to detect tuberculosis early and connect you with qualified medical professionals.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 transform -translate-x-1/2"></div>

            <div className="space-y-10">
              <Step
                number="1"
                title="Cough Sound Analysis"
                description="Our AI analyzes your cough's acoustic patterns to detect subtle signs of tuberculosis that may not be audible to human ears. The analysis takes less than 20 seconds and can be done from any smartphone."
                icon={<Mic className="w-12 h-12 text-primary-600 mb-3" />}
                img="https://images.pexels.com/photos/7089019/pexels-photo-7089019.jpeg"
                reverse={false}
              />

              <Step
                number="2"
                title="Chest X-Ray Analysis"
                description="Upload your chest X-ray for our AI to analyze. The system can detect abnormalities consistent with tuberculosis with an accuracy rate of 96%, often catching signs that might be missed in early stages."
                icon={<FileImage className="w-12 h-12 text-primary-600 mb-3" />}
                img="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg"
                reverse={true}
              />

              <Step
                number="3"
                title="Blood Test Analysis"
                description="Our AI system also analyzes blood test results to identify markers associated with tuberculosis infection, providing a comprehensive screening approach combining multiple data points."
                icon={<Activity className="w-12 h-12 text-primary-600 mb-3" />}
                img="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg"
                reverse={false}
              />

              <Step
                number="4"
                title="Doctor Consultation"
                description="If our AI detects potential TB indicators, you're instantly connected to a qualified doctor via secure video consultation. The doctor reviews your results and provides personalized medical advice."
                icon={<Video className="w-12 h-12 text-primary-600 mb-3" />}
                img="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg"
                reverse={true}
              />

              <Step
                number="5"
                title="Secure Data Storage"
                description="All your medical data, including AI analysis reports, prescriptions, and test results, are securely stored using blockchain technology, ensuring privacy, data integrity, and seamless access across healthcare providers."
                icon={<Shield className="w-12 h-12 text-primary-600 mb-3" />}
                img="https://images.pexels.com/photos/8438923/pexels-photo-8438923.jpeg"
                reverse={false}
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto">
              <Stethoscope className="mr-2" size={20} />
              Start AI Screening Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const Step = ({ number, title, description, icon, img, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-4`}>
      <div className={`md:w-1/2 ${reverse ? 'md:pl-4' : 'md:pr-4'} mb-4 md:mb-0`}>
        <div className="bg-primary-50 p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          {icon}
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
      <div className="md:w-1/2 relative">
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10 md:z-20">
          <div className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
            {number}
          </div>
        </div>
        <img 
          src={img} 
          alt={title} 
          className={`rounded-lg shadow-lg w-full h-auto object-cover ${reverse ? 'md:mr-4' : 'md:ml-4'} hover:shadow-xl transition-shadow`} 
        />
      </div>
    </div>
  );
};

export default WorkingModel;
