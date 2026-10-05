import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = "", showLabel = false }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center gap-2 p-2 rounded-xl border transition-all duration-300 ${
        isDark
          ? 'bg-dark-card border-slate-800 text-amber-300 hover:border-slate-700 hover:bg-slate-800/80 shadow-inner'
          : 'bg-white border-slate-200 text-brand-indigo hover:border-slate-300 hover:bg-slate-50 shadow-sm'
      } ${className}`}
    >
      <motion.div
        key={theme}
        initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400" />
        ) : (
          <Moon className="w-4 h-4 text-brand-indigo" />
        )}
      </motion.div>
      {showLabel && (
        <span className={`text-xs font-semibold tracking-wide ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
}
