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
  Radio,
  Camera,
  Cpu,
  Zap,
  GraduationCap,
  BookOpen,
  Send,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { profile } from '@/data/profile';
import { contactDetails } from '@/data/socials';

type ProjectDemoTab = 'traffic' | 'crowdflow' | 'webhook';

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [activeDemo, setActiveDemo] = useState<ProjectDemoTab>('traffic');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Interactive simulation states
  const [trafficDensity, setTrafficDensity] = useState<'normal' | 'rush'>('normal');
  const [crowdAlert, setCrowdAlert] = useState(false);
  const [webhookStatus, setWebhookStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % profile.rotatingTitles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactDetails.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Fallback
    }
  };

  const triggerWebhookTest = () => {
    setWebhookStatus('sending');
    setTimeout(() => {
      setWebhookStatus('success');
      setTimeout(() => setWebhookStatus('idle'), 3000);
    }, 600);
  };

  return (
    <section
      id="home"
      className="relative pt-8 pb-10 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      {/* Gentle background accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-50/70 dark:bg-indigo-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* 1. EXPANSIVE FULL-WIDTH HERO TEXT & IDENTITY                              */}
        {/* ========================================================================= */}
        <div className="max-w-4xl space-y-4 sm:space-y-5">
          
          {/* Status Eyebrow Ribbon */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-mono text-emerald-700 dark:text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold">Available for AI & Software Roles</span>
            </span>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
              <span>amaninamdar.in</span>
            </span>

            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400">
              <span>Pune, Maharashtra, India</span>
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-600 dark:from-white dark:via-indigo-200 dark:to-indigo-400">Aman Inamdar</span>.
            </h1>

            {/* Dynamic Rotating Roles */}
            <div className="h-10 sm:h-12 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={titleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-600 dark:text-indigo-400 font-sans tracking-tight flex items-center gap-2"
                >
                  <span>{profile.rotatingTitles[titleIndex]}</span>
                  <Sparkles className="w-5 h-5 text-indigo-400 animate-pulse" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Broad, Informative Bio Narrative */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-3xl">
            Computer Science undergraduate at <strong className="text-slate-900 dark:text-white font-semibold">MIT ADT University, Pune</strong> (CGPA: 8.14). Published researcher in AI, IoT, and urban systems, with <strong className="text-slate-900 dark:text-white font-semibold">11 open-source GitHub repositories</strong> spanning real-time computer vision (YOLOv5), enterprise Spring Boot microservices, and predictive machine learning.
          </p>

          {/* Functional Actions Row */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xs"
            >
              <span>Explore 11+ Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="/resume/Aman_Inamdar_Resume.pdf"
              download="Aman_Inamdar_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileDown className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Download Resume</span>
            </a>

            {/* Functional 1-Click Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-mono font-medium transition-all"
              title="Click to copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>amaninamdar7775@gmail.com</span>
                </>
              )}
            </button>

            {/* Direct GitHub Profile Link */}
            <a
              href="https://github.com/amann1602"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
              title="Visit GitHub Profile (amann1602)"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Direct LinkedIn Profile Link */}
            <a
              href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
              title="Connect on LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Factual Credential Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>8.14 CGPA • MIT ADT University</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
              <span>2 Published Research Papers</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
              <span>11 Synced GitHub Repositories</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
              <span>2 Software & Embedded Internships</span>
            </span>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. FUNCTIONAL & ATTRACTIVE ENGINEERING DECK (3-COLUMN BENTO)              */}
        {/* ========================================================================= */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 1: Interactive Live Project Telemetry Engine (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
            <div>
              {/* Header with Functional Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                    Live System Telemetry
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono">
                  <button
                    onClick={() => setActiveDemo('traffic')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      activeDemo === 'traffic'
                        ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-bold shadow-2xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    Smart Traffic
                  </button>
                  <button
                    onClick={() => setActiveDemo('crowdflow')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      activeDemo === 'crowdflow'
                        ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-bold shadow-2xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    YOLOv5 Vision
                  </button>
                  <button
                    onClick={() => setActiveDemo('webhook')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      activeDemo === 'webhook'
                        ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-bold shadow-2xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    Spring Webhook
                  </button>
                </div>
              </div>

              {/* Dynamic Telemetry Panel */}
              <div className="py-4">
                {activeDemo === 'traffic' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">Smart Traffic & Parking Telemetry</p>
                        <p className="text-[11px] text-slate-500 font-mono">IoT sensor cluster • ML Congestion Model</p>
                      </div>
                      <button
                        onClick={() => setTrafficDensity(prev => prev === 'normal' ? 'rush' : 'normal')}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 transition-colors"
                      >
                        Toggle: {trafficDensity === 'normal' ? 'Simulate Rush Hour' : 'Reset to Normal'}
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5 text-center text-xs font-mono">
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700">
                        <span className="text-[10px] text-slate-500 block font-sans">Junction 4 (North)</span>
                        <span className={`text-sm sm:text-base font-bold ${trafficDensity === 'normal' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                          {trafficDensity === 'normal' ? '32% Load' : '89% High'}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700">
                        <span className="text-[10px] text-slate-500 block font-sans">Bay A Parking</span>
                        <span className="text-sm sm:text-base font-bold text-indigo-600 dark:text-indigo-400">
                          {trafficDensity === 'normal' ? '18 / 20 Open' : '2 / 20 Open'}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700">
                        <span className="text-[10px] text-slate-500 block font-sans">Signal Pacing</span>
                        <span className="text-sm sm:text-base font-bold text-amber-600 dark:text-amber-400">
                          {trafficDensity === 'normal' ? 'Adaptive: 30s' : 'Dynamic: 75s'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeDemo === 'crowdflow' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">CrowdFlow YOLOv5 Edge Vision</p>
                        <p className="text-[11px] text-slate-500 font-mono">Real-time edge pedestrian detection on Raspberry Pi</p>
                      </div>
                      <button
                        onClick={() => setCrowdAlert(prev => !prev)}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 transition-colors"
                      >
                        {crowdAlert ? 'Reset Alert' : 'Simulate Density Spike'}
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5 text-center text-xs font-mono">
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700">
                        <span className="text-[10px] text-slate-500 block font-sans">Live Count</span>
                        <span className={`text-sm sm:text-base font-bold ${crowdAlert ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
                          {crowdAlert ? '84 People' : '19 People'}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700">
                        <span className="text-[10px] text-slate-500 block font-sans">Inference Speed</span>
                        <span className="text-sm sm:text-base font-bold text-indigo-600 dark:text-indigo-400">
                          28.4 FPS (35ms)
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700">
                        <span className="text-[10px] text-slate-500 block font-sans">Safety State</span>
                        <span className={`text-sm sm:text-base font-bold flex items-center justify-center gap-1 ${crowdAlert ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
                          {crowdAlert ? <><AlertTriangle className="w-3.5 h-3.5" /> High Hazard</> : 'Optimal'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeDemo === 'webhook' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">Spring Boot Webhook Microservice</p>
                        <p className="text-[11px] text-slate-500 font-mono">HMAC signature verification • Bajaj Finserv spec</p>
                      </div>
                      <button
                        onClick={triggerWebhookTest}
                        disabled={webhookStatus === 'sending'}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-mono font-semibold bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 transition-colors"
                      >
                        <Send className="w-3 h-3" />
                        <span>{webhookStatus === 'sending' ? 'Dispatching...' : 'Dispatch Webhook'}</span>
                      </button>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 dark:bg-slate-950 text-slate-300 font-mono text-[11px] space-y-1">
                      <div className="flex items-center justify-between text-slate-400">
                        <span>POST /api/v1/webhook/event</span>
                        <span className={webhookStatus === 'success' ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                          {webhookStatus === 'success' ? 'HTTP 200 OK (11ms)' : 'Status: Ready'}
                        </span>
                      </div>
                      <p className="text-slate-500 text-[10px]">Header: X-Signature-SHA256: 4a2f8b9e...</p>
                      <p className="text-indigo-300">
                        &#123; &quot;source&quot;: &quot;Bajaj_Finserv&quot;, &quot;event&quot;: &quot;PAYMENT_CONFIRMED&quot;, &quot;idempotent&quot;: true &#125;
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Footer Action */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-indigo-500" />
                <span>Simulated live architecture feeds</span>
              </span>
              <Link
                href={
                  activeDemo === 'traffic'
                    ? '/projects/smart-traffic-parking'
                    : activeDemo === 'crowdflow'
                    ? '/projects/crowdflow-analytics'
                    : 'https://github.com/amann1602/webhookapp'
                }
                className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>{activeDemo === 'webhook' ? 'View Repo on GitHub' : 'View Detailed Case Study'}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Card 2: Research & Academic Credentials (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                    Research & Education
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold">
                  8.14 CGPA
                </span>
              </div>

              {/* Research Publications Snippet */}
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/70">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                    <span className="truncate">1. Smart Traffic & Parking Management</span>
                    <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 shrink-0 ml-1">2026</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                    IoT Telemetry and Predictive Congestion Forecasting for Urban Smart Mobility.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/70">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
                    <span className="truncate">2. AyuBarter Healthcare AI Platform</span>
                    <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 shrink-0 ml-1">2025</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                    AI-Driven Ayurvedic Symptom Recommender and Hyperlocal Barter Network.
                  </p>
                </div>
              </div>

              {/* Education Summary */}
              <div className="pt-2 flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">B.Tech Computer Science (AI & Analytics)</p>
                  <p className="text-[11px] text-slate-500 font-mono">MIT ADT University, Pune • 2023 – Present</p>
                </div>
              </div>
            </div>

            {/* Bottom Link */}
            <div className="pt-3 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500">IEEE & Scopus Focus</span>
              <Link
                href="#publications"
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold flex items-center gap-1"
              >
                <span>Read Research Papers</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
