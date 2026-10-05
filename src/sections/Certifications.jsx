import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 relative bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Professional Competencies"
          title="Professional"
          highlight="Certifications"
          subtitle="Accredited certifications from global cloud providers, AI institutes, and technology leaders."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-300 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-sky-400 border border-indigo-200 dark:border-indigo-800">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                    {cert.domain}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-sky-400 mt-1">
                  {cert.issuer}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
                  <ShieldCheck className="w-4 h-4" />
                  Official Credential
                </span>
                <span>Active</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
