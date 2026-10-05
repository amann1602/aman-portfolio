'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  FileDown,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  FileCode2,
  BookMarked,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { profile } from '@/data/profile';

type TabType = 'config' | 'terminal' | 'research';

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<TabType>('config');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % profile.rotatingTitles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const configSnippet = `// aman_inamdar.config.ts
export const engineer: DeveloperProfile = {
  name: "Aman Mafij Inamdar",
  title: "AI & Analytics Engineer | R&D Specialist",
  education: {
    degree: "B.Tech Computer Science (AI & Analytics)",
    university: "MIT ADT University, Pune",
    cgpa: 8.14,
    status: "Graduating 2026"
  },
  technicalArsenal: {
    languages: ["Python", "Java", "TypeScript", "JavaScript", "SQL"],
    ai_vision: ["YOLOv5", "OpenCV", "TensorFlow", "PyTorch", "CNN"],
    backend:   ["Spring Boot", "Hibernate ORM", "REST APIs", "JDBC"],
    frontend:  ["React.js", "Next.js", "Tailwind CSS"]
  },
  researchAndImpact: {
    publications: 2, // Smart Traffic IoT & Healthcare AI
    githubRepos: 11  // Open-source verified codebases
  },
  availability: "Open to High-Impact Opportunities & R&D Labs",
  domain: "https://amaninamdar.in"
};`;

  const copyConfig = async () => {
    try {
      await navigator.clipboard.writeText(configSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="home"
      className="relative pt-6 pb-8 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-14 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      {/* Gentle background accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-50/70 dark:bg-indigo-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Text & Engineering Identity */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-900 dark:text-white font-semibold">Available for Roles</span>
              <span className="text-slate-400">•</span>
              <span>AI & Analytics</span>
            </div>

            {/* Main Heading & Rotating Subtitles */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-800 dark:from-white dark:via-indigo-200 dark:to-indigo-400">Aman Inamdar</span>.
              </h1>

              {/* Animated Rotating Subtitles */}
              <div className="h-9 sm:h-10 flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={titleIndex}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-indigo-600 dark:text-indigo-400 font-sans tracking-tight flex items-center gap-2"
                  >
                    <span>{profile.rotatingTitles[titleIndex]}</span>
                    <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Computer Science undergraduate specializing in Artificial Intelligence & Analytics at MIT ADT University (8.14 CGPA). Passionate about building intelligent computer vision pipelines, robust Spring Boot & Java backend systems, and research-backed software solutions.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-semibold text-xs sm:text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xs"
              >
                <span>View 11 Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="/resume/Aman_Inamdar_Resume.pdf"
                download="Aman_Inamdar_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-semibold text-xs sm:text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="https://github.com/amann1602"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>amann1602</span>
              </a>
            </div>

            {/* Credentials Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>8.14 CGPA • MIT ADT University</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span>2 Published Papers</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>Pune, India</span>
              </span>
            </div>
          </div>

          {/* Right Column: Professional Developer Workstation / Interactive Code Console */}
          <div className="lg:col-span-6 w-full">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden font-mono text-xs">
              
              {/* Terminal Window Header */}
              <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between">
                {/* Window Dots */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  
                  {/* File Tabs */}
                  <div className="flex items-center gap-1 ml-2">
                    <button
                      onClick={() => setActiveTab('config')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors flex items-center gap-1.5 ${
                        activeTab === 'config'
                          ? 'bg-slate-800 text-indigo-400 border border-slate-700'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <FileCode2 className="w-3 h-3" />
                      <span>engineer.config.ts</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('terminal')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors flex items-center gap-1.5 ${
                        activeTab === 'terminal'
                          ? 'bg-slate-800 text-emerald-400 border border-slate-700'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Terminal className="w-3 h-3" />
                      <span>terminal.sh</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('research')}
                      className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                        activeTab === 'research'
                          ? 'bg-slate-800 text-amber-400 border border-slate-700'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <BookMarked className="w-3 h-3" />
                      <span>research.json</span>
                    </button>
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  onClick={copyConfig}
                  className="px-2 py-1 rounded-md text-[11px] text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 transition-colors flex items-center gap-1 border border-slate-700/60"
                  title="Copy configuration snippet"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code / Terminal Content Area */}
              <div className="p-4 sm:p-5 text-[11px] sm:text-xs leading-relaxed overflow-x-auto min-h-[290px] max-h-[380px] flex flex-col justify-between">
                
                {activeTab === 'config' && (
                  <div className="space-y-1 text-slate-300">
                    <p className="text-slate-500">// aman_inamdar.config.ts</p>
                    <p>
                      <span className="text-purple-400">export const</span> <span className="text-indigo-300">engineer</span>: <span className="text-emerald-300">DeveloperProfile</span> = &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">name:</span> <span className="text-amber-300">&quot;Aman Mafij Inamdar&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">degree:</span> <span className="text-amber-300">&quot;B.Tech CSE (AI & Analytics)&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">institution:</span> <span className="text-amber-300">&quot;MIT ADT University, Pune&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">cgpa:</span> <span className="text-indigo-400 font-bold">8.14</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">coreStack:</span> [
                      <span className="text-amber-200">&quot;Python&quot;</span>,{' '}
                      <span className="text-amber-200">&quot;YOLOv5&quot;</span>,{' '}
                      <span className="text-amber-200">&quot;Java&quot;</span>,{' '}
                      <span className="text-amber-200">&quot;Spring Boot&quot;</span>,{' '}
                      <span className="text-amber-200">&quot;React&quot;</span>
                      ],
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">researchPublications:</span> <span className="text-indigo-400 font-bold">2</span>,{' '}
                      <span className="text-slate-500">// Published in AI, IoT & Healthcare</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">githubRepositories:</span> <span className="text-indigo-400 font-bold">11</span>,{' '}
                      <span className="text-slate-500">// Verified open-source</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">status:</span> <span className="text-emerald-400 font-semibold">&quot;Ready for High-Impact Roles&quot;</span>
                    </p>
                    <p>&#125;;</p>
                  </div>
                )}

                {activeTab === 'terminal' && (
                  <div className="space-y-1.5 font-mono">
                    <p className="text-slate-400">
                      <span className="text-emerald-400 font-bold">amani@workstation</span>:<span className="text-indigo-400">~</span>$ ./verify-systems.sh
                    </p>
                    <p className="text-emerald-400 flex items-center gap-1.5 pt-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Academic Standing: 8.14 CGPA [MIT ADT University]</span>
                    </p>
                    <p className="text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>2 Research Papers: AI Telemetry & Smart Mobility</span>
                    </p>
                    <p className="text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>11 Public Repositories synced with github.com/amann1602</span>
                    </p>
                    <p className="text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Custom Domain Online: https://amaninamdar.in</span>
                    </p>
                    <p className="text-indigo-300 pt-2 font-semibold">
                      [●] Status: All systems verified. Ready for deployment.
                    </p>
                  </div>
                )}

                {activeTab === 'research' && (
                  <div className="space-y-2 text-slate-300">
                    <p className="text-amber-400 font-bold">&#47;&#42; Research Highlights &#42;&#47;</p>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-indigo-400 font-semibold block">1. Smart Traffic & Parking Management (2026)</span>
                      <span className="text-[10px] text-slate-400 font-sans">IoT telemetry & predictive congestion model for urban mobility.</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-indigo-400 font-semibold block">2. AyuBarter Hyperlocal Healthcare AI (2025)</span>
                      <span className="text-[10px] text-slate-400 font-sans">Ayurvedic symptom matching & tele-consultation platform.</span>
                    </div>
                  </div>
                )}

                {/* Console Footer Ribbon */}
                <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-300 font-medium">Production Verified</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 hover:text-indigo-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                    <span>amaninamdar.in</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick Tech Badges underneath */}
            <div className="mt-3 flex flex-wrap items-center justify-center lg:justify-start gap-1.5 text-[11px] font-mono">
              <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">Python</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">YOLOv5</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">OpenCV</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">Java</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">Spring Boot</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">Hibernate</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">React</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">Next.js</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
