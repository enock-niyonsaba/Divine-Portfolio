import React, { useEffect, useRef } from 'react';
import { ChevronDown, Sparkles, Rocket, Heart } from 'lucide-react';
import Typed from 'typed.js';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Beginner Data Scientist', 'Data Analyst'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-left animate-fadeIn">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-gray-600 dark:text-gray-300" />
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
              Hello, I'm Divine
            </h1>
          </div>
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 flex items-center gap-2 mb-4">
            <Rocket className="animate-bounce" />
            <span ref={el}></span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 flex items-center gap-2">
            <Heart className="text-red-500 animate-pulse" />
            A passionate learner dedicated to continuous growth and making a positive impact on society through technology and health innovation.
          </p>
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-3 font-medium tracking-wide text-white dark:text-gray-900 transition-all duration-500 ease-in-out transform bg-gray-900 dark:bg-white rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-white"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 -ml-1 transition-all duration-300 ease-in-out transform translate-x-1 translate-y-1 bg-black dark:bg-white group-hover:translate-y-0 group-hover:translate-x-0 rounded-lg"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out transform bg-gray-900 dark:bg-white rounded-lg"></span>
            <span className="relative flex items-center gap-2">
              Explore Portfolio
              <Rocket className="transform transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>
        <div className="relative group w-3/4 mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-square rounded-full overflow-hidden shadow-xl transform transition duration-300 group-hover:scale-105">
            <img
              src="https://znl60kvsawkkhq5d.public.blob.vercel-storage.com/Divine-rNzYrYvZ3jrUAhaDeueWkQAIPpiqK5.png"
              alt="NGUTETE Divine"
              className="object-cover w-full h-full rounded-full transform transition duration-500 group-hover:rotate-3"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400 dark:text-gray-500" />
      </div>
    </div>
  );
};

export default Hero;