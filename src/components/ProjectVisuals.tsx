import React from 'react';
import {
  Camera,
  Cpu,
  BarChart2,
  Server,
  Radio,
  Repeat,
  Layers,
  Zap,
  Train,
  Smile,
  ShieldCheck,
  Building,
  Database,
  CreditCard,
  Film,
  Code
} from 'lucide-react';

/**
 * Bespoke Visual for Smart Traffic & Parking Management System
 */
export function TrafficVisual() {
  return (
    <div className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col justify-between font-mono text-slate-700 dark:text-slate-300">
      <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200 dark:border-slate-800">
        <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
          <Radio className="w-4 h-4 animate-pulse text-indigo-500" />
          IoT Telemetry Stream Active
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60 font-medium">
          ML Congestion Model
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-3 text-center">
        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs">
          <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-sans">Bay A (North)</span>
          <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">18 / 20 Free</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs">
          <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-sans">Junction 4</span>
          <span className="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400">Pacing: 45s</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs">
          <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-sans">Bay B (Central)</span>
          <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">85% Avail</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800 font-sans">
        <span>Published Research (2026)</span>
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Pune Smart City Focus</span>
      </div>
    </div>
  );
}

/**
 * Bespoke Visual for CrowdFlow Analytics System
 */
export function CrowdFlowVisual() {
  return (
    <div className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col justify-between font-mono text-slate-700 dark:text-slate-300">
      <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200 dark:border-slate-800">
        <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
          <Camera className="w-4 h-4 text-indigo-500" />
          YOLOv5 Visual Pipeline
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-1.5 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Real-Time Tracking
        </span>
      </div>

      <div className="py-2">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px]">
          <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col items-center shadow-2xs">
            <Camera className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 mb-1" />
            <span className="text-slate-900 dark:text-white font-semibold">1. Camera</span>
            <span className="text-[9px] text-slate-500 dark:text-slate-400">RTSP Stream</span>
          </div>

          <div className="p-2 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 flex flex-col items-center shadow-2xs">
            <Cpu className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 mb-1" />
            <span className="text-slate-900 dark:text-white font-semibold">2. YOLOv5</span>
            <span className="text-[9px] text-indigo-600 dark:text-indigo-400 font-medium">Inference</span>
          </div>

          <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col items-center shadow-2xs">
            <Server className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 mb-1" />
            <span className="text-slate-900 dark:text-white font-semibold">3. Engine</span>
            <span className="text-[9px] text-slate-500 dark:text-slate-400">Telemetry API</span>
          </div>

          <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col items-center shadow-2xs">
            <BarChart2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 mb-1" />
            <span className="text-slate-900 dark:text-white font-semibold">4. Dashboard</span>
            <span className="text-[9px] text-slate-500 dark:text-slate-400">Spatial Heatmap</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px]">
        <div className="p-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-center">
          <span className="text-[9px] text-slate-500 dark:text-slate-400 block font-sans">Density Tier</span>
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400">Moderate</span>
        </div>
        <div className="p-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-center">
          <span className="text-[9px] text-slate-500 dark:text-slate-400 block font-sans">Latency</span>
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">&lt; 50ms</span>
        </div>
        <div className="p-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-center">
          <span className="text-[9px] text-slate-500 dark:text-slate-400 block font-sans">Alert Status</span>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Optimized</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Bespoke Visual for AI-Powered Smart Train Planner
 */
export function TrainPlannerVisual() {
  return (
    <div className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col justify-between font-mono text-slate-700 dark:text-slate-300">
      <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200 dark:border-slate-800">
        <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
          <Train className="w-4 h-4 text-indigo-500" />
          Mumbai Local Density Radar
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60 font-medium">
          Rush-Hour Predictor
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-3 text-center">
        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
          <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-sans">Coach 1 (General)</span>
          <span className="text-xs sm:text-sm font-bold text-rose-600 dark:text-rose-400">92% Dense</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
          <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-sans">Coach 3 (Mid)</span>
          <span className="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400">68% Dense</span>
        </div>
        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
          <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-sans">Coach 6 (Rear)</span>
          <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">35% Clear</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800 font-sans">
        <span>Vision + Platform Analytics</span>
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Commuter Routing Active</span>
      </div>
    </div>
  );
}

/**
 * Bespoke Visual for AyuBarter
 */
