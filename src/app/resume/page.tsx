"use client";

import * as React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import {
  ArrowLeft,
  Printer,
  Mail,
  MapPin,
  Award,
  GraduationCap,
  Briefcase,
  Layers
} from "lucide-react";

export default function ResumePage() {
  const { personal, experience, education, certifications, skills } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-10 px-4 sm:px-6 lg:px-8">
      {/* Top Floating Action Bar (Hidden on Print) */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between print:hidden p-4 rounded-2xl border border-border/80 bg-card/80 backdrop-blur-md shadow-sm">
        <Link href="/">
          <Button variant="outline" size="sm" className="gap-2 text-xs font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
        </Link>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Button
            onClick={handlePrint}
            size="sm"
            className="gap-2 text-xs font-semibold shadow-md shadow-indigo-500/20"
          >
            <Printer className="w-4 h-4" />
            Print / Save as PDF
          </Button>
        </div>
      </div>

      {/* Main Resume Document Surface */}
      <main className="max-w-4xl mx-auto bg-card border border-border/80 rounded-2xl p-8 sm:p-12 shadow-xl print:shadow-none print:border-0 print:p-0 print:bg-transparent">
        {/* Document Header */}
        <header className="border-b border-border/70 pb-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                {personal.name} B.
              </h1>
              <h2 className="text-lg font-semibold text-primary mt-1">
                {personal.title}
              </h2>
            </div>
            <div className="flex flex-col sm:items-end text-xs text-muted-foreground space-y-1 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-primary" /> {personal.email}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> {personal.location}
              </span>
              <span className="flex items-center gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-primary" /> github.com/sumiran
              </span>
              <span className="flex items-center gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-primary" /> linkedin.com/in/sumiran
              </span>
            </div>
          </div>

          <div className="mt-6 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {personal.bio[0]}
          </div>
        </header>

        {/* Technical Skills Overview */}
        <section className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground pb-2 border-b border-border/60 mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-primary" /> Technical Core Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {skills.map((cat) => (
              <div key={cat.category} className="space-y-1">
                <span className="font-bold text-foreground">{cat.category}:</span>{" "}
                <span className="text-muted-foreground">
                  {cat.skills.map((s) => s.name).join(", ")}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground pb-2 border-b border-border/60 mb-6 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-primary" /> Professional Experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                  <div>
                    <h4 className="font-bold text-foreground text-base">
                      {exp.role}
                    </h4>
                    <p className="font-semibold text-primary">{exp.company}</p>
                  </div>
                  <div className="text-xs font-mono text-muted-foreground sm:text-right mt-1 sm:mt-0">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  {exp.description}
                </p>

                <ul className="space-y-1.5 text-xs text-muted-foreground list-disc list-inside">
                  {exp.responsibilities.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                  {exp.achievements.map((a, idx) => (
                    <li key={`ach-${idx}`} className="font-medium text-foreground/90">
                      <strong>Impact:</strong> {a}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1 pt-1">
                  {exp.technologies.map((t) => (
                    <Badge key={t} variant="secondary" className="text-[10px] py-0 px-2">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Education */}
          <section>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground pb-2 border-b border-border/60 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-primary" /> Education
            </h3>
            {education.map((edu, idx) => (
              <div key={idx} className="text-xs space-y-1">
                <h4 className="font-bold text-foreground">{edu.degree}</h4>
                <p className="text-primary font-semibold">{edu.institution}</p>
                <p className="text-muted-foreground font-mono">{edu.period}</p>
                {edu.score && <p className="text-foreground">{edu.score}</p>}
              </div>
            ))}
          </section>

          {/* Certifications */}
          <section>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground pb-2 border-b border-border/60 mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" /> Certifications
            </h3>
            <div className="space-y-2.5 text-xs">
              {certifications.map((cert, idx) => (
                <div key={idx}>
                  <p className="font-bold text-foreground">{cert.name}</p>
                  <p className="text-muted-foreground">
                    {cert.issuer} ({cert.date}) • {cert.badgeCode}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
