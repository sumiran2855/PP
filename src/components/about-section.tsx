"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Badge } from "./ui/badge";
import {
  Code2,
  Cpu,
  Layers,
  Terminal,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
  Zap,
  Globe,
  Database,
  Server,
  FileCode2,
  Workflow,
  Compass
} from "lucide-react";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const { personal } = portfolioData;
  const [activeTab, setActiveTab] = React.useState<"story" | "capabilities" | "values">("story");
  const [codeCopied, setCodeCopied] = React.useState(false);

  const copyConfigCode = () => {
    const configString = `export const engineerProfile = {
  name: "${personal.name}",
  title: "${personal.title}",
  experience: "5+ Years",
  availability: "${personal.availability}",
  philosophy: {
    codeQuality: "Strict TypeScript + Clean Patterns",
    latencyTarget: "< 15ms P99 Latency",
    availabilitySLA: "99.98% High Availability",
    mindset: "Architect for scale, craft for delight"
  }
};`;
    navigator.clipboard.writeText(configString);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const interests = [
    "Distributed Systems",
    "Microservice Architecture",
    "Cloud Native & Kubernetes",
    "Real-Time WebSockets & Streams",
    "WebAssembly (WASM)",
    "API Security & Rate-Limiting",
    "Developer Tooling & DX",
    "Autonomous AI Agents",
  ];

  const corePillars = [
    {
      icon: Code2,
      title: "Full-Stack SaaS Engineering",
      tag: "Frontend & UI/UX",
      description:
        "Architecting responsive web applications with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Focused on sub-second LCP, semantic accessibility, and clean component patterns.",
      accent: "from-indigo-500 via-purple-500 to-indigo-600",
      metrics: "Sub-1s Page Load • 100% Lighthouse",
    },
    {
      icon: Cpu,
      title: "Distributed Cloud & DevOps",
      tag: "Infrastructure & CI/CD",
      description:
        "Designing infrastructure as code with Terraform, orchestrating microservices in Docker and Kubernetes (k8s), and automating zero-downtime GitHub Actions CI/CD pipelines.",
      accent: "from-cyan-500 via-sky-500 to-blue-600",
      metrics: "k8s Orchestration • Automated CI/CD",
    },
    {
      icon: Layers,
      title: "High-Throughput Backends",
      tag: "APIs & Databases",
      description:
        "Building fault-tolerant APIs in Go and Node.js. Tuning database queries in PostgreSQL, managing distributed caching with Redis, and streaming event pipelines with Kafka.",
      accent: "from-amber-500 via-orange-500 to-red-500",
      metrics: "Sub-15ms Latency • 99.98% Availability",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-[#f1f5f9] via-[#f8fafc] to-[#eef2ff] dark:from-[#080b14] dark:via-[#0e1324] dark:to-[#090d1a] transition-colors duration-500">
      {/* Ambient Aurora Glow Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[950px] h-[450px] sm:h-[550px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-400/20 dark:from-indigo-600/25 dark:via-purple-600/20 dark:to-cyan-400/20 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-[-5%] w-96 h-96 bg-cyan-400/15 dark:bg-cyan-500/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 left-[-5%] w-96 h-96 bg-purple-500/15 dark:bg-violet-600/20 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Dot Grid Mask */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 dark:opacity-25 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold backdrop-blur-md shadow-xs select-none">
            <Terminal className="w-3.5 h-3.5 text-indigo-500" />
            <span className="font-mono">SYSTEM_DOSSIER // NODE_01</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
            Engineering Architecture &{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Dossier
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl font-normal">
            An interactive blueprint detailing engineering philosophy, system capabilities, and core principles.
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* BENTO GRID ROW 1: Interactive Tabbed Dossier + TS Config Code Card */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">

          {/* CARD 1: Interactive Tabbed Dossier (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl p-6 sm:p-8 shadow-xl shadow-indigo-500/5 dark:shadow-indigo-500/15 flex flex-col justify-between"
          >
            <div>
              {/* Card Header Tab Selector */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Engineer Profile
                  </span>
                </div>

                {/* Tab selector buttons */}
                <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-2xl border border-slate-200/80 dark:border-slate-800">
                  <button
                    onClick={() => setActiveTab("story")}
                    className={cn(
                      "px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer",
                      activeTab === "story"
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-foreground"
                    )}
                  >
                    01. Story
                  </button>
                  <button
                    onClick={() => setActiveTab("capabilities")}
                    className={cn(
                      "px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer",
                      activeTab === "capabilities"
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-foreground"
                    )}
                  >
                    02. Domain Focus
                  </button>
                  <button
                    onClick={() => setActiveTab("values")}
                    className={cn(
                      "px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer",
                      activeTab === "values"
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-foreground"
                    )}
                  >
                    03. Values
                  </button>
                </div>
              </div>

              {/* Dynamic Animated Tab Content */}
              <div className="py-6 min-h-[220px]">
                <AnimatePresence mode="wait">
                  {activeTab === "story" && (
                    <motion.div
                      key="story"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed"
                    >
                      {personal.bio.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === "capabilities" && (
                    <motion.div
                      key="capabilities"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        Specialized engineering domain focus across distributed cloud systems, real-time streaming, and high-performance frontend micro-interactions:
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {interests.map((item, idx) => (
                          <div
                            key={idx}
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-md transition-all select-none cursor-default"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "values" && (
                    <motion.div
                      key="values"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4 text-sm"
                    >
                      <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold block text-base text-slate-900 dark:text-white">
                            Resilience & Failover First
                          </span>
                          <p className="mt-1 text-slate-600 dark:text-slate-300">
                            Designing every distributed microservice assuming network splits, memory spikes, and container restarts will happen. Redundancy is baked into every architecture layer.
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-start gap-3">
                        <Zap className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold block text-base text-slate-900 dark:text-white">
                            Zero Technical Debt & Strict Typing
                          </span>
                          <p className="mt-1 text-slate-600 dark:text-slate-300">
                            TypeScript is not just a tool—it is a contract guarantee. Clean code and comprehensive unit/integration test coverage enable frictionless scaling and zero-downtime shipping.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Quick Metric Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
              {personal.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 text-center"
                >
                  <p className="text-base font-black text-indigo-600 dark:text-indigo-400 font-mono">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium truncate mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CARD 2: TS / JSON Code Config Card (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-[#0f1424] text-slate-200 shadow-2xl p-5 sm:p-6 flex flex-col justify-between font-mono text-xs overflow-hidden group"
          >
            {/* IDE Window Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-[11px] text-slate-400 ml-2 flex items-center gap-1.5">
                    <FileCode2 className="w-3.5 h-3.5 text-indigo-400" />
                    sumiran.config.ts
                  </span>
                </div>

                <button
                  onClick={copyConfigCode}
                  className="p-1.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer flex items-center gap-1 text-[11px]"
                  title="Copy code snippet"
                >
                  {codeCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-sans">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="font-sans">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* IDE Syntax Highlighted Code View */}
              <div className="py-4 space-y-1.5 overflow-x-auto text-[11px] sm:text-xs leading-relaxed">
                <p className="text-purple-400">
                  <span className="text-cyan-400">export const</span> engineerProfile = &#123;
                </p>
                <p className="pl-4 text-slate-300">
                  <span className="text-indigo-300">name</span>: <span className="text-emerald-300">&quot;{personal.name}&quot;</span>,
                </p>
                <p className="pl-4 text-slate-300">
                  <span className="text-indigo-300">title</span>: <span className="text-emerald-300">&quot;Senior Full-Stack & Cloud System Engineer&quot;</span>,
                </p>
                <p className="pl-4 text-slate-300">
                  <span className="text-indigo-300">experience</span>: <span className="text-emerald-300">&quot;5+ Years Enterprise&quot;</span>,
                </p>
                <p className="pl-4 text-slate-300">
                  <span className="text-indigo-300">location</span>: <span className="text-emerald-300">&quot;Bengaluru, India / Remote&quot;</span>,
                </p>
                <p className="pl-4 text-slate-300">
                  <span className="text-indigo-300">philosophy</span>: &#123;
                </p>
                <p className="pl-8 text-slate-300">
                  <span className="text-indigo-300">codeQuality</span>: <span className="text-amber-300">&quot;Strict TS + Zero Tech Debt&quot;</span>,
                </p>
                <p className="pl-8 text-slate-300">
                  <span className="text-indigo-300">latencyTarget</span>: <span className="text-amber-300">&quot;&lt; 15ms P99 Latency&quot;</span>,
                </p>
                <p className="pl-8 text-slate-300">
                  <span className="text-indigo-300">availabilitySLA</span>: <span className="text-amber-300">&quot;99.98% High Availability&quot;</span>,
                </p>
                <p className="pl-8 text-slate-300">
                  <span className="text-indigo-300">mindset</span>: <span className="text-amber-300">&quot;Architect for scale, craft for delight&quot;</span>
                </p>
                <p className="pl-4 text-slate-300">&#125;,</p>
                <p className="pl-4 text-slate-300">
                  <span className="text-indigo-300">status</span>: <span className="text-emerald-400 font-bold">&quot;Available for High-Impact Roles&quot;</span>
                </p>
                <p className="text-purple-400">&#125;;</p>
              </div>
            </div>

            {/* Bottom Status Indicator */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-sans">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified Configuration</span>
              </div>
              <span className="text-indigo-400 font-mono">TypeScript v5.0</span>
            </div>
          </motion.div>

        </div>

        {/* ======================================================== */}
        {/* BENTO GRID ROW 2: 3 Core Engineering Pillars */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="group relative rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl p-6 sm:p-7 shadow-xl shadow-indigo-500/5 dark:shadow-indigo-500/15 overflow-hidden hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Gradient Stripe */}
                <div className={cn("absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r", pillar.accent)} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Metric Pill */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400 font-mono">
                  <span>{pillar.metrics}</span>
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
