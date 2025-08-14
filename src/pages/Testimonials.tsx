import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, User, Globe, MessageSquare } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Testimonial {
  id: number;
  name: string;
  website?: string;
  testimonial: string;
  rating: number;
  date: string;
}

export const Testimonials: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Sarah Johnson",
      website: "https://techstartup.com",
      testimonial: "Merritt's technical expertise and problem-solving skills are exceptional. He delivered a complex web application ahead of schedule with clean, maintainable code.",
      rating: 5,
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Michael Chen",
      testimonial: "Working with Merritt on our cybersecurity assessment was a game-changer. His attention to detail and comprehensive approach helped us identify and fix critical vulnerabilities.",
      rating: 5,
      date: "2024-02-03"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      website: "https://designstudio.co",
      testimonial: "Merritt's full-stack development skills are impressive. He seamlessly integrated our design requirements with robust backend functionality.",
      rating: 5,
      date: "2024-02-20"
    },
    {
      id: 4,
      name: "David Thompson",
      testimonial: "The AI-powered automation solution Merritt developed for our business processes has saved us countless hours. His understanding of both technology and business needs is remarkable.",
      rating: 5,
      date: "2024-03-10"
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    website: '',
    testimonial: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.testimonial.trim()) {
      newErrors.testimonial = 'Testimonial is required';
    } else if (formData.testimonial.length > 500) {
      newErrors.testimonial = 'Testimonial must be 500 characters or less';
    }

    if (formData.website && !isValidUrl(formData.website)) {
      newErrors.website = 'Please enter a valid URL';
    }

    return newErrors;
  };

  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Add new testimonial
    const newTestimonial: Testimonial = {
      id: testimonials.length + 1,
      name: formData.name,
      website: formData.website || undefined,
      testimonial: formData.testimonial,
      rating: 5,
      date: new Date().toISOString().split('T')[0]
    };

    setTestimonials(prev => [newTestimonial, ...prev]);
    setFormData({ name: '', website: '', testimonial: '' });
    setShowSuccess(true);

    setTimeout(() => setShowSuccess(false), 3000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className={`min-h-screen pt-16 ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Client Testimonials
            </h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              What clients say about working with me
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className={`py-20 ${isDarkMode ? 'bg-[#222222]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl shadow-lg transition-all duration-300 ${
                 isDarkMode ? 'bg-black hover:bg-black/80' : 'bg-gray-50 hover:bg-white'
                }`}
              >
                <div className="flex items-center mb-4">
                 <div className="w-12 h-12 bg-crimson rounded-full flex items-center justify-center text-white font-bold mr-4">
                    <User size={20} />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {testimonial.name}
                    </h3>
                    {testimonial.website && (
                      <a
                        href={testimonial.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-crimson hover:text-crimson/80 text-sm flex items-center"
                      >
                        <Globe size={12} className="mr-1" />
                        Website
                      </a>
                    )}
                  </div>
                </div>

                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  "{testimonial.testimonial}"
                </p>

                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {new Date(testimonial.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Write a Review Form */}
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
              Write a Review
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Share your experience working with me
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`p-8 rounded-xl shadow-lg ${
              isDarkMode ? 'bg-[#222222]' : 'bg-white'
            }`}
          >
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
              >
                Thank you for your review! It has been added successfully.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    errors.name
                      ? 'border-red-500 focus:border-red-500'
                      : isDarkMode
                        ? 'border-[#222222] bg-black text-white focus:border-crimson'
                        : 'border-gray-300 bg-white text-gray-900 focus:border-crimson'
                  } focus:outline-none focus:ring-2 focus:ring-crimson/20`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Website URL (Optional)
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    errors.website
                      ? 'border-red-500 focus:border-red-500'
                      : isDarkMode
                       ? 'border-[#222222] bg-black text-white focus:border-crimson'
                        : 'border-gray-300 bg-white text-gray-900 focus:border-crimson'
                  } focus:outline-none focus:ring-2 focus:ring-crimson/20`}
                  placeholder="https://yourwebsite.com"
                />
                {errors.website && (
                  <p className="mt-1 text-sm text-red-500">{errors.website}</p>
                )}
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Testimonial * ({formData.testimonial.length}/500)
                </label>
                <textarea
                  name="testimonial"
                  value={formData.testimonial}
                  onChange={handleInputChange}
                  rows={6}
                  maxLength={500}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                    errors.testimonial
                      ? 'border-red-500 focus:border-red-500'
                      : isDarkMode
                       ? 'border-[#222222] bg-black text-white focus:border-crimson'
                        : 'border-gray-300 bg-white text-gray-900 focus:border-crimson'
                  } focus:outline-none focus:ring-2 focus:ring-crimson/20`}
                  placeholder="Share your experience working with me..."
                />
                {errors.testimonial && (
                  <p className="mt-1 text-sm text-red-500">{errors.testimonial}</p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-crimson text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <MessageSquare size={20} className="mr-2" />
                Submit Review
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
