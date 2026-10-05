'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  Lock,
  Unlock,
  Save,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  User,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  BookOpen,
  Trophy,
  FolderGit2,
  Users,
  LogOut,
  ExternalLink,
  Loader2,
  Shield,
  Plus,
  Trash2,
  FileCode,
  LayoutDashboard,
  Info,
  Check,
  RotateCcw
} from 'lucide-react';

const DEFAULT_USER_ID = 'amaninamdar7775@gmail.com';
const DEFAULT_PASSWORD = 'Inamdar@77';

interface SectionMeta {
  id: string;
  label: string;
  icon: any;
  description: string;
  badge?: string;
}

const SECTIONS: SectionMeta[] = [
  { id: 'education', label: 'Education', icon: GraduationCap, description: 'Degrees, colleges, CGPA & academic timeline', badge: 'Academics' },
  { id: 'certifications', label: 'Certifications', icon: Award, description: 'Professional certificates, issuers & verification links', badge: 'Credentials' },
  { id: 'skills', label: 'Technical Skills', icon: Code2, description: 'Skill categories, tech stacks & competencies', badge: 'Core' },
  { id: 'profile', label: 'Profile & Bio', icon: User, description: 'Full name, headlines, about bio & hero statistics', badge: 'Identity' },
  { id: 'socials', label: 'Social & Contact', icon: Users, description: 'LinkedIn, GitHub, LeetCode handles & contact details', badge: 'Connect' },
  { id: 'experience', label: 'Work Experience', icon: Briefcase, description: 'Internships, industry roles & responsibilities', badge: 'Career' },
  { id: 'projects', label: 'Projects', icon: FolderGit2, description: 'Showcase projects, GitHub repos & live demos', badge: 'Portfolio' },
  { id: 'publications', label: 'Publications', icon: BookOpen, description: 'Research papers, AI/IoT publications & conference venues', badge: 'R&D' },
  { id: 'achievements', label: 'Achievements', icon: Trophy, description: 'Hackathons, awards, academic milestones', badge: 'Honors' },
];

// Defensive utility functions
function toArray<T = any>(val: any): T[] {
  return Array.isArray(val) ? val : [];
}

