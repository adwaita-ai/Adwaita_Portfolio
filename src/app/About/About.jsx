"use client";
import React, { useState } from 'react';

const About = () => {
  const [activeSection, setActiveSection] = useState('about');

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <>
            <div className="text-4xl font-bold text-white">
              About <span className="text-purple-600">Me</span>
            </div>
            <div className="text-white text-base leading-relaxed mt-4">
              I am a data scientist committed to transforming raw data into actionable insights through statistical analysis, machine learning, and data visualization. My work is focused on driving decision-making and delivering real-world impact.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {[
                { label: 'Name', value: 'Adwaita AI' },
                { label: 'Phone', value: '(+91) 9778046647' },
                { label: 'Nationality', value: 'Indian' },
                { label: 'Mail', value: 'adwaita.tathwamasi@gmail.com' },
                { label: 'Languages', value: 'English, Tamil, Malayalam' },
              ].map((item, idx) => (
                <div key={idx} className="bg-black border border-white text-white rounded-lg p-4 shadow-[0_0_10px_#8a2be2] hover:translate-y-[-3px] transition">
                  <div className="text-sm mb-1">{item.label}</div>
                  <div className="text-base">{item.value}</div>
                </div>
              ))}
            </div>
          </>
        );

      case 'experience':
        return (
          <div>
            <h1 className="text-4xl font-bold text-white">
              <span className="text-purple-600">Experience</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <div className="bg-black text-white border border-white rounded-lg p-4 shadow-[0_0_10px_#8a2be2] hover:translate-y-[-3px] transition">
                <div className="flex justify-between items-center">
                  <div className="text-lg font-bold text-purple-300 ">Data Science Intern</div>
                  <div className="text-sm text-gray-400">Aug 2024 – Apr 2025</div>
                </div>
                <div className="text-sm mt-1">Luminar Technolab, Kochi</div>
                <div className="text-sm mt-4 leading-relaxed mb-2">
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
          <div>
            <h1 className="text-4xl font-bold text-white">
              <span className="text-purple-600">Education</span>
            </h1>
            <div className="mt-10">
              {/* First row with two cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                    className="bg-black text-white border border-white rounded-lg p-6 shadow-[0_0_10px_#8a2be2] hover:translate-y-[-3px] transition min-h-[220px] w-full"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div className="text-lg font-bold text-purple-300">{edu.degree}</div>
                      <div className="text-sm text-gray-400 mt-1 sm:mt-0 sm:ml-4 whitespace-nowrap">{edu.years}</div>
                    </div>
                    <div className="text-sm mt-6">{edu.university}</div>
                    <div className="text-sm mt-1">{edu.college}</div>
                    <div className="text-sm mt-2">{edu.score}</div>
                  </div>
                ))}
              </div>

              {/* Second row with centered card */}
              <div className="flex justify-center">
                <div className="bg-black text-white border border-white rounded-lg p-6 shadow-[0_0_10px_#8a2be2] hover:translate-y-[-3px] transition min-h-[220px] w-full md:w-1/2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div className="text-lg font-bold text-purple-300">High School</div>
                    <div className="text-sm text-gray-400 mt-1 sm:mt-0 sm:ml-4 whitespace-nowrap">2017 – 2018</div>
                  </div>
                  <div className="text-sm mt-8">Central Board of Secondary Education</div>
                  <div className="text-sm mt-1">SN Trusts Central School</div>
                  <div className="text-sm mt-2">Percentage : 94%</div>
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
    <div id="about" className="w-full p-8 font-sans">
      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
        {/* Sidebar */}
        <div className="flex flex-col lg:w-1/4 gap-4">
          {['about', 'experience', 'education'].map((section) => (
            <div
              key={section}
              className={`cursor-pointer p-4 rounded-md text-lg transition ${
                activeSection === section
                  ? 'border-2 border-purple-600 bg-black text-white font-bold'
                  : 'text-white hover:text-purple-400'
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default About;
