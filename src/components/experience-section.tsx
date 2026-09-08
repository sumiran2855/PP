"use client";

import * as React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "./ui/card";
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
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const { experience, education, certifications } = portfolioData;
  const [activeTab, setActiveTab] = React.useState<"experience" | "credentials">("experience");

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <Badge variant="default" className="gap-1.5 py-1 px-3 text-xs">
            <Briefcase className="w-3.5 h-3.5" /> Career Journey
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Experience & Credentials
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            A track record of engineering leadership, production-grade microservices, and continuous technical growth.
          </p>
        </div>

        {/* View Switcher & Resume Download Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 p-4 rounded-2xl border border-border/70 bg-secondary/30 backdrop-blur-sm">
          <div className="flex items-center gap-2 p-1 rounded-xl bg-secondary/70 border border-border/60">
            <button
              onClick={() => setActiveTab("experience")}
              className={cn(
                "px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all",
                activeTab === "experience"
                  ? "bg-background text-foreground shadow-sm font-bold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Work Experience ({experience.length})
            </button>
            <button
              onClick={() => setActiveTab("credentials")}
              className={cn(
                "px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all",
                activeTab === "credentials"
                  ? "bg-background text-foreground shadow-sm font-bold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Education & Certifications ({education.length + certifications.length})
            </button>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/resume">
              <Button variant="outline" size="sm" className="gap-2 text-xs font-semibold">
                <FileText className="w-3.5 h-3.5 text-primary" />
                View Full Web Resume
              </Button>
            </Link>
            <a href="/resume?download=pdf" download="Sumiran_Resume.pdf">
              <Button size="sm" className="gap-2 text-xs font-semibold shadow-indigo-500/20">
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </Button>
            </a>
          </div>
        </div>

        {/* Tab 1: Work Experience Timeline */}
        {activeTab === "experience" && (
          <div className="relative border-l-2 border-border/80 pl-6 sm:pl-8 ml-3 sm:ml-6 space-y-12 animate-in fade-in duration-300">
            {experience.map((item) => (
              <div key={item.id} className="relative group">
                {/* Timeline Node Dot */}
                <div
                  className={cn(
                    "absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-4 border-background flex items-center justify-center transition-transform group-hover:scale-125",
                    item.isCurrent ? "bg-primary shadow-[0_0_12px_rgba(99,102,241,0.8)]" : "bg-muted-foreground/60"
                  )}
                />

                <Card className="hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 sm:p-8 space-y-4">
                    {/* Header: Role, Company, Period */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border/60">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground">
                            {item.role}
                          </h3>
                          {item.isCurrent && (
                            <Badge variant="accent" className="text-[10px] py-0.5 px-2 font-semibold">
                              Current Role
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-primary mt-0.5">
                          {item.company}
                        </p>
                      </div>

                      <div className="flex flex-wrap sm:flex-col items-start sm:items-end text-xs text-muted-foreground gap-x-3 gap-y-1">
                        <span className="flex items-center gap-1 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-primary" /> {item.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    {/* Key Responsibilities */}
                    <div className="space-y-2 pt-1">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Responsibilities:
                      </h4>
                      <ul className="space-y-1.5">
                        {item.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-1.5 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Achievements */}
                    {item.achievements && item.achievements.length > 0 && (
                      <div className="space-y-2 pt-2 bg-secondary/30 p-4 rounded-xl border border-border/50">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Key Impact & Quantifiable Results:
                        </h4>
                        <ul className="space-y-1.5">
                          {item.achievements.map((ach, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90 font-medium"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies Used */}
                    <div className="pt-2 flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-semibold text-muted-foreground mr-1">
                        Technologies:
                      </span>
                      {item.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-[11px] py-0.5 px-2"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Education & Certifications */}
        {activeTab === "credentials" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-300">
            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" /> Formal Education
              </h3>
              {education.map((edu, idx) => (
                <Card key={idx} className="hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-bold text-foreground text-base">
                          {edu.degree}
                        </h4>
                        <p className="text-xs sm:text-sm font-semibold text-primary mt-0.5">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {edu.details}
                    </p>
                    {edu.score && (
                      <div className="pt-2">
                        <Badge variant="accent" className="text-xs font-semibold">
                          Graduated: {edu.score}
                        </Badge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" /> Industry Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <Card key={idx} className="hover:border-primary/50 transition-colors">
                    <CardContent className="p-5 flex items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-foreground text-sm">
                            {cert.name}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                            {cert.badgeCode}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Issued by {cert.issuer} • {cert.date}
                        </p>
                      </div>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl border border-border/70 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors shrink-0"
                          title="Verify Credential"
                          aria-label={`Verify ${cert.name}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
