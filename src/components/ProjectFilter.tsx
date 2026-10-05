'use client';

import React from 'react';
import { projectFilterTabs } from '@/data/projects';

interface ProjectFilterProps {
  activeFilter: string;
  onSelectFilter: (filterId: string) => void;
}

export default function ProjectFilter({
  activeFilter,
  onSelectFilter
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
      {projectFilterTabs.map((tab) => {
        const isActive = activeFilter === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onSelectFilter(tab.id)}
            className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
              isActive
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-xs scale-105'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
