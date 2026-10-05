import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Interactive Digital System Visualizer
 * Nodes → Connections → Data Flow → Subtle Floating Project/System Labels
 * Represents: AI, Analytics, Software, Cloud, Data, Innovation
 */
export default function ParticleNetwork({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const mouse = {
      x: null,
      y: null,
      radius: 120
    };

    // Scaled node count for smooth 60fps performance
    const nodeCount = Math.min(Math.floor((width * height) / 9000), 45);
    const nodes = [];

    // Electric blue, indigo, and cyan palette
    const colors = [
      'rgba(56, 189, 248, ', // blue
      'rgba(99, 102, 241, ', // indigo
      'rgba(37, 99, 235, ',  // electric blue
      'rgba(6, 182, 212, '   // cyan
    ];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1.2,
        baseAlpha: Math.random() * 0.4 + 0.3,
        colorBase: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Dynamic data packets traveling between connected nodes
    const packets = [];
    const maxPackets = 12;

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let frameCount = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      frameCount++;

      // Periodically spawn data packets along lines
      if (frameCount % 45 === 0 && packets.length < maxPackets && nodes.length > 2) {
        const fromIdx = Math.floor(Math.random() * nodes.length);
        let toIdx = Math.floor(Math.random() * nodes.length);
        if (fromIdx !== toIdx) {
          const dx = nodes[fromIdx].x - nodes[toIdx].x;
          const dy = nodes[fromIdx].y - nodes[toIdx].y;
          if (Math.sqrt(dx * dx + dy * dy) < 130) {
            packets.push({
              from: nodes[fromIdx],
              to: nodes[toIdx],
              progress: 0,
              speed: 0.02 + Math.random() * 0.015
            });
          }
        }
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 120;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(79, 70, 229, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // Update and draw packets (data flow)
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const px = pkt.from.x + (pkt.to.x - pkt.from.x) * pkt.progress;
        const py = pkt.from.y + (pkt.to.y - pkt.from.y) * pkt.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#38bdf8';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#38bdf8';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw nodes & mouse interactions
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const mdx = mouse.x - node.x;
          const mdy = mouse.y - node.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < mouse.radius) {
            const force = (1 - mdist / mouse.radius) * 0.35;
            node.x -= (mdx / mdist) * force * 3;
            node.y -= (mdy / mdist) * force * 3;
          }
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${node.colorBase}${node.baseAlpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#2563eb';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // System floating tags requested in prompt: YOLOv5, React, Python, AI, Analytics, MongoDB, Flask, Node.js
  const floatingTags = [
    { label: "YOLOv5", pos: "top-5 left-6", duration: 5.2, delay: 0, color: "text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800" },
    { label: "Python", pos: "top-7 right-6", duration: 4.8, delay: 0.6, color: "text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800" },
    { label: "AI", pos: "top-28 left-4", duration: 5.5, delay: 1.2, color: "text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800" },
    { label: "Analytics", pos: "top-32 right-5", duration: 5.0, delay: 0.3, color: "text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800" },
    { label: "React", pos: "bottom-28 left-6", duration: 4.6, delay: 0.9, color: "text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800" },
    { label: "Flask", pos: "bottom-28 right-6", duration: 5.4, delay: 1.5, color: "text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800" },
    { label: "MongoDB", pos: "bottom-8 left-10", duration: 4.9, delay: 0.4, color: "text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800" },
    { label: "Node.js", pos: "bottom-8 right-10", duration: 5.1, delay: 1.0, color: "text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-800" },
  ];

  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden ${className}`}>
      {/* Subtle tech background circle lines */}
      <div className="absolute w-48 h-48 md:w-60 md:h-60 rounded-full border border-indigo-500/15 dark:border-indigo-400/20 pointer-events-none" />
      <div className="absolute w-72 h-72 md:w-88 md:h-88 rounded-full border border-sky-400/10 border-dashed pointer-events-none animate-[spin_50s_linear_infinite]" />
      
      {/* 2D Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-crosshair relative z-10"
        aria-label="Interactive digital system representing AI, analytics, software, data and cloud"
      />

      {/* Floating System Tech Chips */}
      {floatingTags.map((tag, idx) => (
        <motion.div
          key={idx}
          animate={{ y: [0, idx % 2 === 0 ? -7 : 7, 0] }}
          transition={{ duration: tag.duration, repeat: Infinity, ease: 'easeInOut', delay: tag.delay }}
          className={`absolute ${tag.pos} z-20 px-3 py-1 rounded-xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border ${tag.color} text-[11px] font-mono font-semibold shadow-md pointer-events-none flex items-center gap-1.5`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          <span>{tag.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
