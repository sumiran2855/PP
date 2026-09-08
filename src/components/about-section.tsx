"use client";

import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Code,
  Cloud,
  Zap,
  ShieldCheck,
  Award,
  Terminal,
  Sparkles
} from "lucide-react";

export function AboutSection() {
  const { personal } = portfolioData;

  const corePillars = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Building end-to-end web applications with Next.js, React, TypeScript, and Node.js. Obsessed with high Lighthouse scores, semantic accessibility, and clean component patterns.",
      accent: "from-blue-500 to-indigo-500",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Architecture",
      description:
        "Designing infrastructure as code with Terraform, orchestrating microservices in Docker and Kubernetes, and building robust multi-stage GitHub Actions CI/CD pipelines.",
      accent: "from-cyan-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "Performance & Reliability",
      description:
        "Tuning database queries in PostgreSQL, implementing distributed caching with Redis, reducing latency, and building fault-tolerant services with 99.9%+ availability.",
      accent: "from-amber-500 to-orange-500",
    },
  ];

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

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <Badge variant="default" className="gap-1.5 py-1 px-3 text-xs">
            <Sparkles className="w-3.5 h-3.5" /> About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Engineering with Purpose & Precision
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            A look into my background, engineering philosophy, and what I bring to the table.
          </p>
        </div>

        {/* Story / Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Biography Narrative */}
          <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg font-normal">
            {personal.bio.map((paragraph, idx) => (
              <p key={idx} className="tracking-normal">
                {paragraph}
              </p>
            ))}

            {/* Professional Interests */}
            <div className="pt-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" /> Key Focus & Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((item, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="py-1 px-3 text-xs font-medium bg-background/80 hover:border-primary/50 transition-colors"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights & Quick Stats */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" /> Proven Track Record
              </h3>
              <div className="space-y-4">
                {personal.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between pb-3 border-b border-border/50 last:border-0 last:pb-0"
                  >
                    <div>
                      <span className="font-semibold text-foreground text-sm">
                        {stat.label}
                      </span>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {stat.detail}
                      </p>
                    </div>
                    <span className="text-base sm:text-lg font-extrabold text-primary font-mono ml-4">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick quote / philosophy pill */}
            <div className="rounded-xl border border-border/60 bg-secondary/40 p-4 text-xs text-muted-foreground italic flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0" />
              <span>
                &ldquo;Clean code is not just aesthetic—it is a competitive advantage that enables rapid, bug-free product iteration.&rdquo;
              </span>
            </div>
          </div>
        </div>

        {/* What I Do: 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={idx}
                className="group hover:border-primary/50 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${pillar.accent}`}
                />
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
