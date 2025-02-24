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
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative">
            {/* Replace the YouTube video ID with your actual video ID */}
            <iframe
              className="w-full h-full absolute inset-0"
              src="https://znl60kvsawkkhq5d.public.blob.vercel-storage.com/Divine-elevator-pitch-video-3HUEmr6WSknQdjtplNdf8587jvC7jn.mp4"
              title="Divine NGUTETE - Elevator Pitch"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">About My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Learn about my passion for data science, my journey, and how I aim to make a difference in the world through technology and health innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElevatorPitch;