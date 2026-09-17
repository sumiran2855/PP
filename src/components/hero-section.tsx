"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import confetti from "canvas-confetti";
import { portfolioData } from "@/data/portfolio-data";
import { Button } from "./ui/button";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  GoIcon,
  NodeIcon,
  NextIcon,
  ReactIcon,
  TypeScriptIcon
} from "./icons";
import {
  ArrowRight,
  Download,
  Sparkles,
  Terminal,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
  Copy,
  Check,
  Zap,
  Activity,
  Server,
  Database,
  Globe,
  ShieldCheck,
  Flame,
  Send,
  Mouse,
  Mail,
  Gauge,
  Workflow
} from "lucide-react";

const ROLES = [
  "Senior Full-Stack Engineer",
  "Cloud & Distributed Systems Architect",
  "High-Throughput Backend Specialist",
  "Modern Next.js & UI/UX Craftsman"
];

export function HeroSection() {
  const { personal } = portfolioData;
  const [activeTab, setActiveTab] = React.useState<"terminal" | "architecture" | "vitals">("terminal");
  const [activeRoleIndex, setActiveRoleIndex] = React.useState(0);
  const [copied, setCopied] = React.useState(false);
  const [selectedCommand, setSelectedCommand] = React.useState<"status" | "stack" | "latency" | "principles">("status");

  // 3D Card Parallax Tilt Motion Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Cycle roles every 3.2 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = (e: React.MouseEvent) => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const posX = (rect.left + rect.width / 2) / window.innerWidth;
    const posY = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x: posX, y: posY },
      colors: ["#6366f1", "#8b5cf6", "#06b6d4", "#10b981"]
    });

    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative min-h-[92vh] pt-28 sm:pt-36 pb-12 sm:pb-16 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#f1f5f9] via-[#f8fafc] to-[#eef2ff] dark:from-[#080b14] dark:via-[#0e1324] dark:to-[#090d1a] transition-colors duration-500">
      {/* Dynamic Ambient Aurora Background Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[400px] sm:h-[500px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-400/20 dark:from-indigo-600/30 dark:via-purple-600/25 dark:to-cyan-400/25 blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-12 right-[-5%] w-80 sm:w-96 h-80 sm:h-96 bg-cyan-400/15 dark:bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-[-5%] w-96 h-96 bg-purple-500/15 dark:bg-violet-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Dot Grid Mask Overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 dark:opacity-25 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center py-6">

          {/* ======================================================== */}
          {/* LEFT COLUMN: Narrative, Headline, CTAs, Tech Pills */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Live Availability Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-xs hover:border-emerald-500/60 hover:shadow-emerald-500/10 transition-all cursor-default select-none"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
              </span>
              <span className="tracking-wide">{personal.availability}</span>
            </motion.div>

            {/* Main Headline Group */}
            <div className="space-y-3 w-full">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                <span className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                </span>
                <span>Crafting Scalable Systems & Polish</span>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] text-foreground">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent drop-shadow-xs">
                  {personal.name}
                </span>
              </h1>

              {/* Dynamic Rotating Role Cycler */}
              <div className="h-10 sm:h-12 flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeRoleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="text-xl sm:text-2xl lg:text-3xl font-bold flex items-center gap-2.5"
                  >
                    <span className="text-indigo-500 font-extrabold text-2xl">›</span>
                    <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent font-bold">
                      {ROLES[activeRoleIndex]}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Refined Bio Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {personal.headline} Specializing in fault-tolerant distributed backends with{" "}
              <span className="text-foreground font-semibold">Go & Node.js</span>, seamlessly unified with hyper-responsive, pixel-perfect user experiences in{" "}
              <span className="text-foreground font-semibold">Next.js 16, React 19 & TypeScript</span>.
            </p>

            {/* Quick Core Capabilities Pills */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-medium">
              <span className="px-3 py-1.5 rounded-xl bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/70 dark:border-slate-700/70 text-slate-800 dark:text-slate-200 shadow-xs flex items-center gap-2 transition-transform hover:scale-105 select-none">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                Sub-15ms API Latency
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/70 dark:border-slate-700/70 text-slate-800 dark:text-slate-200 shadow-xs flex items-center gap-2 transition-transform hover:scale-105 select-none">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                99.98% High Availability
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/70 dark:border-slate-700/70 text-slate-800 dark:text-slate-200 shadow-xs flex items-center gap-2 transition-transform hover:scale-105 select-none">
                <Flame className="w-3.5 h-3.5 text-indigo-500" />
                Event-Driven Architecture
              </span>
            </div>

            {/* Action Buttons / CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#projects">
                <Button
                  size="lg"
                  className="gap-2 relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 border border-indigo-400/30 font-semibold cursor-pointer"
                >
                  <span>Explore Work</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>

              <a href="#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-slate-300 dark:border-slate-700 hover:border-indigo-500/60 hover:bg-indigo-500/10 dark:hover:bg-indigo-500/20 backdrop-blur-md transition-all duration-200 hover:scale-[1.02] cursor-pointer font-semibold"
                >
                  <Send className="w-4 h-4 text-indigo-500" />
                  <span>Let&apos;s Connect</span>
                </Button>
              </a>

              <Link href="/resume">
                <Button
                  variant="secondary"
                  size="lg"
                  className="gap-2 border border-slate-300/80 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 hover:scale-[1.02] transition-all cursor-pointer font-semibold"
                >
                  <Download className="w-4 h-4 text-indigo-500" />
                  Resume
                </Button>
              </Link>
            </div>

            {/* Social Links & Interactive Quick Email Copy */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-200/80 dark:border-slate-800/80 w-full max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Network:
              </span>

              <div className="flex items-center gap-2">
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-300/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/40 shadow-xs hover:scale-110 active:scale-95 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-300/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/40 shadow-xs hover:scale-110 active:scale-95 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-300/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/40 shadow-xs hover:scale-110 active:scale-95 transition-all"
                  aria-label="Twitter / X Profile"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>

                {/* Instant Email Copy Badge with Confetti Trigger */}
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-300/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-indigo-500/40 shadow-xs active:scale-95 transition-all group cursor-pointer"
                  title="Click to copy email address"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-500 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-[11px] sm:text-xs text-foreground/90">
                    {copied ? "Email Copied!" : personal.email}
                  </span>
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500 animate-in zoom-in-50" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              </div>

              {/* 3D Floating Magnetic Tech Stack Pills Row */}
              <div className="flex flex-wrap items-center gap-2 pt-2 w-full">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-300/70 dark:border-slate-800 shadow-xs text-xs font-semibold text-slate-800 dark:text-slate-200 backdrop-blur-md hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-md hover:shadow-indigo-500/10 transition-all select-none cursor-default">
                  <GoIcon className="w-4 h-4" />
                  <span>Go</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-300/70 dark:border-slate-800 shadow-xs text-xs font-semibold text-slate-800 dark:text-slate-200 backdrop-blur-md hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-md hover:shadow-indigo-500/10 transition-all select-none cursor-default">
                  <NodeIcon className="w-4 h-4" />
                  <span>Node.js</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-300/70 dark:border-slate-800 shadow-xs text-xs font-semibold text-slate-800 dark:text-slate-200 backdrop-blur-md hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-md hover:shadow-indigo-500/10 transition-all select-none cursor-default">
                  <NextIcon className="w-4 h-4 text-slate-900 dark:text-white" />
                  <span>Next.js</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-300/70 dark:border-slate-800 shadow-xs text-xs font-semibold text-slate-800 dark:text-slate-200 backdrop-blur-md hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-md hover:shadow-indigo-500/10 transition-all select-none cursor-default">
                  <ReactIcon className="w-4 h-4" />
                  <span>React</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-300/70 dark:border-slate-800 shadow-xs text-xs font-semibold text-slate-800 dark:text-slate-200 backdrop-blur-md hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-md hover:shadow-indigo-500/10 transition-all select-none cursor-default">
                  <TypeScriptIcon className="w-4 h-4" />
                  <span>TypeScript</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Interactive 3D Parallax Developer Studio */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="lg:col-span-5 w-full relative"
            style={{ perspective: 1000 }}
          >
            {/* Interactive 3D Motion Card Container */}
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full transition-transform duration-200 ease-out"
            >
              {/* Glow Accent Layer Behind 3D Card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-3xl blur-xl opacity-30 dark:opacity-40 group-hover:opacity-60 transition duration-500 -z-10" />

              {/* Main 3D Card Container */}
              <div className="relative rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl shadow-2xl shadow-indigo-500/10 dark:shadow-indigo-500/20 overflow-hidden transition-all duration-300">

                {/* macOS Style Window Header */}
                <div
                  style={{ transform: "translateZ(20px)" }}
                  className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md select-none gap-2"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 border border-rose-600/40" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 border border-amber-600/40" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 ml-1 sm:ml-2 flex items-center gap-1.5 truncate">
                      <Terminal className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span className="hidden sm:inline">sumiran@production-node</span>
                      <span className="sm:hidden">node-01</span>
                    </span>
                  </div>

                  {/* Window Tab Selectors */}
                  <div className="flex items-center gap-1 bg-slate-200/60 dark:bg-slate-800/60 p-0.5 rounded-lg border border-slate-300/50 dark:border-slate-700/50 shrink-0">
                    <button
                      onClick={() => setActiveTab("terminal")}
                      className={`shrink-0 whitespace-nowrap px-2 sm:px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono transition-all cursor-pointer ${
                        activeTab === "terminal"
                          ? "bg-indigo-600 text-white font-semibold shadow-xs"
                          : "text-slate-600 dark:text-slate-400 hover:text-foreground"
                      }`}
                    >
                      cli
                    </button>
                    <button
                      onClick={() => setActiveTab("architecture")}
                      className={`shrink-0 whitespace-nowrap px-2 sm:px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono transition-all cursor-pointer ${
                        activeTab === "architecture"
                          ? "bg-indigo-600 text-white font-semibold shadow-xs"
                          : "text-slate-600 dark:text-slate-400 hover:text-foreground"
                      }`}
                    >
                      arch
                    </button>
                    <button
                      onClick={() => setActiveTab("vitals")}
                      className={`shrink-0 whitespace-nowrap px-2 sm:px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono transition-all cursor-pointer ${
                        activeTab === "vitals"
                          ? "bg-indigo-600 text-white font-semibold shadow-xs"
                          : "text-slate-600 dark:text-slate-400 hover:text-foreground"
                      }`}
                    >
                      vitals
                    </button>
                  </div>
                </div>

                {/* Window Screen Content Area */}
                <div
                  style={{ transform: "translateZ(30px)" }}
                  className="p-5 sm:p-6 min-h-[320px] flex flex-col justify-between font-mono text-xs sm:text-sm bg-slate-50/50 dark:bg-slate-950/60"
                >

                  {/* -------------------------------------------------- */}
                  {/* TAB 1: Live Interactive CLI & Diagnostics */}
                  {/* -------------------------------------------------- */}
                  {activeTab === "terminal" && (
                    <div className="space-y-4 animate-in fade-in duration-200 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Command shortcut bar */}
                        <div
                          style={{ transform: "translateZ(40px)" }}
                          className="flex flex-wrap items-center gap-1.5 pb-3 border-b border-slate-200/80 dark:border-slate-800/80 text-[11px]"
                        >
                          <span className="text-slate-500 dark:text-slate-400 mr-1">run:</span>
                          {(["status", "stack", "latency", "principles"] as const).map((cmd) => (
                            <button
                              key={cmd}
                              onClick={() => setSelectedCommand(cmd)}
                              className={`px-2 py-0.5 rounded-md border transition-all cursor-pointer font-mono ${
                                selectedCommand === cmd
                                  ? "border-indigo-500 bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 font-bold shadow-xs"
                                  : "border-slate-300 dark:border-slate-800 bg-slate-200/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:text-foreground"
                              }`}
                            >
                              ${cmd}
                            </button>
                          ))}
                        </div>

                        {/* Output according to selected command */}
                        <div
                          style={{ transform: "translateZ(35px)" }}
                          className="pt-3"
                        >
                          {selectedCommand === "status" && (
                            <div className="space-y-2.5">
                              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold">
                                <span className="text-emerald-500">➜</span>
                                <span>cluster-diagnostics --node sumiran-01</span>
                              </div>
                              <div className="space-y-1.5 text-slate-600 dark:text-slate-300 pl-3 border-l-2 border-indigo-500/40 text-xs">
                                <p>
                                  <span className="text-emerald-500 font-semibold">● Service Status:</span> Active & Serving Traffic
                                </p>
                                <p>
                                  <span className="text-slate-900 dark:text-slate-100 font-semibold">Primary Focus:</span> Full-Stack SaaS & Distributed Microservices
                                </p>
                                <p>
                                  <span className="text-slate-900 dark:text-slate-100 font-semibold">Base Location:</span> Bengaluru, India (Remote Global)
                                </p>
                                <p>
                                  <span className="text-slate-900 dark:text-slate-100 font-semibold">SLA Guarantee:</span> 99.98% High Availability Target
                                </p>
                              </div>
                              <div className="pt-2 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>All systems verified & production ready.</span>
                              </div>
                            </div>
                          )}

                          {selectedCommand === "stack" && (
                            <div className="space-y-2.5">
                              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold">
                                <span className="text-emerald-500">➜</span>
                                <span>cat /etc/primary_technologies.json</span>
                              </div>
                              <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                                <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-1">
                                    <Code2 className="w-3.5 h-3.5" /> Frontend
                                  </span>
                                  <p className="text-slate-600 dark:text-slate-400 mt-0.5">Next.js 16, React 19, TS, Tailwind</p>
                                </div>
                                <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-1">
                                    <Cpu className="w-3.5 h-3.5" /> Backend
                                  </span>
                                  <p className="text-slate-600 dark:text-slate-400 mt-0.5">Go (Golang), Node.js, Express, NestJS</p>
                                </div>
                                <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                                  <span className="text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-1">
                                    <Layers className="w-3.5 h-3.5" /> Cloud & DevOps
                                  </span>
                                  <p className="text-slate-600 dark:text-slate-400 mt-0.5">Docker, Kubernetes, AWS, CI/CD</p>
                                </div>
                                <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                                    <Database className="w-3.5 h-3.5" /> Storage
                                  </span>
                                  <p className="text-slate-600 dark:text-slate-400 mt-0.5">PostgreSQL, Redis, Mongo, Kafka</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {selectedCommand === "latency" && (
                            <div className="space-y-2.5">
                              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold">
                                <span className="text-emerald-500">➜</span>
                                <span>ping -c 3 global-edge-gateway</span>
                              </div>
                              <div className="space-y-1 text-slate-600 dark:text-slate-300 pl-3 border-l-2 border-indigo-500/40 text-xs">
                                <p>64 bytes from us-east-1.aws: time=<span className="text-emerald-600 dark:text-emerald-400 font-bold">11.4ms</span></p>
                                <p>64 bytes from eu-central-1.aws: time=<span className="text-emerald-600 dark:text-emerald-400 font-bold">14.1ms</span></p>
                                <p>64 bytes from ap-south-1.aws: time=<span className="text-emerald-600 dark:text-emerald-400 font-bold">4.8ms</span></p>
                                <p className="text-slate-900 dark:text-slate-100 pt-1 font-bold">--- Packet Loss: 0.0% | Min/Avg/Max = 4.8/10.1/14.1 ms ---</p>
                              </div>
                            </div>
                          )}

                          {selectedCommand === "principles" && (
                            <div className="space-y-2.5">
                              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold">
                                <span className="text-emerald-500">➜</span>
                                <span>cat /etc/core_values.md</span>
                              </div>
                              <ul className="space-y-1 text-slate-600 dark:text-slate-300 pl-3 border-l-2 border-indigo-500/40 text-xs list-disc list-inside">
                                <li>Resilience first: plan for failover & zero data loss.</li>
                                <li>Zero-friction developer ergonomics & strict TypeScript.</li>
                                <li>Microsecond latency optimizations on critical paths.</li>
                                <li>Pixel perfection: UX is an engineering discipline.</li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* -------------------------------------------------- */}
                  {/* TAB 2: System Architecture Breakdown */}
                  {/* -------------------------------------------------- */}
                  {activeTab === "architecture" && (
                    <div className="space-y-3.5 animate-in fade-in duration-200 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-xs border-b border-slate-200/80 dark:border-slate-800/80 pb-2">
                          <span className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                            <Server className="w-3.5 h-3.5 text-indigo-500" />
                            Microservices Architecture
                          </span>
                          <span className="text-[11px] text-emerald-500 flex items-center gap-1 font-semibold">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                            Healthy
                          </span>
                        </div>

                        <div className="space-y-2.5 text-xs pt-3">
                          <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xs flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Globe className="w-4 h-4 text-cyan-500" />
                              <span className="text-slate-900 dark:text-slate-100 font-semibold">Edge & Frontend</span>
                            </div>
                            <span className="text-slate-500 dark:text-slate-400 text-[11px]">Next.js 16 • Cloudflare CDN</span>
                          </div>

                          <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xs flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Cpu className="w-4 h-4 text-indigo-500" />
                              <span className="text-slate-900 dark:text-slate-100 font-semibold">Core Services</span>
                            </div>
                            <span className="text-slate-500 dark:text-slate-400 text-[11px]">Go RPC • Node / Nest</span>
                          </div>

                          <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xs flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Database className="w-4 h-4 text-emerald-500" />
                              <span className="text-slate-900 dark:text-slate-100 font-semibold">Data & Streaming</span>
                            </div>
                            <span className="text-slate-500 dark:text-slate-400 text-[11px]">Postgres • Redis • Kafka</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* -------------------------------------------------- */}
                  {/* TAB 3: Production Vitals & Metrics */}
                  {/* -------------------------------------------------- */}
                  {activeTab === "vitals" && (
                    <div className="space-y-4 animate-in fade-in duration-200 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-xs border-b border-slate-200/80 dark:border-slate-800/80 pb-2">
                          <span className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                            <Activity className="w-3.5 h-3.5 text-emerald-500" />
                            Live Cluster Telemetry
                          </span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400">30-day window</span>
                        </div>

                        <div className="space-y-2 pt-3">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-500 dark:text-slate-400 font-medium">Uptime Record</span>
                            <span className="text-emerald-500 font-extrabold">99.982%</span>
                          </div>
                          <div className="grid grid-cols-20 gap-1 h-3 py-0.5">
                            {Array.from({ length: 20 }).map((_, i) => (
                              <div
                                key={i}
                                className={`rounded-xs ${
                                  i === 14 ? "bg-emerald-500/70" : "bg-emerald-500"
                                } h-full transition-all hover:scale-125`}
                                title={`Day ${i + 1}: 100% operational`}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs pt-3">
                          <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                            <span className="text-slate-500 dark:text-slate-400 text-[11px]">Global P99 Latency</span>
                            <p className="text-emerald-600 dark:text-emerald-400 font-extrabold text-base mt-0.5">14.2 ms</p>
                          </div>
                          <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                            <span className="text-slate-500 dark:text-slate-400 text-[11px]">Test Coverage</span>
                            <p className="text-indigo-600 dark:text-indigo-400 font-extrabold text-base mt-0.5">94.8% CI Pass</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Footer Status Bar */}
                  <div
                    style={{ transform: "translateZ(20px)" }}
                    className="pt-3 mt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-medium">Production Environment</span>
                    </div>
                    <span className="text-[11px] opacity-80 font-mono">Interactive Workbench</span>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* Quick Micro-Stats Bar Under Card */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
              {personal.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-3 text-center backdrop-blur-md shadow-xs hover:border-indigo-500/40 hover:scale-105 transition-all"
                >
                  <p className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium truncate">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
