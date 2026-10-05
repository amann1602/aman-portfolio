import {
  Camera,
  Cpu,
  BarChart2,
  Server,
  Radio,
  Repeat,
  Layers,
  Zap
} from 'lucide-react';

/**
 * Bespoke Visual for Smart Traffic & Parking Management System
 * IoT Sensor Telemetry → ML Congestion & Parking Model → Real-Time Analytics Controller
 */
export function TrafficVisual() {
  return (
    <div className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col justify-between font-mono text-slate-700 dark:text-slate-300">
      {/* Header bar */}
      <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200 dark:border-slate-800">
        <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
          <Radio className="w-4 h-4 animate-pulse text-indigo-500" />
          IoT Telemetry Stream Active
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60 font-medium">
          ML Congestion Model
        </span>
      </div>

      {/* Sensor Bays Telemetry */}
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

      {/* Footer bar */}
      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800 font-sans">
        <span>Published Research (2026)</span>
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Pune Smart City Focus</span>
      </div>
    </div>
  );
}

/**
 * Bespoke Visual for CrowdFlow Analytics System
 * Camera Feed → Edge YOLOv5 Inference → Real-Time Pedestrian Density Hotspots
 */
export function CrowdFlowVisual() {
  return (
    <div className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col justify-between font-mono text-slate-700 dark:text-slate-300">
      {/* Header bar */}
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

      {/* Visual Pipeline 4-Stage Grid */}
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

      {/* Telemetry bar */}
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
 * Bespoke Visual for AyuBarter
 * Healthcare & Tele-Consultation Platform • Modular UI Architecture • AI Recommendation
 */
export function AyuBarterVisual() {
  return (
    <div className="w-full rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col justify-between font-mono text-slate-700 dark:text-slate-300">
      {/* Header bar */}
      <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200 dark:border-slate-800">
        <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
          <Repeat className="w-4 h-4 text-indigo-500" />
          AyuBarter Platform
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60 font-medium">
          React Ecosystem
        </span>
      </div>

      {/* Grid Features */}
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

      {/* Footer bar */}
      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800 font-sans">
        <span>Component-Driven Architecture</span>
        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Published R&D (2025)</span>
      </div>
    </div>
  );
}
