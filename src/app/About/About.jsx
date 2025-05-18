"use client";
import React, { useState } from 'react';

const About = () => {
  const [activeSection, setActiveSection] = useState('about');

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="space-y-6">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              About <span className="text-purple-600">Me</span>
            </div>
            <div className="text-white text-sm sm:text-base leading-relaxed">
              I am a data scientist committed to transforming raw data into actionable insights through statistical analysis, machine learning, and data visualization. My work is focused on driving decision-making and delivering real-world impact.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { label: 'Name', value: 'Adwaita AI' },
                { label: 'Phone', value: '(+91) 9778046647' },
                { label: 'Nationality', value: 'Indian' },
                { label: 'Mail', value: 'adwaita.tathwamasi@gmail.com' },
                { label: 'Languages', value: 'English, Tamil, Malayalam' },
              ].map((item, idx) => (
                <div key={idx} className="bg-black border border-white text-white rounded-lg p-3 sm:p-4 shadow-[0_0_10px_#8a2be2] hover:translate-y-[-3px] transition-transform duration-300">
                  <div className="text-xs sm:text-sm text-gray-300 mb-1">{item.label}</div>
                  <div className="text-sm sm:text-base font-medium break-words">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              <span className="text-purple-600">Experience</span>
            </h1>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-black text-white border border-white rounded-lg p-4 sm:p-6 shadow-[0_0_10px_#8a2be2] hover:translate-y-[-3px] transition-transform duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div className="text-base sm:text-lg font-bold text-purple-300">Data Science Intern</div>
                  <div className="text-xs sm:text-sm text-gray-400">Aug 2024 – Apr 2025</div>
                </div>
                <div className="text-sm text-gray-300 mt-1">Luminar Technolab, Kochi</div>
                <div className="text-sm leading-relaxed mt-3 sm:mt-4">
                  Performed EDA, data cleaning, and visualizations using Matplotlib, 
                  Seaborn, and Power BI. Applied ML algorithms for classification, 
                  regression, and clustering, with hands-on experience in deep learning 
                  for vision and NLP.
                </div>
              </div>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              <span className="text-purple-600">Education</span>
            </h1>
            <div className="space-y-4 sm:space-y-6">
              {/* First two education cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    degree: "B.Tech in Computer Science & Engineering",
                    university: "APJ Abdul Kalam Technological University",
                    college: "College of Engineering Perumon",
                    score: "CGPA : 8.41",
                    years: "2020 – 2024"
                  },
                  {
                    degree: "Higher Secondary",
                    university: "Central Board of Secondary Education",
                    college: "SN Trusts Central School",
                    score: "Percentage : 86%",
                    years: "2019 – 2020"
                  }
                ].map((edu, idx) => (
                  <div
                    key={idx}
                    className="bg-black text-white border border-white rounded-lg p-4 sm:p-6 shadow-[0_0_10px_#8a2be2] hover:translate-y-[-3px] transition-transform duration-300"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <div className="text-sm sm:text-base md:text-lg font-bold text-purple-300 leading-tight">{edu.degree}</div>
                        <div className="text-xs sm:text-sm text-gray-400 shrink-0">{edu.years}</div>
                      </div>
                      <div className="space-y-1 mt-2 sm:mt-4">
                        <div className="text-xs sm:text-sm text-gray-300">{edu.university}</div>
                        <div className="text-xs sm:text-sm text-gray-300">{edu.college}</div>
                        <div className="text-xs sm:text-sm font-medium">{edu.score}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Third education card - centered on larger screens */}
              <div className="flex justify-center">
                <div className="bg-black text-white border border-white rounded-lg p-4 sm:p-6 shadow-[0_0_10px_#8a2be2] hover:translate-y-[-3px] transition-transform duration-300 w-full md:w-1/2">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <div className="text-sm sm:text-base md:text-lg font-bold text-purple-300">High School</div>
                      <div className="text-xs sm:text-sm text-gray-400 shrink-0">2017 – 2018</div>
                    </div>
                    <div className="space-y-1 mt-2 sm:mt-4">
                      <div className="text-xs sm:text-sm text-gray-300">Central Board of Secondary Education</div>
                      <div className="text-xs sm:text-sm text-gray-300">SN Trusts Central School</div>
                      <div className="text-xs sm:text-sm font-medium">Percentage : 94%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div id="about" className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12 font-sans">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
        {/* Mobile-First Tabbed Navigation */}
        <div className="w-full lg:w-1/4">
          {/* Mobile: Horizontal scrollable tabs */}
          <div className="flex lg:flex-col gap-2 sm:gap-3 lg:gap-4 overflow-x-auto pb-2 lg:pb-0">
            {['about', 'experience', 'education'].map((section) => (
              <div
                key={section}
                className={`cursor-pointer p-3 sm:p-4 rounded-md text-sm sm:text-base lg:text-lg transition-all duration-300 whitespace-nowrap lg:whitespace-normal ${
                  activeSection === section
                    ? 'border-2 border-purple-600 bg-black text-white font-bold'
                    : 'text-white hover:text-purple-400 hover:bg-gray-900/50'
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default About;