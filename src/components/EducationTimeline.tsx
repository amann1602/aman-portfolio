'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { educationList } from '@/data/education';

export default function EducationTimeline() {
  return (
    <section className="py-10 sm:py-12 md:py-14 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono font-semibold tracking-wider text-slate-700 dark:text-slate-300 mb-3">
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Formal education credentials and sustained academic performance in computer science, science, and mathematics.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-10">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Marker Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform group-hover:scale-125 ${
                  edu.isCurrent
                    ? 'bg-indigo-600 border-indigo-600 dark:border-indigo-400 ring-4 ring-indigo-100 dark:ring-indigo-950/60'
                    : 'bg-white dark:bg-slate-950 border-slate-400 dark:border-slate-600'
                }`}
              />

              {/* Education Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-indigo-200 dark:hover:border-slate-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {edu.period}
                    </span>
                    {edu.isCurrent && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{edu.location}</span>
                  </p>
                </div>

                {/* Grade Badge */}
                <div className="sm:text-right shrink-0 p-3 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    {edu.gradeLabel}
                  </span>
                  <span className="text-lg font-extrabold text-indigo-600 dark:text-indigo-400">
                    {edu.grade}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
