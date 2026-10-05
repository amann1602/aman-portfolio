'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  Layout,
  Database,
  Cloud,
  BarChart3,
  Wrench,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '@/data/skills';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  Brain: <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  Layout: <Layout className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  Database: <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  Cloud: <Cloud className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  Wrench: <Wrench className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-10 sm:py-12 md:py-14 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800 text-xs font-mono font-semibold tracking-wider text-indigo-700 dark:text-indigo-400 mb-3">
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            A comprehensive matrix of verified programming languages, frameworks, analytics utilities, and engineering tools. No arbitrary percentage bars.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                    {iconMap[category.icon]}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                      {category.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      {category.skills.length} Technologies
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills Pills */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-white dark:hover:bg-slate-850 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-default"
                  >
                    {skill}
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
