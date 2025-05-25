import { Button } from "../components/ui/button";
import { Heart, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-calm-50 via-white to-sage-50 py-16 sm:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-calm-200/20 rounded-full blur-3xl animate-gentle-float"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-sage-200/20 rounded-full blur-3xl animate-gentle-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Your Mental Well-being
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-calm-500 to-sage-500">
              Matters
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto font-light">
            Let's Understand It Together
          </p>
          
          <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed">
            MindEase is your AI companion for emotional check-ins. It listens, analyzes, and suggests ways to feel better—backed by psychology and empathy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/assessment">
              <Button className="bg-gradient-to-r from-calm-500 to-calm-600 hover:from-calm-600 hover:to-calm-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 animate-breathing">
                Take the Assessment
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-calm-300 text-calm-700 hover:bg-calm-50 px-8 py-4 text-lg rounded-full transition-all duration-300">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-calm-500" />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-sage-500" />
              <span>Backed by Science</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-calm-500" />
              <span>Free to Use</span>
            </div>
          </div>
        </div>

        {/* Illustration placeholder */}
        <div className="mt-16 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="max-w-lg mx-auto">
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-calm-100 to-sage-100 rounded-3xl flex items-center justify-center gentle-shadow">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-calm-400 to-sage-400 rounded-full mx-auto flex items-center justify-center animate-gentle-float">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-slate-600 font-medium">AI Companion Ready</p>
                  <p className="text-sm text-slate-500">Empathetic • Supportive • Scientific</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 