import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Briefcase, Award, Building2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative bg-slate-50 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Professional Background"
          title="Experience &"
          highlight="Exposure"
          subtitle="Leadership roles in technology innovation combined with industry engineering internships in embedded systems and web architecture."
        />

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 group-hover:scale-125 transition-all duration-300 flex items-center justify-center shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-sky-400" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-300 shadow-xs">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-indigo-600 dark:text-sky-400 font-semibold text-base mt-0.5 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-sky-400" />
                      {exp.period}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-sky-400 border border-indigo-200 dark:border-indigo-800">
                      {exp.badge}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Key Technical Responsibilities */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs uppercase tracking-wider font-semibold font-mono text-slate-500 dark:text-slate-400 block mb-2">
                    Key Technical & Leadership Responsibilities
                  </span>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <ChevronRight className="w-4 h-4 text-indigo-600 dark:text-sky-400 mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology and Focus Chips */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-1">Skills & Focus:</span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
