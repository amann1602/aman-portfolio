import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown, MessageSquare, ChevronDown, Sparkles } from 'lucide-react';
import ParticleNetwork from '../components/ParticleNetwork';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { profile } from '../data/profile';
import { socials, resumeConfig } from '../data/socials';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 75,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-tech-grid transition-colors duration-300"
    >
      {/* Subtle warm/cool atmospheric background glows */}
      <div className="absolute top-1/4 left-8 w-88 h-88 rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 right-8 w-96 h-96 rounded-full bg-sky-500/5 dark:bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand & Hero Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-wider text-slate-800 dark:text-slate-200 uppercase">
                {profile.badge}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Building <span className="text-indigo-600 dark:text-sky-400">Intelligent Solutions</span> for Real-World Problems.
              </h1>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-normal"
            >
              {profile.heroSubtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              {/* Primary: View My Work */}
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Let's Connect */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white font-semibold text-sm transition-all shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-sky-400" />
                <span>Let's Connect</span>
              </a>

              {/* Secondary: Download Resume ↓ */}
              <a
                href={resumeConfig.filePath}
                download={resumeConfig.fileName}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-2xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-semibold transition-colors"
                title="Download Resume PDF"
              >
                <FileDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Download Resume ↓</span>
              </a>
            </motion.div>

            {/* Socials & Location */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80"
            >
              <div className="flex items-center gap-2.5">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-sky-400 transition-colors shadow-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                {socials.linkedin && (
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-sky-400 transition-colors shadow-xs"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800" />

              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                📍 {socials.location}
              </span>
            </motion.div>
          </div>

          {/* Right Column: Sophisticated Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 h-[360px] sm:h-[430px] md:h-[460px] w-full rounded-3xl bg-white dark:bg-slate-900/60 relative p-2 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden flex items-center justify-center border border-slate-200 dark:border-slate-800"
          >
            <ParticleNetwork />
          </motion.div>
        </div>

        {/* Hero Quick Stats (Immediately below hero) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-slate-200/80 dark:border-slate-800"
        >
          {profile.quickStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xs text-left"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-sky-400 block tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-white mt-1 block">
                {stat.label}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5 block">
                {stat.sub}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator: Explore my work ↓ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-10"
        >
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, '#about')}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
          >
            <span>Explore my work</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
