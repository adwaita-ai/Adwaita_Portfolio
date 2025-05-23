"use client";

import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Brain, 
  Book, 
  Mic, 
  Cpu, 
  BarChart, 
  Grid,
  ChevronLeft,
  ChevronRight 
} from 'lucide-react';

export default function SkillsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const skills = [
    {
      name: 'Python',
      icon: <Code size={24} />,
      level: 'Advanced',
      years: '2+ years',
      description: 'Data analysis, machine learning, API development, and automation scripts',
      category: 'Programming',
      color: 'from-blue-600 to-blue-900',
      ringColor: 'ring-blue-600'
    },
    {
      name: 'SQL',
      icon: <Database size={24} />,
      level: 'Advanced',
      years: '2+ years',
      description: 'Database design, complex queries, performance optimization, and data warehousing',
      category: 'Databases',
      color: 'from-orange-500 to-orange-800',
      ringColor: 'ring-orange-500'
    },
    {
      name: 'Machine Learning',
      icon: <Brain size={24} />,
      level: 'Intermediate',
      years: '1+ year',
      description: 'Supervised learning, unsupervised learning, neural networks, and NLP fundamentals',
      category: 'AI',
      color: 'from-green-500 to-green-800',
      ringColor: 'ring-green-500'
    },
    {
      name: 'Libraries',
      icon: <Book size={24} />,
      level: 'Intermediate',
      years: '1+ year',
      description: 'Data science libraries like NumPy, pandas, scikit-learn, seaborn, and matplotlib for analysis and visualization',
      category: 'Data Science',
      color: 'from-yellow-500 to-yellow-800',
      ringColor: 'ring-yellow-500'
    },
    {
      name: 'Deep Learning',
      icon: <Brain size={24} />,
      level: 'Intermediate',
      years: '1+ year',
      description: 'Working with TensorFlow, neural networks, RNNs, LSTMs, and CNNs for deep learning tasks',
      category: 'AI',
      color: 'from-purple-500 to-purple-900',
      ringColor: 'ring-purple-500'
    },
    {
      name: 'NLP',
      icon: <Mic size={24} />,
      level: 'Beginner',
      years: '< 1 year',
      description: 'Understanding of text preprocessing, tokenization, and sentiment analysis using NLP techniques',
      category: 'AI',
      color: 'from-teal-500 to-teal-800',
      ringColor: 'ring-teal-500'
    },
    {
      name: 'Gen AI',
      icon: <Cpu size={24} />,
      level: 'Beginner',
      years: '< 1 year',
      description: 'Basic understanding of generative models like GANs and their applications',
      category: 'AI',
      color: 'from-indigo-500 to-indigo-900',
      ringColor: 'ring-indigo-500'
    },
    {
      name: 'Power BI',
      icon: <BarChart size={24} />,
      level: 'Advanced',
      years: '1+ year',
      description: 'Creating dashboards, data modeling, and reporting using Power BI',
      category: 'Data Visualization',
      color: 'from-amber-500 to-amber-800',
      ringColor: 'ring-amber-500'
    },
    {
      name: 'HTML & CSS',
      icon: <Code size={24} />,
      level: 'Intermediate',
      years: '1+ year',
      description: 'Building responsive layouts, styling pages, and understanding web design fundamentals',
      category: 'Web Development',
      color: 'from-cyan-500 to-cyan-800',
      ringColor: 'ring-cyan-500'
    },
    {
      name: 'PostgreSQL',
      icon: <Database size={24} />,
      level: 'Beginner',
      years: '< 1 year',
      description: 'Basic queries, data manipulation, and understanding relational databases in PostgreSQL',
      category: 'Databases',
      color: 'from-blue-500 to-blue-800',
      ringColor: 'ring-blue-500'
    },
    {
      name: 'Data Science',
      icon: <BarChart size={24} />,
      level: 'Intermediate',
      years: '1+ year',
      description: 'Experience with Exploratory Data Analysis (EDA), predictive modeling, A/B testing, and data visualization',
      category: 'Analytics',
      color: 'from-violet-500 to-violet-900',
      ringColor: 'ring-violet-500'
    },
    {
      name: 'R',
      icon: <Code size={24} />,
      level: 'Beginner',
      years: '< 1 year',
      description: 'Basic statistical analysis and data visualization using R programming',
      category: 'Data Science',
      color: 'from-emerald-500 to-emerald-800',
      ringColor: 'ring-emerald-500'
    },
    {
      name: 'Excel',
      icon: <Grid size={24} />,
      level: 'Intermediate',
      years: '<1 year',
      description: 'Advanced Excel functions, pivot tables, data analysis, and chart creation for business insights',
      category: 'Data Analysis',
      color: 'from-lime-500 to-lime-800',
      ringColor: 'ring-lime-500'
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setActiveIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setActiveIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
  };

  // Helper to get visible skills - mobile shows 1, desktop shows 3
  const getVisibleSkills = () => {
    if (isMobile) {
      return [activeIndex];
    }
    const result = [];
    result.push((activeIndex - 1 + skills.length) % skills.length);
    result.push(activeIndex);
    result.push((activeIndex + 1) % skills.length);
    return result;
  };

  // Get position class for each card
  const getPositionClass = (index) => {
    const visibleSkills = getVisibleSkills();
    
    if (isMobile) {
      if (index === visibleSkills[0]) {
        return "mobile-center-card";
      } else {
        return "mobile-hidden-card";
      }
    } else {
      if (index === visibleSkills[0]) {
        return "left-card";
      } else if (index === visibleSkills[1]) {
        return "center-card";
      } else if (index === visibleSkills[2]) {
        return "right-card";
      } else {
        return "hidden-card";
      }
    }
  };

  // Function to determine text color based on level
  const getLevelColor = (level) => {
    switch(level) {
      case 'Advanced': return 'text-green-500';
      case 'Intermediate': return 'text-yellow-500';
      case 'Beginner': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 text-white" id="skills">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-start">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold relative pb-2 mb-6 sm:mb-8 md:mb-10 text-left">
          Skills
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500"></span>
        </div>
      </div>

      <div className={`relative ${isMobile ? 'h-96 sm:h-[420px]' : 'h-[450px] md:h-[500px] lg:h-[550px]'} overflow-hidden mb-8 sm:mb-12 md:mb-16`}>
        {/* Skills carousel */}
        <div className="skills-carousel">
          {skills.map((skill, index) => {
            const cardClass = getPositionClass(index);
            const isActiveCard = isMobile ? 
              cardClass === "mobile-center-card" : 
              cardClass === "center-card";
            
            return (
              <div
                key={index}
                className={`skill-card ${cardClass}`}
                onClick={() => setActiveIndex(index)}
              >
                <div 
                  className={`relative w-full h-full flex flex-col group bg-gray-900 rounded-xl overflow-hidden ${
                    isActiveCard ? `border border-transparent ring-2 ring-offset-0 ${skill.ringColor} ring-opacity-70 ring-offset-gray-900` : 'border border-gray-800'
                  }`}
                >
                  {/* Card header */}
                  <div className="relative h-16 sm:h-20 md:h-24 w-full overflow-hidden bg-black flex items-center p-3 sm:p-4 md:p-6">
                    <div className={`p-2 sm:p-3 md:p-4 rounded-lg bg-gradient-to-br ${skill.color} mr-3 sm:mr-4 md:mr-6 text-white`}>
                      {React.cloneElement(skill.icon, { size: isMobile ? 20 : 24 })}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{skill.name}</h3>
                      <div className="flex items-center mt-0.5 sm:mt-1">
                        <span className={`text-xs sm:text-sm font-medium ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                        <span className="mx-1 sm:mx-2 text-gray-400">•</span>
                        <span className="text-xs sm:text-sm text-gray-300">{skill.years}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="flex-1 p-3 sm:p-4 md:p-5 bg-black">
                    <p className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 leading-relaxed">{skill.description}</p>

                    <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-auto">
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-gray-800 text-white">
                        {skill.category}
                      </span>
                    </div>
                    
                    {/* Gradient detail section at bottom */}
                    <div className={`absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r ${skill.color}`}></div>

                    {/* Mobile navigation controls */}
                    {isMobile && isActiveCard && (
                      <div className="absolute bottom-3 sm:bottom-4 left-0 w-full px-3 sm:px-5 flex justify-between items-center">
                        <button
                          className={`w-8 h-8 sm:w-10 sm:h-10 bg-gray-800/80 hover:bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center transition-colors shadow-lg border border-gray-700`}
                          onClick={handlePrev}
                          aria-label="Previous skill"
                        >
                          <ChevronLeft size={isMobile ? 16 : 20} />
                        </button>
                        <div className="flex space-x-1 sm:space-x-1.5">
                          {skills.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveIndex(idx);
                              }}
                              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                                idx === activeIndex
                                  ? `w-4 sm:w-6 bg-gradient-to-r ${skills[activeIndex].color}`
                                  : 'bg-gray-600 hover:bg-gray-500'
                              }`}
                              aria-label={`Go to skill ${idx + 1}`}
                            />
                          ))}
                        </div>
                        <button
                          className={`w-8 h-8 sm:w-10 sm:h-10 bg-gray-800/80 hover:bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center transition-colors shadow-lg border border-gray-700`}
                          onClick={handleNext}
                          aria-label="Next skill"
                        >
                          <ChevronRight size={isMobile ? 16 : 20} />
                        </button>
                      </div>
                    )}

                    {/* Desktop navigation controls */}
                    {!isMobile && isActiveCard && (
                      <div className="absolute bottom-4 left-0 w-full px-5 flex justify-between items-center">
                        <button
                          className={`w-8 h-8 bg-gray-800/80 hover:bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center transition-colors shadow-lg border border-gray-700`}
                          onClick={handlePrev}
                          aria-label="Previous skill"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <div className="flex space-x-1.5">
                          {skills.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveIndex(idx);
                              }}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                idx === activeIndex
                                  ? `w-6 bg-gradient-to-r ${skills[activeIndex].color}`
                                  : 'bg-gray-600 hover:bg-gray-500'
                              }`}
                              aria-label={`Go to skill ${idx + 1}`}
                            />
                          ))}
                        </div>
                        <button
                          className={`w-8 h-8 bg-gray-800/80 hover:bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center transition-colors shadow-lg border border-gray-700`}
                          onClick={handleNext}
                          aria-label="Next skill"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Large screen navigation buttons outside cards */}
        {!isMobile && (
          <>
            <div className="hidden md:flex absolute top-1/2 left-2 lg:left-4 -translate-y-1/2 z-40">
              <button
                className={`w-10 h-10 lg:w-12 lg:h-12 bg-gray-800/80 hover:bg-gradient-to-r ${skills[activeIndex].color} rounded-full flex items-center justify-center transition-colors shadow-lg border border-gray-700 text-white`}
                onClick={handlePrev}
                aria-label="Previous skill"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="hidden md:flex absolute top-1/2 right-2 lg:right-4 -translate-y-1/2 z-40">
              <button
                className={`w-10 h-10 lg:w-12 lg:h-12 bg-gray-800/80 hover:bg-gradient-to-r ${skills[activeIndex].color} rounded-full flex items-center justify-center transition-colors shadow-lg border border-gray-700 text-white`}
                onClick={handleNext}
                aria-label="Next skill"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Custom CSS styles */}
      <style jsx>{`
        .skills-carousel {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1500px;
        }

        .skill-card {
          position: absolute;
          transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        /* Desktop styles */
        @media (min-width: 769px) {
          .skill-card {
            width: 280px;
            height: 380px;
          }

          .center-card {
            z-index: 30;
            transform: translateX(0) scale(1.05);
            opacity: 1;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
          }

          .left-card {
            z-index: 20;
            transform: translateX(-300px) scale(0.85);
            opacity: 0.8;
            filter: brightness(0.8);
          }

          .right-card {
            z-index: 20;
            transform: translateX(300px) scale(0.85);
            opacity: 0.8;
            filter: brightness(0.8);
          }

          .hidden-card {
            opacity: 0;
            transform: translateX(0) scale(0.7);
            pointer-events: none;
          }
        }

        @media (min-width: 1024px) {
          .skill-card {
            width: 320px;
            height: 400px;
          }

          .left-card {
            transform: translateX(-340px) scale(0.85);
          }

          .right-card {
            transform: translateX(340px) scale(0.85);
          }
        }

        /* Mobile styles */
        @media (max-width: 768px) {
          .skill-card {
            width: 280px;
            height: 360px;
          }

          .mobile-center-card {
            z-index: 30;
            transform: translateX(0) scale(1);
            opacity: 1;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
          }

          .mobile-hidden-card {
            opacity: 0;
            transform: translateX(0) scale(0.8);
            pointer-events: none;
          }
        }

        @media (max-width: 480px) {
          .skill-card {
            width: 260px;
            height: 340px;
          }
        }

        @media (max-width: 320px) {
          .skill-card {
            width: 240px;
            height: 320px;
          }
        }
      `}</style>
    </section>
  );
}