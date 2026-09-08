"use client";

import * as React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio-data";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";
import { Terminal, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/70 bg-card/60 backdrop-blur-md pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="#"
              className="flex items-center gap-2 text-foreground font-bold text-lg tracking-tight"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 flex items-center justify-center text-white shadow-md">
                <Terminal className="w-4 h-4" />
              </div>
              <span>
                Sumiran<span className="text-primary font-mono">.dev</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
              Senior Full-Stack & Cloud Systems Engineer dedicated to architecting resilient distributed systems and crafting delightful web experiences.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for engineering contracts & full-time roles</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">
                  Skills & Tools
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary transition-colors">
                  Career Experience
                </a>
              </li>
              <li>
                <Link href="/resume" className="hover:text-primary transition-colors">
                  Web Resume
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Connect
            </h4>
            <div className="flex items-center gap-2">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-border/70 bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-border/70 bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-border/70 bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2 rounded-xl border border-border/70 bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground pt-2">
              {personal.location}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright + Back to Top */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {personal.name} B. Built with Next.js 16 (App Router), TypeScript & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border/60 bg-secondary/40 hover:bg-secondary text-foreground transition-all cursor-pointer font-medium"
            title="Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
}