function toObject(val: any): Record<string, any> {
  return val && typeof val === 'object' && !Array.isArray(val) ? val : {};
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>(DEFAULT_USER_ID);
  const [password, setPassword] = useState<string>(DEFAULT_PASSWORD);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>('');
  const [authLoading, setAuthLoading] = useState<boolean>(false);

  const [activeSection, setActiveSection] = useState<string>('education');
  const [editorMode, setEditorMode] = useState<'visual' | 'code'>('visual');

  // Multi-section isolated data cache to prevent cross-contamination
  const [dataCache, setDataCache] = useState<Record<string, any>>({});
  const [rawCodeCache, setRawCodeCache] = useState<Record<string, string>>({});
  const [loadingMap, setLoadingMap] = useState<Record<string, boolean>>({});
  const [saving, setSaving] = useState<boolean>(false);
  const [saveStatus, setSaveStatus] = useState<{ type: 'success' | 'error' | ''; message: string }>({ type: '', message: '' });

  // Skill tag input buffer
  const [newSkillTag, setNewSkillTag] = useState<{ [catIndex: number]: string }>({});

  // Restore authenticated session from localStorage
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('aman_admin_user');
      const savedToken = localStorage.getItem('aman_admin_token');
      if (savedUser === DEFAULT_USER_ID && savedToken === DEFAULT_PASSWORD) {
        setIsAuthenticated(true);
        setUserId(savedUser);
        setPassword(savedToken);
      }
    } catch {}
  }, []);

  // Fetch section data whenever activeSection changes or isn't cached
  const fetchSectionData = useCallback(async (sectionId: string, force = false) => {
    if (!force && dataCache[sectionId] !== undefined) {
      return; // Already cached
    }

    setLoadingMap((prev) => ({ ...prev, [sectionId]: true }));
    setSaveStatus({ type: '', message: '' });

    try {
      const res = await fetch(`/api/admin?section=${sectionId}`, {
        headers: {
          'x-admin-user': userId,
          'x-admin-token': password,
        },
      });
      const result = await res.json();
      if (res.ok) {
        setDataCache((prev) => ({ ...prev, [sectionId]: result.data }));
        setRawCodeCache((prev) => ({ ...prev, [sectionId]: result.raw || '' }));
      } else {
        setSaveStatus({ type: 'error', message: result.error || `Failed to load ${sectionId}.` });
      }
    } catch {
      setSaveStatus({ type: 'error', message: 'Network error connecting to local API.' });
    } finally {
      setLoadingMap((prev) => ({ ...prev, [sectionId]: false }));
    }
  }, [userId, password, dataCache]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchSectionData(activeSection);
    }
  }, [isAuthenticated, activeSection, fetchSectionData]);

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError('');

    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'login', userId, password }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setIsAuthenticated(true);
        try {
          localStorage.setItem('aman_admin_user', userId);
          localStorage.setItem('aman_admin_token', password);
        } catch {}
      } else {
        setAuthError(data.error || 'Invalid user ID or password.');
      }
    } catch {
      setAuthError('Unable to connect to local server. Make sure dev server is running.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    try {
      localStorage.removeItem('aman_admin_user');
      localStorage.removeItem('aman_admin_token');
    } catch {}
  };

  // Safe helper to update the current section's data
  const updateActiveData = (updater: (prev: any) => any) => {
    setDataCache((prev) => {
      const current = prev[activeSection];
      return {
        ...prev,
        [activeSection]: updater(current),
      };
    });
  };

  // Save changes (from Visual Form or Code Editor)
  const handleSave = async () => {
    setSaving(true);
    setSaveStatus({ type: '', message: '' });

    const payload = editorMode === 'visual'
      ? { section: activeSection, data: dataCache[activeSection] }
      : { section: activeSection, content: rawCodeCache[activeSection] || '' };

    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-user': userId,
          'x-admin-token': password,
        },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (res.ok && result.success) {
        setSaveStatus({
          type: 'success',
          message: result.message || 'Saved successfully! Changes are live on your portfolio.',
        });
        if (result.data !== undefined) {
          setDataCache((prev) => ({ ...prev, [activeSection]: result.data }));
        }
        if (result.raw !== undefined) {
          setRawCodeCache((prev) => ({ ...prev, [activeSection]: result.raw }));
        }
        setTimeout(() => {
          setSaveStatus((prev) => (prev.type === 'success' ? { type: '', message: '' } : prev));
        }, 5000);
      } else {
        setSaveStatus({ type: 'error', message: result.error || 'Failed to save changes.' });
      }
    } catch {
      setSaveStatus({ type: 'error', message: 'Network error. Could not save changes.' });
    } finally {
      setSaving(false);
    }
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // 1. LOGIN SCREEN (Light, Modern, Executive Aesthetics)
  // ─────────────────────────────────────────────────────────────────────────────
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 flex items-center justify-center p-4 sm:p-6 text-slate-800">
        <div className="w-full max-w-md">
          {/* Brand Icon & Heading */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-200">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Aman Inamdar Admin
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              Portfolio Content Management & Live Control Panel
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/60">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
              <Lock className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Secure Authentication
              </span>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Admin User ID (Email)
                </label>
                <input
                  type="email"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="amaninamdar7775@gmail.com"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Admin Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all pr-11 font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {authError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{authError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={authLoading}
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-bold text-sm shadow-md shadow-indigo-200 transition-all flex items-center justify-center gap-2 mt-2"
              >
                {authLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <Unlock className="w-4 h-4" />
                    <span>Access Dashboard</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono text-[11px]">User: amaninamdar7775@gmail.com</span>
              <a
                href="/"
                className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1"
              >
                View Website ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. MAIN ADMIN DASHBOARD (Light, Clean, SaaS Aesthetics)
  // ─────────────────────────────────────────────────────────────────────────────
  const currentSectionMeta = SECTIONS.find((s) => s.id === activeSection) || SECTIONS[0];
  const isCurrentSectionLoading = !!loadingMap[activeSection];
  const activeData = dataCache[activeSection];
  const activeRawCode = rawCodeCache[activeSection] || '';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-600 text-white flex items-center justify-center font-black text-sm shadow-sm shadow-indigo-200">
              AI
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-extrabold text-slate-900 tracking-tight">
                  Aman Inamdar Admin
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-mono hidden sm:block">
                Logged in as: {userId}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Main Site</span>
            </a>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-6 sm:py-8">
        {saveStatus.message && (
          <div
            className={`mb-6 p-4 rounded-2xl border flex items-center justify-between text-xs sm:text-sm font-medium transition-all ${
              saveStatus.type === 'success'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-red-50 border-red-200 text-red-800'
            }`}
          >
            <div className="flex items-center gap-2.5">
              {saveStatus.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
              )}
              <span>{saveStatus.message}</span>
            </div>
            {saveStatus.type === 'success' && (
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold hover:text-emerald-950 ml-4 shrink-0"
              >
                Check live website ↗
              </a>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Navigation: Section Tabs */}
          <div className="lg:col-span-3 space-y-1.5 bg-white p-3 rounded-3xl border border-slate-200/90 shadow-sm">
            <div className="px-3 py-2 text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
              Portfolio Content
            </div>

            {SECTIONS.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-3.5 py-3 rounded-2xl flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                    <span className="text-xs sm:text-sm truncate">{section.label}</span>
                  </div>
                  {section.badge && (
                    <span
                      className={`text-[9px] font-mono px-2 py-0.5 rounded-md uppercase font-bold shrink-0 ${
                        isActive
                          ? 'bg-indigo-700/80 text-white'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {section.badge}
                    </span>
                  )}
                </button>
              );
            })}

            <div className="mt-4 pt-3 border-t border-slate-100 px-3">
              <p className="text-[11px] text-slate-500 font-medium">
                💡 Tip: When you save here, the main portfolio updates immediately.
              </p>
            </div>
          </div>

          {/* Right Editor Area */}
          <div className="lg:col-span-9 bg-white border border-slate-200/90 rounded-3xl shadow-sm overflow-hidden flex flex-col">
            {/* Header of Active Section */}
            <div className="px-6 py-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                  <currentSectionMeta.icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900">
                    {currentSectionMeta.label}
                  </h2>
                  <p className="text-xs text-slate-500">
                    {currentSectionMeta.description}
                  </p>
                </div>
              </div>

              {/* Mode Toggle & Save Button */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="bg-slate-200/70 p-1 rounded-xl flex items-center text-xs font-semibold text-slate-600">
                  <button
                    type="button"
                    onClick={() => setEditorMode('visual')}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                      editorMode === 'visual'
                        ? 'bg-white text-indigo-700 shadow-xs font-bold'
                        : 'hover:text-slate-900'
                    }`}
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>Visual Form</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditorMode('code')}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                      editorMode === 'code'
                        ? 'bg-white text-indigo-700 shadow-xs font-bold'
                        : 'hover:text-slate-900'
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5" />
                    <span>TypeScript Code</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleSave}
                  disabled={saving || isCurrentSectionLoading}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white text-xs font-bold shadow-md shadow-indigo-200 transition-all flex items-center gap-1.5"
                >
                  {saving ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-3.5 h-3.5" />
                      <span>Save Changes</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6">
              {isCurrentSectionLoading && activeData === undefined ? (
                <div className="py-24 text-center">
                  <Loader2 className="w-8 h-8 animate-spin mx-auto text-indigo-600 mb-2" />
                  <p className="text-xs text-slate-500 font-mono">Loading {currentSectionMeta.label} data...</p>
                </div>
              ) : editorMode === 'code' ? (
                /* ─── RAW CODE EDITOR MODE ─── */
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>Editing: src/data/{activeSection}.ts</span>
                    <span>UTF-8 • TypeScript</span>
                  </div>
                  <textarea
                    value={activeRawCode}
                    onChange={(e) => {
                      const val = e.target.value;
                      setRawCodeCache((prev) => ({ ...prev, [activeSection]: val }));
                    }}
                    spellCheck={false}
                    className="w-full min-h-[550px] p-4 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs sm:text-[13px] leading-relaxed focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y border border-slate-800"
                  />
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>{activeRawCode.split('\n').length} lines • {activeRawCode.length} characters</span>
                    <button
                      type="button"
                      onClick={() => fetchSectionData(activeSection, true)}
                      className="text-slate-500 hover:text-slate-700 underline"
                    >
                      Reload from disk
                    </button>
                  </div>
                </div>
              ) : (
                /* ─── VISUAL FORM EDITOR MODE ─── */
                <div>
                  {/* EDUCATION SECTION */}
                  {activeSection === 'education' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-bold text-slate-900">Academic History</h3>
                          <p className="text-xs text-slate-500">Add or update your university degrees, colleges and school records</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const newItem = {
                              id: `edu-${Date.now()}`,
                              institution: 'New Institution Name',
                              degree: 'Degree / Certificate',
                              period: '2026 – Present',
                              grade: '8.5 CGPA',
                              gradeLabel: 'CGPA',
                              location: 'Pune, Maharashtra, India',
                              isCurrent: false,
                            };
                            updateActiveData((prev) => [...toArray(prev), newItem]);
                          }}
                          className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200 transition-colors flex items-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add Education</span>
                        </button>
                      </div>

                      <div className="space-y-4">
                        {toArray(activeData).map((item: any, idx: number) => (
                          <div
                            key={item.id || idx}
                            className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all shadow-xs space-y-4"
                          >
                            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                              <div className="flex items-center gap-2">
                                <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center">
                                  {idx + 1}
                                </span>
                                <span className="text-sm font-bold text-slate-800">
                                  {item.institution || 'Institution'}
                                </span>
                                {item.isCurrent && (
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                                    Current
                                  </span>
                                )}
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  if (confirm('Delete this education entry?')) {
                                    updateActiveData((prev) => toArray(prev).filter((_, i) => i !== idx));
                                  }
                                }}
                                className="text-red-500 hover:text-red-700 p-1.5 rounded-lg hover:bg-red-50 transition-colors"
                                title="Delete"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                              <div>
                                <label className="block font-semibold text-slate-700 mb-1">Institution / University</label>
                                <input
                                  type="text"
                                  value={item.institution || ''}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateActiveData((prev) =>
                                      toArray(prev).map((it, i) => (i === idx ? { ...it, institution: val } : it))
                                    );
                                  }}
                                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium"
                                />
                              </div>

                              <div>
                                <label className="block font-semibold text-slate-700 mb-1">Degree / Course</label>
                                <input
                                  type="text"
                                  value={item.degree || ''}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateActiveData((prev) =>
                                      toArray(prev).map((it, i) => (i === idx ? { ...it, degree: val } : it))
                                    );
                                  }}
                                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium"
                                />
                              </div>

                              <div>
                                <label className="block font-semibold text-slate-700 mb-1">Duration / Period</label>
                                <input
                                  type="text"
                                  value={item.period || ''}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateActiveData((prev) =>
                                      toArray(prev).map((it, i) => (i === idx ? { ...it, period: val } : it))
                                    );
                                  }}
                                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium"
                                />
                              </div>

                              <div>
                                <label className="block font-semibold text-slate-700 mb-1">Grade / CGPA</label>
                                <input
                                  type="text"
                                  value={item.grade || ''}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateActiveData((prev) =>
                                      toArray(prev).map((it, i) => (i === idx ? { ...it, grade: val } : it))
                                    );
                                  }}
                                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-bold text-indigo-600"
                                />
                              </div>

                              <div>
                                <label className="block font-semibold text-slate-700 mb-1">Grade Label</label>
                                <input
                                  type="text"
                                  value={item.gradeLabel || ''}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateActiveData((prev) =>
                                      toArray(prev).map((it, i) => (i === idx ? { ...it, gradeLabel: val } : it))
                                    );
                                  }}
                                  placeholder="e.g. Current CGPA"
                                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium"
                                />
                              </div>

                              <div>
                                <label className="block font-semibold text-slate-700 mb-1">Location</label>
                                <input
                                  type="text"
                                  value={item.location || ''}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateActiveData((prev) =>
                                      toArray(prev).map((it, i) => (i === idx ? { ...it, location: val } : it))
                                    );
                                  }}
                                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium"
                                />
                              </div>
                            </div>

                            <div className="flex items-center gap-2 pt-1">
                              <input
                                type="checkbox"
                                id={`curr-${idx}`}
                                checked={!!item.isCurrent}
                                onChange={(e) => {
                                  const checked = e.target.checked;
                                  updateActiveData((prev) =>
                                    toArray(prev).map((it, i) => (i === idx ? { ...it, isCurrent: checked } : it))
                                  );
                                }}
                                className="w-4 h-4 rounded text-indigo-600"
                              />
                              <label htmlFor={`curr-${idx}`} className="text-xs text-slate-700 font-semibold cursor-pointer">
                                Currently pursuing this degree
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CERTIFICATIONS SECTION */}
                  {activeSection === 'certifications' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-bold text-slate-900">Certifications & Credentials</h3>
                          <p className="text-xs text-slate-500">Update professional certifications, issuing authorities, and verification links</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const newCert = {
                              id: `cert-${Date.now()}`,
                              name: 'New Certification Title',
                              issuer: 'Issuing Authority (e.g. AWS / Google / IBM)',
                              domain: 'Domain (e.g. Cloud / AI / Software)',
                              url: null,
                            };
                            updateActiveData((prev) => [...toArray(prev), newCert]);
                          }}
                          className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200 transition-colors flex items-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add Certification</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {toArray(activeData).map((cert: any, idx: number) => (
                          <div
                            key={cert.id || idx}
                            className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all shadow-xs space-y-3"
                          >
                            <div className="flex items-start justify-between">
                              <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center shrink-0">
                                {idx + 1}
                              </span>
                              <button
                                type="button"
                                onClick={() => {
                                  if (confirm('Delete this certification?')) {
                                    updateActiveData((prev) => toArray(prev).filter((_, i) => i !== idx));
                                  }
                                }}
                                className="text-red-500 hover:text-red-700 p-1 rounded-lg hover:bg-red-50 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>

                            <div className="space-y-3 text-xs">
                              <div>
                                <label className="block font-semibold text-slate-700 mb-1">Certification Name</label>
                                <input
                                  type="text"
                                  value={cert.name || ''}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateActiveData((prev) =>
                                      toArray(prev).map((it, i) => (i === idx ? { ...it, name: val } : it))
                                    );
                                  }}
                                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-semibold"
                                />
                              </div>

                              <div className="grid grid-cols-2 gap-2">
                                <div>
                                  <label className="block font-semibold text-slate-700 mb-1">Issuer Authority</label>
                                  <input
                                    type="text"
                                    value={cert.issuer || ''}
                                    onChange={(e) => {
                                      const val = e.target.value;
                                      updateActiveData((prev) =>
                                        toArray(prev).map((it, i) => (i === idx ? { ...it, issuer: val } : it))
                                      );
                                    }}
                                    placeholder="e.g. AWS Academy"
                                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium"
                                  />
                                </div>

                                <div>
                                  <label className="block font-semibold text-slate-700 mb-1">Year (Optional)</label>
                                  <input
                                    type="text"
                                    value={cert.year || ''}
                                    onChange={(e) => {
                                      const val = e.target.value;
                                      updateActiveData((prev) =>
                                        toArray(prev).map((it, i) => (i === idx ? { ...it, year: val } : it))
                                      );
                                    }}
                                    placeholder="2025"
                                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium"
                                  />
                                </div>
                              </div>

                              <div>
                                <label className="block font-semibold text-slate-700 mb-1">Domain / Field</label>
                                <input
                                  type="text"
                                  value={cert.domain || ''}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateActiveData((prev) =>
                                      toArray(prev).map((it, i) => (i === idx ? { ...it, domain: val } : it))
                                    );
                                  }}
                                  placeholder="e.g. Cloud Computing & Infrastructure"
                                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium"
                                />
                              </div>

                              <div>
                                <label className="block font-semibold text-slate-700 mb-1">Verification URL / Credential Link</label>
                                <input
                                  type="text"
                                  value={cert.url || ''}
                                  onChange={(e) => {
                                    const val = e.target.value || null;
                                    updateActiveData((prev) =>
                                      toArray(prev).map((it, i) => (i === idx ? { ...it, url: val } : it))
                                    );
                                  }}
                                  placeholder="https://... or leave empty"
                                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-mono text-[11px]"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TECHNICAL SKILLS SECTION */}
                  {activeSection === 'skills' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">Technical Skill Categories</h3>
                        <p className="text-xs text-slate-500">Manage your programming languages, frameworks, AI/ML tools and platforms</p>
                      </div>

                      <div className="space-y-5">
                        {toArray(activeData).map((cat: any, cIdx: number) => (
                          <div
                            key={cat.id || cIdx}
                            className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all shadow-xs space-y-4"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                              <div className="flex items-center gap-2">
                                <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center">
                                  {cIdx + 1}
                                </span>
                                <input
                                  type="text"
                                  value={cat.name || ''}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateActiveData((prev) =>
                                      toArray(prev).map((c, i) => (i === cIdx ? { ...c, name: val } : c))
                                    );
                                  }}
                                  className="font-bold text-sm text-slate-900 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-indigo-500 focus:outline-none"
                                />
                              </div>
                              <input
                                type="text"
                                value={cat.description || ''}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateActiveData((prev) =>
                                    toArray(prev).map((c, i) => (i === cIdx ? { ...c, description: val } : c))
                                  );
                                }}
                                placeholder="Short description"
                                className="text-xs text-slate-500 bg-transparent sm:text-right focus:outline-none focus:text-slate-700 w-full sm:w-80"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-slate-600 mb-2">
                                Skills in this category (Click &times; to remove):
                              </label>
                              <div className="flex flex-wrap gap-2 items-center">
                                {toArray(cat.skills).map((skill: string, sIdx: number) => (
                                  <span
                                    key={sIdx}
                                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold hover:border-slate-300 transition-colors"
                                  >
                                    <span>{skill}</span>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        updateActiveData((prev) =>
                                          toArray(prev).map((c, i) =>
                                            i === cIdx
                                              ? { ...c, skills: toArray(c.skills).filter((_: any, j: number) => j !== sIdx) }
                                              : c
                                          )
                                        );
                                      }}
                                      className="text-slate-400 hover:text-red-500 transition-colors"
                                    >
                                      &times;
                                    </button>
                                  </span>
                                ))}

                                <div className="inline-flex items-center gap-1">
                                  <input
                                    type="text"
                                    value={newSkillTag[cIdx] || ''}
                                    onChange={(e) =>
                                      setNewSkillTag((prev) => ({ ...prev, [cIdx]: e.target.value }))
                                    }
                                    onKeyDown={(e) => {
                                      if (e.key === 'Enter') {
                                        e.preventDefault();
                                        const val = (newSkillTag[cIdx] || '').trim();
                                        if (val) {
                                          updateActiveData((prev) =>
                                            toArray(prev).map((c, i) =>
                                              i === cIdx ? { ...c, skills: [...toArray(c.skills), val] } : c
                                            )
                                          );
                                          setNewSkillTag((prev) => ({ ...prev, [cIdx]: '' }));
                                        }
                                      }
                                    }}
                                    placeholder="+ Add skill (Press Enter)"
                                    className="px-3 py-1 rounded-xl bg-slate-50 border border-dashed border-slate-300 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* PROFILE & BIO SECTION */}
                  {activeSection === 'profile' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">Personal & Hero Information</h3>
                        <p className="text-xs text-slate-500">Edit headline, subheadline, factual numbers, and about bio</p>
                      </div>

                      {(() => {
                        const prof = toObject(activeData);
                        return (
                          <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                              <div>
                                <label className="block font-semibold text-slate-700 mb-1">Full Name</label>
                                <input
                                  type="text"
                                  value={prof.fullName || ''}
                                  onChange={(e) => updateActiveData((p) => ({ ...toObject(p), fullName: e.target.value }))}
                                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-semibold"
                                />
                              </div>

                              <div>
                                <label className="block font-semibold text-slate-700 mb-1">Professional Role / Positioning</label>
                                <input
                                  type="text"
                                  value={prof.role || ''}
                                  onChange={(e) => updateActiveData((p) => ({ ...toObject(p), role: e.target.value }))}
                                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-semibold"
                                />
                              </div>

                              <div>
                                <label className="block font-semibold text-slate-700 mb-1">Hero Eyebrow Tagline</label>
                                <input
                                  type="text"
                                  value={prof.eyebrow || ''}
                                  onChange={(e) => updateActiveData((p) => ({ ...toObject(p), eyebrow: e.target.value }))}
                                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium"
                                />
                              </div>

                              <div>
                                <label className="block font-semibold text-slate-700 mb-1">Hero Headline</label>
                                <input
                                  type="text"
                                  value={prof.headline || ''}
                                  onChange={(e) => updateActiveData((p) => ({ ...toObject(p), headline: e.target.value }))}
                                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-semibold"
                                />
                              </div>
                            </div>

                            <div className="text-xs">
                              <label className="block font-semibold text-slate-700 mb-1">Hero Subheadline</label>
                              <textarea
                                rows={2}
                                value={prof.subheadline || ''}
                                onChange={(e) => updateActiveData((p) => ({ ...toObject(p), subheadline: e.target.value }))}
                                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-medium"
                              />
                            </div>

                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                                Key Numbers & Stats
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                                {toArray(prof.stats).map((st: any, sIdx: number) => (
                                  <div key={sIdx} className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                                    <label className="block font-semibold text-slate-600 text-[11px]">{st.label}</label>
                                    <input
                                      type="text"
                                      value={st.value || ''}
                                      onChange={(e) => {
                                        const val = e.target.value;
                                        updateActiveData((p) => {
                                          const prevObj = toObject(p);
                                          const newStats = [...toArray(prevObj.stats)];
                                          newStats[sIdx] = { ...newStats[sIdx], value: val };
                                          return { ...prevObj, stats: newStats };
                                        });
                                      }}
                                      className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-900 font-bold text-sm text-indigo-600"
                                    />
                                    <input
                                      type="text"
                                      value={st.description || ''}
                                      onChange={(e) => {
                                        const val = e.target.value;
                                        updateActiveData((p) => {
                                          const prevObj = toObject(p);
                                          const newStats = [...toArray(prevObj.stats)];
                                          newStats[sIdx] = { ...newStats[sIdx], description: val };
                                          return { ...prevObj, stats: newStats };
                                        });
                                      }}
                                      placeholder="Subtitle"
                                      className="w-full px-2 py-1 rounded-md bg-transparent text-[10px] text-slate-500 border-none focus:outline-none"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                                About Me Bio Paragraphs
                              </h4>
                              <div className="space-y-3">
                                {toArray(prof.aboutBio).map((para: string, pIdx: number) => (
                                  <div key={pIdx} className="space-y-1 text-xs">
                                    <label className="block text-[11px] font-semibold text-slate-500">
                                      Paragraph {pIdx + 1}
                                    </label>
                                    <textarea
                                      rows={3}
                                      value={para}
                                      onChange={(e) => {
                                        const val = e.target.value;
                                        updateActiveData((p) => {
                                          const prevObj = toObject(p);
                                          const newBio = [...toArray(prevObj.aboutBio)];
                                          newBio[pIdx] = val;
                                          return { ...prevObj, aboutBio: newBio };
                                        });
                                      }}
                                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs leading-relaxed focus:bg-white focus:outline-none"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}

                  {/* SOCIAL & CONTACT LINKS */}
                  {activeSection === 'socials' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">Contact Details & Social Profiles</h3>
                        <p className="text-xs text-slate-500">Update your email, phone, location, LinkedIn, GitHub and LeetCode handles</p>
                      </div>

                      {(() => {
                        const soc = toObject(activeData);
                        const contact = toObject(soc.contactDetails);
                        const links = toArray(soc.socialLinks);

                        return (
                          <div className="space-y-6">
                            <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                                Direct Contact Channels
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                                <div>
                                  <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
                                  <input
                                    type="email"
                                    value={contact.email || ''}
                                    onChange={(e) => {
                                      const val = e.target.value;
                                      updateActiveData((s) => ({
                                        ...toObject(s),
                                        contactDetails: { ...toObject(toObject(s).contactDetails), email: val },
                                      }));
                                    }}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium"
                                  />
                                </div>

                                <div>
                                  <label className="block font-semibold text-slate-700 mb-1">Phone Number</label>
                                  <input
                                    type="text"
                                    value={contact.phone || ''}
                                    onChange={(e) => {
                                      const val = e.target.value;
                                      updateActiveData((s) => ({
                                        ...toObject(s),
                                        contactDetails: { ...toObject(toObject(s).contactDetails), phone: val },
                                      }));
                                    }}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium"
                                  />
                                </div>

                                <div>
                                  <label className="block font-semibold text-slate-700 mb-1">Location</label>
                                  <input
                                    type="text"
                                    value={contact.location || ''}
                                    onChange={(e) => {
                                      const val = e.target.value;
                                      updateActiveData((s) => ({
                                        ...toObject(s),
                                        contactDetails: { ...toObject(toObject(s).contactDetails), location: val },
                                      }));
                                    }}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-xs">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                                Professional Social Handles & URLs
                              </h4>
                              <div className="space-y-3">
                                {links.map((link: any, idx: number) => (
                                  <div
                                    key={link.id || idx}
                                    className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                                  >
                                    <div className="flex items-center gap-2.5 min-w-[120px]">
                                      <span className="font-bold text-slate-900">{link.name}</span>
                                    </div>
                                    <div className="flex-1">
                                      <input
                                        type="text"
                                        value={link.url || ''}
                                        onChange={(e) => {
                                          const val = e.target.value;
                                          updateActiveData((s) => {
                                            const prevObj = toObject(s);
                                            const updated = [...toArray(prevObj.socialLinks)];
                                            updated[idx] = { ...updated[idx], url: val, isPlaceholder: false };
                                            return { ...prevObj, socialLinks: updated };
                                          });
                                        }}
                                        placeholder={`Enter your ${link.name} profile URL`}
                                        className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-mono text-[11px] focus:outline-none focus:border-indigo-500"
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}

                  {/* EXPERIENCE SECTION */}
                  {activeSection === 'experience' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-bold text-slate-900">Work Experience & Internships</h3>
                          <p className="text-xs text-slate-500">Manage your internships, engineering roles and responsibilities</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const newExp = {
                              id: `exp-${Date.now()}`,
                              role: 'New Engineering Role / Intern',
                              company: 'Company Name',
                              period: '2026',
                              location: 'Pune, India',
                              type: 'Internship',
                              description: 'Brief overview of responsibilities and technical contributions.',
                              responsibilities: [
                                'Contributed to software engineering workflows',
                                'Conducted system testing and debugging',
                              ],
                              technologies: ['React.js', 'Python', 'REST APIs'],
                            };
                            updateActiveData((prev) => [...toArray(prev), newExp]);
                          }}
                          className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200 transition-colors flex items-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add Experience</span>
                        </button>
                      </div>

                      <div className="space-y-4">
                        {toArray(activeData).map((exp: any, idx: number) => (
                          <div
                            key={exp.id || idx}
                            className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all shadow-xs space-y-4 text-xs"
                          >
                            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                              <span className="font-bold text-sm text-slate-900">
                                {exp.role} • {exp.company}
                              </span>
                              <button
                                type="button"
                                onClick={() => {
                                  if (confirm('Delete this experience entry?')) {
                                    updateActiveData((prev) => toArray(prev).filter((_, i) => i !== idx));
                                  }
                                }}
                                className="text-red-500 hover:text-red-700 p-1"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              <div>
                                <label className="block font-semibold text-slate-700 mb-1">Role Title</label>
                                <input
                                  type="text"
                                  value={exp.role || ''}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateActiveData((prev) =>
                                      toArray(prev).map((it, i) => (i === idx ? { ...it, role: val } : it))
                                    );
                                  }}
                                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-semibold"
                                />
                              </div>

                              <div>
                                <label className="block font-semibold text-slate-700 mb-1">Company / Organization</label>
                                <input
                                  type="text"
                                  value={exp.company || ''}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateActiveData((prev) =>
                                      toArray(prev).map((it, i) => (i === idx ? { ...it, company: val } : it))
                                    );
                                  }}
                                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-semibold"
                                />
                              </div>

                              <div>
                                <label className="block font-semibold text-slate-700 mb-1">Period / Year</label>
                                <input
                                  type="text"
                                  value={exp.period || ''}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateActiveData((prev) =>
                                      toArray(prev).map((it, i) => (i === idx ? { ...it, period: val } : it))
                                    );
                                  }}
                                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block font-semibold text-slate-700 mb-1">Summary Description</label>
                              <textarea
                                rows={2}
                                value={exp.description || ''}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateActiveData((prev) =>
                                    toArray(prev).map((it, i) => (i === idx ? { ...it, description: val } : it))
                                  );
                                }}
                                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* PUBLICATIONS SECTION */}
                  {activeSection === 'publications' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-bold text-slate-900">Research & Publications</h3>
                          <p className="text-xs text-slate-500">Manage research papers, published topics, and DOI/URL links</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const newPub = {
                              id: `pub-${Date.now()}`,
                              number: '03',
                              title: 'New Research Paper Title',
                              year: '2026',
                              description: 'Description of research findings and methodologies.',
                              topics: ['AI & ML', 'Intelligent Systems'],
                              url: null,
                            };
                            updateActiveData((prev) => {
                              const pubObj = toObject(prev);
                              const pubList = toArray(pubObj.publications);
                              return {
                                ...pubObj,
                                publications: [...pubList, newPub],
                              };
                            });
                          }}
                          className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200 transition-colors flex items-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add Publication</span>
                        </button>
                      </div>

                      {(() => {
                        const pubObj = toObject(activeData);
                        const pubList = toArray(pubObj.publications);

                        return (
                          <div className="space-y-4">
                            {pubList.map((pub: any, idx: number) => (
                              <div
                                key={pub.id || idx}
                                className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all shadow-xs space-y-3 text-xs"
                              >
                                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                                  <span className="font-mono text-xs font-bold text-indigo-600">
                                    Paper {pub.number || idx + 1}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      if (confirm('Delete this publication?')) {
                                        updateActiveData((prev) => {
                                          const prevObj = toObject(prev);
                                          return {
                                            ...prevObj,
                                            publications: toArray(prevObj.publications).filter((_, i) => i !== idx),
                                          };
                                        });
                                      }
                                    }}
                                    className="text-red-500 hover:text-red-700 p-1"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                                  <div className="sm:col-span-3">
                                    <label className="block font-semibold text-slate-700 mb-1">Paper Title</label>
                                    <input
                                      type="text"
                                      value={pub.title || ''}
                                      onChange={(e) => {
                                        const val = e.target.value;
                                        updateActiveData((prev) => {
                                          const prevObj = toObject(prev);
                                          const updated = [...toArray(prevObj.publications)];
                                          updated[idx] = { ...updated[idx], title: val };
                                          return { ...prevObj, publications: updated };
                                        });
                                      }}
                                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-semibold"
                                    />
                                  </div>

                                  <div>
                                    <label className="block font-semibold text-slate-700 mb-1">Year</label>
                                    <input
                                      type="text"
                                      value={pub.year || ''}
                                      onChange={(e) => {
                                        const val = e.target.value;
                                        updateActiveData((prev) => {
                                          const prevObj = toObject(prev);
                                          const updated = [...toArray(prevObj.publications)];
                                          updated[idx] = { ...updated[idx], year: val };
                                          return { ...prevObj, publications: updated };
                                        });
                                      }}
                                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium"
                                    />
                                  </div>
                                </div>

                                <div>
                                  <label className="block font-semibold text-slate-700 mb-1">Abstract / Summary</label>
                                  <textarea
                                    rows={2}
                                    value={pub.description || ''}
                                    onChange={(e) => {
                                      const val = e.target.value;
                                      updateActiveData((prev) => {
                                        const prevObj = toObject(prev);
                                        const updated = [...toArray(prevObj.publications)];
                                        updated[idx] = { ...updated[idx], description: val };
                                        return { ...prevObj, publications: updated };
                                      });
                                    }}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800"
                                  />
                                </div>

                                <div>
                                  <label className="block font-semibold text-slate-700 mb-1">Published URL / DOI Link</label>
                                  <input
                                    type="text"
                                    value={pub.url || ''}
                                    onChange={(e) => {
                                      const val = e.target.value || null;
                                      updateActiveData((prev) => {
                                        const prevObj = toObject(prev);
                                        const updated = [...toArray(prevObj.publications)];
                                        updated[idx] = { ...updated[idx], url: val };
                                        return { ...prevObj, publications: updated };
                                      });
                                    }}
                                    placeholder="https://doi.org/... or publication link"
                                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-mono text-[11px]"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        );
                      })()}
                    </div>
                  )}

                  {/* ACHIEVEMENTS SECTION */}
                  {activeSection === 'achievements' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-bold text-slate-900">Key Achievements & Honors</h3>
                          <p className="text-xs text-slate-500">Add awards, hackathons, academic recognition and leadership milestones</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const newAch = {
                              id: `ach-${Date.now()}`,
                              title: 'New Milestone / Honor',
                              category: 'Hackathon / Academic',
                              year: '2026',
                              description: 'Details and outcome of the achievement.',
                              icon: 'Trophy',
                            };
                            updateActiveData((prev) => [...toArray(prev), newAch]);
                          }}
                          className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200 transition-colors flex items-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add Achievement</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {toArray(activeData).map((ach: any, idx: number) => (
                          <div
                            key={ach.id || idx}
                            className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all shadow-xs space-y-3 text-xs"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-slate-900 text-sm">{ach.title}</span>
                              <button
                                type="button"
                                onClick={() => {
                                  if (confirm('Delete this achievement?')) {
                                    updateActiveData((prev) => toArray(prev).filter((_, i) => i !== idx));
                                  }
                                }}
                                className="text-red-500 hover:text-red-700 p-1"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <label className="block font-semibold text-slate-700 mb-1">Category</label>
                                <input
                                  type="text"
                                  value={ach.category || ''}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateActiveData((prev) =>
                                      toArray(prev).map((it, i) => (i === idx ? { ...it, category: val } : it))
                                    );
                                  }}
                                  className="w-full px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium"
                                />
                              </div>

                              <div>
                                <label className="block font-semibold text-slate-700 mb-1">Year</label>
                                <input
                                  type="text"
                                  value={ach.year || ''}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    updateActiveData((prev) =>
                                      toArray(prev).map((it, i) => (i === idx ? { ...it, year: val } : it))
                                    );
                                  }}
                                  className="w-full px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block font-semibold text-slate-700 mb-1">Description</label>
                              <textarea
                                rows={2}
                                value={ach.description || ''}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  updateActiveData((prev) =>
                                    toArray(prev).map((it, i) => (i === idx ? { ...it, description: val } : it))
                                  );
                                }}
                                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* PROJECTS SECTION */}
                  {activeSection === 'projects' && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 flex items-start gap-2.5">
                        <Info className="w-4 h-4 shrink-0 text-indigo-600 mt-0.5" />
                        <div>
                          <p className="font-bold">Comprehensive Project Data</p>
                          <p className="mt-0.5 text-indigo-800">
                            Projects contain in-depth technical architecture and problem statements. You can update key details below or switch to <strong>TypeScript Code</strong> tab for advanced modifications.
                          </p>
                        </div>
                      </div>

                      {(() => {
                        const projObj = toObject(activeData);
                        const projList = toArray(projObj.projects);

                        return (
                          <div className="space-y-4">
                            {projList.map((proj: any, idx: number) => (
                              <div
                                key={proj.id || idx}
                                className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all shadow-xs space-y-3 text-xs"
                              >
                                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                                  <span className="font-bold text-sm text-slate-900">{proj.title}</span>
                                  <span className="font-mono text-slate-500">{proj.year}</span>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  <div>
                                    <label className="block font-semibold text-slate-700 mb-1">Project Title</label>
                                    <input
                                      type="text"
                                      value={proj.title || ''}
                                      onChange={(e) => {
                                        const val = e.target.value;
                                        updateActiveData((prev) => {
                                          const prevObj = toObject(prev);
                                          const updated = [...toArray(prevObj.projects)];
                                          updated[idx] = { ...updated[idx], title: val };
                                          return { ...prevObj, projects: updated };
                                        });
                                      }}
                                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-semibold"
                                    />
                                  </div>

                                  <div>
                                    <label className="block font-semibold text-slate-700 mb-1">Category Header</label>
                                    <input
                                      type="text"
                                      value={proj.category || ''}
                                      onChange={(e) => {
                                        const val = e.target.value;
                                        updateActiveData((prev) => {
                                          const prevObj = toObject(prev);
                                          const updated = [...toArray(prevObj.projects)];
                                          updated[idx] = { ...updated[idx], category: val };
                                          return { ...prevObj, projects: updated };
                                        });
                                      }}
                                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium"
                                    />
                                  </div>
                                </div>

                                <div>
                                  <label className="block font-semibold text-slate-700 mb-1">Short Description</label>
                                  <textarea
                                    rows={2}
                                    value={proj.shortDescription || ''}
                                    onChange={(e) => {
                                      const val = e.target.value;
                                      updateActiveData((prev) => {
                                        const prevObj = toObject(prev);
                                        const updated = [...toArray(prevObj.projects)];
                                        updated[idx] = { ...updated[idx], shortDescription: val };
                                        return { ...prevObj, projects: updated };
                                      });
                                    }}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800"
                                  />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  <div>
                                    <label className="block font-semibold text-slate-700 mb-1">GitHub Repo URL</label>
                                    <input
                                      type="text"
                                      value={proj.githubUrl || ''}
                                      onChange={(e) => {
                                        const val = e.target.value || null;
                                        updateActiveData((prev) => {
                                          const prevObj = toObject(prev);
                                          const updated = [...toArray(prevObj.projects)];
                                          updated[idx] = { ...updated[idx], githubUrl: val };
                                          return { ...prevObj, projects: updated };
                                        });
                                      }}
                                      placeholder="https://github.com/..."
                                      className="w-full px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-mono text-[11px]"
                                    />
                                  </div>

                                  <div>
                                    <label className="block font-semibold text-slate-700 mb-1">Live Demo URL</label>
                                    <input
                                      type="text"
                                      value={proj.liveUrl || ''}
                                      onChange={(e) => {
                                        const val = e.target.value || null;
                                        updateActiveData((prev) => {
                                          const prevObj = toObject(prev);
                                          const updated = [...toArray(prevObj.projects)];
                                          updated[idx] = { ...updated[idx], liveUrl: val };
                                          return { ...prevObj, projects: updated };
                                        });
                                      }}
                                      placeholder="https://..."
                                      className="w-full px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-mono text-[11px]"
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
