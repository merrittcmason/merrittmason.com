import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
// import { Testimonials } from './pages/Testimonials'; // unused; remove or add a route for it
import { Contact } from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';

// Inline helper: no new file needed
function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, key]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen transition-colors duration-300">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/testimonials" element={<Testimonials />} /> */}
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
