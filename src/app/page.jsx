import React from 'react'
import Photo from '@/components/Photo'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="h-[550px] mt-30 ml-10 mr-10 mb-[40px] m">
        <div className="container mx-auto h-full xl:pt-8 xl:pb-2">
          <div className="flex flex-col items-center gap-5 xl:flex-row xl:justify-between">
            {/* Photo Section */}
            <div className="order-1 xl:order-none mt-[-100px] p-15">
              <Photo />
            </div>

            {/* Text Content */}
            <div className="order-2 xl:order-none text-white text-center xl:text-left xl:w-1/2 justify-center">
              <span className="text-4xl font-semibold mb-5 block">Data Scientist</span>
              <h1 className="text-[32px] mb-5">
                Hi I'm <span className="text-purple-500 font-semibold">Adwaita AI</span>
              </h1>
              <p className="text-xl leading-relaxed mb-6">
                I transform complex data into actionable insights, using advanced analytics and machine learning to
                drive strategic decisions and fuel innovation.
              </p>

              {/* Download CV Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
                <a 
                  href="/Adwaita.AI_ATSResume.pdf" 
                  download="AdwaitaAI_Resume.pdf"
                  className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-purple-500/50"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 to-violet-900"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-purple-500 opacity-30 group-hover:rotate-90 ease"></span>
                  <span className="relative flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Download CV
                  </span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-3 justify-center xl:justify-start">
                <a 
                  href="https://www.linkedin.com/in/adwaita-ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 rounded-full transition text-gray-500"
                >
                  <FaLinkedin className="text-3xl"/>
                </a>
                <a 
                  href="https://github.com/adwaita-ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 rounded-full transition text-gray-500"
                >
                  <FaGithub className="text-3xl"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-16 px-4 bg-transparent" id="about">
  <About />
</section>

<section className="py-16 px-4 bg-transparent" id="skills">
  <Skills />
</section>

<section className="py-16 px-4 bg-transparent" id="projects">
  <Projects />
</section>

<section className="py-16 px-4 bg-transparent" id="contact">
  <Contact />
</section>
    </>
  )
}

export default Home