export function AyuBarterVisual() {
  return (
    <div className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col justify-between font-mono text-slate-700 dark:text-slate-300">
      <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200 dark:border-slate-800">
        <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
          <Repeat className="w-4 h-4 text-indigo-500" />
          AyuBarter Platform
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60 font-medium">
          React Ecosystem
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 my-3">
        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
          <div className="flex items-center gap-1.5 mb-1 font-sans text-xs font-semibold text-slate-900 dark:text-white">
            <Zap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>AI Matching</span>
          </div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-sans">
            Algorithm-guided wellness & advisory recommendations
          </p>
        </div>

        <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
          <div className="flex items-center gap-1.5 mb-1 font-sans text-xs font-semibold text-slate-900 dark:text-white">
            <Layers className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Modular UI</span>
          </div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-sans">
            Reusable component library with REST API endpoints
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800 font-sans">
        <span>Component-Driven Architecture</span>
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Published R&D (2025)</span>
      </div>
    </div>
  );
}

/**
 * Bespoke Visual for Emotion Detector (Deep Learning CNN)
 */
export function EmotionDetectorVisual() {
  return (
    <div className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col justify-between font-mono text-slate-700 dark:text-slate-300">
      <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200 dark:border-slate-800">
        <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
          <Smile className="w-4 h-4 text-indigo-500" />
          CNN Face & Emotion Classifier
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 font-medium">
          Inference: 38ms
        </span>
      </div>

      <div className="space-y-1.5 my-3 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-slate-600 dark:text-slate-400">Happy / Joy</span>
          <div className="w-36 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full" style={{ width: '92%' }} />
          </div>
          <span className="font-bold text-emerald-600 dark:text-emerald-400 text-[11px]">92%</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-600 dark:text-slate-400">Neutral</span>
          <div className="w-36 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
            <div className="bg-indigo-500 h-full rounded-full" style={{ width: '6%' }} />
          </div>
          <span className="font-bold text-slate-500 text-[11px]">6%</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800 font-sans">
        <span>TensorFlow • OpenCV Haar Cascades</span>
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Live Webcam Stream</span>
      </div>
    </div>
  );
}

/**
 * Bespoke Visual for Spring Boot Webhook Service
 */
export function WebhookVisual() {
  return (
    <div className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col justify-between font-mono text-slate-700 dark:text-slate-300">
      <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200 dark:border-slate-800">
        <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          Spring Boot Webhook Microservice
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 font-medium">
          200 OK
        </span>
      </div>

      <div className="my-2 p-2.5 rounded-xl bg-slate-900 dark:bg-slate-950 text-slate-200 text-[11px] space-y-1">
        <p className="text-emerald-400 font-bold">POST /api/v1/webhook/event</p>
        <p className="text-slate-400 text-[10px]">X-Signature: sha256=8f3b29c0...</p>
        <p className="text-indigo-300 text-[10px]">Payload: &#123; status: &quot;PROCESSED&quot;, latency: &quot;12ms&quot; &#125;</p>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800 font-sans">
        <span>Java 17 • Spring Boot • REST</span>
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Bajaj Finserv Spec</span>
      </div>
    </div>
  );
}

/**
 * Bespoke Visual for Hospital Information System
 */
export function HospitalVisual() {
  return (
    <div className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col justify-between font-mono text-slate-700 dark:text-slate-300">
      <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200 dark:border-slate-800">
        <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
          <Building className="w-4 h-4 text-indigo-500" />
          Clinical Operations Telemetry
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60 font-medium">
          MySQL Active
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-3 text-center text-xs">
        <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <span className="text-[10px] text-slate-500 block font-sans">Admitted</span>
          <span className="font-bold text-indigo-600 dark:text-indigo-400">142</span>
        </div>
        <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <span className="text-[10px] text-slate-500 block font-sans">Doctors</span>
          <span className="font-bold text-emerald-600 dark:text-emerald-400">28 On Duty</span>
        </div>
        <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <span className="text-[10px] text-slate-500 block font-sans">Appointments</span>
          <span className="font-bold text-amber-600 dark:text-amber-400">89 Scheduled</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800 font-sans">
        <span>Java JSP • Servlet • JDBC</span>
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Role-Based Access</span>
      </div>
    </div>
  );
}

/**
 * Bespoke Visual for Hibernate E-Commerce Engine
 */
export function EcommerceVisual() {
  return (
    <div className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col justify-between font-mono text-slate-700 dark:text-slate-300">
      <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200 dark:border-slate-800">
        <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
          <Database className="w-4 h-4 text-indigo-500" />
          Hibernate ORM Persistence
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 font-medium">
          HQL Cache Hit
        </span>
      </div>

      <div className="my-2 p-2.5 rounded-xl bg-slate-900 dark:bg-slate-950 text-slate-200 text-[11px] space-y-1">
        <p className="text-indigo-300 font-semibold font-mono">FROM Product p JOIN FETCH p.category</p>
        <p className="text-slate-400 text-[10px]">Session: Connected | Cascade: ALL | Pool: 20</p>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800 font-sans">
        <span>Hibernate 5 • Maven • MySQL</span>
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">ACID Relational Mapping</span>
      </div>
    </div>
  );
}

