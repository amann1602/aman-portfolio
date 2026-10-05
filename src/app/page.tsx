import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import FocusAreas from '@/components/FocusAreas';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ProjectGrid from '@/components/ProjectGrid';
import Skills from '@/components/Skills';
import EducationTimeline from '@/components/EducationTimeline';
import PublicationCard from '@/components/PublicationCard';
import CertificationCard from '@/components/CertificationCard';
import Achievements from '@/components/Achievements';
import ResumeCTA from '@/components/ResumeCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500/20 selection:text-indigo-900 dark:selection:text-indigo-200 transition-colors duration-300">
      {/* 1. Sticky Premium Navbar with Dual Theme & CTA */}
      <Navbar />

      <main id="main-content" className="relative">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Hero Factual Stats */}
        <Stats />

        {/* 4. About Me & Professional Snapshot */}
        <About />

        {/* 5. What I Work On (Professional Focus Areas) */}
        <FocusAreas />

        {/* 6. Work Experience Timeline */}
        <ExperienceTimeline />

        {/* 7. Selected Projects Showcase with Filter Pills */}
        <ProjectGrid />

        {/* 8. Technical Skills Matrix */}
        <Skills />

        {/* 9. Academic Education History */}
        <EducationTimeline />

        {/* 10. Research & Publications */}
        <PublicationCard />

        {/* 11. Professional Certifications */}
        <CertificationCard />

        {/* 12. Key Achievements & Hackathons */}
        <Achievements />

        {/* 13. Official Resume CTA Banner */}
        <ResumeCTA />

        {/* 14. Contact Form & Direct Channels */}
        <Contact />
      </main>

      {/* 15. Footer */}
      <Footer />
    </div>
  );
}
