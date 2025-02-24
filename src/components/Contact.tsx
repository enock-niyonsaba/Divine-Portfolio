import React, { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, Send, MessageSquare, User, AtSign } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center flex items-center justify-center gap-2">
          <MessageSquare className="animate-pulse text-blue-500" />
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <a
                href="mailto:diva.ng833@gmail.com"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white group"
              >
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full mr-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors">
                  <Mail className="group-hover:text-blue-500 transition-colors" size={20} />
                </div>
                diva.ng833@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/ngutete"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full mr-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors">
                  <Linkedin className="group-hover:text-blue-500 transition-colors" size={20} />
                </div>
                linkedin.com/in/ngutete
              </a>
              <a
                href="https://github.com/ngutete"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full mr-4 group-hover:bg-gray-100 dark:group-hover:bg-gray-600 transition-colors">
                  <Github className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors" size={20} />
                </div>
                github.com/ngutete
              </a>
              <a
                href="https://instagram.com/ngutete"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full mr-4 group-hover:bg-pink-100 dark:group-hover:bg-pink-900 transition-colors">
                  <Instagram className="group-hover:text-pink-500 transition-colors" size={20} />
                </div>
                @ngutete
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                <User size={16} />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                <AtSign size={16} />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                <MessageSquare size={16} />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors resize-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className={`${isSubmitting ? 'animate-pulse' : 'animate-none'}`} size={20} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-600 dark:text-green-400 text-center">Thank you for your message! I'll get back to you soon.</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 dark:text-red-400 text-center">There was an error sending your message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact