import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import AiAssistantModal from './components/AiAssistantModal';

import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Research from './sections/Research';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Certifications from './sections/Certifications';
import ResumeCta from './sections/ResumeCta';
import Contact from './sections/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 selection:bg-brand-indigo/30 selection:text-white font-sans antialiased transition-colors duration-300">
        {/* Top Reading Progress Indicator */}
        <ScrollProgress />

        {/* Sticky Dual-Theme Navigation */}
        <Navbar />

        {/* Main Content Flow */}
        <main id="main-content" className="relative">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Research />
          <Education />
          <Achievements />
          <Certifications />
          <ResumeCta />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Floating Utilities */}
        <BackToTop />
        <AiAssistantModal />
      </div>
    </ThemeProvider>
  );
}
