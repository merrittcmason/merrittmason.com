import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
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
            <div className={`px-2 pt-2 pb-3 space-y-1 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
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
            <div className="w-48 h-48 aspect-square rounded-full border-4 p-1
              shrink-0 flex-none
              ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}">
              <img
                src="/src/Headshot.png"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
              <div className="md:ml-8 text-center md:text-left">
                <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Hello, I'm Merritt Mason
                </h2>
                <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Dedicated and detail-oriented Computer Science student with experience in software development, IT support, and leadership roles. Skilled in problem-solving, programming, and working in fast-paced environments. Passionate about technology, software development, and optimizing solutions for efficiency. Seeking opportunities to apply technical skills and gain further industry experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <div key={project} className={`rounded-lg shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                  <img
                    src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&w=600`}
                    alt={`Project ${project}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Project {project}
                    </h3>
                    <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      A brief description of the project and the technologies used.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-blue-500 hover:text-blue-600"
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
        <section id="resume" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Resume
            </h2>
            <div className={`max-w-3xl mx-auto p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex justify-end mb-6">
                <a
                  href="/src/merrittmason.pdf"
                  target="/src/merrittmason.pdf"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  <Download size={16} className="mr-2" />
                  View PDF
                </a>
              </div>
              <div className={`space-y-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <ul className="list-disc list-inside mt-2">
                        <li>Programming Languages: Proficient in Java, C, Python, C++, HTML, and CSS</li>
                        <li>AI & Machine Learning: Experience with large language models (LLMs), machine learning (ML), and database programming with SQLite.</li>
                        <li>Databases: Worked with SQLite and other database technologies.</li>
                        <li>Networking & Security: Knowledge of network setup, security fundamentals, and IT infrastructure</li>
                        <li>Experienced with design and CAD software like Autodesk Inventor and SolidWorks for 3D modeling and technical design</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Certifications</h3>
                  <div>
                    <h4 className="font-semibold">Microsoft Office Specialist (Word, Excel, PowerPoint, Access)</h4>
                    <h4 className="font-semibold">Autodesk Inventor 3D Certification</h4>
                    <h4 className="font-semibold">SolidWorks Academic Certification</h4>
                    <h4 className="font-semibold">CompTIA A+ Core 2 (In Progress)</h4>
                    <h4 className="font-semibold">IT Technical Support Specialist (In Progress)</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Get in Touch
            </h2>
            <div className="flex justify-center space-x-8">
              <a
                href="merrittcmason@gmail.com"
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
      <footer className={`py-8 ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
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
    </div>
  );
}

export default App;
