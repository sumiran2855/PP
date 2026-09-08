"use client";

import * as React from "react";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Compass,
  GitPullRequest,
  GitCommit,
  Star,
  Quote,
  Flame,
  Radio,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

export function CurrentFocusSection() {
  const { currentFocus, testimonials } = portfolioData;

  // Mock GitHub contribution blocks for visual polish
  const githubWeeks = React.useMemo(() => {
    // Generate 16 weeks of 7 days
    const weeks: number[][] = [];
    for (let w = 0; w < 24; w++) {
      const days: number[] = [];
      for (let d = 0; d < 7; d++) {
        // Pseudo random contribution levels 0 to 4
        const val = Math.floor(Math.sin(w * 3 + d * 5) * 2 + 2);
        days.push(Math.max(0, Math.min(4, val)));
      }
      weeks.push(days);
    }
    return weeks;
  }, []);

  const getHeatmapColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-emerald-950/40 border-emerald-800/40 dark:bg-emerald-900/60";
      case 2:
        return "bg-emerald-700/60 border-emerald-600/60 dark:bg-emerald-700";
      case 3:
        return "bg-emerald-500 border-emerald-400";
      case 4:
        return "bg-emerald-400 border-emerald-300 shadow-[0_0_6px_rgba(52,211,153,0.6)]";
      default:
        return "bg-secondary/60 border-border/40";
    }
  };

  return (
    <section id="focus" className="py-24 relative overflow-hidden bg-secondary/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <Badge variant="default" className="gap-1.5 py-1 px-3 text-xs">
            <Radio className="w-3.5 h-3.5 text-primary animate-pulse" /> In The Lab
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Current Focus & Engineering Pulse
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            What I&apos;m currently researching, building, and exploring at the frontiers of software architecture.
          </p>
        </div>

        {/* Current Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {currentFocus.map((item, idx) => (
            <Card
              key={idx}
              className="hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge
                    variant={
                      item.status === "Active Research"
                        ? "default"
                        : item.status === "Building"
                        ? "accent"
                        : "outline"
                    }
                    className="text-xs"
                  >
                    {item.status}
                  </Badge>
                  <Flame className="w-4 h-4 text-amber-500" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary text-secondary-foreground border border-border/50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Pulse & Activity Grid */}
        <div className="rounded-2xl border border-border/70 bg-card p-6 sm:p-8 shadow-sm mb-16 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <GitCommit className="w-5 h-5 text-primary" /> Open Source Activity & Commit Matrix
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Consistent engineering momentum, commits, and pull requests over the past year.
              </p>
            </div>
            <a
              href="https://github.com/sumiran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 shrink-0"
            >
              View GitHub Profile <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Contribution Heatmap Preview */}
          <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 overflow-x-auto">
            <div className="flex gap-1.5 min-w-[580px] justify-between">
              {githubWeeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((level, dIdx) => (
                    <div
                      key={dIdx}
                      className={cn(
                        "w-3 h-3 rounded-[3px] border transition-colors",
                        getHeatmapColor(level)
                      )}
                      title={`Activity level: ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-3 text-[11px] text-muted-foreground">
              <span>Past 6 Months Activity</span>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-[2px] bg-secondary border border-border/40" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-900/60" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-700" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400" />
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="p-3 rounded-xl bg-secondary/40 border border-border/50">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <GitCommit className="w-3.5 h-3.5 text-primary" /> Total Commits
              </span>
              <p className="text-xl font-bold font-mono text-foreground mt-1">1,840+</p>
            </div>
            <div className="p-3 rounded-xl bg-secondary/40 border border-border/50">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <GitPullRequest className="w-3.5 h-3.5 text-indigo-500" /> PRs Merged
              </span>
              <p className="text-xl font-bold font-mono text-foreground mt-1">210+</p>
            </div>
            <div className="p-3 rounded-xl bg-secondary/40 border border-border/50">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-500" /> Repo Stars
              </span>
              <p className="text-xl font-bold font-mono text-foreground mt-1">450+</p>
            </div>
            <div className="p-3 rounded-xl bg-secondary/40 border border-border/50">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-cyan-500" /> Open Source Repos
              </span>
              <p className="text-xl font-bold font-mono text-foreground mt-1">18</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground">
              Colleague & Leadership Endorsements
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Feedback from engineering leaders and product partners I&apos;ve collaborated with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <Card key={idx} className="relative overflow-hidden hover:border-primary/40 transition-colors">
                <CardContent className="p-6 sm:p-8 space-y-4">
                  <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
                  <p className="text-sm text-muted-foreground leading-relaxed italic relative z-10">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="pt-2 border-t border-border/50 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-white text-sm shrink-0">
                      {t.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{t.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {t.role} • <span className="text-primary">{t.company}</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
