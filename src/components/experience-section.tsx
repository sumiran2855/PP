"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  FileText,
  Download,
  ExternalLink,
  Sparkles,
  Terminal,
  ChevronRight,
  Cpu,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Scroll3DWrapper } from "./ui/scroll-3d-wrapper";

export function ExperienceSection() {
  const { experience, education, certifications } = portfolioData;
  const [activeTab, setActiveTab] = React.useState<"experience" | "credentials">("experience");

  return (
    <section
      id="experience"
      className="scroll-mt-28 sm:scroll-mt-32 py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-[#eef2ff] via-[#f8fafc] to-[#f1f5f9] dark:from-[#080b14] dark:via-[#0c1020] dark:to-[#090d1a] transition-colors duration-500"
    >
      {/* Ambient Aurora Glow Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-500/20 dark:from-indigo-600/20 dark:via-purple-600/25 dark:to-cyan-600/20 blur-[140px] rounded-full pointer-events-none -z-10" />

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
            <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
            <span>CAREER_TIMELINE // ENGINEERING_JOURNEY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Experience &{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl font-normal">
            A track record of engineering leadership, production-grade microservices, and continuous technical growth.
          </p>
        </motion.div>

        {/* HIGH-TECH COMMAND CONTROL & TAB SWITCHER BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-[#0f1424] text-slate-200 shadow-xl p-4 sm:p-5 mb-10 overflow-hidden font-mono text-xs"
        >
          {/* Window Title & Indicators */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 select-none gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="ml-1 sm:ml-2 text-slate-400 font-semibold text-[11px] flex items-center gap-1.5 truncate">
                <Terminal className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="hidden sm:inline">sumiran@dev:~/career_milestones</span>
                <span className="sm:hidden">~/milestones</span>
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[10px] text-slate-400 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>STATUS: VERIFIED_TIMELINE</span>
            </div>
          </div>

          {/* View Switcher Tabs & Resume Actions */}
          <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Active Tab Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800">
              <button
                onClick={() => setActiveTab("experience")}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2 rounded-lg transition-colors cursor-pointer select-none font-sans font-medium text-xs",
                  activeTab === "experience"
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                )}
              >
                {activeTab === "experience" && (
                  <motion.div
                    layoutId="activeExperienceTab"
                    className="absolute inset-0 bg-indigo-600 rounded-lg -z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Briefcase className="relative z-10 w-3.5 h-3.5" />
                <span className="relative z-10">Work Experience</span>
                <span
                  className={cn(
                    "relative z-10 text-[10px] font-mono px-1.5 py-0.2 rounded-full",
                    activeTab === "experience"
                      ? "bg-indigo-700 text-cyan-200"
                      : "bg-slate-800 text-slate-400"
                  )}
                >
                  {experience.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("credentials")}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2 rounded-lg transition-colors cursor-pointer select-none font-sans font-medium text-xs",
                  activeTab === "credentials"
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                )}
              >
                {activeTab === "credentials" && (
                  <motion.div
                    layoutId="activeExperienceTab"
                    className="absolute inset-0 bg-indigo-600 rounded-lg -z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <GraduationCap className="relative z-10 w-3.5 h-3.5" />
                <span className="relative z-10">Education & Certifications</span>
                <span
                  className={cn(
                    "relative z-10 text-[10px] font-mono px-1.5 py-0.2 rounded-full",
                    activeTab === "credentials"
                      ? "bg-indigo-700 text-cyan-200"
                      : "bg-slate-800 text-slate-400"
                  )}
                >
                  {education.length + certifications.length}
                </span>
              </button>
            </div>

            {/* Resume Buttons */}
            <div className="flex items-center gap-2.5 font-sans">
              <Link href="/resume">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 text-xs font-semibold rounded-xl border-slate-700 bg-slate-900/90 text-slate-200 hover:bg-slate-800 hover:text-white cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-indigo-400" />
                  View Web Resume
                </Button>
              </Link>
              <a href="/resume?download=pdf" download="Sumiran_Resume.pdf">
                <Button
                  size="sm"
                  className="gap-2 text-xs font-bold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 cursor-pointer border-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  PDF Resume
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* TAB CONTENTS WITH SCROLL 3D PERSPECTIVE & ANIMATE PRESENCE */}
        <Scroll3DWrapper intensity={4} depth={20}>
          <AnimatePresence mode="wait">
            {/* Tab 1: Work Experience Timeline */}
          {activeTab === "experience" && (
            <motion.div
              key="tab-experience"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="relative border-l-2 border-indigo-500/30 dark:border-indigo-500/40 pl-6 sm:pl-10 ml-3 sm:ml-8 space-y-8"
            >
              {experience.map((item, idx) => (
                <div key={item.id} className="relative group">
                  {/* Glowing Laser Timeline Node Dot */}
                  <div
                    className={cn(
                      "absolute -left-[31px] sm:-left-[47px] top-4 w-5 h-5 rounded-full border-4 border-white dark:border-[#0c1020] flex items-center justify-center transition-all duration-300 group-hover:scale-125",
                      item.isCurrent
                        ? "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.9)] animate-pulse"
                        : "bg-indigo-600 dark:bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.7)]"
                    )}
                  />

                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-indigo-500/50 transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6 sm:p-8 space-y-5">
                      {/* Role Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
                        <div>
                          <div className="flex items-center gap-2.5">
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {item.role}
                            </h3>
                            {item.isCurrent && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                                Current Role
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1 flex items-center gap-1.5 font-mono">
                            <Cpu className="w-3.5 h-3.5 text-indigo-500" />
                            {item.company}
                          </p>
                        </div>

                        <div className="flex flex-wrap sm:flex-col items-start sm:items-end text-xs text-slate-500 dark:text-slate-400 gap-x-3 gap-y-1 font-mono">
                          <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-md text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                            <Calendar className="w-3.5 h-3.5 text-indigo-500" /> {item.period}
                          </span>
                          <span className="flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" /> {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Role Overview */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {item.description}
                      </p>

                      {/* Responsibilities List */}
                      <div className="space-y-2 pt-1">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-indigo-500" />
                          KEY_RESPONSIBILITIES
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {item.responsibilities.map((resp, rIdx) => (
                            <div
                              key={rIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-normal"
                            >
                              <ChevronRight className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                              <span className="leading-snug">{resp}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Impact & Achievements Box */}
                      {item.achievements && item.achievements.length > 0 && (
                        <div className="space-y-2.5 pt-2 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 p-4 sm:p-5 rounded-xl border border-indigo-500/20 shadow-xs">
                          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                            QUANTIFIABLE_IMPACT // RESULTS
                          </h4>
                          <div className="space-y-2">
                            {item.achievements.map((ach, aIdx) => (
                              <div
                                key={aIdx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium"
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{ach}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tech Stack Inventory */}
                      <div className="pt-2 flex flex-wrap items-center gap-1.5">
                        <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 mr-1.5 flex items-center gap-1">
                          <Layers className="w-3.5 h-3.5 text-indigo-500" /> Stack:
                        </span>
                        {item.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-[10px] font-mono font-semibold py-0.5 px-2 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Tab 2: Education & Certifications */}
          {activeTab === "credentials" && (
            <motion.div
              key="tab-credentials"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Formal Education */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                  <GraduationCap className="w-5 h-5 text-indigo-500" />
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Formal Education
                  </h3>
                </div>

                <div className="space-y-4">
                  {education.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3 }}
                      className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-6 shadow-md hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300 space-y-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-base">
                            {edu.degree}
                          </h4>
                          <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5 font-mono">
                            {edu.institution}
                          </p>
                        </div>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 whitespace-nowrap">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {edu.details}
                      </p>
                      {edu.score && (
                        <div className="pt-1">
                          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                            <Sparkles className="w-3 h-3 text-emerald-500" />
                            Graduated: {edu.score}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Industry Certifications */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                  <Award className="w-5 h-5 text-indigo-500" />
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Industry Certifications
                  </h3>
                </div>

                <div className="space-y-3">
                  {certifications.map((cert, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3 }}
                      className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-5 shadow-md hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300 flex items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                            {cert.name}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 font-semibold">
                            {cert.badgeCode}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                          Issued by {cert.issuer} • {cert.date}
                        </p>
                      </div>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-indigo-500/10 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0 cursor-pointer"
                          title="Verify Credential"
                          aria-label={`Verify ${cert.name}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Scroll3DWrapper>
    </div>
  </section>
);
}
