"use client";

import * as React from "react";
import { portfolioData } from "@/data/portfolio-data";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import {
  Search,
  Layout,
  Server,
  Database,
  Cloud,
  Cpu,
  Smartphone,
  Wrench,
  Layers,
  Code
} from "lucide-react";
import { cn } from "@/lib/utils";

// Icon mapping helper
const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  "DevOps & Cloud": Cloud,
  "System Design": Cpu,
  "Mobile Development": Smartphone,
  "Tools & Technologies": Wrench,
};

export function SkillsSection() {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const categories = ["All", ...skills.map((s) => s.category)];

  const filteredCategories = React.useMemo(() => {
    return skills
      .filter((cat) => selectedCategory === "All" || cat.category === selectedCategory)
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const query = searchQuery.toLowerCase();
        const matchingSkills = cat.skills.filter(
          (s) =>
            s.name.toLowerCase().includes(query) ||
            (s.tag && s.tag.toLowerCase().includes(query)) ||
            s.level.toLowerCase().includes(query)
        );
        return {
          ...cat,
          skills: matchingSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [skills, selectedCategory, searchQuery]);

  const totalSkillsCount = React.useMemo(() => {
    return skills.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [skills]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <Badge variant="default" className="gap-1.5 py-1 px-3 text-xs">
            <Layers className="w-3.5 h-3.5" /> Technical Arsenal
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Skills & Capabilities
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            A comprehensive overview of my core competencies, backend frameworks, cloud infrastructure, and modern frontend systems.
          </p>
        </div>

        {/* Filter Controls: Tabs + Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-secondary/60 border border-border/60 max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap",
                  selectedCategory === cat
                    ? "bg-background text-foreground shadow-sm font-bold"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/40"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Next.js, Redis)..."
              className="pl-9 text-xs h-10 rounded-xl"
            />
          </div>
        </div>

        {/* Results grid */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 rounded-2xl border border-dashed border-border/80 bg-card/40">
            <p className="text-muted-foreground text-sm">
              No technical skills matched your search &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-primary text-xs font-semibold mt-2 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((categoryGroup) => {
              const IconComponent =
                CATEGORY_ICONS[categoryGroup.category] || Code;

              return (
                <Card
                  key={categoryGroup.category}
                  className="group hover:border-primary/40 hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="p-6">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-foreground">
                          {categoryGroup.category}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {categoryGroup.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-border/50">
                      {categoryGroup.skills.map((skill) => {
                        const isAdvanced = skill.level === "Advanced";
                        const isProficient = skill.level === "Proficient";

                        return (
                          <div
                            key={skill.name}
                            className={cn(
                              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all duration-200",
                              isAdvanced
                                ? "bg-card hover:bg-secondary border-border/80 text-foreground"
                                : isProficient
                                ? "bg-card hover:bg-secondary border-border/60 text-foreground/90"
                                : "bg-card/50 text-muted-foreground border-border/40"
                            )}
                          >
                            <span
                              className={cn(
                                "w-1.5 h-1.5 rounded-full",
                                isAdvanced
                                  ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                                  : isProficient
                                  ? "bg-indigo-500"
                                  : "bg-slate-400"
                              )}
                              title={skill.level}
                            />
                            <span>{skill.name}</span>
                            {skill.tag && (
                              <span className="text-[10px] text-muted-foreground/80 ml-0.5">
                                • {skill.tag}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Legend & Stats Banner */}
        <div className="mt-12 p-4 rounded-2xl border border-border/60 bg-secondary/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-foreground">Proficiency Key:</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> Advanced
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-500" /> Proficient
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-400" /> Familiar
            </span>
          </div>
          <div className="text-right font-mono">
            <span className="text-primary font-bold">{totalSkillsCount}</span>{" "}
            Technologies Mastered & Practiced
          </div>
        </div>
      </div>
    </section>
  );
}
