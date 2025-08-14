import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'About' },
    { path: '/projects', label: 'Projects' },
    // { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`
        fixed inset-x-0 top-0 z-50
        border-b transition-all duration-300
        supports-[backdrop-filter]:backdrop-blur-md
        ${isDarkMode
          // Dark: linear bottom→top fade (more transparent at bottom)
          ? 'bg-gradient-to-t from-[#0f0f0f]/40 to-[#1d1d1d] border-[#222222]'
          // Light: linear bottom→top fade (more transparent at bottom)
          : 'bg-gradient-to-t from-white/30 to-white border-gray-200'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Brand */}
          <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
            <Link to="/">
              <h1 className="text-xl font-bold text-crimson">Merritt Mason</h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-crimson'
                    : isDarkMode
                      ? 'text-white hover:text-gray-400'
                      : 'text-gray-900 hover:text-gray-900'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-crimson"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode
                  ? 'text-white hover:text-white hover:bg-[#222222]'
                  : 'text-gray-900 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                isDarkMode
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${
                isDarkMode
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div
              className={`
                px-2 pt-2 pb-3 space-y-1 border-t
                supports-[backdrop-filter]:backdrop-blur-md
                ${isDarkMode
                  // Match the fade in dark mode too
                  ? 'bg-gradient-to-t from-black/70 to-[#1d1d1d]/95 border-[#222222]'
                  : 'bg-gradient-to-t from-white/80 to-white/95 border-gray-200'}
              `}
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-crimson bg-crimson/10'
                      : isDarkMode
                        ? 'text-gray-300 hover:text-white hover:bg-[#222222]'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
