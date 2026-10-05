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
    <section id="projects" className="py-10 sm:py-14 md:py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800 text-xs font-mono font-semibold tracking-wider text-indigo-700 dark:text-indigo-400 mb-2">
            <span>ENGINEERING & OPEN-SOURCE REPOSITORIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects & Repositories
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Real-world systems spanning Artificial Intelligence, Computer Vision, Spring Boot, Java Architecture, and Full-Stack Engineering.
          </p>
        </div>

        {/* Project Filter */}
        <ProjectFilter
          activeFilter={activeFilter}
          onSelectFilter={(f) => setActiveFilter(f)}
        />

        {/* Counter indicator */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-4 px-1">
          <span>Showing {filteredProjects.length} of {projects.length} curated projects</span>
          <span className="hidden sm:inline">Synced with github.com/amann1602</span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
