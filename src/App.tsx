import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react"
import { Chatbot } from './components/Chatbot';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    // Matte black for primary dark bg
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#121212]' : 'bg-gray-50'}`}>
      {/* Navigation */}
      {/* Matte dark gray for nav */}
      <nav className={`fixed w-full z-50 ${isDarkMode ? 'bg-[#2e2e2e]' : 'bg-white'} shadow-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Merritt Mason
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>About</a>
              <a href="#projects" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Projects</a>
              <a href="#resume" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Resume</a>
              <a href="#contact" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Contact</a>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 ${isDarkMode ? 'bg-[#2e2e2e]' : 'bg-white'}`}>
              <a href="#about" className={`block px-3 py-2 rounded-md text-base font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>About</a>
              <a href="#projects" className={`block px-3 py-2 rounded-md text-base font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Projects</a>
              <a href="#resume" className={`block px-3 py-2 rounded-md text-base font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Resume</a>
              <a href="#contact" className={`block px-3 py-2 rounded-md text-base font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Contact</a>
              <button
                onClick={toggleDarkMode}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className={`w-48 h-48 aspect-square rounded-full border-4 p-1 shrink-0 flex-none ${isDarkMode ? 'border-[#2e2e2e]' : 'border-gray-200'}`}>
                <img
                  src="/darkshot1.jpg"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="md:ml-8 text-center md:text-left">
                <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Hello, I'm Merritt Mason
                </h2>
                <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Hello, my name is Merritt! I am a current student studying Computer Science and Information Technology. I have a wide range of language skills ranging from C, C+, C++, and Python. Paired with real world experience with software and applications development. I welcome you to my personal website which has a more detailed list of my skills and accomplishments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`py-20 ${isDarkMode ? 'bg-[#2e2e2e]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                                {
                  title: "Meeting Pair AI",
                  description: "Meeting Pair AI is a local tool that transcribes meetings in real time and generates clear, AI-powered notes using Whisper and Ollama.",
                  imageUrl: "https://plus.unsplash.com/premium_photo-1683121718643-fb18d2668d53?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  link: "https://github.com/merrittcmason/Meeting-Pair-AI.git"
                },
                {
                  title: "Smart Bus",
                  description: "Smart Bus is an AI-powered automation platform that uses intelligent agents to help businesses manage marketing, finance, inventory, and team operations with minimal setup.",
                  imageUrl: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  link: "https://github.com/merrittcmason/Smart-Bus.git"
                },
                                {
                  title: "RoR Web Scraper",
                  description: "RoR Web Scraper is a powerful tool designed to extract data from various websites quickly and efficiently.",
                  imageUrl: "https://images.unsplash.com/photo-1522776851755-3914469f0ca2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  link: "https://github.com/merrittcmason/Rob-Web-Scraper.git"
                },
                {
                  title: "Poker Game (Java)",
                  description: "A classic casino simulation built in Java. It deals a hand, lets you hold or replace cards, and scores your hand using standard poker rules.",
                  imageUrl: "https://images.unsplash.com/photo-1597042962047-005b63a5eb25?q=80&w=2556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8A==",
                  link: "https://github.com/merrittcmason/Poker-Project/tree/main"
                },
                {
                  title: "Password Generator",
                  description: "Password Generator is a desktop app that creates secure, customizable passwords and integrates with 1Password for seamless password management.",
                  imageUrl: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8A==",
                  link: "https://github.com/merrittcmason/Password-Generator"
                },
                                {
                  title: "Basic Chatbot",
                  description: "A Chatbot is just what you need to level up your website/application! Fully customizeable and easy to navigate. Follow the steps included in this repository to implement your very own.",
                  imageUrl: "https://images.unsplash.com/photo-1659018966820-de07c94e0d01?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  link: "https://github.com/merrittcmason/Basic-React-Chatbot.git"
                },
              ].map((project, index) => (
                <div key={index} className={`rounded-lg shadow-lg overflow-hidden ${isDarkMode ? 'bg-[#2e2e2e]' : 'bg-white'}`}>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-blue-500 hover:text-blue-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section
  id="resume"
  className={`py-20 ${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2
      className={`text-3xl font-bold mb-12 text-center ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}
    >
      Resume
    </h2>
    <div
      className={`max-w-3xl mx-auto p-8 rounded-lg shadow-lg ${
        isDarkMode ? 'bg-[#2e2e2e]' : 'bg-white'
      }`}
    >
      <div className="flex justify-center mb-6">
        <a
          href="merritt_mason_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          <Download size={16} className="mr-2" />
          View PDF
        </a>
      </div>

      <div className={`space-y-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        <div>
          <h3
            className={`text-xl font-bold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Experience
          </h3>
          <ul className="list-disc list-outside pl-5 mt-2 space-y-2">
            <li>
              Programming Languages: Proficient in Python, Java, JavaScript,
              TypeScript, C, C++, HTML, CSS, SQL, and React
            </li>
            <li>
              Web Development: Experience building full-stack web applications
              with React, Tailwind CSS, TypeScript, and Node.js
            </li>
            <li>
              AI & Machine Learning: Created facial recognition software, worked
              with LLMs, and developed intelligent tools using Python
            </li>
            <li>
              Databases: Worked with SQLite and SQL-based systems for local and
              web-integrated apps
            </li>
            <li>
              Networking & Security: Knowledge of network setup, IT
              infrastructure, ethical hacking, and security protocols (Kali
              Linux)
            </li>
            <li>
              Cybersecurity: Familiar with penetration testing tools and
              practices, basic forensics, and system hardening techniques
            </li>
            <li>
              Operating Systems: Experienced across Windows, macOS, Linux
              distributions, and Kali Linux for security work
            </li>
            <li>
              Hardware: Built custom computers, managed component upgrades, and
              configured personal NAS servers
            </li>
            <li>
              CAD & Technical Design: Skilled in Autodesk Inventor and
              SolidWorks for 3D modeling, part assemblies, and prototypes
            </li>
            <li>
              Projects: Developed applications like a calendar event creator,
              password generator, Java-based games, and more (see GitHub)
            </li>
          </ul>
        </div>

        <div>
          <h3
            className={`text-xl font-bold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Certifications
          </h3>
            <li>
              Microsoft Word, Excel, PowerPoint, and Access
            </li>
            <li>
              Autodesk Inventor 3D Certification
            </li>
            <li>
              SolidWorks Academic Certification
            </li>
            <li>
              CompTIA A+ Core 2 (In Progress)
            </li>
            <li>
              IT Technical Support Specialist (In Progress)
            </li>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Contact Section */}
        <section id="contact" className={`py-20 ${isDarkMode ? 'bg-[#2e2e2e]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Get in Touch
            </h2>
            <div className="flex justify-center space-x-8">
              <a
                href="mailto:contact@merrittmason.com"
                className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <Mail size={24} className="mr-2" />
                Email
              </a>
              <a
                href="https://github.com/merrittcmason"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <Github size={24} className="mr-2" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/merrittcmason"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <Linkedin size={24} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* Matte black for footer */}
      <footer className={`py-8 ${isDarkMode ? 'bg-[#121212] text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              © 2024 Merritt Mason. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#about" className="hover:text-gray-900">About</a>
              <a href="#projects" className="hover:text-gray-900">Projects</a>
              <a href="#resume" className="hover:text-gray-900">Resume</a>
              <a href="#contact" className="hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
        <Chatbot isDarkMode={isDarkMode} />
      <Analytics />
    </div>
  );
}

export default App;
