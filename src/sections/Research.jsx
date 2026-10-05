import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ExternalLink, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { publications } from '../data/publications';

export default function Research() {
  return (
    <section id="research" className="py-24 md:py-32 relative bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Scholarly & R&D Contributions"
          title="Research &"
          highlight="Publications"
          subtitle="Peer-reviewed research and applied engineering publications spanning AI, IoT smart transportation, and digital healthcare platforms."
        />

        <div className="space-y-8">
          {publications.map((pub, idx) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel-interactive p-6 sm:p-8 md:p-9 rounded-3xl border border-slate-200 dark:border-slate-800"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="space-y-4 max-w-3xl">
                  {/* Metadata Tag Row */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-brand-indigo/10 dark:bg-brand-indigo/20 text-brand-indigoDark dark:text-brand-blue border border-brand-indigo/20">
                      PAPER {pub.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {pub.year}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {pub.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                    "{pub.title}"
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-brand-indigoDark dark:text-brand-cyan">
                    {pub.domain}
                  </p>

                  {/* Abstract */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pub.abstract}
                  </p>

                  {/* Topics Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {pub.topics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right metadata badge */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-surface/90 border border-slate-200 dark:border-slate-800 shrink-0 lg:w-56 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold">
                    <BookOpen className="w-4 h-4 text-brand-indigo" />
                    <span>Academic R&D</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                    Integrated with academic coursework and research at MIT ADT University.
                  </p>
                  {pub.doiUrl && (
                    <a
                      href={pub.doiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-brand-indigoDark dark:text-brand-blue hover:underline pt-1"
                    >
                      <span>Read Publication</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
