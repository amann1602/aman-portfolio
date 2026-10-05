'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.filterCategories.includes(activeFilter));

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800 text-xs font-mono font-semibold tracking-wider text-indigo-700 dark:text-indigo-400 mb-3">
            <span>ENGINEERING & SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Selected Projects
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Technology-driven projects focused on AI, analytics, intelligent systems and practical problem solving.
          </p>
        </div>

        {/* Project Filter */}
        <ProjectFilter
          activeFilter={activeFilter}
          onSelectFilter={(f) => setActiveFilter(f)}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
