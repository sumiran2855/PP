import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolio-data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  Activity,
  Terminal,
  Cpu,
  Clock,
  Briefcase,
  Users,
  AlertTriangle,
  ChevronRight,
  Boxes,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return portfolioData.projects.map((p) => ({
    id: p.id,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const currentIndex = portfolioData.projects.findIndex((p) => p.id === id);
  const prevProject =
    portfolioData.projects[
      (currentIndex - 1 + portfolioData.projects.length) % portfolioData.projects.length
    ];
  const nextProject =
    portfolioData.projects[(currentIndex + 1) % portfolioData.projects.length];

  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground bg-grid-pattern selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20 relative overflow-hidden">
        {/* Ambient Aurora Glow Lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 dark:from-cyan-600/20 dark:via-indigo-600/25 dark:to-purple-600/20 blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumb Navigation & Back Button */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Projects</span>
            </Link>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/#projects" className="hover:underline">Projects</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-indigo-600 dark:text-indigo-400 font-bold truncate max-w-[180px]">
                {project.title}
              </span>
            </div>
          </div>

          {/* PROJECT HERO BANNER */}
          <div
            className={cn(
              "relative rounded-3xl bg-gradient-to-br p-6 sm:p-10 lg:p-12 text-white shadow-2xl overflow-hidden border border-white/20 dark:border-white/10",
              project.gradient
            )}
          >
            {/* Ambient Glass Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Category Pill & Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-black/60 text-cyan-300 backdrop-blur-md border border-cyan-500/30 shadow-xs">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  {project.category}
                </span>

                <div className="flex items-center gap-2">
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-xs font-extrabold px-3 py-1 rounded-full bg-amber-400 text-slate-950 shadow-md font-mono">
                      <Sparkles className="w-3.5 h-3.5 fill-slate-950" /> Featured Architecture
                    </span>
                  )}
                  {project.metrics && (
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-200 bg-slate-950/80 px-3.5 py-1 rounded-full backdrop-blur-md border border-cyan-500/40">
                      <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                      <span>{project.metrics}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Title & Headline */}
              <div className="space-y-3 max-w-3xl">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-md">
                  {project.title}
                </h1>
                <p className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Top CTA Actions Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="gap-2 text-xs sm:text-sm font-bold rounded-2xl bg-white text-slate-950 hover:bg-slate-100 shadow-xl hover:scale-105 transition-all cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4 text-indigo-600" />
                      <span>Launch Live App / Demo</span>
                    </Button>
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="gap-2 text-xs sm:text-sm font-semibold rounded-2xl border-white/40 bg-black/40 text-white hover:bg-white/20 backdrop-blur-md cursor-pointer hover:scale-105 transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View GitHub Source</span>
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* BENTO GRID: CORE PROJECT METADATA */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Role in Project */}
            <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl p-5 shadow-sm space-y-1.5">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <Briefcase className="w-4 h-4" />
                <span>My Role</span>
              </div>
              <p className="text-base font-bold text-slate-900 dark:text-white">
                {project.role}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Architectural design & core implementation
              </p>
            </div>

            {/* Card 2: Time Taken / Duration */}
            <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl p-5 shadow-sm space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Time Taken</span>
              </div>
              <p className="text-base font-bold text-slate-900 dark:text-white font-mono">
                {project.timeTaken}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Conception to production rollout
              </p>
            </div>

            {/* Card 3: Domain / Industry */}
            <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl p-5 shadow-sm space-y-1.5">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <Globe className="w-4 h-4" />
                <span>Domain</span>
              </div>
              <p className="text-base font-bold text-slate-900 dark:text-white">
                {project.clientOrDomain || project.category}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Industry problem space
              </p>
            </div>

            {/* Card 4: Team Structure */}
            <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl p-5 shadow-sm space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Team Setup</span>
              </div>
              <p className="text-base font-bold text-slate-900 dark:text-white">
                {project.teamSize || "Engineering Team"}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Collaboration & execution model
              </p>
            </div>
          </div>

          {/* ======================================================== */}
          {/* DETAILED NARRATIVE & PROBLEM STATEMENT */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Deep Dive Narrative (Span 8) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Detailed Overview */}
              <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl p-6 sm:p-8 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-200/80 dark:border-slate-800/80">
                  <Terminal className="w-4 h-4 text-indigo-500" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    SYSTEM_OVERVIEW // ARCHITECTURAL_ANALYSIS
                  </span>
                </div>

                <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    {project.detailedDescription || project.description}
                  </p>
                  <p>
                    Architected to solve high-concurrency challenges with a relentless focus on sub-millisecond response latency, graceful degradation under load spikes, and frictionless developer observability.
                  </p>
                </div>
              </div>

              {/* Architectural Highlights & Quantifiable Achievements */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl p-6 sm:p-8 shadow-sm space-y-5">
                  <div className="flex items-center gap-2 pb-3 border-b border-slate-200/80 dark:border-slate-800/80">
                    <Sparkles className="w-4 h-4 text-indigo-500" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      KEY_ACHIEVEMENTS // QUANTIFIABLE_IMPACT
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {project.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3.5 p-4 rounded-2xl bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/20 text-slate-800 dark:text-slate-200 text-sm"
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Challenges & Solutions */}
              {project.challenges && project.challenges.length > 0 && (
                <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl p-6 sm:p-8 shadow-sm space-y-5">
                  <div className="flex items-center gap-2 pb-3 border-b border-slate-200/80 dark:border-slate-800/80">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      ENGINEERING_CHALLENGES_TACKLED
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {project.challenges.map((challenge, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                      >
                        <span className="font-mono text-amber-500 font-bold mr-2">0{idx + 1}.</span>
                        {challenge}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Stack & Deliverables Inventory (Span 4) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Skills & Technologies Used */}
              <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-200/80 dark:border-slate-800/80">
                  <Layers className="w-4 h-4 text-indigo-500" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    SKILLS_USED // TECH_STACK
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30 text-xs font-mono font-semibold shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Shipped Deliverables */}
              {project.deliverables && project.deliverables.length > 0 && (
                <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl p-6 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-slate-200/80 dark:border-slate-800/80">
                    <Boxes className="w-4 h-4 text-indigo-500" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      SHIPPED_DELIVERABLES
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                    {project.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Connect / Inquire Card */}
              <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-xl p-6 shadow-sm space-y-3 text-center">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Interested in this Architecture?
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Have questions about how this system was engineered, benchmarked, or scaled? Let&apos;s talk.
                </p>
                <div className="pt-2">
                  <Link href="/#contact">
                    <Button
                      size="sm"
                      className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs cursor-pointer shadow-md"
                    >
                      Discuss Implementation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* PREVIOUS / NEXT PROJECT NAVIGATION FOOTER */}
          {/* ======================================================== */}
          <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/projects/${prevProject.id}`}
              className="group p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl hover:border-indigo-500/50 hover:shadow-lg transition-all flex items-center justify-between"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  Previous Project
                </span>
                <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {prevProject.title}
                </p>
              </div>
            </Link>

            <Link
              href={`/projects/${nextProject.id}`}
              className="group p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl hover:border-indigo-500/50 hover:shadow-lg transition-all flex items-center justify-between text-right"
            >
              <div className="space-y-1 ml-auto">
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1 justify-end">
                  Next Project
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {nextProject.title}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
