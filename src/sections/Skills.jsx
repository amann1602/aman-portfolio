import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Layout, Server, Database, Terminal, Check, Compass, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { skillCategories, currentlyExploring } from '../data/skills';

const iconMap = {
  Cpu: <Cpu className="w-5 h-5 text-indigo-600 dark:text-sky-400" />,
  Layout: <Layout className="w-5 h-5 text-indigo-600 dark:text-sky-400" />,
  Server: <Server className="w-5 h-5 text-indigo-600 dark:text-sky-400" />,
  Database: <Database className="w-5 h-5 text-indigo-600 dark:text-sky-400" />,
  Terminal: <Terminal className="w-5 h-5 text-indigo-600 dark:text-sky-400" />
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Competencies"
          title="My Technology"
          highlight="Stack"
          subtitle="Authentic tools, frameworks, and engineering languages applied across real-world AI, analytics, and software projects."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wide transition-all ${
              activeTab === 'all'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-sm'
                : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300'
            }`}
          >
            All Disciplines ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wide transition-all ${
                activeTab === cat.id
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid (NO percentage bars, only authentic interactive cards) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredCategories.map((category) => (
              <motion.div
                layout
                key={category.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-300 shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs">
                      {iconMap[category.icon]}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {category.skills.length} Verified Tools
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 shadow-xs text-xs font-mono font-medium hover:border-indigo-400 transition-colors"
                      >
                        <Check className="w-3 h-3 text-indigo-600 dark:text-sky-400" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* "Currently Exploring" Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800">
              <Compass className="w-4 h-4 text-indigo-600 dark:text-sky-400" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-600 dark:text-sky-400 font-bold block">
                Active Research & Curiosity
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Currently Exploring
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {currentlyExploring.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-indigo-600 dark:text-sky-400 font-bold block mb-1">
                    FOCUS 0{idx + 1}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                    {item.title}
                  </h4>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
