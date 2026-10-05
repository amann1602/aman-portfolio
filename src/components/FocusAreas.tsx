'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Code2, Lightbulb } from 'lucide-react';
import { profile } from '@/data/profile';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
  Code2: <Code2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
  Lightbulb: <Lightbulb className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
};

export default function FocusAreas() {
  return (
    <section className="py-10 sm:py-12 md:py-14 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono font-semibold tracking-wider text-slate-700 dark:text-slate-300 mb-3">
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What I Work On
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Four specialized technical pillars combining theory, modern software engineering, and analytical research.
          </p>
        </div>

        {/* Four Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {profile.focusAreas.map((area, idx) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-indigo-400 dark:hover:border-indigo-600/70 hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center transition-transform group-hover:scale-105">
                    {iconMap[area.icon]}
                  </div>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
