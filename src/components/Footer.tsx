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
    // { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/merrittcmason', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/merrittcmason', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:contact@merrittmason.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-crimson">
      {/* Top section */}
      <div className={`${isDarkMode ? 'bg-[#222222]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center space-y-6">

            {/* Navigation */}
            <div className="text-center">
              <h4 className="font-semibold mb-2 text-crimson">Navigation</h4>
              <div className="flex flex-row space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm transition-colors ${
                      location.pathname === item.path
                        ? 'text-crimson'
                        : isDarkMode
                          ? 'text-white hover:text-crimson'
                          : 'text-gray-900 hover:text-crimson'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="text-center">
              <h4 className="font-semibold mb-2 text-crimson">Connect</h4>
              <div className="flex flex-row items-center justify-center space-x-4">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors ${
                      isDarkMode
                        ? 'text-white hover:text-crimson hover:bg-[#222222]'
                        : 'text-gray-900 hover:text-crimson hover:bg-gray-100'
                    }`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        className={`w-full border-t border-crimson text-center text-sm py-6 ${
          isDarkMode ? 'bg-[#1d1d1d] text-gray-300' : 'bg-gray-50 text-gray-600'
        }`}
      >
        <p>&copy; {new Date().getFullYear()} Merritt Mason. All rights reserved.</p>
      </div>
    </footer>
  );
};
