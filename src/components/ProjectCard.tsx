'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { Project } from '@/data/projects';
import {
  TrafficVisual,
  CrowdFlowVisual,
  AyuBarterVisual
} from '@/components/ProjectVisuals';

const projectVisuals: Record<string, React.ReactNode> = {
  'smart-traffic-parking': <TrafficVisual />,
  'crowdflow-analytics': <CrowdFlowVisual />,
  ayubarter: <AyuBarterVisual />
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35 }}
      className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-indigo-400 dark:hover:border-indigo-600/70 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
    >
      <div className="space-y-5">
        {/* Top Badges & Meta */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {project.year}
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {project.category}
            </span>
          </div>

          {project.isLive && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Demo
            </span>
          )}
        </div>

        {/* Project Title */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Bespoke Visual System */}
        <div className="pt-1">
          {projectVisuals[project.id]}
        </div>

        {/* Key Features from Resume */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block">
            Key Highlights
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {project.features.slice(0, 4).map((feature, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Pills */}
        <div className="pt-2 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="View on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          ) : (
            <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
              Repository Available on Request
            </span>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800"
            >
              <span>Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* View Project Detail Page */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>View Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}
