import React from 'react';
import {
  Camera,
  Cpu,
  Activity,
  BarChart2,
  ShieldAlert,
  Video,
  Radio,
  Newspaper,
  Server,
  Database,
  ArrowRight,
  HeartPulse,
  UserCheck,
  Stethoscope,
  Layers,
  Repeat,
  CalendarCheck
} from 'lucide-react';

/**
 * Bespoke Visual for Project 01: CrowdFlow Analytics
 * Flow: Camera → Raspberry Pi 5 → YOLOv5 → Detection Engine → Flask API → React Dashboard → Analytics / Alerts
 */
export function CrowdFlowVisual() {
  return (
    <div className="w-full rounded-2xl bg-slate-900 border border-slate-700/80 p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden font-mono text-slate-300">
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-tech-dots opacity-15 pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-800 relative z-10">
        <span className="flex items-center gap-2 text-sky-400 font-semibold">
          <Video className="w-4 h-4 text-cyan-400" />
          YOLOv5 Edge Inference Stream
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          Live Detection: 42 People
        </span>
      </div>

      {/* Visual Pipeline */}
      <div className="py-3 relative z-10">
        <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-2 font-semibold flex items-center justify-between">
          <span>Real-Time Edge Architecture</span>
          <span className="text-cyan-400">Raspberry Pi 5 + USB Cam</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px]">
          <div className="p-2 rounded-xl bg-slate-800/90 border border-slate-700 flex flex-col items-center">
            <Camera className="w-4 h-4 text-cyan-400 mb-1" />
            <span className="text-white font-semibold">1. Camera</span>
            <span className="text-[9px] text-slate-400">USB / RTSP</span>
          </div>

          <div className="p-2 rounded-xl bg-indigo-950/60 border border-indigo-500/40 flex flex-col items-center">
            <Cpu className="w-4 h-4 text-indigo-400 mb-1" />
            <span className="text-white font-semibold">2. YOLOv5</span>
            <span className="text-[9px] text-indigo-300">RPi 5 Inference</span>
          </div>

          <div className="p-2 rounded-xl bg-slate-800/90 border border-slate-700 flex flex-col items-center">
            <Server className="w-4 h-4 text-amber-400 mb-1" />
            <span className="text-white font-semibold">3. Flask API</span>
            <span className="text-[9px] text-slate-400">JSON Telemetry</span>
          </div>

          <div className="p-2 rounded-xl bg-slate-800/90 border border-slate-700 flex flex-col items-center">
            <BarChart2 className="w-4 h-4 text-emerald-400 mb-1" />
            <span className="text-white font-semibold">4. React UI</span>
            <span className="text-[9px] text-slate-400">Alerts & Density</span>
          </div>
        </div>
      </div>

      {/* Telemetry metrics bar */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 relative z-10 text-[11px]">
        <div className="p-2 rounded-lg bg-slate-800/70 border border-slate-700/60">
          <span className="text-[10px] text-slate-400 block">Density Tier</span>
          <span className="text-xs font-bold text-amber-400">Moderate (68%)</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-800/70 border border-slate-700/60">
          <span className="text-[10px] text-slate-400 block">FPS on RPi 5</span>
          <span className="text-xs font-bold text-cyan-400">18.4 FPS</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-800/70 border border-slate-700/60">
          <span className="text-[10px] text-slate-400 block">Alert Status</span>
          <span className="text-xs font-bold text-emerald-400">Normal Range</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Bespoke Visual for Project 02: Granthalay Jagat
 * Flow: React Frontend → REST API → Node.js + Express → MongoDB Atlas
 */
export function GranthalayVisual() {
  return (
    <div className="w-full rounded-2xl bg-slate-900 border border-slate-700/80 p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden font-mono text-slate-300">
      <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-800">
        <span className="text-purple-400 flex items-center gap-2 font-semibold">
          <Newspaper className="w-4 h-4 text-purple-400" />
          granthalayjagat.in
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          Production Live
        </span>
      </div>

      {/* Production News Card Simulation */}
      <div className="p-3 my-2 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span className="text-indigo-400 font-semibold">RSS Automated Syndication</span>
          <span className="text-cyan-400">Auto Synced (5m ago)</span>
        </div>
        <p className="text-xs text-white font-sans font-medium line-clamp-1">
          ग्रंथालय आणि माहितीशास्त्र क्षेत्रातील अद्ययावत घडामोडी व तंत्रज्ञान
        </p>
        <div className="flex items-center gap-2 pt-1 flex-wrap">
          <span className="px-2 py-0.5 rounded text-[9px] bg-slate-900 text-slate-300 border border-slate-700">React + Tailwind</span>
          <span className="px-2 py-0.5 rounded text-[9px] bg-slate-900 text-slate-300 border border-slate-700">Node + Express</span>
          <span className="px-2 py-0.5 rounded text-[9px] bg-slate-900 text-slate-300 border border-slate-700">MongoDB Atlas</span>
          <span className="px-2 py-0.5 rounded text-[9px] bg-slate-900 text-slate-300 border border-slate-700">JWT Secured</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
        <span>Vercel Frontend • Render API</span>
        <span className="text-emerald-400 font-semibold">HTTPS Verified</span>
      </div>
    </div>
  );
}

/**
 * Bespoke Visual for Project 03: Hospital Management System
 * Flow: Client Browser → Flask Web Engine → Flask-Login Auth → SQLAlchemy ORM → SQLite DB
 */
export function HospitalManagementVisual() {
  return (
    <div className="w-full rounded-2xl bg-slate-900 border border-slate-700/80 p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden font-mono text-slate-300">
      <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-800">
        <span className="text-cyan-400 flex items-center gap-2 font-semibold">
          <HeartPulse className="w-4 h-4 text-rose-400" />
          Clinical Management Engine
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
          Flask + SQLAlchemy
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 my-2">
        <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
          <div className="flex items-center gap-1.5 text-slate-300 text-[11px] font-semibold mb-1">
            <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Doctor Availability</span>
          </div>
          <span className="text-[10px] text-emerald-400 block font-bold">14 Doctors Active</span>
          <span className="text-[9px] text-slate-400">Real-time Slot Booking</span>
        </div>

        <div className="p-2.5 rounded-xl bg-indigo-950/50 border border-indigo-500/30">
          <div className="flex items-center gap-1.5 text-slate-300 text-[11px] font-semibold mb-1">
            <Stethoscope className="w-3.5 h-3.5 text-indigo-400" />
            <span>Symptom Checker</span>
          </div>
          <span className="text-[10px] text-indigo-300 block font-bold">Triage Categorizer</span>
          <span className="text-[9px] text-slate-400">Intelligent Flow Routing</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
        <span>SQLite + Flask-Login Auth</span>
        <span className="text-cyan-400 font-semibold">Secure Patient Workflow</span>
      </div>
    </div>
  );
}

/**
 * Bespoke Visual for Project 04: Smart Traffic & Parking Management
 * Flow: IoT Sensors → Processing Engine (ML) → Traffic Analytics Controller → React Dashboard
 */
export function TrafficVisual() {
  return (
    <div className="w-full rounded-2xl bg-slate-900 border border-slate-700/80 p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden font-mono text-slate-300">
      <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-800">
        <span className="flex items-center gap-2 text-cyan-400 font-semibold">
          <Radio className="w-4 h-4 animate-pulse text-emerald-400" />
          IoT Telemetry Stream Active
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
          ML Congestion Model
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-2">
        <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
          <span className="text-[10px] text-slate-400 block">Bay A (North)</span>
          <span className="text-xs font-bold text-emerald-400">18 / 20 Free</span>
        </div>
        <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
          <span className="text-[10px] text-slate-400 block">Junction 4</span>
          <span className="text-xs font-bold text-amber-400">Pacing: 45s</span>
        </div>
        <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
          <span className="text-[10px] text-slate-400 block">Bay B (Central)</span>
          <span className="text-xs font-bold text-emerald-400">85% Avail</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
        <span>Published Research (2026)</span>
        <span className="text-cyan-400 font-semibold">Pune Smart City Focus</span>
      </div>
    </div>
  );
}

/**
 * Bespoke Visual for Project 05: AyuBarter
 * Flow: Modern component UI, product exchange roster, AI-assisted matching
 */
export function AyuBarterVisual() {
  return (
    <div className="w-full rounded-2xl bg-slate-900 border border-slate-700/80 p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden font-mono text-slate-300">
      <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-800">
        <span className="text-emerald-400 flex items-center gap-2 font-semibold">
          <Repeat className="w-4 h-4 text-emerald-400" />
          AyuBarter Platform
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
          React Ecosystem
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 my-2">
        <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
          <span className="text-[10px] text-slate-400 block">Exchange Network</span>
          <span className="text-xs font-bold text-white block mt-0.5">Value Exchange Engine</span>
          <span className="text-[9px] text-emerald-400">Instant Listing Match</span>
        </div>
        <div className="p-2.5 rounded-xl bg-indigo-950/50 border border-indigo-500/30">
          <span className="text-[10px] text-indigo-300 block">UI Architecture</span>
          <span className="text-xs font-bold text-white block mt-0.5">Modular Components</span>
          <span className="text-[9px] text-indigo-300">REST API Integration</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
        <span>Component-Driven Design</span>
        <span className="text-cyan-400 font-semibold">Published R&D Platform</span>
      </div>
    </div>
  );
}
