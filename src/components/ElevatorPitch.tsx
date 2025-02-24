import React from 'react';
import { Video, Play } from 'lucide-react';

const ElevatorPitch = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center flex items-center justify-center gap-2">
          <Video className="animate-pulse text-blue-500" />
          Elevator Pitch
        </h2>
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl group">
          <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative">
            {/* Replace the src attribute with your video URL */}
            <video
              className="w-full h-full object-cover"
              controls
              poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            >
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
              <div className="transform transition-transform duration-300 group-hover:scale-110 flex flex-col items-center gap-4">
                <Play className="w-16 h-16 text-white" />
                <p className="text-white text-xl font-semibold">Watch My Pitch</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">About My Journey</h3>
            <p className="text-gray-200">
              Learn about my passion for data science, my journey, and how I aim to make a difference in the world through technology and health innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElevatorPitch;