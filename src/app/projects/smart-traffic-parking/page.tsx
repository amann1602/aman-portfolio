import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ArrowLeft,
  CheckCircle2,
  Network
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';
import { TrafficVisual } from '@/components/ProjectVisuals';

export const metadata: Metadata = {
  title: 'Smart Traffic & Parking Management System | Aman Inamdar',
  description:
    'AI-powered traffic and parking management solution using Python and Machine Learning with real-time analytics and predictive monitoring by Aman Inamdar.',
};

export default function SmartTrafficParkingPage() {
  const project = projects.find((p) => p.slug === 'smart-traffic-parking')!;
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

          {/* Interactive Visual System */}
          <div className="rounded-3xl p-6 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-4">
              Real-Time Simulation Architecture
            </h2>
            <TrafficVisual />
          </div>

          {/* Structured Detail Sections */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 space-y-10">
              {/* 1. Overview */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                  <span>{sections.overview.title}</span>
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

              {/* 5. Key Features */}
              {sections.keyFeatures && (
                <section className="space-y-3">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {sections.keyFeatures.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    {sections.keyFeatures.content}
                  </p>
                  {sections.keyFeatures.points && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {sections.keyFeatures.points.map((pt, i) => (
                        <li
                          key={i}
                          className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              )}

              {/* 6. Analytics */}
              {sections.analytics && (
                <section className="space-y-3">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {sections.analytics.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    {sections.analytics.content}
                  </p>
                </section>
              )}

              {/* 7. System Architecture (with prompt required placeholder) */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {sections.systemArchitecture?.title || 'System Architecture'}
                </h2>
                <div className="p-8 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 text-center space-y-2">
                  <Network className="w-8 h-8 text-indigo-500 mx-auto" />
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Add detailed architecture here
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    Production schematic placeholder — will be updated with hardware-software diagram.
                  </p>
                </div>
              </section>

              {/* 8. Challenges */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {sections.challenges.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {sections.challenges.content}
                </p>
              </section>

              {/* 9. Future Scope */}
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
                Project Information
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 font-mono block">Timeline</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">2026 (Published R&D)</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono block">Focus Domain</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Intelligent Transportation Systems (ITS)</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono block">Publication Correlation</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Pune Smart City Research Paper (2026)</span>
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