/**
 * Bespoke Visual for Java Banking OOP Engine
 */
export function BankVisual() {
  return (
    <div className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col justify-between font-mono text-slate-700 dark:text-slate-300">
      <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200 dark:border-slate-800">
        <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
          <CreditCard className="w-4 h-4 text-indigo-500" />
          OOP Core Banking Ledger
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60 font-medium">
          Strict Encapsulation
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 my-2 text-xs text-center">
        <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <span className="text-[10px] text-slate-500 block font-sans">Account Types</span>
          <span className="font-bold text-slate-800 dark:text-white">Savings • Current</span>
        </div>
        <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <span className="text-[10px] text-slate-500 block font-sans">Safety Check</span>
          <span className="font-bold text-emerald-600 dark:text-emerald-400">Atomic Transactions</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800 font-sans">
        <span>Java OOP • Polymorphism</span>
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Validated Ledger</span>
      </div>
    </div>
  );
}

/**
 * Bespoke Visual for Samved Solapur Smart City
 */
export function SmartCityVisual() {
  return (
    <div className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col justify-between font-mono text-slate-700 dark:text-slate-300">
      <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200 dark:border-slate-800">
        <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
          <Building className="w-4 h-4 text-indigo-500" />
          Solapur Municipal Telemetry
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 font-medium">
          Civic Portal
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-3 text-center text-xs">
        <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <span className="text-[10px] text-slate-500 block font-sans">Utilities</span>
          <span className="font-bold text-indigo-600 dark:text-indigo-400">Active</span>
        </div>
        <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <span className="text-[10px] text-slate-500 block font-sans">Grievances</span>
          <span className="font-bold text-emerald-600 dark:text-emerald-400">Resolved</span>
        </div>
        <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <span className="text-[10px] text-slate-500 block font-sans">Speed</span>
          <span className="font-bold text-slate-800 dark:text-white">&lt; 1s Load</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800 font-sans">
        <span>HTML5 • CSS3 • JavaScript</span>
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Urban Digital Interface</span>
      </div>
    </div>
  );
}

/**
 * Bespoke Visual for CineFlow Platform
 */
export function CineflowVisual() {
  return (
    <div className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col justify-between font-mono text-slate-700 dark:text-slate-300">
      <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200 dark:border-slate-800">
        <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
          <Film className="w-4 h-4 text-indigo-500" />
          CineFlow Streaming Discovery
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60 font-medium">
          Dark UI
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 my-2 text-xs">
        <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <span className="text-[10px] text-slate-500 block font-sans">Search Latency</span>
          <span className="font-bold text-emerald-600 dark:text-emerald-400">Instant Debounce</span>
        </div>
        <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <span className="text-[10px] text-slate-500 block font-sans">User Experience</span>
          <span className="font-bold text-indigo-600 dark:text-indigo-400">Fluid Transitions</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800 font-sans">
        <span>Modern JavaScript • CSS Animations</span>
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Media Catalog Index</span>
      </div>
    </div>
  );
}

/**
 * Fallback code architecture visual
 */
export function GenericCodeVisual({ title }: { title: string }) {
  return (
    <div className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col justify-between font-mono text-slate-700 dark:text-slate-300">
      <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200 dark:border-slate-800">
        <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
          <Code className="w-4 h-4 text-indigo-500" />
          {title}
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 font-medium">
          Verified Repo
        </span>
      </div>
      <div className="my-2 p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
        <p className="text-slate-600 dark:text-slate-300">Public Open-Source Software</p>
      </div>
      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800 font-sans">
        <span>Engineered by Aman Inamdar</span>
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">GitHub Synced</span>
      </div>
    </div>
  );
}

export const projectVisualsMap: Record<string, React.ReactNode> = {
  'smart-traffic-parking': <TrafficVisual />,
  'crowdflow-analytics': <CrowdFlowVisual />,
  'smart-train-planner': <TrainPlannerVisual />,
  'ayubarter': <AyuBarterVisual />,
  'emotion-detector': <EmotionDetectorVisual />,
  'webhookapp': <WebhookVisual />,
  'hospital-management': <HospitalVisual />,
  'ecommerce-hibernate': <EcommerceVisual />,
  'bank-management': <BankVisual />,
  'smart-city-samved': <SmartCityVisual />,
  'cineflow': <CineflowVisual />
};
