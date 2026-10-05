import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';
import { CrowdFlowVisual } from '@/components/ProjectVisuals';

export const metadata: Metadata = {
  title: 'CrowdFlow Analytics System | Aman Inamdar',
  description:
    'Real-time crowd monitoring and computer vision system using Python, YOLOv5 and Computer Vision developed by Aman Inamdar.',
};

export default function CrowdFlowAnalyticsPage() {
  const project = projects.find((p) => p.slug === 'crowdflow-analytics')!;
  const { sections } = project;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />

      <main className="py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Back Navigation */}
          <div>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Selected Projects</span>
            </Link>
          </div>

          {/* Header */}
          <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {project.year}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {project.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              {project.fullDescription}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Visual System */}
          <div className="rounded-3xl p-6 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-4">
              Real-Time Computer Vision Pipeline
            </h2>
            <CrowdFlowVisual />
          </div>

          {/* Detailed Sections */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 space-y-10">
              {/* 1. Overview */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {sections.overview.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {sections.overview.content}
                </p>
              </section>

              {/* 2. Problem */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {sections.problem.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {sections.problem.content}
                </p>
              </section>

              {/* 3. Solution */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {sections.solution.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {sections.solution.content}
                </p>
              </section>

              {/* 4. Technology */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {sections.technology.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {sections.technology.content}
                </p>
                {sections.technology.points && (
                  <ul className="space-y-2 pt-2">
                    {sections.technology.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              {/* 5. Computer Vision */}
              {sections.computerVision && (
                <section className="space-y-3">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {sections.computerVision.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    {sections.computerVision.content}
                  </p>
                </section>
              )}

              {/* 6. Real-Time Monitoring */}
              {sections.realTimeMonitoring && (
                <section className="space-y-3">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {sections.realTimeMonitoring.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    {sections.realTimeMonitoring.content}
                  </p>
                </section>
              )}

              {/* 7. Dashboard */}
              {sections.dashboard && (
                <section className="space-y-3">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {sections.dashboard.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    {sections.dashboard.content}
                  </p>
                </section>
              )}

              {/* 8. Optimization */}
              {sections.optimization && (
                <section className="space-y-3">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {sections.optimization.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    {sections.optimization.content}
                  </p>
                </section>
              )}

              {/* 9. Challenges */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {sections.challenges.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {sections.challenges.content}
                </p>
              </section>

              {/* 10. Future Improvements */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {sections.futureScope.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {sections.futureScope.content}
                </p>
              </section>
            </div>

            {/* Sidebar Meta Card */}
            <div className="md:col-span-4 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5 sticky top-24">
              <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                System Highlights
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 font-mono block">Timeline</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">2025</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono block">Detection Model</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">YOLOv5 Neural Weights</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono block">Primary Runtime</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Python + OpenCV + Analytics API</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <Link
                  href="/#contact"
                  className="w-full flex items-center justify-center gap-1.5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-semibold text-xs transition-colors"
                >
                  <span>Inquire About System</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
