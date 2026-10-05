import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, FileCheck, Briefcase, Code, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { achievements } from '../data/achievements';

const achievementIcons = [
  <FileCheck className="w-6 h-6 text-sky-500" />,
  <Briefcase className="w-6 h-6 text-indigo-500" />,
  <Code className="w-6 h-6 text-amber-400" />
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28 relative bg-slate-50 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Milestones"
          title="Key"
          highlight="Achievements"
          subtitle="Concrete milestones earned through research publications, industry internships, and competitive hackathons."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-300 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs">
                    {achievementIcons[idx] || achievementIcons[0]}
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-sky-400 border border-indigo-200 dark:border-indigo-800">
                    {item.stat}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span>{item.category}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
