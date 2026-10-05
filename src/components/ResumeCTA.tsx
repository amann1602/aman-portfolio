'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Eye, FileText, CheckCircle2 } from 'lucide-react';

export default function ResumeCTA() {
  const resumePath = '/resume/Aman_Inamdar_Resume.pdf';

  return (
    <section className="py-10 sm:py-12 md:py-14 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xl"
        >
          {/* Subtle background tech accent */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 text-xs font-mono font-semibold tracking-wider text-indigo-200">
              <FileText className="w-3.5 h-3.5" />
              <span>OFFICIAL CURRICULUM VITAE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Interested in my work?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Explore my experience, projects, technical skills and research work through my resume.
            </p>

            {/* Quick credentials bullet bar */}
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300 pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>B.Tech AI & Analytics (8.14 CGPA)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>2 Published Papers</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>2 Internships Completed</span>
              </span>
            </div>

            {/* Resume Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={resumePath}
                download="Aman_Inamdar_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold text-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg shadow-sm"
              >
                <FileDown className="w-4 h-4 text-indigo-600" />
                <span>Download Resume</span>
              </a>

              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-700 font-semibold text-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Eye className="w-4 h-4 text-slate-300" />
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
