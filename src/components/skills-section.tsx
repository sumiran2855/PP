"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Input } from "./ui/input";
import {
  Search,
  Terminal,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Scroll3DWrapper } from "./ui/scroll-3d-wrapper";

const CATEGORY_COMMANDS: Record<string, string> = {
  Frontend: "filter --frontend",
  Backend: "filter --backend",
  Databases: "filter --databases",
  "DevOps & Cloud": "filter --cloud-devops",
  "System Design": "filter --system-design",
  "Mobile Development": "filter --mobile",
  "Tools & Technologies": "filter --tools",
};

const SHORT_CATEGORY_COMMANDS: Record<string, string> = {
  Frontend: "$frontend",
  Backend: "$backend",
  Databases: "$databases",
  "DevOps & Cloud": "$devops",
  "System Design": "$system",
  "Mobile Development": "$mobile",
  "Tools & Technologies": "$tools",
};

export function SkillsSection() {
  const { skills } = portfolioData;
  const categories = React.useMemo(() => skills.map((s) => s.category), [skills]);
  const [selectedCategory, setSelectedCategory] = React.useState<string>("Frontend");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [activeCommandLog, setActiveCommandLog] = React.useState<string>("Executing: filter --frontend => Showing verified Frontend technical nodes.");

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    const cmd = CATEGORY_COMMANDS[cat] || `filter --${cat.toLowerCase()}`;
    setActiveCommandLog(`Executing: ${cmd} => Filtered technical stacks for category [${cat}].`);
  };

  // Flatten all skills into a unified glowing node matrix
  const allSkillsWithCategory = React.useMemo(() => {
    const list: Array<{
      name: string;
      level: "Advanced" | "Proficient" | "Familiar";
      tag?: string;
      category: string;
    }> = [];

    skills.forEach((cat) => {
      cat.skills.forEach((s) => {
        list.push({
          ...s,
          category: cat.category,
        });
      });
    });

    return list;
  }, [skills]);

  // Filter skills based on category and search query
  const filteredSkills = React.useMemo(() => {
    return allSkillsWithCategory.filter((s) => {
      const matchesCategory = s.category === selectedCategory;
      if (!searchQuery.trim()) return matchesCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        s.name.toLowerCase().includes(query) ||
        (s.tag && s.tag.toLowerCase().includes(query)) ||
        s.category.toLowerCase().includes(query) ||
        s.level.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [allSkillsWithCategory, selectedCategory, searchQuery]);

  return (
    <section id="skills" className="scroll-mt-28 sm:scroll-mt-32 py-20 sm:py-32 relative overflow-hidden bg-gradient-to-b from-[#f1f5f9] via-[#f8fafc] to-[#eef2ff] dark:from-[#080b14] dark:via-[#0e1324] dark:to-[#090d1a] transition-colors duration-500">
      {/* Ambient Aurora Glow Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[850px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-400/20 dark:from-indigo-600/25 dark:via-purple-600/20 dark:to-cyan-400/20 blur-[140px] rounded-full pointer-events-none -z-10" />

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold backdrop-blur-md shadow-xs select-none">
            <Terminal className="w-3.5 h-3.5 text-indigo-500" />
            <span className="font-mono">TECH_NODE_MATRIX // VERIFIED_STACKS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Technical Skills &{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Node Matrix
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl font-normal">
            Execute terminal filter commands to inspect verified technical nodes.
          </p>
        </motion.div>

        {/* INTERACTIVE CLI TERMINAL FILTER WINDOW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-[#0f1424] text-slate-200 shadow-xl p-4 sm:p-5 mb-8 overflow-hidden font-mono text-xs"
        >
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 select-none gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1">
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[11px] text-slate-400 ml-1 sm:ml-2 flex items-center gap-1.5 truncate">
                <Terminal className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="hidden sm:inline">sumiran@dev:~/skills_inventory</span>
                <span className="sm:hidden">~/skills</span>
              </span>
            </div>
            <span className="shrink-0 whitespace-nowrap text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
              <span className="hidden sm:inline">● Node Filter Active</span>
              <span className="sm:hidden">● Active</span>
            </span>
          </div>

          {/* Terminal Controls Bar: Category Command Buttons */}
          <div className="py-3 space-y-2.5">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs">
              <span className="text-slate-400 text-xs shrink-0">run:</span>
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                const cmd = CATEGORY_COMMANDS[cat] || `filter --${cat.toLowerCase()}`;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className={cn(
                      "px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border transition-all cursor-pointer font-mono text-[11px] sm:text-xs",
                      isSelected
                        ? "border-indigo-500 bg-indigo-500/20 text-indigo-300 font-bold shadow-xs"
                        : "border-slate-800 bg-slate-900/80 text-slate-400 hover:text-white hover:border-slate-700"
                    )}
                  >
                    <span className="hidden sm:inline">${cmd}</span>
                    <span className="sm:hidden">{SHORT_CATEGORY_COMMANDS[cat] || `$${cat.toLowerCase()}`}</span>
                  </button>
                );
              })}
            </div>

            {/* Terminal Live Output Log Line + Built-in Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2.5 border-t border-slate-800/80">
              <p className="text-emerald-400 flex items-center gap-2 text-[11px] sm:text-xs min-w-0">
                <span className="text-indigo-400 font-bold shrink-0">➜</span>
                <span className="truncate">{activeCommandLog}</span>
              </p>

              {/* Terminal Search Prompt Input */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-indigo-400" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="grep skill (e.g. Next.js, React)..."
                  className="pl-9 text-xs h-8 rounded-xl border-slate-800 bg-slate-900/90 text-white placeholder:text-slate-500 focus:border-indigo-500 font-mono"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* INTERACTIVE GLOWING TECH NODE MATRIX (GRID) */}
        {filteredSkills.length === 0 ? (
          <div className="text-center py-12 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl">
            <p className="text-slate-600 dark:text-slate-400 text-sm font-mono">
              [404] No technical nodes matched pattern &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                handleCategorySelect("Frontend");
              }}
              className="text-indigo-600 dark:text-indigo-400 text-xs font-semibold mt-2 hover:underline cursor-pointer font-mono"
            >
              $ reset_filter
            </button>
          </div>
        ) : (
          <Scroll3DWrapper intensity={4} depth={20}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill, idx) => {
                  const isAdvanced = skill.level === "Advanced";
                  const isProficient = skill.level === "Proficient";

                  return (
                    <motion.div
                      key={`${skill.category}-${skill.name}`}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2, delay: idx * 0.015 }}
                      className="group relative rounded-xl border border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl p-3.5 shadow-xs hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        {/* Top Node Header: Category Tag & Status Beacon */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 truncate max-w-[120px]">
                            {skill.category}
                          </span>

                          <span
                            className={cn(
                              "w-2 h-2 rounded-full shrink-0",
                              isAdvanced
                                ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)] animate-pulse"
                                : isProficient
                                ? "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                                : "bg-cyan-500 shadow-[0_0_6px_rgba(6,182,212,0.6)]"
                            )}
                            title={`Proficiency: ${skill.level}`}
                          />
                        </div>

                        {/* Technology Title */}
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {skill.name}
                        </h3>
                      </div>

                      {/* Bottom Metadata Pill Row */}
                      <div className="pt-2.5 mt-2.5 border-t border-slate-200/70 dark:border-slate-800/70 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          {skill.level}
                        </span>
                        {skill.tag && (
                          <span className="text-[10px] text-indigo-500 font-semibold px-1.5 py-0.2 rounded bg-indigo-500/10 border border-indigo-500/20">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </Scroll3DWrapper>
        )}

        {/* TECH MATRIX STATS & LEGEND BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-300 font-mono"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[10px]">
              Beacons:
            </span>
            <span className="flex items-center gap-1.5 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" /> Advanced
            </span>
            <span className="flex items-center gap-1.5 font-semibold">
              <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" /> Proficient
            </span>
            <span className="flex items-center gap-1.5 font-semibold">
              <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_6px_rgba(6,182,212,0.6)]" /> Familiar
            </span>
          </div>

          <div className="text-right flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>
              <strong className="text-indigo-600 dark:text-indigo-400 font-extrabold text-xs">{filteredSkills.length}</strong> of {allSkillsWithCategory.length} Nodes Displayed
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
