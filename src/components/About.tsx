import React from 'react';
import { Download, Award, Book, Cpu, Brain, Heart, MessageSquare, Zap } from 'lucide-react';

const skills = [
  { 
    category: 'Data Science',
    icon: <Cpu className="w-6 h-6" />,
    items: ['Python', 'Data Analysis', 'Machine Learning', 'Statistics']
  },
  {
    category: 'Tools',
    icon: <Zap className="w-6 h-6" />,
    items: ['IoT Systems', 'Data Visualization', 'SQL', 'Excel']
  },
  {
    category: 'Soft Skills',
    icon: <Brain className="w-6 h-6" />,
    items: ['Problem Solving', 'Communication', 'Leadership', 'Continuous Learning']
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-2">
          <Book className="animate-pulse" />
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 transform transition duration-500 hover:scale-105">
            <p className="text-lg text-gray-600 dark:text-gray-300 flex items-center gap-2">
              <Heart className="text-red-500 animate-pulse" />
              I am a passionate learner dedicated to continuous growth and making a positive impact on society.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 flex items-center gap-2">
              <Award className="text-yellow-500" />
              Currently holding a high school diploma and soon earning an ALX Pathway certificate.
            </p>
            <div className="mt-8">
              <a
                href="/path-to-resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Download className="mr-2 animate-bounce" size={20} />
                Download Resume
              </a>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <MessageSquare className="animate-pulse" />
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="transform transition duration-500 hover:scale-105">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    {skillGroup.icon}
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About