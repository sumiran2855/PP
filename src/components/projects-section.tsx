"use client";

import * as React from "react";
import { portfolioData, Project } from "@/data/portfolio-data";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter } from "./ui/card";
import { ProjectModal } from "./project-modal";
import { GithubIcon } from "./icons";
import {
  FolderGit2,
  ExternalLink,
  ArrowUpRight,
  Maximize2,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const { projects, projectCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const filteredProjects = React.useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-secondary/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <Badge variant="default" className="gap-1.5 py-1 px-3 text-xs">
            <FolderGit2 className="w-3.5 h-3.5" /> Featured Work
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Engineered Projects & Systems
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            A curated portfolio of distributed architectures, high-performance web applications, and developer tools.
          </p>
        </div>

        {/* Reusable Category Filter Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-secondary/60 border border-border/60">
            {projectCategories.map((category) => {
              const count =
                category === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer",
                    selectedCategory === category
                      ? "bg-background text-foreground shadow-sm font-bold border border-border/80"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/40"
                  )}
                >
                  <span>{category}</span>
                  <span
                    className={cn(
                      "text-[10px] px-1.5 py-0.2 rounded-full",
                      selectedCategory === category
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary text-muted-foreground"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group flex flex-col justify-between overflow-hidden border-border/70 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Project Visual Header / Mockup Banner */}
                <div
                  className={`relative h-48 w-full bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between overflow-hidden`}
                >
                  {/* Glass overlay grid */}
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-all group-hover:backdrop-blur-none" />

                  {/* Top tags */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-black/50 text-white/90 backdrop-blur-md border border-white/10">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-400 text-black shadow-xs">
                        ★ Featured
                      </span>
                    )}
                  </div>

                  {/* Bottom mockup title or metric */}
                  <div className="relative z-10 space-y-1">
                    {project.metrics && (
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-200 bg-black/40 px-2.5 py-0.5 rounded-md backdrop-blur-sm border border-white/10">
                        <Activity className="w-3 h-3" />
                        <span>{project.metrics}</span>
                      </div>
                    )}
                  </div>

                  {/* Quick Inspect Button on Hover */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-xs transition-opacity duration-200 text-white gap-2 font-medium text-xs"
                    aria-label={`View details for ${project.title}`}
                  >
                    <span className="px-3.5 py-2 rounded-xl bg-background/90 text-foreground font-semibold shadow-lg flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-primary" /> Inspect Architecture
                    </span>
                  </button>
                </div>

                {/* Card Content */}
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-[11px] font-medium py-0.5 px-2 bg-secondary/80 text-secondary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge
                        variant="outline"
                        className="text-[10px] text-muted-foreground py-0.5 px-1.5"
                      >
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </div>

              {/* Card Footer Actions */}
              <CardFooter className="px-6 py-4 border-t border-border/50 flex items-center justify-between bg-card/50">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  Deep Dive <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border/60 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border/60 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                      title="Live Demo"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Modal for detailed architectural inspection */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
