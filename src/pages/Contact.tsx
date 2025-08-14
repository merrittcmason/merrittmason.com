import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Contact: React.FC = () => {
  const { isDarkMode } = useTheme();

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "contact@merrittmason.com",
      href: "mailto:contact@merrittmason.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+1 (704) 918-5752",
      href: "tel:+17049185752"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Charlotte, NC",
      href: "https://maps.google.com/?q=Charlotte,NC"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-8 h-8" />,
      label: "GitHub",
      href: "https://github.com/merrittcmason",
      description: "View my code repositories"
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/merrittcmason",
      description: "Connect professionally"
    }
  ];

  return (
    <div className={`${isDarkMode ? 'bg-[#222222]' : 'bg-gray-50'}`}>
      {/* Header (keep top spacing from nav, tighten bottom) */}
      <section className="pt-24 pb-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <h1 className={`text-4xl sm:text-5xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Get In Touch
            </h1>
            <p className={`text-base sm:text-lg mx-auto max-w-3xl mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Ready to collaborate? Reach out with questions or project ideas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information + Social (stacked vertically, reduced gap) */}
      <section className={`py-8 ${isDarkMode ? 'bg-[#222222]' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact cards — stacked */}
          <div className="grid grid-cols-1 gap-5 mb-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className={`p-6 rounded-xl shadow-lg text-center transition-all duration-300 ${
                  isDarkMode ? 'bg-[#1d1d1d] hover:bg-[#2a2a2a]' : 'bg-gray-50 hover:bg-white'
                }`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-crimson rounded-full text-white mb-4">
                  {info.icon}
                </div>

                <h3 className={`text-lg font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {info.label}
                </h3>

                {info.href ? (
                  <a
                    href={info.href}
                    className="text-crimson hover:text-crimson/80 font-semibold transition-colors break-words"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className={`font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {info.value}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Links — stacked below, vertical */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Connect With Me
            </h3>

            <div className="flex flex-col items-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-5 rounded-xl shadow-lg transition-all duration-300 ${
                    isDarkMode ? 'bg-[#1d1d1d] hover:bg-[#2a2a2a]' : 'bg-gray-50 hover:bg-white'
                  }`}
                  aria-label={link.label}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-crimson">{link.icon}</div>
                    <div className="text-left">
                      <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {link.label}
                      </h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {link.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action (unchanged spacing, but easy to tighten if you want) */}
      <section className={`py-16 ${isDarkMode ? 'bg-[#1d1d1d]' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className={`p-10 rounded-2xl shadow-2xl ${isDarkMode ? 'bg-[#222222]' : 'bg-white'}`}
          >
            <motion.div
              initial={{ scale: 0.96 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 bg-crimson rounded-full text-white mb-6"
            >
              <Send size={32} />
            </motion.div>

            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Want to Contact me Directly?
            </h2>

            <p className={`text-lg sm:text-xl mb-7 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Let's talk about how I can help bring your ideas to life with solid software development and clear delivery.
            </p>

            <motion.a
              href="mailto:contact@merrittmason.com"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center px-8 py-4 bg-crimson text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Mail size={20} className="mr-2" />
              Send Me an Email
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
