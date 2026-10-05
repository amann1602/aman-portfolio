'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Building2,
  Award,
  Compass,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { profile } from '@/data/profile';

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800 text-xs font-mono font-semibold tracking-wider text-indigo-700 dark:text-indigo-400 mb-3">
            <span>BACKGROUND & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            A dedicated technology student committed to building practical, reliable and intelligent systems.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Professional Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <span>Engineering & Research Mindset</span>
              </h3>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {profile.aboutBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Core Attributes Pills */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  AI & Analytics
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  R&D & Systems Testing
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Hardware-Software Integration
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Full-Stack Architecture
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Professional Snapshot Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-6">
              <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-indigo-100 dark:border-indigo-900/60 shadow-sm shrink-0 bg-slate-100 dark:bg-slate-800">
                  <Image
                    src="/images/profile.jpg"
                    alt="Aman Mafij Inamdar"
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight truncate">
                      Aman Inamdar
                    </h3>
                    <div className="w-4 h-4 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                  </div>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium truncate">
                    B.Tech AI & Analytics • MIT ADT
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                    Verified Profile Snapshot
                  </p>
                </div>
              </div>

              {/* Data attributes list */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                      Education
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      B.Tech CSE — AI & Analytics
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                      University
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      MIT ADT University, Pune
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                      CGPA
                    </span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">
                      8.14
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 ml-1.5 font-mono">
                      (Current Cumulative)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                      Focus
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      AI • Analytics • Software • R&D
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                      Location
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      India
                    </span>
                  </div>
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-mono">Availability</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Open for Opportunities
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
