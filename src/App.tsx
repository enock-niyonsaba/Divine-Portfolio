import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import Hero from './components/Hero';
import ElevatorPitch from './components/ElevatorPitch';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeSwitch from './components/ThemeSwitch';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">NGUTETE Divine</span>
            <div className="flex items-center space-x-8">
              <div className="hidden sm:flex space-x-8">
                <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
                <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</a>
                <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
              </div>
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <ElevatorPitch />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex space-x-6">
              <a href="https://github.com/ngutete" className="hover:text-gray-300">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/ngutete" className="hover:text-gray-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:divine@ngutete.com" className="hover:text-gray-300">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-400">© {new Date().getFullYear()} NGUTETE Divine. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;