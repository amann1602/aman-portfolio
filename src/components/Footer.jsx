import React from 'react';
import { Phone, Mail, Code } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { socials } from '../data/socials';
import ThemeToggle from './ThemeToggle';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Research', href: '#research' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-dark-surface/50 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          {/* Identity Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-indigo to-brand-blue p-0.5 shadow-sm">
                <div className="w-full h-full bg-white dark:bg-dark-card rounded-[6px] flex items-center justify-center">
                  <span className="text-xs font-black font-mono text-slate-900 dark:text-white">AI</span>
                </div>
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                Aman Mafij Inamdar
              </span>
            </div>
            <p className="text-sm font-semibold text-brand-indigoDark dark:text-brand-blue font-mono">
              B.Tech CSE | AI & Analytics
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Focused on engineering intelligent systems, R&D applications, computer vision, and scalable web software.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-400 hover:text-brand-indigo dark:hover:text-brand-blue transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Channels & Theme Toggle */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300">
                Direct Channels
              </h4>
              <ThemeToggle showLabel />
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              {socials.location}
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={socials.phoneTel}
                aria-label="Call Aman"
                className="p-2.5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-colors shadow-sm"
                title={socials.phone}
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={socials.emailMailto}
                aria-label="Email Aman"
                className="p-2.5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-indigo dark:hover:text-brand-blue transition-colors shadow-sm"
                title={socials.email}
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-purple-500 transition-colors shadow-sm"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              {socials.linkedin && (
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors shadow-sm"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2026 Aman Mafij Inamdar. All rights reserved.</p>
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <Code className="w-3.5 h-3.5 text-brand-indigo dark:text-brand-blue" />
            <span>Built with React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
