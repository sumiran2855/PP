"use client";

import * as React from "react";
import { Project } from "@/data/portfolio-data";
import { Modal } from "./ui/modal";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { GithubIcon } from "./icons";
import { ExternalLink, CheckCircle, Sparkles, Layers, Activity } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      <div className="space-y-6">
        {/* Visual Banner */}
        <div
          className={`w-full h-40 rounded-xl bg-gradient-to-r ${project.gradient} p-6 flex flex-col justify-end text-white shadow-inner relative overflow-hidden`}
        >
          <div className="absolute top-3 right-3 flex items-center gap-2">
            <Badge variant="outline" className="bg-black/40 text-white border-white/20 text-xs">
              {project.category}
            </Badge>
            {project.featured && (
              <Badge variant="default" className="bg-amber-400 text-black font-semibold text-xs border-0">
                Featured
              </Badge>
            )}
          </div>
          {project.metrics && (
            <div className="flex items-center gap-2 text-xs font-mono bg-black/40 px-3 py-1 rounded-lg backdrop-blur-md w-fit text-cyan-200 border border-white/10">
              <Activity className="w-3.5 h-3.5" />
              <span>{project.metrics}</span>
            </div>
          )}
        </div>

        {/* Detailed Narrative */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Project Overview
          </h4>
          <p className="text-sm text-foreground/90 leading-relaxed">
            {project.detailedDescription || project.description}
          </p>
        </div>

        {/* Architectural Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-primary" /> Key Achievements & Architecture
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies Breakdown */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2.5 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-primary" /> Tech Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs py-1 px-2.5">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-border/60">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="outline" size="sm" className="gap-2 text-xs">
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
              <Button size="sm" className="gap-2 text-xs shadow-md shadow-indigo-500/20">
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
