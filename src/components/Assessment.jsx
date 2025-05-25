import React, { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: "How often have you felt little interest or pleasure in doing things?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 2,
    question: "How often have you felt down, depressed, or hopeless?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 3,
    question: "How often have you had trouble falling or staying asleep, or sleeping too much?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 4,
    question: "How often have you felt tired or had little energy?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  {
    id: 5,
    question: "How often have you had poor appetite or been overeating?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  }
];

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (value) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate final score
      const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
      setScore(totalScore);
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    setCurrentQuestion(prev => prev - 1);
  };

  const getScoreInterpretation = (score) => {
    if (score <= 4) return "Minimal depression";
    if (score <= 9) return "Mild depression";
    if (score <= 14) return "Moderate depression";
    if (score <= 19) return "Moderately severe depression";
    return "Severe depression";
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-calm-50 via-white to-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
            Mental Health Assessment
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Take a few minutes to understand your current mental well-being. Your responses will help us provide personalized support.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="h-2 bg-calm-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-calm-500 to-sage-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-slate-500 mt-2">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            {!isComplete ? (
              <div className="space-y-8">
                <h2 className="text-2xl font-semibold text-slate-800">
                  {questions[currentQuestion].question}
                </h2>
                
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className={`w-full p-4 text-left rounded-lg transition-all duration-200 ${
                        answers[currentQuestion] === option.value
                          ? 'bg-calm-100 border-2 border-calm-500'
                          : 'bg-slate-50 hover:bg-calm-50 border-2 border-transparent'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                <div className="flex justify-between pt-4">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={answers[currentQuestion] === undefined}
                    className="bg-gradient-to-r from-calm-500 to-calm-600 hover:from-calm-600 hover:to-calm-700 text-white flex items-center gap-2"
                  >
                    {currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-calm-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-calm-500" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-800">
                  Assessment Complete
                </h2>
                <div className="bg-calm-50 rounded-xl p-6">
                  <p className="text-lg text-slate-600 mb-2">
                    Your score: <span className="font-semibold text-calm-700">{score}</span>
                  </p>
                  <p className="text-calm-700 font-medium">
                    {getScoreInterpretation(score)}
                  </p>
                </div>
                <p className="text-slate-600">
                  Based on your responses, we recommend speaking with a mental health professional.
                  Would you like to connect with one of our therapists?
                </p>
                <Button className="bg-gradient-to-r from-calm-500 to-calm-600 hover:from-calm-600 hover:to-calm-700 text-white px-8 py-3 rounded-full">
                  Connect with a Therapist
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment; 