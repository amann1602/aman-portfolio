import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Layers,
  HardDrive,
  GitBranch,
  Terminal,
  ArrowRight,
  TrendingUp,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 dark:bg-black/85 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl z-10 flex flex-col text-slate-800 dark:text-slate-200"
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 p-6 sm:p-8 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-sky-400 border border-indigo-200 dark:border-indigo-800">
                    PROJECT {project.number}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {project.year}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {project.status}
                  </span>
                  {project.liveUrl && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Demo
                    </span>
                  )}
                </div>

                <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                  {project.category}
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close project modal"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-8 text-sm leading-relaxed">
              {/* Overview & Problem / Solution Grid */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-indigo-600 dark:text-sky-400 flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4" />
                    Overview
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Problem */}
                  <div className="p-5 rounded-2xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-900/40">
                    <h5 className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      The Problem
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-5 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-900/40">
                    <h5 className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      The Solution
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual System Architecture Pipeline */}
              {project.architecture && project.architecture.length > 0 && (
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-indigo-600 dark:text-sky-400 flex items-center gap-2 mb-4">
                    <Layers className="w-4 h-4" />
                    System Architecture & Data Flow
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {project.architecture.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-mono font-bold text-indigo-600 dark:text-sky-400">
                            STEP {item.step}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white block">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
                          {item.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technology Stack & Hardware */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2 mb-3">
                    <Terminal className="w-4 h-4 text-indigo-600 dark:text-sky-400" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.hardware && project.hardware.length > 0 && (
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                    <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2 mb-3">
                      <HardDrive className="w-4 h-4 text-indigo-600 dark:text-sky-400" />
                      Hardware Integration
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.hardware.map((hw, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                        >
                          {hw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Features List */}
              {project.features && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-indigo-600 dark:text-sky-400 flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4" />
                    Key Capabilities & Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-sky-400 mt-2 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenges & Technical Solutions */}
              {project.challenges && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-amber-600 dark:text-amber-400 flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-4 h-4" />
                    Engineering Challenges Encountered
                  </h4>
                  <div className="space-y-2">
                    {Array.isArray(project.challenges) ? (
                      project.challenges.map((c, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-900/30 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                        >
                          • {c}
                        </div>
                      ))
                    ) : (
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 p-3 rounded-xl bg-amber-500/5 border border-amber-200">
                        {project.challenges}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* My Contribution */}
              {project.contributions && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-indigo-600 dark:text-sky-400 flex items-center gap-2 mb-3">
                    <GitBranch className="w-4 h-4" />
                    My Engineering Contribution
                  </h4>
                  <div className="space-y-2">
                    {project.contributions.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                      >
                        <ShieldCheck className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Future Improvements */}
              {project.futureImprovements && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-indigo-600 dark:text-sky-400" />
                    Future Improvements & Roadmap
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.futureImprovements.map((imp, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300"
                      >
                        → {imp}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer / Direct Links */}
            <div className="sticky bottom-0 z-20 p-6 sm:p-8 border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white text-xs font-semibold transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View GitHub Source</span>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors"
                  >
                    <span>Open Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {project.backendUrl && (
                  <a
                    href={project.backendUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono transition-colors"
                  >
                    <span>REST Backend API</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-semibold transition-colors"
              >
                Close Case Study
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
