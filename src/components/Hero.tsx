'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  FileDown,
  Brain,
  BarChart3,
  Code2,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';
import { profile } from '@/data/profile';

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % profile.rotatingTitles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-70 pointer-events-none" />

      {/* Gentle background accent glow - extremely subtle */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-50/70 dark:bg-indigo-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono font-semibold tracking-wider text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              <span>{profile.eyebrow}</span>
            </div>

            {/* Main Heading & Rotating Subtitles */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                {profile.headline}
              </h1>

              {/* Animated Rotating Subtitles */}
              <div className="h-10 sm:h-12 flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={titleIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-600 dark:text-indigo-400 font-sans tracking-tight"
                  >
                    {profile.rotatingTitles[titleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {profile.subheadline}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xs"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="/resume/Aman_Inamdar_Resume.pdf"
                download="Aman_Inamdar_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Download Resume</span>
              </a>

              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors group ml-1"
              >
                <span>Let&apos;s Connect</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Key verification badge */}
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>B.Tech AI & Analytics • MIT ADT University</span>
              </span>
            </div>
          </div>

          {/* Right Column: Premium Visual Composition */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center">
              {/* Outer soft decorative frame */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-slate-100 to-indigo-50/40 dark:from-slate-900 dark:to-indigo-950/40 border border-slate-200 dark:border-slate-800/80 -rotate-2" />

              {/* Central Profile Card */}
              <div className="relative z-10 w-64 sm:w-72 aspect-square rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-3 shadow-md shadow-slate-200/40 dark:shadow-none flex flex-col items-center justify-center overflow-hidden">
                {!imageError ? (
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <Image
                      src="/images/profile.jpg"
                      alt="Aman Mafij Inamdar"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 280px, 320px"
                      priority
                      onError={() => setImageError(true)}
                    />
                  </div>
                ) : (
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-blue-700 flex flex-col items-center justify-center text-white p-4 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center mb-3 text-2xl font-black">
                      AI
                    </div>
                    <span className="font-bold text-base tracking-tight">Aman Inamdar</span>
                    <span className="text-xs text-white/80 font-mono mt-0.5">AI & Analytics Specialist</span>
                  </div>
                )}

                {/* Subtle caption indicator inside profile card */}
                <div className="absolute bottom-4 inset-x-6 z-20 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 text-center shadow-xs">
                  <p className="text-[11px] font-semibold text-slate-900 dark:text-white truncate">
                    Aman Mafij Inamdar
                  </p>
                  <p className="text-[9px] font-mono text-slate-500 dark:text-slate-400">
                    MIT ADT University • 8.14 CGPA
                  </p>
                </div>
              </div>

              {/* Floating Information Card 1: AI & ML (Top-Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -top-2 left-0 sm:-left-4 z-20 px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">AI & ML</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono leading-tight">Models & Vision</p>
                </div>
              </motion.div>

              {/* Floating Information Card 2: Data Analytics (Top-Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute top-6 -right-2 sm:-right-6 z-20 px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Data Analytics</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono leading-tight">Predictive Insights</p>
                </div>
              </motion.div>

              {/* Floating Information Card 3: Software Development (Bottom-Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute bottom-6 -left-2 sm:-left-6 z-20 px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Software Dev</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono leading-tight">Java • Python • React</p>
                </div>
              </motion.div>

              {/* Floating Information Card 4: R&D & Innovation (Bottom-Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-2 right-0 sm:-right-4 z-20 px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">R&D & Innovation</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono leading-tight">2 Research Papers</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
