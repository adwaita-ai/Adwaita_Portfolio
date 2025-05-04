"use client";

import React, { useState, useEffect} from 'react';
import {
  FaPython, FaDatabase, FaHtml5, FaFileExcel
} from 'react-icons/fa';
import {
  SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiPlotly
} from 'react-icons/si';
import {
  GiArtificialIntelligence
} from 'react-icons/gi';
import {
  MdOutlineCleaningServices, MdBarChart
} from 'react-icons/md';
import { TbBrain } from 'react-icons/tb';
import { BsGraphUpArrow } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'Python', icon: <FaPython />, color: '#306998', level: 'Advanced' },
  { name: 'SQL', icon: <FaDatabase />, color: '#f29111', level: 'Advanced' },
  { name: 'Pandas', icon: <SiPandas />, color: '#150458', level: 'Advanced' },
  { name: 'NumPy', icon: <SiNumpy />, color: '#013243', level: 'Intermediate' },
  { name: 'Scikit-Learn', icon: <SiScikitlearn />, color: '#f7931e', level: 'Intermediate' },
  { name: 'TensorFlow', icon: <SiTensorflow />, color: '#ff6f00', level: 'Intermediate' },
  { name: 'CNNs', icon: <TbBrain />, color: '#ff4081', level: 'Intermediate' },
  { name: 'NLP (NLTK)', icon: <GiArtificialIntelligence />, color: '#7fdbda', level: 'Intermediate' },
  { name: 'Data Cleaning', icon: <MdOutlineCleaningServices />, color: '#00bfae', level: 'Advanced' },
  { name: 'Power BI', icon: <MdBarChart />, color: '#f2c811', level: 'Advanced' },
  { name: 'Excel', icon: <FaFileExcel />, color: '#1d6f42', level: 'Advanced' },
  { name: 'Matplotlib/Seaborn', icon: <BsGraphUpArrow />, color: '#4caf50', level: 'Advanced' },
  { name: 'Plotly', icon: <SiPlotly />, color: '#3f51b5', level: 'Intermediate' },
  { name: 'HTML/CSS', icon: <FaHtml5 />, color: '#e34c26', level: 'Advanced' },
];

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="skills" className="py-20 px-5 min-h-screen text-white flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-start">
        <div className="text-4xl font-bold relative pb-2 mb-10 text-left" data-aos="fade-right">
          Skills
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500"></span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                        xl:grid-cols-5 gap-6 mt-4 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-black border border-purple-900 rounded-lg p-5 transition-all duration-300 
              flex flex-col items-center justify-center text-center h-32 w-36 relative overflow-hidden 
              hover:-translate-y-2  hover:shadow-[0_5px_15px_rgba(138,43,226,0.3)]"
              style={{
                boxShadow: hoveredIndex === index
                  ? `0 0 25px ${skill.color}, 0 0 15px ${skill.color}`
                  : undefined
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div
                className="text-2xl mb-2 transition-all"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <h3 className="text-sm font-bold mb-1">{skill.name}</h3>
              <p className="text-xs opacity-80">{skill.level}</p>
              <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 hover:left-[100%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
