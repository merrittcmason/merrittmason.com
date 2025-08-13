import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen transition-colors duration-300">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <Analytics />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;