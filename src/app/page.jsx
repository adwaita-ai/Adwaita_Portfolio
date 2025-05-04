import React from 'react'
import Photo from '@/components/Photo'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

const Home = () => {
  return (
    <>
    <section className="h-[550px]  mt-25 ml-10 mr-10">
      <div className="container mx-auto h-full xl:pt-8 xl:pb-2 ">
        <div className='flex flex-col items-center gap-8  xl:flex-row xl:justify-between '>
        <div className='order-1 xl:order-none '>
         <Photo />
          
          </div>
          <div className="  flex flex-col order-2 xl:order-none p-5 md:p-6 bg-black/85 rounded-xl text-center text-white shadow-[0_0_20px_#8a2be2] xl:w-1/2 h-[300px]" >
          <span className='text-4xl font-semibold mb-5'>Data Scientist</span>
          <h1 className='text-[32px] mb-5'>Hi I'm <span className='text-purple-500 font-semibold'>Adwaita AI</span></h1>
                <p className='text-xl xl:text-justify leading-relaxed text-center '>
                I transform complex data into actionable insights, 
                using advanced analytics and machine learning to 
                drive strategic decisions and fuel innovation.
                </p>
          </div>
          </div>
                </div>
    </section>

    <section className='bg-transparent'>
        <About />
    </section>
    <section className='bg-transparent'>
        <Skills />
    </section>
    <section className='bg-transparent'>
        <Projects />
    </section>
    <section className='bg-transparent'>
        <Contact />
    </section>
    </>
  )
}

export default Home
