import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { educationList } from '../data/education';

export default function Education() {
  return (
    <section id="journey" className="py-24 md:py-32 relative bg-slate-50 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Journey"
          title="Education &"
          highlight="Credentials"
          subtitle="Formal engineering foundation in Computer Science & AI, backed by consistent academic performance."
        />

        <div className="space-y-6">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border transition-all duration-300 shadow-xs ${
                edu.isCurrent
                  ? 'border-indigo-300 dark:border-indigo-700/80 shadow-md shadow-indigo-500/5'
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-2xl shrink-0 ${
                    edu.isCurrent
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-sky-400 border border-indigo-200 dark:border-indigo-800'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                  }`}>
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {edu.degree}
                      </h3>
                      {edu.isCurrent && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-sky-400 border border-indigo-200 dark:border-indigo-800 font-semibold">
                          Active Degree
                        </span>
                      )}
                    </div>

                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {edu.institution}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Score Pill */}
                <div className="sm:text-right shrink-0">
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block">
                    {edu.scoreLabel}
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-indigo-600 dark:text-sky-400 tracking-tight">
                    {edu.score}
                  </span>
                </div>
              </div>

              {edu.highlights && (
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2">
                  {edu.highlights.map((item, hIdx) => (
                    <span
                      key={hIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
