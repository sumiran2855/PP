"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData, AchievementCounter } from "@/data/portfolio-data";
import {
  Users,
  FolderCheck,
  Clock,
  ShieldCheck,
  GitBranch,
  Award,
  Sparkles,
  TrendingUp,
  Activity
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Users,
  FolderCheck,
  Clock,
  ShieldCheck,
  GitBranch,
  Award,
};

function AnimatedNumber({
  value,
  duration = 2,
  suffix = "",
}: {
  value: number;
  duration?: number;
  suffix?: string;
}) {
  const [displayValue, setDisplayValue] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  React.useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const isFloat = value % 1 !== 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out expo curve for snappy start and satisfying deceleration
      const easeProgress = 1 - Math.pow(2, -10 * progress);
      const current = easeProgress * value;

      if (isFloat) {
        setDisplayValue(parseFloat(current.toFixed(2)));
      } else {
        setDisplayValue(Math.floor(current));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  const formatted = displayValue.toLocaleString();

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  );
}

function Stat3DCard({
  item,
  index,
}: {
  item: AchievementCounter;
  index: number;
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);

  const IconComponent = ICON_MAP[item.iconName] || Activity;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = ((mouseY - height / 2) / height) * -8;
    const rY = ((mouseX - width / 2) / width) * 8;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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
        className="group relative h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl shadow-xl hover:shadow-2xl hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 overflow-hidden"
      >
        {/* Subtle Ambient Hover Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

        {/* Top Header: Icon & Category Tag */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-xs">
            <IconComponent className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20">
            <TrendingUp className="w-3 h-3" />
            <span>Delivered</span>
          </div>
        </div>

        {/* Center: Big Animated Counter Number */}
        <div className="py-5 space-y-1">
          <h3 className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            <AnimatedNumber value={item.count} suffix={item.suffix} />
          </h3>
          <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200">
            {item.label}
          </p>
        </div>

        {/* Bottom Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-3 border-t border-slate-200/80 dark:border-slate-800/80">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export function CounterStats() {
  const { achievementCounters } = portfolioData;

  return (
    <div className="mt-14 pt-12 border-t border-slate-200/80 dark:border-slate-800/80">
      {/* Sub-header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
      >
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>VERIFIED_DELIVERY // PRODUCTION_METRICS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            Client Impact &{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Shipped Milestones
            </span>
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md font-normal">
          Real-world client outcomes, delivered projects, and architectural uptime guarantees across all production systems.
        </p>
      </motion.div>

      {/* 4-Column Grid of 3D Counter Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievementCounters.map((item, idx) => (
          <Stat3DCard key={item.id} item={item} index={idx} />
        ))}
      </div>
    </div>
  );
}
