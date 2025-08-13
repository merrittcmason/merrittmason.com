import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/merrittcmason",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/merrittcmason",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:contact@merrittmason.com",
      label: "Email"
    }
  ];

  return (
    <footer className={`border-t transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-black border-gray-800' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className={`text-xl font-bold text-crimson mb-4`}>
              Merritt Mason
            </h3>
            <p className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Computer Science & IT Student<br />
              Full-Stack Developer & Cybersecurity Enthusiast
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h4 className={`font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Navigation
            </h4>
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block text-sm transition-colors ${
                    location.pathname === item.path
                      ? 'text-crimson'
                      : isDarkMode 
                        ? 'text-gray-400 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className={`font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Connect
            </h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-white hover:bg-gray-900' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-8 pt-8 border-t text-center text-sm ${
          isDarkMode 
            ? 'border-gray-800 text-gray-400' 
            : 'border-gray-200 text-gray-600'
        }`}>
          <p>&copy; {new Date().getFullYear()} Merritt Mason. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};