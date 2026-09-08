"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  Mail
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

  // Cycle roles every 3.2 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative min-h-[92vh] pt-28 sm:pt-32 pb-12 sm:pb-16 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#f4f7fd] via-[#f8fafe] to-[#eef3fb] dark:from-[#070a14] dark:via-[#0b0f1e] dark:to-[#080c18] transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[800px] h-[380px] sm:h-[450px] bg-gradient-to-tr from-indigo-500/25 via-purple-600/20 to-cyan-400/20 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-10 right-[-5%] w-80 sm:w-96 h-80 sm:h-96 bg-cyan-500/15 blur-[110px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-5 left-[-5%] w-96 h-96 bg-violet-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Dot Grid Mask */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-6">

          {/* LEFT COLUMN: Narrative, Headline, CTAs, Tech Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Live Availability Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-xs hover:border-emerald-500/50 transition-colors select-none"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              </span>
              <span className="tracking-wide">{personal.availability}</span>
            </motion.div>

            {/* Main Headline Group */}
            <div className="space-y-3 w-full">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                <span className="p-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                </span>
                <span>Crafting Scalable Systems & Polish</span>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] text-foreground">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-xs">
                  {personal.name}
                </span>
              </h1>

              {/* Dynamic Rotating Role Cycler */}
              <div className="h-9 sm:h-11 flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeRoleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="text-xl sm:text-2xl lg:text-3xl font-bold flex items-center gap-2"
                  >
                    <span className="text-indigo-500 font-extrabold">›</span>
                    <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent font-bold">
                      {ROLES[activeRoleIndex]}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Refined Bio Summary */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-normal">
              {personal.headline} Specializing in fault-tolerant distributed backends with{" "}
              <span className="text-foreground font-medium">Go & Node.js</span>, seamlessly unified with hyper-responsive, pixel-perfect user experiences in{" "}
              <span className="text-foreground font-medium">Next.js 16, React 19 & TypeScript</span>.
            </p>

            {/* Quick Core Capabilities Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-secondary/80 border border-border/80 text-foreground/80 font-medium flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                Sub-15ms API Latency
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-secondary/80 border border-border/80 text-foreground/80 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                99.98% High Availability
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-secondary/80 border border-border/80 text-foreground/80 font-medium flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-indigo-500" />
                Event-Driven Architecture
              </span>
            </div>

            {/* Action Buttons / CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a href="#projects">
                <Button
                  size="lg"
                  className="gap-2 relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-indigo-400/30"
                >
                  <span>Explore Work</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>

              <a href="#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-border/80 hover:border-primary/50 hover:bg-secondary/60 backdrop-blur-sm"
                >
                  <Send className="w-4 h-4 text-primary" />
                  <span>Let&apos;s Connect</span>
                </Button>
              </a>

              <Link href="/resume">
                <Button
                  variant="secondary"
                  size="lg"
                  className="gap-2 border border-border/60 hover:border-border"
                >
                  <Download className="w-4 h-4 text-primary" />
                  Resume
                </Button>
              </Link>
            </div>

            {/* Social Links & Interactive Quick Email Copy */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-border/60 w-full max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                Network:
              </span>

              <div className="flex items-center gap-2">
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-border/70 bg-card/60 hover:bg-secondary text-muted-foreground hover:text-foreground hover:border-primary/40 shadow-xs hover:scale-105 active:scale-95 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-border/70 bg-card/60 hover:bg-secondary text-muted-foreground hover:text-foreground hover:border-primary/40 shadow-xs hover:scale-105 active:scale-95 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-border/70 bg-card/60 hover:bg-secondary text-muted-foreground hover:text-foreground hover:border-primary/40 shadow-xs hover:scale-105 active:scale-95 transition-all"
                  aria-label="Twitter / X Profile"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>

                {/* Instant Email Copy Badge */}
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border/70 bg-card/60 hover:bg-secondary text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 shadow-xs active:scale-95 transition-all group cursor-pointer"
                  title="Copy email address to clipboard"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-500 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-[11px] sm:text-xs text-foreground/90">
                    {copied ? "Email Copied!" : personal.email}
                  </span>
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              </div>

              {/* Tech Stack Pills Row */}
              <div className="flex flex-wrap items-center gap-2 pt-2 w-full">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card/80 border border-border/70 shadow-xs text-xs font-semibold text-foreground backdrop-blur-sm select-none">
                  <NodeIcon className="w-4 h-4" />
                  <span>Node.js</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card/80 border border-border/70 shadow-xs text-xs font-semibold text-foreground backdrop-blur-sm select-none">
                  <NextIcon className="w-4 h-4" />
                  <span>Next.js</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card/80 border border-border/70 shadow-xs text-xs font-semibold text-foreground backdrop-blur-sm select-none">
                  <ReactIcon className="w-4 h-4" />
                  <span>React</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card/80 border border-border/70 shadow-xs text-xs font-semibold text-foreground backdrop-blur-sm select-none">
                  <TypeScriptIcon className="w-4 h-4" />
                  <span>TypeScript</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: Interactive Developer Studio Bento Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 w-full relative"
          >
            {/* Main Window Box */}
            <div className="relative rounded-2xl border border-border/80 bg-card/90 backdrop-blur-xl shadow-2xl overflow-hidden group transition-all duration-300">

              {/* macOS Style Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-secondary/70 border-b border-border/70 backdrop-blur-md select-none">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/40" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/40" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono text-muted-foreground ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-indigo-500" />
                    sumiran@production-node
                  </span>
                </div>

                {/* Window Tab Selectors */}
                <div className="flex items-center gap-1 bg-background/60 p-0.5 rounded-lg border border-border/60">
                  <button
                    onClick={() => setActiveTab("terminal")}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-mono transition-all cursor-pointer ${
                      activeTab === "terminal"
                        ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    cli
                  </button>
                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-mono transition-all cursor-pointer ${
                      activeTab === "architecture"
                        ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    arch
                  </button>
                  <button
                    onClick={() => setActiveTab("vitals")}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-mono transition-all cursor-pointer ${
                      activeTab === "vitals"
                        ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    vitals
                  </button>
                </div>
              </div>

              {/* Window Screen Content Area */}
              <div className="p-5 sm:p-6 min-h-[310px] flex flex-col justify-between font-mono text-xs sm:text-sm">

                {/* TAB 1: Live Interactive CLI & Diagnostics */}
                {activeTab === "terminal" && (
                  <div className="space-y-4 animate-in fade-in duration-200 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Command shortcut bar */}
                      <div className="flex flex-wrap items-center gap-1.5 pb-3 border-b border-border/40 text-[11px]">
                        <span className="text-muted-foreground/70 mr-1">run:</span>
                        {(["status", "stack", "latency", "principles"] as const).map((cmd) => (
                          <button
                            key={cmd}
                            onClick={() => setSelectedCommand(cmd)}
                            className={`px-2 py-0.5 rounded border transition-all cursor-pointer ${
                              selectedCommand === cmd
                                ? "border-indigo-500 bg-indigo-500/15 text-indigo-400 font-semibold"
                                : "border-border/60 bg-secondary/40 text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            ${cmd}
                          </button>
                        ))}
                      </div>

                      {/* Output according to selected command */}
                      <div className="pt-3">
                        {selectedCommand === "status" && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-indigo-500 font-bold">
                              <span className="text-emerald-500">➜</span>
                              <span>cluster-diagnostics --node sumiran-01</span>
                            </div>
                            <div className="space-y-1.5 text-muted-foreground pl-3 border-l-2 border-indigo-500/40 text-xs">
                              <p>
                                <span className="text-emerald-500 font-semibold">● Service Status:</span> Active & Serving Traffic
                              </p>
                              <p>
                                <span className="text-foreground font-semibold">Primary Focus:</span> Full-Stack SaaS & Distributed Microservices
                              </p>
                              <p>
                                <span className="text-foreground font-semibold">Base Location:</span> Bengaluru, India (Remote Global)
                              </p>
                              <p>
                                <span className="text-foreground font-semibold">SLA Guarantee:</span> 99.98% High Availability Target
                              </p>
                            </div>
                            <div className="pt-2 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>All systems verified & production ready.</span>
                            </div>
                          </div>
                        )}

                        {selectedCommand === "stack" && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-indigo-500 font-bold">
                              <span className="text-emerald-500">➜</span>
                              <span>cat /etc/primary_technologies.json</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                              <div className="p-2 rounded-lg bg-secondary/50 border border-border/50">
                                <span className="text-indigo-400 font-semibold flex items-center gap-1">
                                  <Code2 className="w-3 h-3" /> Frontend
                                </span>
                                <p className="text-muted-foreground mt-0.5">Next.js 16, React 19, TS, Tailwind</p>
                              </div>
                              <div className="p-2 rounded-lg bg-secondary/50 border border-border/50">
                                <span className="text-cyan-400 font-semibold flex items-center gap-1">
                                  <Cpu className="w-3 h-3" /> Backend
                                </span>
                                <p className="text-muted-foreground mt-0.5">Go (Golang), Node.js, Express, NestJS</p>
                              </div>
                              <div className="p-2 rounded-lg bg-secondary/50 border border-border/50">
                                <span className="text-purple-400 font-semibold flex items-center gap-1">
                                  <Layers className="w-3 h-3" /> Cloud & DevOps
                                </span>
                                <p className="text-muted-foreground mt-0.5">Docker, Kubernetes, AWS, CI/CD</p>
                              </div>
                              <div className="p-2 rounded-lg bg-secondary/50 border border-border/50">
                                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                                  <Database className="w-3 h-3" /> Storage
                                </span>
                                <p className="text-muted-foreground mt-0.5">PostgreSQL, Redis, Mongo, Kafka</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {selectedCommand === "latency" && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-indigo-500 font-bold">
                              <span className="text-emerald-500">➜</span>
                              <span>ping -c 3 global-edge-gateway</span>
                            </div>
                            <div className="space-y-1 text-muted-foreground pl-3 border-l-2 border-indigo-500/40 text-xs">
                              <p>64 bytes from us-east-1.aws: time=<span className="text-emerald-400 font-semibold">11.4ms</span></p>
                              <p>64 bytes from eu-central-1.aws: time=<span className="text-emerald-400 font-semibold">14.1ms</span></p>
                              <p>64 bytes from ap-south-1.aws: time=<span className="text-emerald-400 font-semibold">4.8ms</span></p>
                              <p className="text-foreground pt-1 font-semibold">--- Packet Loss: 0.0% | Min/Avg/Max = 4.8/10.1/14.1 ms ---</p>
                            </div>
                          </div>
                        )}

                        {selectedCommand === "principles" && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-indigo-500 font-bold">
                              <span className="text-emerald-500">➜</span>
                              <span>cat /etc/core_values.md</span>
                            </div>
                            <ul className="space-y-1 text-muted-foreground pl-3 border-l-2 border-indigo-500/40 text-xs list-disc list-inside">
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

                {/* TAB 2: System Architecture Breakdown */}
                {activeTab === "architecture" && (
                  <div className="space-y-3 animate-in fade-in duration-200 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs border-b border-border/40 pb-2">
                        <span className="font-semibold text-foreground flex items-center gap-1.5">
                          <Server className="w-3.5 h-3.5 text-indigo-500" />
                          Microservices Architecture
                        </span>
                        <span className="text-[11px] text-emerald-500 flex items-center gap-1 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                          Healthy
                        </span>
                      </div>

                      <div className="space-y-2 text-xs pt-3">
                        <div className="p-2.5 rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Globe className="w-3.5 h-3.5 text-cyan-500" />
                            <span className="text-foreground font-medium">Edge & Frontend</span>
                          </div>
                          <span className="text-muted-foreground text-[11px]">Next.js 16 • Cloudflare CDN • SSR</span>
                        </div>

                        <div className="p-2.5 rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Cpu className="w-3.5 h-3.5 text-indigo-500" />
                            <span className="text-foreground font-medium">Core Services</span>
                          </div>
                          <span className="text-muted-foreground text-[11px]">Go RPC • Node / Nest • GraphQL</span>
                        </div>

                        <div className="p-2.5 rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Database className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-foreground font-medium">Data & Streaming</span>
                          </div>
                          <span className="text-muted-foreground text-[11px]">Postgres • Redis Cache • Kafka</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: Production Vitals & Metrics */}
                {activeTab === "vitals" && (
                  <div className="space-y-4 animate-in fade-in duration-200 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs border-b border-border/40 pb-2">
                        <span className="font-semibold text-foreground flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-emerald-500" />
                          Live Cluster Telemetry
                        </span>
                        <span className="text-[11px] text-muted-foreground">30-day window</span>
                      </div>

                      <div className="space-y-1.5 pt-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">Uptime Record</span>
                          <span className="text-emerald-500 font-bold">99.982%</span>
                        </div>
                        <div className="grid grid-cols-20 gap-1 h-3 py-0.5">
                          {Array.from({ length: 20 }).map((_, i) => (
                            <div
                              key={i}
                              className={`rounded-xs ${
                                i === 14 ? "bg-emerald-500/70" : "bg-emerald-500"
                              } h-full transition-all hover:scale-110`}
                              title={`Day ${i + 1}: 100% operational`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs pt-3">
                        <div className="p-2 rounded-lg bg-secondary/40 border border-border/50">
                          <span className="text-muted-foreground text-[11px]">Global P99 Latency</span>
                          <p className="text-foreground font-bold text-sm mt-0.5 text-emerald-400">14.2 ms</p>
                        </div>
                        <div className="p-2 rounded-lg bg-secondary/40 border border-border/50">
                          <span className="text-muted-foreground text-[11px]">Test Coverage</span>
                          <p className="text-foreground font-bold text-sm mt-0.5 text-indigo-400">94.8% CI Pass</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Status Bar */}
                <div className="pt-3 mt-3 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px]">Production Environment</span>
                  </div>
                  <span className="text-[11px] opacity-70">Interactive Workbench</span>
                </div>

              </div>
            </div>

            {/* Quick Micro-Stats Bar Under Card */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
              {personal.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border/70 bg-card/70 p-3 text-center backdrop-blur-md shadow-xs hover:border-primary/40 hover:bg-card transition-all"
                >
                  <p className="text-lg sm:text-xl font-black text-foreground tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-muted-foreground font-medium truncate">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>

      {/* BOTTOM ROW: Scroll to explore & Socials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-12">
        <div className="flex items-center justify-between pt-2">
        </div>
      </div>
    </section>
  );
}
