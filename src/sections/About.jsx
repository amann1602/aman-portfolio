import React from 'react';
import { motion } from 'framer-motion';
import { Layers, BarChart3, Users2, ArrowRight, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/profile';

export default function About() {
  const pillarIcons = {
    "01": <Layers className="w-5 h-5 text-indigo-600 dark:text-sky-400" />,
    "02": <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-sky-400" />,
    "03": <Users2 className="w-5 h-5 text-indigo-600 dark:text-sky-400" />
  };

  return (
    <section id="about" className="py-24 md:py-32 relative bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Philosophy & Approach"
          title="More Than a"
          highlight="Developer"
          subtitle="Connecting computer science engineering, machine intelligence, and product execution to build practical digital solutions."
        />

        {/* Narrative Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
            <MapPin className="w-3.5 h-3.5 text-indigo-600 dark:text-sky-400" />
            <span>{profile.university} • {profile.location}</span>
          </div>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
            “{profile.aboutIntro}”
          </p>

          <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
              Core Philosophy:
            </span>
            <span className="text-xs sm:text-sm font-mono font-bold text-indigo-600 dark:text-sky-400">
              “{profile.philosophy}”
            </span>
          </div>
        </motion.div>

        {/* Three Pillar Cards: 01 BUILD, 02 ANALYZE, 03 LEAD */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {profile.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-300 group hover:-translate-y-1 shadow-xs"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono font-black tracking-widest text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-sky-400 transition-colors">
                  {pillar.number}
                </span>
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs">
                  {pillarIcons[pillar.number]}
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                {pillar.number} — {pillar.title}
              </h3>

              <p className="text-xs font-mono font-semibold text-indigo-600 dark:text-sky-400 mb-3">
                “{pillar.tagline}”
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Small Timeline: Learning → Building → Experimenting → Leading → Scaling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <span className="text-xs uppercase font-mono tracking-wider font-bold text-indigo-600 dark:text-sky-400 block">
                Continuous Evolution
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                The Growth Progression
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              MIT ADT University • 2023 – 2027
            </span>
          </div>

          {/* Step Timeline Progression */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
            {profile.journeyStages.map((stage, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      STEP 0{idx + 1}
                    </span>
                    {idx < profile.journeyStages.length - 1 && (
                      <ArrowRight className="hidden sm:inline w-3 h-3 text-slate-400" />
                    )}
                  </div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                    {stage.stage}
                  </h5>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-2">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
