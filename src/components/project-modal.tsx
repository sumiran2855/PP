"use client";

import * as React from "react";
import { Project } from "@/data/portfolio-data";
import { Modal } from "./ui/modal";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { GithubIcon } from "./icons";
import {
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  Activity,
  Terminal,
  Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      category={project.category}
    >
      <div className="space-y-6">
        {/* Title Header inside Modal */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              PROJECT_SPECIFICATION
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              ID: {project.id}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            {project.title}
          </h3>
        </div>

        {/* Visual Banner Header */}
        <div
          className={cn(
            "relative w-full h-44 sm:h-52 rounded-2xl bg-gradient-to-br p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-lg border border-white/20 dark:border-white/10",
            project.gradient
          )}
        >
          {/* Glass Overlay & Grid */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

          {/* Top Badges */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-black/60 text-cyan-300 backdrop-blur-md border border-cyan-500/30 shadow-xs">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              {project.category}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-3 py-1 rounded-full bg-amber-400 text-slate-950 shadow-md font-mono">
                <Sparkles className="w-3.5 h-3.5 fill-slate-950" /> Featured System
              </span>
            )}
          </div>

          {/* Telemetry SLA Metric Badge */}
          <div className="relative z-10">
            {project.metrics && (
              <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-cyan-200 bg-slate-950/80 px-3.5 py-1.5 rounded-xl backdrop-blur-md border border-cyan-500/40 shadow-inner">
                <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>{project.metrics}</span>
              </div>
            )}
          </div>
        </div>

        {/* Project Overview Narrative */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-indigo-500" />
            SYSTEM_OVERVIEW // NARRATIVE
          </h4>
          <p className="text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-normal leading-relaxed">
            {project.detailedDescription || project.description}
          </p>
        </div>

        {/* Key Architectural Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              KEY_ACHIEVEMENTS // ARCHITECTURE
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {project.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 text-xs sm:text-sm text-slate-800 dark:text-slate-200 shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Inventory */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-indigo-500" />
            STACK_INVENTORY // TECHNOLOGIES
          </h4>
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

        {/* Action Buttons Row */}
        <div className="flex items-center justify-end gap-3 pt-5 border-t border-slate-200 dark:border-slate-800 font-mono text-xs">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                variant="outline"
                size="sm"
                className="gap-2 text-xs font-semibold rounded-xl border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 cursor-pointer"
              >
                <GithubIcon className="w-4 h-4" />
                View Source
              </Button>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="sm"
                className="gap-2 text-xs font-bold rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-lg shadow-indigo-500/30 cursor-pointer border-0"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo / Documentation
              </Button>
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
}
