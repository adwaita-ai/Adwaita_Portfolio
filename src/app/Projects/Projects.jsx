"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, Code } from 'lucide-react';
import weatherImg from '../../assets/images/project1.jpg';
import RainImg from '../../assets/images/Rain_Australia.jpg';
import VehicleImg from '../../assets/images/vehicle.webp';
import WomenImg from '../../assets/images/women.jpg';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      title: 'Weather analysis across India',
      description: 'Power BI dashboard showcasing 11 years of historical and real-time weather data across Indian states & UTs',
      image: weatherImg,
      tags: ["Power BI", "Data Analysis", "Visualization"],
      demo: "https://app.powerbi.com/groups/me/reports/4ae7cf95-a7e8-4b74-beca-6b3de1b22a4b/293de17b8a1a11e4231d?experience=power-bi",
      github: "#"
    },
    {
      title: 'Rain prediction in Australia using ML',
      description: 'Developed a rainfall prediction model with ML and a Streamlit UI for forecasting and visualization.',
      image: RainImg,
      tags: ["Machine Learning", "Streamlit", "Python"],
      demo: "https://adwaita-weather-project.streamlit.app/",
      github: "#"
    },
    {
      title: 'Automated detection of stolen vehicle using YOLO v8',
      description: 'Built a real-time stolen vehicle detection and tracking system using YOLOv8 integrated into a web app.',
      image: VehicleImg,
      tags: ["YOLOv8", "Computer Vision", "Web App"],
      demo: null,
      github: null
    },
    {
      title: 'AURA – Women safety app',
      description: 'Developed AURA, a women safety app with Flutter, Dart, and Firebase, providing real-time alerts and emergency assistance.',
      image: WomenImg,
      tags: ["Flutter", "Dart", "Firebase"],
      demo: null,
      github: null
    },
  ];

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Helper to get visible projects (exactly 3 cards)
  const getVisibleProjects = () => {
    const result = [];
    // Previous card
    result.push((activeIndex - 1 + projects.length) % projects.length);
    // Active card
    result.push(activeIndex);
    // Next card
    result.push((activeIndex + 1) % projects.length);
    return result;
  };

  // Get position class for each card
  const getPositionClass = (index) => {
    const visibleProjects = getVisibleProjects();
    
    if (index === visibleProjects[0]) {
      return "left-card";
    } else if (index === visibleProjects[1]) {
      return "center-card";
    } else if (index === visibleProjects[2]) {
      return "right-card";
    } else {
      return "hidden-card";
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="w-full px-4 py-16 text-white" id="projects">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-start">
        <div className="text-4xl font-bold relative pb-2 mb-10 text-left" data-aos="fade-right">
          Projects
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500"></span>
        </div>
      </div>

      <div className="relative h-[550px] overflow-hidden mb-16">
        {/* Cards container with custom styling */}
        <div className="projects-carousel">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${getPositionClass(index)}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative w-full h-full flex flex-col group bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                {/* Card image */}
                <div className="relative h-2/5 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={95}
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    priority
                    sizes="(max-width: 540px) 80vw, (max-width: 768px) 60vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
                </div>

                {/* Card content */}
                <div className="flex-1 p-5 bg-gradient-to-b from-purple-900/70 to-black">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-white line-clamp-2">{project.title}</h3>
                    {(getPositionClass(index) === "center-card" && (project.demo || project.github)) && (
                      <div className="flex-shrink-0 flex space-x-2 ml-1">
                        {project.github && (
                          <a 
                            href={project.github} 
                            className="text-gray-300 hover:text-white transition-colors p-1 hover:bg-purple-800/50 rounded-full"
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Code size={16} />
                          </a>
                        )}
                        {project.demo && (
                          <a 
                            href={project.demo} 
                            className="text-gray-300 hover:text-white transition-colors p-1 hover:bg-purple-800/50 rounded-full"
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-200 mb-3 line-clamp-4">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-purple-700/60 text-purple-100 backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {getPositionClass(index) === "center-card" && (
                    <div className="absolute bottom-4 left-0 w-full px-5 flex justify-between items-center mt-4">
                      <button
                        className="w-8 h-8 bg-gray-800/80 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors shadow-lg border border-gray-700"
                        onClick={handlePrev}
                        aria-label="Previous project"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <div className="flex space-x-1.5">
                        {projects.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveIndex(idx);
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              idx === activeIndex
                                ? 'w-6 bg-purple-500'
                                : 'bg-gray-600 hover:bg-gray-500'
                            }`}
                            aria-label={`Go to project ${idx + 1}`}
                          />
                        ))}
                      </div>
                      <button
                        className="w-8 h-8 bg-gray-800/80 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors shadow-lg border border-gray-700"
                        onClick={handleNext}
                        aria-label="Next project"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Large screen navigation buttons outside cards */}
        <div className="hidden md:flex absolute top-1/2 left-4 -translate-y-1/2 z-40">
          <button
            className="w-12 h-12 bg-gray-800/80 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors shadow-lg border border-gray-700 text-white"
            onClick={handlePrev}
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        <div className="hidden md:flex absolute top-1/2 right-4 -translate-y-1/2 z-40">
          <button
            className="w-12 h-12 bg-gray-800/80 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors shadow-lg border border-gray-700 text-white"
            onClick={handleNext}
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Custom CSS styles */}
      <style jsx>{`
        .projects-carousel {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1500px;
        }

        .project-card {
          position: absolute;
          width: 320px;
          height: 460px;
          transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        .center-card {
          z-index: 30;
          transform: translateX(0) scale(1.05);
          opacity: 1;
          box-shadow: 0 25px 50px -12px rgba(124, 58, 237, 0.3);
        }

        .left-card {
          z-index: 20;
          transform: translateX(-340px) scale(0.85);
          opacity: 0.8;
          filter: brightness(0.8);
        }

        .right-card {
          z-index: 20;
          transform: translateX(340px) scale(0.85);
          opacity: 0.8;
          filter: brightness(0.8);
        }

        .hidden-card {
          opacity: 0;
          transform: translateX(0) scale(0.7);
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .project-card {
            width: 280px;
            height: 440px;
          }
          
          .left-card {
            transform: translateX(-260px) scale(0.85);
          }

          .right-card {
            transform: translateX(260px) scale(0.85);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;