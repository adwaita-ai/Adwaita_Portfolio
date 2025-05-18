'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <div>
      {/* Desktop Navigation (Visible on large screens) */}
      <header 
        className={`flex flex-row items-center mt-5  bg-transparent h-[40px] lg:flex `} 
      >
        <div className="hidden lg:block container mx-auto px-4">
          <nav className=" flex justify-between items-center">
            <div className=" hidden lg:block  text-[26px] font-bold text-white">
              ADWAITA<span className= 'text-purple-500 text-[26px]'> AI</span>
            </div>

            <ul className="flex space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:bg-violet-700 px-6 py-3 rounded-[5px] text-[1rem] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Button (Always visible, for small and medium screens) */}
      <button 
        className="absolute top-4 right-4 text-gray-700 dark:text-gray-200 focus:outline-none lg:hidden"
        onClick={toggleMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu (Only visible on medium screens and smaller) */}
      {isMenuOpen && (

   

    <div className="fixed top-0 left-0 h-screen w-1/2 bg-black z-50 flex flex-col items-center justify-center lg:hidden">
         <span className="absolute top-0 mt-[100px] text-4xl font-bold text-white z-60">
      Adwaita AI
    </span>
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item} className="text-center">
            <a 
              href={`#${item.toLowerCase()}`}
              className="block  text-white hover:bg-violet-700 px-6 py-3 rounded-[5px] text-[1rem] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
  
  </div>
)}


    </div>
  );
}
