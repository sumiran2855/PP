"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, Project } from "@/data/portfolio-data";
import { Badge } from "./ui/badge";
import { GithubIcon } from "./icons";
import { Scroll3DWrapper } from "./ui/scroll-3d-wrapper";
import {
  FolderGit2,
  ExternalLink,
  ArrowUpRight,
  Maximize2,
  Activity,
  Terminal,
  Search,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";

// Helper component for mouse tilt interactive 3D effect
function Project3DCard({
  project,
}: {
  project: Project;
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
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
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
        className="group relative h-full flex flex-col justify-between rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 overflow-hidden"
      >
        {/* Subtle Ambient Hover Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

        <div>
          {/* Visual Header / Gradient Banner */}
          <div
            className={cn(
              "relative h-44 sm:h-48 w-full bg-gradient-to-br p-4 sm:p-5 flex flex-col justify-between overflow-hidden",
              project.gradient
            )}
          >
            {/* Glass Overlay Grid & Parallax Lighting */}
            <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px] transition-all group-hover:backdrop-blur-none group-hover:bg-black/15" />
            <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

            {/* Top Bar: Category Pill & Featured Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-black/60 text-cyan-300 backdrop-blur-md border border-cyan-500/30 shadow-xs">
                <Cpu className="w-3 h-3 text-cyan-400" />
                {project.category}
              </span>
              {project.featured && (
                <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 shadow-md font-mono">
                  <Sparkles className="w-3 h-3 fill-slate-950" /> Featured
                </span>
              )}
            </div>

            {/* Bottom Bar: Telemetry Metric Badge */}
            <div className="relative z-10 space-y-1">
              {project.metrics && (
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-cyan-200 bg-slate-950/70 px-3 py-1 rounded-lg backdrop-blur-md border border-cyan-500/30 shadow-inner">
                  <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>{project.metrics}</span>
                </div>
              )}
            </div>

            {/* Hover Backdrop Overlay with Quick Inspect Button */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-slate-950/50 backdrop-blur-xs transition-all duration-300">
              <Link
                href={`/projects/${project.id}`}
                className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-xs shadow-xl border border-indigo-500/40 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 cursor-pointer hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600"
              >
                <Maximize2 className="w-3.5 h-3.5 text-indigo-500 group-hover:text-white" />
                View Project Details
              </Link>
            </div>
          </div>

          {/* Project Details Content */}
          <div className="p-5 space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
              <Link href={`/projects/${project.id}`} className="hover:underline flex items-center justify-between">
                <span>{project.title}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500" />
              </Link>
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
              {project.description}
            </p>

            {/* Key Highlights Bullet Preview (if available) */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="pt-1 space-y-1">
                {project.highlights.slice(0, 2).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-1.5 text-[11px] text-slate-500 dark:text-slate-400"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-[10px] font-mono font-medium py-0.5 px-2 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge
                  variant="outline"
                  className="text-[10px] font-mono text-slate-500 dark:text-slate-400 py-0.5 px-1.5 border-slate-300 dark:border-slate-700"
                >
                  +{project.technologies.length - 4} more
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="px-5 py-3.5 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/40 font-mono text-xs">
          <Link
            href={`/projects/${project.id}`}
            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 cursor-pointer transition-colors"
          >
            Deep Dive <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-indigo-500/10 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
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
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-indigo-500/10 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                title="Live Demo"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const { projects, projectCategories } = portfolioData;

  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [visibleCount, setVisibleCount] = React.useState<number>(6);

  // Filter projects by category and real-time search query
  const filteredProjects = React.useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase();
      const matchesQuery =
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [projects, selectedCategory, searchQuery]);

  // Reset pagination limit when category or search query changes
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setVisibleCount(6);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setVisibleCount(6);
  };

  const displayedProjects = React.useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section
      id="projects"
      className="scroll-mt-28 sm:scroll-mt-32 py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#eef2ff] dark:from-[#090d1a] dark:via-[#0e1324] dark:to-[#080b14] transition-colors duration-500"
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
            <FolderGit2 className="w-3.5 h-3.5 text-indigo-500" />
            <span>ENGINEERED_SYSTEMS // PORTFOLIO_V2</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Engineered Projects &{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Architectures
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl font-normal">
            Production-grade SaaS platforms, microservices, cloud tools, and real-time distributed systems.
          </p>
        </motion.div>

        {/* HIGH-TECH COMMAND CONTROL & FILTER BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-[#0f1424] text-slate-200 shadow-xl p-4 sm:p-5 mb-8 overflow-hidden font-mono text-xs"
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
                <span className="hidden sm:inline">sumiran@dev:~/featured_projects</span>
                <span className="sm:hidden">~/projects</span>
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[10px] text-slate-400 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>SYSTEM_STATUS: ONLINE</span>
            </div>
          </div>

          {/* Search Input & Category Selector */}
          <div className="mt-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Category Filter Tabs (Including "All") */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800">
              {projectCategories.map((cat) => {
                const count =
                  cat === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === cat).length;
                const isSelected = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={cn(
                      "relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer select-none font-sans font-medium text-xs",
                      isSelected
                        ? "text-white"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                    )}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeProjectCategory"
                        className="absolute inset-0 bg-indigo-600 rounded-lg -z-0"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat === "All" ? "All Projects" : cat}</span>
                    <span
                      className={cn(
                        "relative z-10 text-[10px] font-mono px-1.5 py-0.2 rounded-full",
                        isSelected
                          ? "bg-indigo-700 text-cyan-200"
                          : "bg-slate-800 text-slate-400"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[220px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search stack, tech, project..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 text-xs font-sans transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-[10px]"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* PROJECTS GRID WITH SCROLL 3D PERSPECTIVE & ANIMATE PRESENCE */}
        <Scroll3DWrapper intensity={4} depth={20}>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {displayedProjects.length > 0 ? (
                displayedProjects.map((project) => (
                  <Project3DCard
                    key={project.id}
                    project={project}
                  />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full py-12 text-center border border-dashed border-slate-300 dark:border-slate-800 rounded-2xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-md"
                >
                  <Layers className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    No projects found for query &ldquo;{searchQuery}&rdquo; in category [{selectedCategory}].
                  </p>
                  <button
                    onClick={() => handleSearchChange("")}
                    className="mt-3 text-xs font-mono text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                  >
                    Reset search filter
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </Scroll3DWrapper>

        {/* LOAD MORE / VIEW MORE BUTTON */}
        {filteredProjects.length > visibleCount && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 flex flex-col items-center justify-center space-y-2"
          >
            <button
              onClick={handleLoadMore}
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 font-bold text-xs sm:text-sm shadow-xl hover:shadow-2xl hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:text-white transition-all duration-300 cursor-pointer border border-indigo-500/30"
            >
              <span>Load More Projects</span>
              <ChevronDown className="w-4 h-4 text-indigo-400 dark:text-indigo-600 group-hover:text-white group-hover:translate-y-0.5 transition-all duration-200" />
            </button>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              Showing {displayedProjects.length} of {filteredProjects.length} systems
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
