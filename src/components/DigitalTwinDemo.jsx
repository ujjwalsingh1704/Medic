import { useState } from "react";
import { Bell, TrendingUp, Calendar, Heart, Activity, Target, BarChart3 } from "lucide-react";

const DigitalTwinDemo = ({ userData }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1year');

  
  const calculateBMI = () => {
    if (!userData?.weight || !userData?.height) return null;
    const heightInMeters = userData.height / 100;
    return (userData.weight / (heightInMeters * heightInMeters)).toFixed(1);
  };

  
  const calculateHealthMetrics = () => {
    const bmi = calculateBMI();
    const baseHealth = 70;

   
    const adjustments = {
      overallHealth: 0,
      cardiovascular: 0,
      respiratory: 0,
      immune: 0,
      mental: 0,
      lifestyle: 0,
    };

    
    if (bmi) {
      if (bmi < 18.5) adjustments.overallHealth -= 5;
      else if (bmi >= 25 && bmi < 30) adjustments.overallHealth -= 3;
      else if (bmi >= 30) adjustments.overallHealth -= 8;
    }

    
    if (userData?.smokingStatus === 'current') {
      adjustments.respiratory -= 15;
      adjustments.cardiovascular -= 10;
    } else if (userData?.smokingStatus === 'former') {
      adjustments.respiratory -= 5;
      adjustments.cardiovascular -= 3;
    }

    
    if (userData?.exerciseFrequency) {
      const exerciseMap = {
        never: -10,
        rarely: -5,
        sometimes: 0,
        regular: 5,
        frequent: 10,
      };
      const adjustment = exerciseMap[userData.exerciseFrequency] || 0;
      adjustments.overallHealth += adjustment;
      adjustments.cardiovascular += adjustment;
      adjustments.lifestyle += adjustment;
    }

    
    if (userData?.sleepHours) {
      const sleepHours = Number(userData.sleepHours);
      if (sleepHours < 6) adjustments.mental -= 10;
      else if (sleepHours > 9) adjustments.mental -= 5;
      else if (sleepHours >= 7 && sleepHours <= 8) adjustments.mental += 5;
    }

    
    if (userData?.stressLevel) {
      const stressMap = {
        low: 5,
        moderate: 0,
        high: -5,
        'very-high': -10,
      };
      const adjustment = stressMap[userData.stressLevel] || 0;
      adjustments.mental += adjustment;
      adjustments.overallHealth += adjustment;
    }

    
    const current = {
      overallHealth: Math.max(0, Math.min(100, baseHealth + adjustments.overallHealth)),
      cardiovascular: Math.max(0, Math.min(100, baseHealth + adjustments.cardiovascular)),
      respiratory: Math.max(0, Math.min(100, baseHealth + adjustments.respiratory)),
      immune: Math.max(0, Math.min(100, baseHealth + adjustments.immune)),
      mental: Math.max(0, Math.min(100, baseHealth + adjustments.mental)),
      lifestyle: Math.max(0, Math.min(100, baseHealth + adjustments.lifestyle)),
    };

    
    const predictions = {
      '1year': {},
      '3year': {},
      '5year': {},
    };

    
    Object.keys(current).forEach(metric => {
      predictions['1year'][metric] = Math.min(100, current[metric] + 5);
      predictions['3year'][metric] = Math.min(100, current[metric] + 10);
      predictions['5year'][metric] = Math.min(100, current[metric] + 15);
    });

    return { current, predictions };
  };

  const healthMetrics = calculateHealthMetrics();

  const riskFactors = [
    {
      name: "TB Infection Risk",
      current: 78,
      predicted: 15,
      trend: "decreasing",
      impact: "high",
      timeToNormal: "6-12 months with treatment",
    },
    {
      name: "Cardiovascular Disease",
      current: 25,
      predicted: 18,
      trend: "decreasing",
      impact: "medium",
      timeToNormal: "2-3 years with lifestyle changes",
    },
    {
      name: "Depression/Anxiety",
      current: 35,
      predicted: 20,
      trend: "stable",
      impact: "medium",
      timeToNormal: "1-2 years with support",
    },
    {
      name: "Immune Deficiency",
      current: 40,
      predicted: 22,
      trend: "decreasing",
      impact: "high",
      timeToNormal: "1 year with proper nutrition",
    },
  ];

  const recommendations = [
    {
      category: "Immediate (1-3 months)",
      actions: [
        "Complete TB treatment regimen (6 months)",
        "Weekly health monitoring visits",
        "Nutritional supplementation program",
        "Mental health counseling sessions",
      ],
      impact: "High",
      priority: "Critical",
    },
    {
      category: "Short-term (3-12 months)",
      actions: [
        "Gradual exercise program initiation",
        "Stress management training",
        "Sleep hygiene optimization",
        "Social support network building",
      ],
      impact: "Medium",
      priority: "Important",
    },
    {
      category: "Long-term (1-5 years)",
      actions: [
        "Annual comprehensive health screenings",
        "Career/education planning support",
        "Community engagement activities",
        "Preventive care optimization",
      ],
      impact: "High",
      priority: "Beneficial",
    },
  ];

  const lifeExpectancy = {
    current: 76.2,
    withTreatment: 82.8,
    optimal: 85.3,
    improvement: 6.6,
  };

  const qualityOfLife = {
    current: 6.2,
    withTreatment: 8.1,
    optimal: 8.7,
    improvement: 1.9,
  };

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-900 mb-2">Digital Health Twin</h1>
          <p className="text-indigo-600">Your personalized health prediction dashboard</p>
        </div>
        
        <div className="overflow-hidden bg-white shadow-xl rounded-lg">
          <div className="pb-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-4">
            <div className="flex items-center justify-between text-lg">
              <span className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Health Predictions
              </span>
              <div className="flex space-x-1">
                {['1year', '3year', '5year'].map((timeframe) => (
                  <button
                    key={timeframe}
                    className={`text-xs px-3 py-1 rounded-md ${
                      selectedTimeframe === timeframe
                        ? 'bg-white text-indigo-600 hover:bg-white/90'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}
                    onClick={() => setSelectedTimeframe(timeframe)}
                  >
                    {timeframe === '1year' ? '1Y' : timeframe === '3year' ? '3Y' : '5Y'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-indigo-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Heart className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm font-medium text-indigo-600">Life Expectancy</span>
                  </div>
                  <div className="text-2xl font-bold text-indigo-600">
                    {selectedTimeframe === '1year'
                      ? lifeExpectancy.withTreatment
                      : lifeExpectancy.optimal}{" "}
                    years
                  </div>
                  <div className="text-sm text-indigo-500">
                    +{lifeExpectancy.improvement} years improvement
                  </div>
                </div>

                <div className="bg-indigo-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Activity className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm font-medium text-indigo-600">Quality of Life</span>
                  </div>
                  <div className="text-2xl font-bold text-indigo-600">
                    {selectedTimeframe === '1year'
                      ? qualityOfLife.withTreatment
                      : qualityOfLife.optimal}{" "}
                    /10
                  </div>
                  <div className="text-sm text-indigo-500">
                    +{qualityOfLife.improvement} points improvement
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(healthMetrics.current).map(([metric, value]) => {
                  const predictedValue = healthMetrics.predictions[selectedTimeframe][metric];
                  const improvement = predictedValue - value;
                  return (
                    <div key={metric} className="bg-white rounded-lg p-4 border border-indigo-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-indigo-900 capitalize">
                          {metric.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-sm font-medium text-indigo-600">
                          {value}%
                        </span>
                      </div>
                      <div className="relative">
                        <div className="h-2 bg-indigo-100 rounded-full">
                          <div
                            className="h-2 bg-indigo-600 rounded-full"
                            style={{ width: `${value}%` }}
                          ></div>
                        </div>
                        <div className="h-2 bg-indigo-200 rounded-full mt-1">
                          <div
                            className="h-2 bg-indigo-400 rounded-full"
                            style={{ width: `${predictedValue}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="mt-1 text-xs text-indigo-500">
                        Predicted: {predictedValue}% ({improvement > 0 ? '+' : ''}{improvement}%)
                      </div>
                    </div>
                  );
                })}
              </div>

              <div>
                <h4 className="font-medium text-lg mb-4 text-indigo-900">Risk Factor Evolution</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {riskFactors.slice(0, 3).map((risk, idx) => (
                    <div key={idx} className="border border-indigo-100 rounded-lg p-4 bg-white shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-indigo-900">{risk.name}</span>
                        <div className="flex items-center space-x-1">
                          <span className="text-sm text-red-600">
                            {risk.current}%
                          </span>
                          <span className="text-sm text-indigo-600">→</span>
                          <span className="text-sm text-indigo-600">
                            {risk.predicted}%
                          </span>
                          <TrendingUp
                            className={`h-4 w-4 ${
                              risk.trend === "decreasing"
                                ? "text-indigo-500 transform rotate-180"
                                : "text-indigo-500"
                            }`}
                          />
                        </div>
                      </div>
                      <div className="text-xs text-indigo-600 mt-2">
                        {risk.timeToNormal}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              
              <div className="flex justify-center space-x-4 mt-8">
                <button className="flex items-center px-4 py-2 border border-indigo-200 text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Full Report
                </button>
                <button className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors">
                  <Calendar className="h-4 w-4 mr-2" />
                  Plan Actions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTwinDemo;
