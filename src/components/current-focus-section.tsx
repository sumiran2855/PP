"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Badge } from "./ui/badge";
import {
  Compass,
  GitPullRequest,
  GitCommit,
  Star,
  Quote,
  Flame,
  Radio,
  ExternalLink,
  Terminal,
  Cpu,
  Sparkles,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

// Interactive 3D Card for Current Focus items
function Focus3DCard({
  item,
}: {
  item: (typeof portfolioData.currentFocus)[0];
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = ((mouseY - height / 2) / height) * -6;
    const rY = ((mouseX - width / 2) / width) * 6;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="perspective-1000 h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
        className="group relative h-full flex flex-col justify-between p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-indigo-500/50 transition-all duration-300 overflow-hidden space-y-4"
      >
        {/* Subtle Hover Ambient Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

        <div className="space-y-4">
          {/* Header Status Beacon */}
          <div className="flex items-center justify-between">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 text-[11px] font-mono font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-xs border",
                item.status === "Active Research"
                  ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                  : item.status === "Building"
                  ? "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/30"
                  : "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30"
              )}
            >
              <span
                className={cn(
                  "w-1.5 h-1.5 rounded-full animate-ping",
                  item.status === "Active Research"
                    ? "bg-emerald-500"
                    : item.status === "Building"
                    ? "bg-indigo-500"
                    : "bg-cyan-500"
                )}
              />
              {item.status}
            </span>
            <Flame className="w-4 h-4 text-amber-500 animate-bounce" />
          </div>

          {/* Title & Description */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {item.description}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-lg bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function CurrentFocusSection() {
  const { currentFocus, testimonials } = portfolioData;

  // Mock GitHub contribution blocks for visual polish
  const githubWeeks = React.useMemo(() => {
    const weeks: number[][] = [];
    for (let w = 0; w < 24; w++) {
      const days: number[] = [];
      for (let d = 0; d < 7; d++) {
        const val = Math.floor(Math.sin(w * 3 + d * 5) * 2 + 2);
        days.push(Math.max(0, Math.min(4, val)));
      }
      weeks.push(days);
    }
    return weeks;
  }, []);

  const getHeatmapColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-emerald-950/50 border-emerald-800/50 dark:bg-emerald-900/60";
      case 2:
        return "bg-emerald-700/70 border-emerald-600/70 dark:bg-emerald-700";
      case 3:
        return "bg-emerald-500 border-emerald-400";
      case 4:
        return "bg-emerald-400 border-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.8)]";
      default:
        return "bg-slate-800/60 border-slate-700/40";
    }
  };

  return (
    <section
      id="focus"
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-[#f1f5f9] via-[#f8fafc] to-[#eef2ff] dark:from-[#090d1a] dark:via-[#0e1324] dark:to-[#080b14] transition-colors duration-500"
    >
      {/* Ambient Aurora Glow Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 dark:from-cyan-600/20 dark:via-indigo-600/25 dark:to-purple-600/20 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Dot Grid Mask */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 dark:opacity-25 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-2 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold backdrop-blur-md shadow-xs select-none font-mono">
            <Radio className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
            <span>R&D_LAB // CURRENT_RESEARCH_PULSE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Current Focus &{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Engineering Pulse
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl font-normal">
            What I&apos;m currently researching, building, and exploring at the frontiers of software architecture.
          </p>
        </motion.div>

        {/* CURRENT FOCUS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {currentFocus.map((item, idx) => (
            <Focus3DCard key={idx} item={item} />
          ))}
        </div>

        {/* GITHUB OPEN SOURCE ACTIVITY TERMINAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-[#0f1424] text-slate-200 shadow-xl p-5 sm:p-7 mb-14 overflow-hidden font-mono text-xs space-y-6"
        >
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-800 select-none">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-2 text-slate-300 font-bold text-xs flex items-center gap-2">
                <Terminal className="w-4 h-4 text-indigo-400" />
                sumiran@dev:~/github_telemetry --matrix
              </span>
            </div>
            <a
              href="https://github.com/sumiran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer transition-colors"
            >
              View GitHub Profile <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Contribution Heatmap Grid */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 overflow-x-auto">
            <div className="flex gap-1.5 min-w-[580px] justify-between">
              {githubWeeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((level, dIdx) => (
                    <motion.div
                      key={dIdx}
                      whileHover={{ scale: 1.3 }}
                      className={cn(
                        "w-3 h-3 rounded-[3px] border transition-colors cursor-pointer",
                        getHeatmapColor(level)
                      )}
                      title={`Activity level: ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-3 text-[11px] text-slate-400">
              <span>Past 6 Months Contribution Heatmap</span>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-[2px] bg-slate-800 border border-slate-700" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-950/60" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-700" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.8)]" />
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Engineering Metrics Telemetry Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-sans pt-1">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col justify-between">
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                <GitCommit className="w-3.5 h-3.5 text-indigo-400" /> Total Commits
              </span>
              <p className="text-2xl font-black font-mono text-white mt-1">1,840+</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col justify-between">
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                <GitPullRequest className="w-3.5 h-3.5 text-purple-400" /> PRs Merged
              </span>
              <p className="text-2xl font-black font-mono text-white mt-1">210+</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col justify-between">
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-amber-400" /> Repo Stars
              </span>
              <p className="text-2xl font-black font-mono text-white mt-1">450+</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col justify-between">
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-cyan-400" /> Open Source Repos
              </span>
              <p className="text-2xl font-black font-mono text-white mt-1">18</p>
            </div>
          </div>
        </motion.div>

        {/* COLLEAGUE & LEADERSHIP ENDORSEMENTS */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" /> ENDORSEMENTS // TESTIMONIALS
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
              Colleague & Leadership Endorsements
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto">
              Feedback from engineering leaders and product partners I&apos;ve collaborated with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between space-y-4 overflow-hidden"
              >
                <Quote className="w-10 h-10 text-indigo-500/15 dark:text-indigo-400/20 absolute top-4 right-4 pointer-events-none" />
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic relative z-10 font-normal">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-bold text-white text-xs shrink-0 shadow-md font-mono">
                    {t.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {t.name}
                    </h4>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {t.role} • <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{t.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
