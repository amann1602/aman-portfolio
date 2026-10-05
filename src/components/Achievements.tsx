'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Trophy, Award, Sparkles } from 'lucide-react';
import { achievements } from '@/data/achievements';

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  Briefcase: <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  Trophy: <Trophy className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  Award: <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-10 sm:py-12 md:py-14 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70 transition-colors duration-300"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800 text-xs font-mono font-semibold tracking-wider text-indigo-700 dark:text-indigo-400 mb-3">
            <span>KEY MILESTONES & HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Achievements
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Recognized research contributions, engineering internships, and competitive hackathon participation.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-indigo-200 dark:hover:border-slate-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                    {iconMap[item.icon]}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                    {item.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-medium">
                Milestone 0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
