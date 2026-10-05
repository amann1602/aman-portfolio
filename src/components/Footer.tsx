'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '@/components/Icons';
import { socialLinks } from '@/data/socials';

const socialIcons: Record<string, React.ReactNode> = {
  Linkedin: <LinkedinIcon className="w-4 h-4" />,
  Github: <GithubIcon className="w-4 h-4" />,
  Code: <LeetcodeIcon className="w-4 h-4" />,
  Mail: <Mail className="w-4 h-4" />
};

const footerNavLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Publications', href: '/#publications' },
  { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Identity & Mission */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center font-bold text-sm tracking-tight">
                AI
              </div>
              <span className="font-extrabold text-slate-900 dark:text-white text-lg tracking-tight">
                Aman Inamdar
              </span>
            </div>

            <p className="text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400">
              AI & Analytics • Software • R&D • Innovation
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm">
              Building intelligent solutions with purpose and impact.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block mb-3">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              {footerNavLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block">
              Connect & Source
            </span>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-all hover:scale-105"
                  title={link.name}
                >
                  {socialIcons[link.icon]}
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors pt-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <p className="flex items-center gap-2">
            <span>© 2026 Aman Mafij Inamdar. All rights reserved.</span>
            <span>•</span>
            <Link
              href="/admin"
              className="text-slate-400 hover:text-indigo-600 dark:text-slate-600 dark:hover:text-indigo-400 transition-colors"
              title="Admin Portal"
            >
              Admin
            </Link>
          </p>
          <p className="flex items-center gap-2">
            <span>Designed for recruiters, hiring managers & R&D teams</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
