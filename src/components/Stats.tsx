'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Briefcase, FolderGit2 } from 'lucide-react';
import { profile } from '@/data/profile';

const statIcons = [
  <GraduationCap key="grad" className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
  <BookOpen key="book" className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
  <Briefcase key="case" className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
  <FolderGit2 key="folder" className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
];

export default function Stats() {
  return (
    <section className="relative z-20 my-4 sm:my-6">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {profile.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-indigo-300 dark:hover:border-slate-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70">
                  {statIcons[idx]}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                  0{idx + 1}
                </span>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 mt-0.5">
                  {stat.label}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-sans truncate">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
