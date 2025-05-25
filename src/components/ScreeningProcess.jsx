import React, { useState } from 'react';
import { Upload, Activity, Stethoscope, FileText, Mic, FileImage, ArrowRight, Check } from 'lucide-react';

function ScreeningProcess() {
  const [activeStep, setActiveStep] = useState(1);

  const handleNextStep = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const steps = [
    {
      icon: Upload,
      title: "Upload Your Data",
      description: "Start by uploading your medical records, test results, or any relevant health data."
    },
    {
      icon: Activity,
      title: "AI Analysis",
      description: "Our advanced AI system analyzes your data to identify potential health concerns."
    },
    {
      icon: Stethoscope,
      title: "Doctor Review",
      description: "Qualified doctors review the AI analysis and provide professional insights."
    },
    {
      icon: FileText,
      title: "Get Results",
      description: "Receive detailed reports and recommendations for your health journey."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">TB Detector</h2>
          <p className="text-lg text-gray-600">Simple steps to get your health assessment</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-indigo-50 rounded-lg p-6 h-full transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-indigo-600 rounded-full p-3 mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-indigo-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {activeStep === 1 && (
            <div className="text-center">
              <Mic className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Record Your Cough</h3>
              <p className="text-gray-700 mb-8">
                Our AI analyzes your cough's acoustic patterns to detect subtle signs of tuberculosis. 
                Please record a few coughs for analysis.
              </p>
              <div className="bg-gray-100 rounded-lg p-8 mb-8 max-w-md mx-auto">
                <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center mx-auto cursor-pointer hover:bg-indigo-700 transition-colors duration-300">
                  <Mic className="w-10 h-10 text-white" />
                </div>
                <p className="text-gray-500 mt-4">Tap to start recording</p>
              </div>
              <div className="flex justify-end">
                <button 
                  onClick={handleNextStep}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 flex items-center"
                >
                  Next Step
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="text-center">
              <FileImage className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Upload Chest X-Ray</h3>
              <p className="text-gray-700 mb-8">
                Upload your chest X-ray for our AI to analyze. The system can detect abnormalities consistent with tuberculosis 
                with high accuracy.
              </p>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-8 max-w-md mx-auto">
                <div className="text-center">
                  <FileImage className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Drag and drop your X-ray file here, or click to browse</p>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                    Browse Files
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <button 
                  onClick={handlePreviousStep}
                  className="border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                >
                  Back
                </button>
                <button 
                  onClick={handleNextStep}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 flex items-center"
                >
                  Next Step
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="text-center">
              <Activity className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Upload Blood Test Results</h3>
              <p className="text-gray-700 mb-8">
                Our AI system also analyzes blood test results to identify markers associated with tuberculosis infection, 
                providing a comprehensive screening approach.
              </p>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-8 max-w-md mx-auto">
                <div className="text-center">
                  <Activity className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Upload your blood test results or fill in values below</p>
                  <div className="grid grid-cols-2 gap-4 text-left mb-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">WBC Count</label>
                      <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="4.5-11.0" />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">ESR</label>
                      <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" placeholder="0-20 mm/hr" />
                    </div>
                  </div>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                    Upload Results
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <button 
                  onClick={handlePreviousStep}
                  className="border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                >
                  Back
                </button>
                <button 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 flex items-center"
                >
                  Complete Screening
                  <Check size={18} className="ml-2" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ScreeningProcess;