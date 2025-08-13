import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code, Database, Shield, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const About: React.FC = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      items: ["Python", "Java", "JavaScript", "TypeScript", "C/C++", "HTML/CSS", "SQL"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Web Development",
      items: ["React", "Node.js", "Tailwind CSS", "Full-Stack Development"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity",
      items: ["Penetration Testing", "Kali Linux", "Network Security", "Ethical Hacking"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Technical Skills",
      items: ["CAD Design", "Hardware Assembly", "System Administration", "AI/ML"]
    }
  ];

  const certifications = [
    "Microsoft Office Suite Certification",
    "Autodesk Inventor 3D Certification",
    "SolidWorks Academic Certification",
    "CompTIA A+ Core 2 (In Progress)",
    "IT Technical Support Specialist (In Progress)"
  ];

  return (
    <div className={`min-h-screen pt-16 ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-crimson">
                <img
                  src="/darkshot1.jpg"
                  alt="Merritt Mason"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.h1
                className={`text-5xl lg:text-6xl font-bold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Hello, I'm{' '}
                <span className="text-crimson">
                  Merritt Mason
                </span>
              </motion.h1>
              
              <motion.p
                className={`text-xl lg:text-2xl mb-8 leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Computer Science & Information Technology Student with expertise in 
                full-stack development, cybersecurity, and AI/ML technologies. 
                Passionate about creating innovative solutions and building secure, 
                scalable applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="/merritt_mason_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-crimson text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} className="mr-2" />
                  Download Resume
                </motion.a>
                
                <motion.a
                  href="#skills"
                  className={`inline-flex items-center px-8 py-4 border-2 border-crimson font-semibold rounded-lg transition-all duration-300 ${
                    isDarkMode 
                      ? 'text-crimson hover:bg-crimson hover:text-white' 
                      : 'text-crimson hover:bg-crimson hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Skills
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Technical Expertise
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive skills across multiple domains of technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`p-6 rounded-xl shadow-lg transition-all duration-300 ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-white'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-crimson rounded-lg text-white mr-3">
                    {skill.icon}
                  </div>
                  <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {skill.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Certifications & Achievements
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg border-l-4 border-crimson ${
                  isDarkMode ? 'bg-gray-900' : 'bg-white'
                } shadow-lg`}
              >
                <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {cert}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};