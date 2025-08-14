import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Projects: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProjects = [
    {
      title: "Meeting Pair AI",
      description: "Real-time meeting transcription and AI-powered note generation using Whisper and Ollama for local processing.",
      image: "https://plus.unsplash.com/premium_photo-1683121718643-fb18d2668d53?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Python", "Whisper", "Ollama", "AI/ML"],
      github: "https://github.com/merrittcmason/Meeting-Pair-AI.git",
      demo: null
    },
    {
      title: "Smart Bus",
      description: "AI-powered automation platform with intelligent agents for business management across marketing, finance, and operations.",
      image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Python", "AI Agents", "Automation", "Business Intelligence"],
      github: "https://github.com/merrittcmason/Smart-Bus.git",
      demo: null
    },
    {
      title: "RoR Web Scraper",
      description: "Powerful and efficient web scraping tool designed for rapid data extraction from various websites with advanced parsing capabilities.",
      image: "https://images.unsplash.com/photo-1522776851755-3914469f0ca2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Python", "Web Scraping", "Data Processing", "Automation"],
      github: "https://github.com/merrittcmason/Rob-Web-Scraper.git",
      demo: null
    }
  ];

  const allProjects = [
    ...featuredProjects,
    {
      title: "Poker Game (Java)",
      description: "Classic casino simulation built in Java with card dealing, hand evaluation, and standard poker scoring rules.",
      image: "https://images.unsplash.com/photo-1597042962047-005b63a5eb25?q=80&w=2556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8A==",
      technologies: ["Java", "Object-Oriented Programming", "Game Logic"],
      github: "https://github.com/merrittcmason/Poker-Project/tree/main",
      demo: null
    },
    {
      title: "Password Generator",
      description: "Desktop application for creating secure, customizable passwords with 1Password integration for seamless password management.",
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8A==",
      technologies: ["Python", "Desktop App", "Security", "API Integration"],
      github: "https://github.com/merrittcmason/Password-Generator",
      demo: null
    },
    {
      title: "Basic Chatbot",
      description: "Fully customizable React chatbot component for websites and applications with easy navigation and implementation guide.",
      image: "https://images.unsplash.com/photo-1659018966820-de07c94e0d01?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "TypeScript", "UI/UX", "Component Library"],
      github: "https://github.com/merrittcmason/Basic-React-Chatbot.git",
      demo: null
    }
  ];

  // Auto-scroll functionality for featured projects
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <div className={`min-h-screen pt-16 ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Featured Projects Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Featured Projects
            </h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Showcasing innovative solutions and technical expertise
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className={`relative h-96 lg:h-[500px] ${
                    isDarkMode ? 'bg-gray-900' : 'bg-white'
                  } rounded-2xl shadow-2xl overflow-hidden`}
                >
                  <div className="flex h-full">
                    <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`text-3xl lg:text-4xl font-bold mb-4 ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {featuredProjects[currentSlide].title}
                      </motion.h3>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className={`text-lg mb-6 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {featuredProjects[currentSlide].description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap gap-2 mb-6"
                      >
                        {featuredProjects[currentSlide].technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-crimson text-white text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex gap-4"
                      >
                        <a
                          href={featuredProjects[currentSlide].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-crimson text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                          <Github size={20} className="mr-2" />
                          View Code
                        </a>
                      </motion.div>
                    </div>

                    <div className="hidden lg:block w-1/2 relative">
                      <img
                        src={featuredProjects[currentSlide].image}
                        alt={featuredProjects[currentSlide].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full ${
                isDarkMode ? 'bg-[#222222] text-white' : 'bg-white text-gray-900'
              } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full ${
                isDarkMode ? 'bg-[#222222] text-white' : 'bg-white text-gray-900'
              } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-crimson' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className={`py-20 ${isDarkMode ? 'bg-[#222222]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Complete Portfolio
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Explore all my projects and technical achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                  isDarkMode ? 'bg-black hover:bg-black/80' : 'bg-gray-50 hover:bg-white'
                }`}
                >
                  <div className="flex h-full">
                    <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`text-3xl lg:text-4xl font-bold mb-4 ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {featuredProjects[currentSlide].title}
                      </motion.h3>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className={`text-lg mb-6 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {featuredProjects[currentSlide].description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap gap-2 mb-6"
                      >
                        {featuredProjects[currentSlide].technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-crimson text-white text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex gap-4"
                      >
                        <a
                          href={featuredProjects[currentSlide].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-crimson text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                          <Github size={20} className="mr-2" />
                          View Code
                        </a>
                      </motion.div>
                    </div>

                    <div className="hidden lg:block w-1/2 relative">
                      <img
                        src={featuredProjects[currentSlide].image}
                        alt={featuredProjects[currentSlide].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full ${
                isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
              } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full ${
                isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
              } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-crimson' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Complete Portfolio
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Explore all my projects and technical achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-white'
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-full bg-crimson text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-crimson text-white font-medium rounded-lg hover:bg-crimson/80 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      View Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-4 py-2 border-2 border-crimson font-medium rounded-lg transition-colors ${
                          isDarkMode 
                            ? 'text-crimson hover:bg-crimson hover:text-white' 
                            : 'text-crimson hover:bg-crimson hover:text-white'
                        }`}
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};